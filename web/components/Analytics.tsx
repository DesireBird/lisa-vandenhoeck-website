"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CONSENT_RESET_EVENT,
  type Consent,
  readConsent,
  trackEvent,
  writeConsent,
} from "@/lib/analytics";

/** Wo ein Navigations-Klick passiert ist (Bereich für das Matomo-Ereignis „Navigation“). */
const navAreas: [selector: string, area: string][] = [
  [".sidebar__drawer", "Sidebar-Untermenü"],
  [".sidebar-overlay", "Sidebar mobil"],
  [".sidebar", "Sidebar"],
  [".site-nav", "Header"],
  [".site-footer", "Footer"],
];

/**
 * Einwilligungsbanner (DS-Banner) + Matomo. Matomo wird erst nach „Zustimmen“ geladen.
 * Zählt Seitenaufrufe (auch bei Navigation ohne Neuladen), Verweildauer (Heartbeat),
 * ausgehende Links und Klicks in Header, Sidebar und Footer.
 */
export function Analytics({ url, siteId }: { url: string; siteId: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  const started = useRef(false);
  const lastUrl = useRef<string | null>(null);

  // Gespeicherte Entscheidung erst im Browser lesen (Static Export kennt sie nicht)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage gibt es erst im Browser
    setConsent(readConsent());
    const reset = () => setConsent(null);
    window.addEventListener(CONSENT_RESET_EVENT, reset);
    return () => window.removeEventListener(CONSENT_RESET_EVENT, reset);
  }, []);

  // Matomo laden, sobald zugestimmt ist
  useEffect(() => {
    if (consent !== "granted" || started.current) return;
    started.current = true;
    const paq = (window._paq = window._paq ?? []);
    paq.push(["setTrackerUrl", `${url}matomo.php`]);
    paq.push(["setSiteId", siteId]);
    paq.push(["enableLinkTracking"]);
    paq.push(["enableHeartBeatTimer"]);
    const script = document.createElement("script");
    script.async = true;
    script.src = `${url}matomo.js`;
    document.head.appendChild(script);
  }, [consent, url, siteId]);

  // Seitenaufruf bei jedem Seitenwechsel
  useEffect(() => {
    if (consent !== "granted") return;
    // Titel setzt Next.js erst nach dem Rendern der neuen Seite
    const timer = setTimeout(() => {
      const paq = window._paq;
      if (!paq) return;
      if (lastUrl.current) paq.push(["setReferrerUrl", lastUrl.current]);
      paq.push(["setCustomUrl", window.location.href]);
      paq.push(["setDocumentTitle", document.title]);
      paq.push(["trackPageView"]);
      lastUrl.current = window.location.href;
    }, 100);
    return () => clearTimeout(timer);
  }, [consent, pathname]);

  // Klicks in der Navigation
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const hit = navAreas.find(([selector]) => link.closest(selector));
      if (hit) trackEvent("Navigation", hit[1], link.textContent?.trim() || link.href);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [consent]);

  const decide = (value: Consent) => {
    if (value === "denied" && window._paq) {
      window._paq.push(["deleteCookies"]);
      window._paq = undefined;
      started.current = false;
    }
    writeConsent(value);
    setConsent(value);
  };

  if (consent !== null) return null;

  return (
    <section className="banner" role="dialog" aria-labelledby="analytics-banner-title">
      <p className="banner__title" id="analytics-banner-title">
        Darf es ein bisschen Statistik sein?
      </p>
      <p className="banner__text">
        Mit deiner Zustimmung wertet Matomo aus, welche Seiten gelesen werden und wie du dich durch
        die Website bewegst. Dafür werden Cookies gesetzt. Du kannst das jederzeit im Footer
        ändern. <Link href="/datenschutz/#statistik">Datenschutz</Link>
      </p>
      <div className="banner__actions">
        <button type="button" className="button button--secondary" onClick={() => decide("denied")}>
          Ablehnen
        </button>
        <button type="button" className="button button--secondary" onClick={() => decide("granted")}>
          Zustimmen
        </button>
      </div>
    </section>
  );
}
