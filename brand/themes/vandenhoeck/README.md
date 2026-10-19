# Branding-Theme „Vandenhoeck“

Brand-Overrides auf das AgentSchmiede Design System (`brand/design-system`, Submodule).
Token-Namen bleiben die des Core, Components laufen also unverändert.

```
tokens.json     # Quelle: Vandenhoeck-Overrides (DTCG), derzeit leer = reiner Core
fonts.css       # @font-face Unbounded, Plus Jakarta Sans, self-hosted (wird in branding.css eingebettet)
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

Keine. Die Seite nutzt die Core-Tokens unverändert (Captions in der Body-Familie Plus Jakarta Sans).
