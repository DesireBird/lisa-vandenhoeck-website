// Läuft nach `next build`. Außerhalb von Production: X-Robots-Tag noindex für alle Seiten
// (Netlify liest out/_headers). Ergänzt robots.txt und <meta name="robots"> aus dem Layout.
import { writeFileSync } from "node:fs";

if (process.env.SITE_ENV !== "production") {
  writeFileSync(new URL("../out/_headers", import.meta.url), "/*\n  X-Robots-Tag: noindex, nofollow\n");
  console.log("postbuild: noindex-Header gesetzt (SITE_ENV != production)");
}
