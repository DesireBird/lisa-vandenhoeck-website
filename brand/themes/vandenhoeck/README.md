# Branding-Theme „Vandenhoeck“

Brand-Overrides auf das AgentSchmiede Design System (`brand/design-system`, Submodule).
Token-Namen bleiben die des Core, Components laufen also unverändert.

```
tokens.json     # Quelle: nur Vandenhoeck-Overrides (DTCG)
fonts.css       # @font-face Unbounded, Plus Jakarta Sans, JetBrains Mono, self-hosted (wird in branding.css eingebettet)
build.mjs       # Core + tokens.json → branding.css
branding.css    # generiert – nicht von Hand editieren
assets/fonts/   # woff2, latin + latin-ext
```

```bash
npm install
npm run build
```

Einbinden: `branding.css` laden (in Next.js über `web/app/brand.css`). Die Tokens gelten auf `:root` und `[data-theme="vandenhoeck"]`.

## Overrides gegenüber dem Core

| Token | Wert | Grund |
| --- | --- | --- |
| `font.family.caption` | JetBrains Mono | Captions/Labels wie auf der bisherigen Seite |
