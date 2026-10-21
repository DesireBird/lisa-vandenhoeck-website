/**
 * Matomo im Browser. `_paq` gibt es erst nach der Zustimmung (siehe components/Analytics.tsx),
 * vorher sind alle Aufrufe hier wirkungslos.
 */
type Paq = unknown[][];

declare global {
  interface Window {
    _paq?: Paq;
  }
}

export const CONSENT_KEY = "vh-analytics-consent";
export const CONSENT_RESET_EVENT = "vh:analytics-reset";

export type Consent = "granted" | "denied";

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent | null) {
  try {
    if (value) localStorage.setItem(CONSENT_KEY, value);
    else localStorage.removeItem(CONSENT_KEY);
  } catch {
    // z. B. privater Modus: Banner erscheint dann beim nächsten Besuch wieder
  }
}

/** Ereignis an Matomo, z. B. trackEvent("Design System", "Copy Spec as MD", "Select"). */
export function trackEvent(category: string, action: string, name?: string) {
  window._paq?.push(["trackEvent", category, action, ...(name ? [name] : [])]);
}

/** Banner wieder anzeigen (Link „Statistik-Einstellungen“ im Footer). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_RESET_EVENT));
}
