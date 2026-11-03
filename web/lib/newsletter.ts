/**
 * Anmeldeformular bei Brevo (Double-Opt-in, Liste und Bestätigungsmail stellt Brevo).
 * Die Adresse ist öffentlich (steht auch im Einbettungs-Code), kein Geheimnis.
 * Bei einer neuen Formular-URL auch `connect-src` in der CSP (netlify.toml) anpassen.
 */
export const newsletterAction =
  "https://c79f651a.sibforms.com/serve/MUIFAAgiHla5_x7j7ZX1yFw_94fXW_mcqnfK1zvAmSxSCv56u-qGc7FaF-Ggyjkyu_BmpFDuuW_YdPezxKs2bqQZAaKhHeRlmrgbY1MM-hra1nS58dnpswAMtFGnsj3lUm06Z97s6n0uM65skCCpHk4fYP2OnF0QO3VMgyuBYj3BFHw3Pr5qDEdRf0fAGJ2lHSUqR5It8KfWokKDRA==";

export const newsletterConfirmPath = "/newsletter/bestaetigen/";
