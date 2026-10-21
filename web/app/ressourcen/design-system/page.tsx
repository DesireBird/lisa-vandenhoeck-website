import type { Metadata } from "next";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { dsBase, getDsContent } from "@/lib/dsContent";
import { sanityMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const ds = await getDsContent();
  return sanityMetadata({
    title: ds.title,
    path: `${dsBase}/`,
    seo: ds.seo,
    description: ds.teaser,
    image: ds.cover,
  });
}

export default async function DesignSystemPage() {
  const ds = await getDsContent();
  return (
    <section className="section section--paper">
      <div className="container">
        <span className="flag flag--neutral">Ressource</span>
        <h1 className="section__heading ds-heading">{ds.title}</h1>
        <p className="section__lead">{ds.teaser}</p>
        {ds.intro?.length ? (
          <div className="narrative__body rich-text ds-intro">
            <RichText value={ds.intro} />
          </div>
        ) : null}
        <ul className="resource-grid ds-overview-grid">
          {[
            {
              href: "foundation",
              title: "Foundation",
              text:
                ds.foundationIntro ??
                "Alle Werte kommen direkt aus den Design Tokens – was hier steht, ist das, was im Code gilt.",
            },
            {
              href: "components",
              title: "Components",
              text:
                ds.componentsIntro ??
                "Jede Component mit ihren Varianten und Zuständen – die Beispiele sind echt und bedienbar.",
            },
            {
              href: "patterns",
              title: "Patterns",
              text: ds.patternsIntro ?? "Wie Components zusammenspielen: Formulare und Interaktion.",
            },
          ].map((area) => (
            <li key={area.href}>
              <Link href={`${dsBase}/${area.href}/`} className="card card--link">
                <h2 className="card__title">{area.title}</h2>
                <p className="card__body">{area.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
