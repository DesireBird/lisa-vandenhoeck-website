import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterHero } from "@/components/NewsletterHero";
import { newsletterAction } from "@/lib/newsletter";
import "../../../brand/design-system/src/components/FormField.css";

export const metadata: Metadata = {
  title: "Newsletter",
  alternates: { canonical: "/newsletter/" },
  robots: newsletterAction ? undefined : { index: false },
};

export default function NewsletterPage() {
  return (
    <NewsletterHero headline="Willkommen zu meinem Newsletter.">
      <p className="hero__sub">
        Kein Spam, versprochen! Ich setze nur einen auf, wenn ich mir sicher bin, dass du mit einem
        Aha-Moment rausgehst.
      </p>
      <form className="newsletter__form" action={newsletterAction || undefined} method="post">
        <div className="form-field">
          <label className="form-field__label" htmlFor="newsletter-email">
            E-Mail-Adresse
          </label>
          <input
            className="form-field__input"
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@firma.de"
            required
            disabled={!newsletterAction}
          />
          <span className="form-field__helper">
            Du bekommst eine Bestätigungsmail. Abmelden geht jederzeit mit einem Klick.
          </span>
        </div>
        <label className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            name="consent"
            required
            disabled={!newsletterAction}
          />
          <span className="checkbox__box">
            <svg className="checkbox__icon" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M2 5.5L4.5 8L9 3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="checkbox__label">
            Ja, ich möchte den Newsletter per E-Mail erhalten und habe die{" "}
            <Link href="/datenschutz/">Datenschutzerklärung</Link> gelesen.
          </span>
        </label>
        <button
          type="submit"
          className="button button--primary button--m button--body-l"
          disabled={!newsletterAction}
        >
          Newsletter abonnieren
        </button>
      </form>
    </NewsletterHero>
  );
}
