import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterHero } from "@/components/NewsletterHero";

export const metadata: Metadata = {
  title: "Du bist dabei – Newsletter",
  alternates: { canonical: "/newsletter/bestaetigt/" },
  robots: { index: false },
};

export default function NewsletterConfirmedPage() {
  return (
    <NewsletterHero headline="Du bist dabei!">
      <p className="hero__sub">
        Danke, deine Anmeldung ist bestätigt. Ab jetzt bekommst du meinen Newsletter, versprochen
        ohne Spam.
      </p>
      <Link href="/" className="button button--secondary button--m button--body-l">
        Zur Startseite
      </Link>
    </NewsletterHero>
  );
}
