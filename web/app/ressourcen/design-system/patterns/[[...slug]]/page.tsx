import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/RichText";
import { getDsComponents } from "@/lib/designSystem";
import { dsBase, getDsContent } from "@/lib/dsContent";
import { getDsPattern, getDsPatterns } from "@/lib/queries";

/*
 * /patterns/ (Liste) und /patterns/<slug>/ (Detail) in einer optionalen Catch-all-Route:
 * Der statische Export braucht mindestens einen Pfad, auch solange es keine Patterns gibt.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  const patterns = await getDsPatterns();
  return [{ slug: [] }, ...patterns.map(({ slug }) => ({ slug: [slug as string] }))];
}

type Props = PageProps<"/ressourcen/design-system/patterns/[[...slug]]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) {
    return {
      title: "Patterns – Design System",
      alternates: { canonical: `${dsBase}/patterns/` },
    };
  }
  const pattern = await getDsPattern(slug[0]);
  if (!pattern) return {};
  return {
    title: `${pattern.title} – Design System`,
    description: pattern.summary,
    alternates: { canonical: `${dsBase}/patterns/${slug[0]}/` },
  };
}

export default async function PatternsPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) return <PatternList />;
  if (slug.length > 1) notFound();
  return <PatternDetail slug={slug[0]} />;
}

async function PatternList() {
  const [ds, patterns] = await Promise.all([getDsContent(), getDsPatterns()]);
  return (
    <section className="section section--paper">
      <div className="container">
        <h1 className="section__heading">Patterns</h1>
        <p className="section__lead">
          {ds.patternsIntro ?? "Wie Components zusammenspielen: Formulare und Interaktion."}
        </p>
        {patterns.length ? (
          <ul className="resource-grid">
            {patterns.map((p) => (
              <li key={p._id}>
                <Link href={`${dsBase}/patterns/${p.slug}/`} className="resource-card">
                  <span className="resource-card__title">{p.title}</span>
                  <p className="resource-card__teaser">{p.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="ds-note">Die ersten Patterns sind in Arbeit.</p>
        )}
      </div>
    </section>
  );
}

async function PatternDetail({ slug }: { slug: string }) {
  const pattern = await getDsPattern(slug);
  if (!pattern) notFound();
  const components = getDsComponents();
  const used = (pattern.components ?? [])
    .map((id) => components.find((c) => c.id === id))
    .filter((c) => c !== undefined);
  return (
    <section className="section section--white">
      <div className="container narrative">
        <Link href={`${dsBase}/patterns/`} className="ds-back">
          ← Patterns
        </Link>
        <h1 className="narrative__heading">{pattern.title}</h1>
        <p className="section__lead">{pattern.summary}</p>
        <div className="narrative__body rich-text">
          <RichText value={pattern.body} />
        </div>
        {used.length ? (
          <div className="ds-doc">
            <h2 className="ds-token-group__heading">Verwendete Components</h2>
            <ul className="chip-group ds-chip-links">
              {used.map((c) => (
                <li key={c.id}>
                  <Link href={`${dsBase}/components/${c.id}/`} className="chip">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
