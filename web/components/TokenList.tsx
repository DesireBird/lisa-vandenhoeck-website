import type { Token } from "@/lib/designSystem";

/** Vorschau je Token-Typ; Werte immer über die CSS-Variable, damit das Theme greift. */
function TokenPreview({ token }: { token: Token }) {
  const v = `var(${token.cssVar})`;
  const group = token.path.split(".")[0];
  switch (token.type) {
    case "color":
      return <span className="ds-token__swatch" style={{ background: v }} aria-hidden="true" />;
    case "typography":
      return (
        <span className="ds-token__specimen" style={{ font: v }}>
          Design System Klarheit
        </span>
      );
    case "fontFamily":
      return (
        <span className="ds-token__specimen" style={{ fontFamily: v }}>
          Aa Bb Cc 123
        </span>
      );
    case "fontWeight":
      return (
        <span className="ds-token__specimen" style={{ fontWeight: v }}>
          Aa
        </span>
      );
    case "shadow":
      return <span className="ds-token__box" style={{ boxShadow: v }} aria-hidden="true" />;
  }
  if (group === "fontSize") {
    return (
      <span className="ds-token__specimen" style={{ fontSize: v }}>
        Aa
      </span>
    );
  }
  if (group === "letterSpacing") {
    return (
      <span className="ds-token__specimen ds-token__specimen--caps" style={{ letterSpacing: v }}>
        Caption
      </span>
    );
  }
  if (group === "radius") {
    return <span className="ds-token__box" style={{ borderRadius: v }} aria-hidden="true" />;
  }
  if (group === "opacity") {
    return (
      <span
        className="ds-token__box ds-token__box--filled"
        style={{ opacity: v }}
        aria-hidden="true"
      />
    );
  }
  if (group === "space" || group === "size" || group === "width") {
    return <span className="ds-token__bar" style={{ width: v }} aria-hidden="true" />;
  }
  return null;
}

/** Tokens einer Gruppe als Liste: Vorschau, Name, CSS-Variable, Wert, Verweis, Beschreibung. */
export function TokenList({ tokens }: { tokens: Token[] }) {
  return (
    <ul className="ds-token-list">
      {tokens.map((token) => (
        <li key={token.path} className="card ds-token">
          <div className="ds-token__preview">
            <TokenPreview token={token} />
          </div>
          <div className="ds-token__meta">
            <span className="ds-token__name">{token.path}</span>
            <code className="ds-token__var">{token.cssVar}</code>
            <span className="ds-token__value">
              {token.value}
              {token.reference ? <span className="ds-token__ref"> ← {token.reference}</span> : null}
            </span>
            {token.description ? <p className="ds-token__desc">{token.description}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Tokens nach dem zweiten Pfad-Segment gruppieren (color.accent1, color.text …). */
export function groupTokens(tokens: Token[], depth = 2) {
  const groups = new Map<string, Token[]>();
  for (const token of tokens) {
    const key = token.path.split(".").slice(0, depth).join(".");
    groups.set(key, [...(groups.get(key) ?? []), token]);
  }
  return [...groups.entries()];
}
