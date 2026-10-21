"use client";

import { openConsentSettings } from "@/lib/analytics";

/** Footer: Einwilligung zur Statistik ändern oder widerrufen. */
export function ConsentSettingsButton() {
  return (
    <button type="button" className="site-footer__link site-footer__button" onClick={openConsentSettings}>
      Statistik-Einstellungen
    </button>
  );
}
