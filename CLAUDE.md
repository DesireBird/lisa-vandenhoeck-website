# vandenhoeck.de

Website von Lisa Vandenhoeck (Vandenhoeck Deepdives). Aufbau wie Paw Holidays (`AgentSchmiede/pawholidays`).

## Stack
- Next.js 16 (App Router, TypeScript) in `web/`, statischer Export (`output: 'export'`, `trailingSlash: true`). Vor Code in `web/` die Doku in `web/node_modules/next/dist/docs/` lesen (siehe `web/AGENTS.md`).
- Sanity als CMS in `studio/` (Sanity v6), Projekt `4y4m7dt1` (Organisation Agentschmiede, nicht das Paw-Projekt), öffentliches Dataset `production`, Studio: https://vandenhoeck.sanity.studio. Der Sanity-Webhook „Netlify Build live“ löst beim Veröffentlichen den Build-Hook für `live` aus
- Netlify für Hosting (`netlify.toml` im Root, base `web`). **Production branch = `live`**, `main` = Staging als Branch-Deploy. Code nach `live` nur per PR `main` → `live`
- Repo: DesireBird/lisa-vandenhoeck-website. GitHub nur mit Account DesireBird.
- Design System als Submodule `brand/design-system` (AgentSchmiede/designSystem, privat, nicht anfassen), Theme in `brand/themes/vandenhoeck/`
- Domain und Mail bei All-Inkl (Nameserver + MX bleiben dort)

## Routen
- `/`, `/about/`, `/ressourcen/`, `/services/`, `/impressum/`, `/datenschutz/`, 404 (im Code)
- Deepdives (`deepdive`: `/figma-config/`, `/ki-ready/`, `/bfsg/`) und freie Seiten (`page`) flach unter `/<slug>/` über `web/app/[slug]/page.tsx`. Slugs dürfen nicht kollidieren; Pfade im Code sind in `studio/schemaTypes/lib/slug.ts` reserviert
- Ressourcen (`resource`): Liste `/ressourcen/` und Detail `/ressourcen/<slug>/` in `web/app/ressourcen/[[...slug]]/page.tsx` (ohne Einträge: Baustellen-Hinweis)
- Alte URLs (`/about.html` usw.) leiten über `web/public/_redirects` weiter

## Regeln
- Design nur über Tokens aus `brand/themes/vandenhoeck/branding.css`, keine Einzelwerte. Token fehlt → in `brand/themes/vandenhoeck/tokens.json` anlegen, dort `npm run build`
- `action.primary` nur für CTAs; Selection-States nutzen accent2
- Seitenspezifische Styles liegen (noch) in `web/app/site.css`, aus der früheren statischen Seite übernommen
- Schriften selbst hosten, keine externen CDNs
- Indexiert wird nur mit `SITE_ENV=production`, sonst `noindex`
- Impressum und Datenschutz bleiben im Code
- Startseiten-Hero, Buchungslink (alle „Termin buchen“-Buttons) und Standard-SEO kommen aus dem Singleton `siteSettings` (Studio: „Seiteneinstellungen“); Ersatzwerte in `web/lib/settings.ts`
- Alles wird beim Build aus Sanity geholt, keine Abfragen zur Laufzeit im Browser. Bilder kommen vom Sanity-CDN (`<SanityImg>`, schlichtes `<img>` mit srcset; kein `next/image`, dessen width/height die übernommenen CSS-Größen bricht)
- Keine personenbezogenen Daten ins Sanity-Dataset (es ist öffentlich). Tokens nur als Netlify-Umgebungsvariablen, nie im Repo
- Vor Schema-Änderungen in Sanity kurz nachfragen; danach `studio`: `npm run typegen` und `npm run deploy`
- Texte auf Deutsch, Code und Bezeichner auf Englisch

## Befehle
- `web/`: `npm run dev`, `npm run build` (Export nach `out/`), `npm run lint`, `npm run format`
- `studio/`: `npm run dev`, `npm run deploy`, `npm run typegen` (Typen nach `web/lib/sanity.types.ts`)
- `brand/themes/vandenhoeck/`: `npm run build` (Tokens → `branding.css`)
