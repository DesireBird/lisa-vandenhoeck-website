/**
 * Indexierung ist nur erlaubt, wenn beim Build SITE_ENV=production gesetzt ist
 * (nur auf der Live-Site in Netlify). Staging, Previews und lokal → immer noindex.
 */
export const isProduction = process.env.SITE_ENV === "production";

// `||` statt `??`: Netlify übergibt Variablen, die nur für Production gesetzt sind,
// in den anderen Kontexten (Staging, Previews) als leeren String.
export const siteUrl = process.env.SITE_URL || "https://vandenhoeck.de";

/**
 * Matomo, selbst gehostet bei All-Inkl. Tracking läuft nur auf live (isProduction) und erst
 * nach Zustimmung im Banner. siteId leer → kein Banner, kein Tracking.
 * Bei Änderung der Adresse auch die CSP in netlify.toml anpassen (script-src, connect-src, img-src).
 */
export const matomo = {
  url: "https://stats.vandenhoeck.de/",
  siteId: "",
};
