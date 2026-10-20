import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/RichText";
import { SanityImg } from "@/components/SanityImg";
import { getAllResources, getResource } from "@/lib/queries";
import { sanityMetadata } from "@/lib/seo";

/*
 * /ressourcen/ (Liste) und /ressourcen/<slug>/ (Detail) in einer optionalen Catch-all-Route:
 * Der statische Export braucht pro dynamischer Route mindestens einen Pfad – die Liste gibt es immer,
 * auch solange in Sanity noch keine Ressource liegt.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  const resources = await getAllResources();
  return [{ slug: [] }, ...resources.map(({ slug }) => ({ slug: [slug as string] }))];
}

export async function generateMetadata({
  params,
}: PageProps<"/ressourcen/[[...slug]]">): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) return { title: "Ressourcen", alternates: { canonical: "/ressourcen/" } };
  const resource = await getResource(slug[0]);
  if (!resource) return {};
  return sanityMetadata({
    title: resource.title,
    path: `/ressourcen/${slug[0]}/`,
    seo: resource.seo,
    description: resource.teaser,
    image: resource.cover,
  });
}

export default async function RessourcenPage({ params }: PageProps<"/ressourcen/[[...slug]]">) {
  const { slug } = await params;
  if (!slug?.length) return <ResourceList />;
  if (slug.length > 1) notFound();
  return <ResourceDetail slug={slug[0]} />;
}

async function ResourceList() {
  const resources = await getAllResources();
  if (resources.length) {
    return (
      <section className="section section--paper">
        <div className="container">
          <span className="flag flag--neutral">Ressourcen</span>
          <h1 className="section__heading resource-list__heading">Ressourcen</h1>
          <ul className="resource-grid">
            {resources.map((resource) => (
              <li key={resource._id}>
                <Link href={`/ressourcen/${resource.slug}/`} className="resource-card">
                  <SanityImg
                    image={resource.cover}
                    sizes="(min-width: 769px) 33vw, 100vw"
                    className="resource-card__image"
                  />
                  <span className="resource-card__title">{resource.title}</span>
                  <p className="resource-card__teaser">{resource.teaser}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // Noch keine Ressourcen in Sanity → Baustellen-Hinweis.
  return (
    <>
      {/* ── Baustelle ──────────────────────────────────────────── */}
      <section className="section section--paper">
        <div
          className="container narrative"
          style={{
            textAlign: "center",
            marginTop: "var(--space-layout-lg)",
            marginBottom: "var(--space-layout-lg)",
          }}
        >
          <span className="flag flag--neutral">Ressourcen</span>
          <h1 className="narrative__heading" style={{ marginTop: "var(--space-gap-md)" }}>
            Diese Seite ist noch im Aufbau
          </h1>
          <div className="narrative__body">
            <p>
              Was Gutes braucht Zeit. Eine Standard-Seite wollte ich hier nicht vorsetzen – deshalb
              baue ich noch ein bisschen länger.
            </p>
          </div>
          <Link
            href="/"
            className="btn btn--secondary"
            style={{ marginTop: "var(--space-layout-sm)" }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </>
  );
}

async function ResourceDetail({ slug }: { slug: string }) {
  const resource = await getResource(slug);
  if (!resource) notFound();
  const href = resource.fileUrl ?? resource.externalUrl;
  return (
    <section className="section section--white">
      <div className="container narrative">
        <span className="flag flag--neutral" style={{ alignSelf: "flex-start" }}>
          Ressource
        </span>
        <h1 className="narrative__heading">{resource.title}</h1>
        <p className="section__lead">{resource.teaser}</p>
        <SanityImg
          image={resource.cover}
          sizes="(min-width: 768px) 720px, 100vw"
          className="page__image"
          priority
        />
        <div className="narrative__body rich-text">
          <RichText value={resource.body} />
        </div>
        {href ? (
          <a href={href} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            {resource.linkLabel || "Herunterladen"}
          </a>
        ) : null}
      </div>
    </section>
  );
}
