import type { Metadata } from "next";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { foundationCategories, getDsComponents } from "@/lib/designSystem";
import { dsBase, getDsContent } from "@/lib/dsContent";
import { getDsPatterns } from "@/lib/queries";
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
  const [ds, patterns] = await Promise.all([getDsContent(), getDsPatterns()]);
  const components = getDsComponents();
  const sections = [
    {
      href: `${dsBase}/foundation/`,
      title: "Foundation",
      text: ds.foundationIntro ?? "Farben, Typografie, Abstände, Größen, Radius und Elevation.",
      meta: `${foundationCategories.length} Bereiche`,
    },
    {
      href: `${dsBase}/components/`,
      title: "Components",
      text: ds.componentsIntro ?? "Bausteine mit allen Zuständen, direkt zum Ausprobieren.",
      meta: `${components.length} Components`,
    },
    {
      href: `${dsBase}/patterns/`,
      title: "Patterns",
      text: ds.patternsIntro ?? "Wie Components zusammenspielen: Formulare und Interaktion.",
      meta: patterns.length ? `${patterns.length} Patterns` : "In Arbeit",
    },
  ];
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
        <ul className="resource-grid">
          {sections.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="card card--link">
                <span className="ds-card__meta">{s.meta}</span>
                <h2 className="card__title">{s.title}</h2>
                <p className="card__body">{s.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
