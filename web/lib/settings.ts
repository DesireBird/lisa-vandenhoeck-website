import { cache } from "react";
import { getSiteSettings } from "./queries";

/** Ersatzwerte, falls die Seiteneinstellungen in Sanity (noch) leer sind. */
const fallback = {
  heroHeadline:
    "Die Anforderungen an euer Design System verändern sich schneller, als ihr mitkommt?",
  heroSub:
    "Ich mache eine Sache: Designsystem-Klarheit. Ein Workshop, an eurem eigenen System. Damit euer System wieder die Tools beherrscht und nicht umgekehrt.",
  bookingUrl: "https://calendly.com/lisa-vandenhoeck/30min",
  seoTitle: "Lisa Vandenhoeck — Designsystem-Klarheit",
};

/** Seiteneinstellungen einmal pro Build laden (Layout, Seiten und Metadaten teilen sich den Aufruf). */
export const getSettings = cache(async () => {
  const s = await getSiteSettings();
  return {
    heroHeadline: s?.heroHeadline || fallback.heroHeadline,
    heroSub: s?.heroSub || fallback.heroSub,
    bookingUrl: s?.bookingUrl || fallback.bookingUrl,
    seoTitle: s?.seoTitle || fallback.seoTitle,
    seoDescription: s?.seoDescription ?? null,
    ogImage: s?.ogImage ?? null,
  };
});
