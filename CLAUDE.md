# vandenhoeck.de

Website von Lisa Vandenhoeck (Vandenhoeck Deepdives). Aufbau wie Paw Holidays (`AgentSchmiede/pawholidays`).

## Stack
- Next.js 16 (App Router, TypeScript) in `web/`, statischer Export (`output: 'export'`, `trailingSlash: true`). Vor Code in `web/` die Doku in `web/node_modules/next/dist/docs/` lesen (siehe `web/AGENTS.md`).
- Sanity als CMS in `studio/` (folgt in Phase 4)
- Netlify für Hosting (`netlify.toml` im Root, base `web`). **Production branch = `live`**, `main` = Staging als Branch-Deploy. Code nach `live` nur per PR `main` → `live`
- Repo: DesireBird/lisa-vandenhoeck-website. GitHub nur mit Account DesireBird.
- Design System als Submodule `brand/design-system` (AgentSchmiede/designSystem, privat, nicht anfassen), Theme in `brand/themes/vandenhoeck/`
- Domain und Mail bei All-Inkl (Nameserver + MX bleiben dort)

## Routen
- `/`, `/about/`, `/figma-config/`, `/ki-ready/`, `/bfsg/`, `/ressourcen/`, `/services/`, `/impressum/`, `/datenschutz/`, 404
- Alte URLs (`/about.html` usw.) leiten über `web/public/_redirects` weiter

## Regeln
- Design nur über Tokens aus `brand/themes/vandenhoeck/branding.css`, keine Einzelwerte. Token fehlt → in `brand/themes/vandenhoeck/tokens.json` anlegen, dort `npm run build`
- `action.primary` nur für CTAs; Selection-States nutzen accent2
- Seitenspezifische Styles liegen (noch) in `web/app/site.css`, aus der früheren statischen Seite übernommen
- Schriften selbst hosten, keine externen CDNs
- Indexiert wird nur mit `SITE_ENV=production`, sonst `noindex`
- Impressum und Datenschutz bleiben im Code
- Texte auf Deutsch, Code und Bezeichner auf Englisch

## Befehle
- `web/`: `npm run dev`, `npm run build` (Export nach `out/`), `npm run lint`, `npm run format`
- `brand/themes/vandenhoeck/`: `npm run build` (Tokens → `branding.css`)
