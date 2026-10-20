import { getSettings } from "@/lib/settings";

/** „Termin buchen“-CTA. Ziel kommt aus den Seiteneinstellungen (Sanity). */
export async function BookingButton({
  className = "button button--primary button--m button--body-l",
}) {
  const { bookingUrl } = await getSettings();
  return (
    <a href={bookingUrl} className={className} target="_blank" rel="noopener noreferrer">
      <span className="button__label-full">Jetzt Kennenlern-Gespräch buchen</span>
      <span className="button__label-short">Termin buchen</span>
    </a>
  );
}
