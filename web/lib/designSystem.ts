import { readFileSync } from "node:fs";
import path from "node:path";
import { cache } from "react";

/*
 * Liest beim Build das Design System aus brand/: Tokens (Core + Vandenhoeck-Overrides, wie
 * brand/themes/vandenhoeck/build.mjs) und die Component-Beispiele aus preview.html.
 * Nur in Server-Komponenten verwenden.
 */

const brandDir = path.join(process.cwd(), "..", "brand");
const read = (...parts: string[]) => readFileSync(path.join(brandDir, ...parts), "utf8");

// ── Tokens ──────────────────────────────────────────────────────────────

type TokenNode = {
  $value?: unknown;
  $type?: string;
  $description?: string;
  [key: string]: unknown;
};

export type Token = {
  /** Punkt-Pfad wie in tokens.json, z. B. color.text.default */
  path: string;
  /** CSS-Variable aus branding.css, z. B. --color-text-default */
  cssVar: string;
  type: string;
  description: string;
  /** Verweis auf einen anderen Token (Semantic → Primitive), sonst null */
  reference: string | null;
  /** Aufgelöster Wert zur Anzeige, z. B. #d2461e oder 16px / 1.5 Plus Jakarta Sans */
  value: string;
};

/** Spätere Quelle gewinnt bei gleichem Key (wie Style Dictionary). */
function merge(base: TokenNode, override: TokenNode): TokenNode {
  const out: TokenNode = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const current = out[key];
    out[key] =
      value &&
      typeof value === "object" &&
      !("$value" in value) &&
      current &&
      typeof current === "object"
        ? merge(current as TokenNode, value as TokenNode)
        : value;
  }
  return out;
}

const kebab = (segment: string) => segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const refPattern = /^\{([^}]+)\}$/;

export const getTokens = cache(() => {
  const tree = merge(
    JSON.parse(read("design-system", "tokens.json")),
    JSON.parse(read("themes", "vandenhoeck", "tokens.json")),
  );
  const raw = new Map<string, TokenNode>();
  const walk = (node: TokenNode, trail: string[], inheritedType?: string) => {
    const type = node.$type ?? inheritedType;
    if ("$value" in node) {
      raw.set(trail.join("."), { ...node, $type: type });
      return;
    }
    for (const [key, child] of Object.entries(node)) {
      if (!key.startsWith("$") && child && typeof child === "object") {
        walk(child as TokenNode, [...trail, key], type);
      }
    }
  };
  walk(tree, []);

  const resolve = (value: unknown, depth = 0): unknown => {
    if (depth > 10) return value;
    if (typeof value === "string") {
      const ref = value.match(refPattern);
      if (ref) return resolve(raw.get(ref[1])?.$value, depth + 1);
      return value.replace(/\{([^}]+)\}/g, (_, p: string) => String(resolve(`{${p}}`, depth + 1)));
    }
    if (Array.isArray(value)) return value.map((v) => resolve(v, depth + 1));
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v, depth + 1)]));
    }
    return value;
  };

  const display = (type: string, value: unknown): string => {
    if (Array.isArray(value)) return value.join(", ");
    if (value && typeof value === "object") {
      const v = value as Record<string, string>;
      if (type === "typography") {
        const family = [v.fontFamily].flat().join(",").split(",")[0].replace(/'/g, "").trim();
        return [v.fontSize, v.lineHeight && `/ ${v.lineHeight}`, v.fontWeight, family]
          .filter(Boolean)
          .join(" ");
      }
      if (type === "shadow") return [v.offsetX, v.offsetY, v.blur, v.spread, v.color].join(" ");
      return JSON.stringify(value);
    }
    return String(value);
  };

  const tokens: Token[] = [...raw.entries()].map(([tokenPath, node]) => {
    const ref = typeof node.$value === "string" ? node.$value.match(refPattern) : null;
    const type = node.$type ?? "";
    return {
      path: tokenPath,
      cssVar: `--${tokenPath.split(".").map(kebab).join("-")}`,
      type,
      description: node.$description ?? "",
      reference: ref ? ref[1] : null,
      value: display(type, resolve(node.$value)),
    };
  });
  return tokens;
});

/** Tokens, deren Pfad mit einem der Präfixe beginnt (Reihenfolge wie in tokens.json). */
export async function tokensFor(...prefixes: string[]) {
  const tokens = await getTokens();
  return tokens.filter((t) => prefixes.some((p) => t.path === p || t.path.startsWith(`${p}.`)));
}

// ── Foundation-Kategorien ───────────────────────────────────────────────

export const foundationCategories = [
  {
    slug: "farben",
    title: "Farben",
    lead: "Primitive Farbrampen und die semantischen Rollen, die Components verwenden.",
    prefixes: ["color"],
  },
  {
    slug: "typografie",
    title: "Typografie",
    lead: "Schriftfamilien, Größen, Gewichte und die fertigen Textstile.",
    prefixes: ["font", "fontSize", "weight", "letter-spacing", "text-style"],
  },
  {
    slug: "abstaende",
    title: "Abstände",
    lead: "Innenabstände, Lücken und Layout-Abstände.",
    prefixes: ["space"],
  },
  {
    slug: "groessen",
    title: "Größen",
    lead: "Größen für Controls, Icons, Avatare und Breiten.",
    prefixes: ["size", "width"],
  },
  {
    slug: "radius",
    title: "Radius",
    lead: "Eckenradien für Controls und Flächen.",
    prefixes: ["radius"],
  },
  {
    slug: "elevation",
    title: "Elevation & Effekte",
    lead: "Schatten, Deckkraft und Versatz.",
    prefixes: ["elevation", "opacity", "offset"],
  },
] as const;

export type FoundationCategory = (typeof foundationCategories)[number];

// ── Components aus preview.html ─────────────────────────────────────────

export type DsComponent = {
  /** id aus preview.html (id="cv-<id>"), auch URL-Slug */
  id: string;
  title: string;
  subtitle: string;
  /** Beispiel-HTML ohne Titel/Untertitel */
  html: string;
  /** false, wenn preview.html nur auf die eigene Seitenleiste/Kopfzeile verweist (Header, Sidebar) */
  hasDemo: boolean;
};

const decode = (text: string) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&middot;/g, "·")
    .trim();

export const getDsComponents = cache((): DsComponent[] => {
  const html = read("design-system", "preview.html");
  const marker = /<div class="component-view[^"]*" id="cv-([a-z0-9-]+)">/g;
  const starts = [...html.matchAll(marker)];
  // Ende der letzten View: Ende von .preview-content (nach der letzten View).
  return starts.map((match, i) => {
    const from = match.index! + match[0].length;
    const to = i + 1 < starts.length ? starts[i + 1].index! : html.indexOf("</main>", from);
    // Kommentare raus, dann Wrapper-</div> der component-view (und bei der letzten View
    // die von .preview-content) am Ende entfernen.
    // (Schleife statt /(\s*<\/div>\s*)+$/ – die Regex backtrackt auf langen Views sekundenlang.)
    let body = html
      .slice(from, to)
      .replace(/<!--[\s\S]*?-->/g, "")
      .trim();
    while (body.endsWith("</div>")) body = body.slice(0, -"</div>".length).trimEnd();
    // äußeres <section class="section"> von preview.html weg (kollidiert mit .section der Website)
    if (body.startsWith('<section class="section">')) {
      body = body.slice('<section class="section">'.length);
    }
    if (body.endsWith("</section>")) body = body.slice(0, -"</section>".length);
    body = body.trim();
    const title = decode(body.match(/<h1 class="page-title">([\s\S]*?)<\/h1>/)?.[1] ?? match[1]);
    const subtitle = decode(body.match(/<p class="page-sub">([\s\S]*?)<\/p>/)?.[1] ?? "");
    body = body
      .replace(/<h1 class="page-title">[\s\S]*?<\/h1>/, "")
      .replace(/<p class="page-sub">[\s\S]*?<\/p>/, "");
    const hasDemo = /<(?!p\b|section\b|\/)[a-z]/.test(
      body.replace(/<p class="section-label">[\s\S]*?<\/p>/g, ""),
    );
    return { id: match[1], title, subtitle, html: body, hasDemo };
  });
});
