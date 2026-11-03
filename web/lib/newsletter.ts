/**
 * Ziel-URL des Anmeldeformulars beim Newsletter-Anbieter (Netlify-Umgebungsvariable
 * NEWSLETTER_FORM_ACTION). Leer → Formular ist deaktiviert und die Seite bleibt noindex.
 * Bei einem externen Ziel auch `form-action` in der CSP (netlify.toml) anpassen.
 */
export const newsletterAction = process.env.NEWSLETTER_FORM_ACTION || "";
