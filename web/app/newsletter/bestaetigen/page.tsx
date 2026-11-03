import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterHero } from "@/components/NewsletterHero";

export const metadata: Metadata = {
  title: "Fast geschafft – Newsletter",
  alternates: { canonical: "/newsletter/bestaetigen/" },
  robots: { index: false },
};

export default function NewsletterConfirmPage() {
  return (
    <NewsletterHero headline="Fast geschafft!">
      <p className="hero__sub">
        Ich habe dir gerade eine E-Mail geschickt. Klick auf den Link darin, dann bist du dabei.
        Nichts gefunden? Schau kurz in deinen Spam-Ordner.
      </p>
      <Link href="/" className="button button--secondary button--m button--body-l">
        Zur Startseite
      </Link>
    </NewsletterHero>
  );
}
