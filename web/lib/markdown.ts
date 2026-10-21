import { Marked } from "marked";

/*
 * Component-Doku aus dem DS-Repo (docs/components/*.md, per Sync in Sanity) → HTML beim Build.
 * Der Text kommt aus dem eigenen Repo, daher ohne Sanitizer.
 */

/** Anker wie auf GitHub: Kleinbuchstaben, Leerzeichen → „-“, Satzzeichen weg (Umlaute bleiben). */
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

/**
 * Links auf andere Doku-Dateien (select.md, ./chip.md, list-box-item.md#edge-cases) →
 * Component-Seite auf der Website, Anker bleiben erhalten. Dateien ohne eigene Seite
 * (z. B. naming.md) werden als Text ohne Link gezeigt. Überschriften bekommen Anker-IDs.
 */
export function markdownToHtml(markdown: string, componentPath: (file: string) => string | null) {
  const marked = new Marked({ gfm: true });
  const slugs = new Map<string, number>();
  marked.use({
    walkTokens(token) {
      if (token.type !== "link") return;
      const match = token.href.match(/^(?:\.\/)?([a-z0-9-]+)\.md(#.*)?$/);
      if (!match) return;
      const page = componentPath(match[1]);
      token.href = page ? `${page}${match[2] ?? ""}` : "";
    },
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        const base = slugify(html);
        const count = slugs.get(base) ?? 0;
        slugs.set(base, count + 1);
        const id = count ? `${base}-${count}` : base;
        return `<h${depth} id="${id}">${html}</h${depth}>\n`;
      },
      link({ href, tokens }) {
        const html = this.parser.parseInline(tokens);
        return href ? false : html;
      },
    },
  });
  // Erste Überschrift = Component-Name, steht schon als Seitentitel
  const body = markdown.replace(/^\s*#\s+.*\n+/, "");
  return marked.parse(body, { async: false }) as string;
}
