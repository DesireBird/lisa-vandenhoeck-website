import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";
import { NewsletterHero } from "@/components/NewsletterHero";
import "../../../brand/design-system/src/components/FormField.css";

export const metadata: Metadata = {
  title: "Newsletter",
  alternates: { canonical: "/newsletter/" },
};

export default function NewsletterPage() {
  return (
    <NewsletterHero headline="Willkommen zu meinem Newsletter.">
      <p className="hero__sub">
        Kein Spam, versprochen! Ich setze nur einen auf, wenn ich mir sicher bin, dass du mit einem
        Aha-Moment rausgehst.
      </p>
      <NewsletterForm />
    </NewsletterHero>
  );
}
