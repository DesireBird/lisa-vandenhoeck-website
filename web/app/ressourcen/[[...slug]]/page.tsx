import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/RichText";
import { SanityImg } from "@/components/SanityImg";
import { dsBase, getDsContent } from "@/lib/dsContent";
import { getAllResources, getResource } from "@/lib/queries";
import { sanityMetadata } from "@/lib/seo";

/*
 * /ressourcen/ (Liste) und /ressourcen/<slug>/ (Detail) in einer optionalen Catch-all-Route:
 * Der statische Export braucht pro dynamischer Route mindestens einen Pfad – die Liste gibt es immer.
 * /ressourcen/design-system/ ist eine eigene Route (app/ressourcen/design-system), Slug reserviert.
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
  const [resources, ds] = await Promise.all([getAllResources(), getDsContent()]);
  return (
    <section className="section section--paper">
      <div className="container">
        <span className="flag flag--neutral">Ressourcen</span>
        <h1 className="section__heading resource-list__heading">Ressourcen</h1>
        <ul className="resource-grid">
          {/* Design System steht immer vorne; Texte aus Sanity (designSystem), Inhalte aus dem Code */}
          <li>
            <Link
              href={`${dsBase}/`}
              className={`card card--link${ds.cover?.asset ? " card--image" : ""}`}
            >
              {ds.cover?.asset ? (
                <SanityImg
                  image={ds.cover}
                  sizes="(min-width: 769px) 33vw, 100vw"
                  className="card__image resource-grid__image"
                />
              ) : null}
              <div className="card__content">
                <h2 className="card__title">{ds.title}</h2>
                <p className="card__body">{ds.teaser}</p>
              </div>
            </Link>
          </li>
          {resources.map((resource) => (
            <li key={resource._id}>
              <Link href={`/ressourcen/${resource.slug}/`} className="card card--link card--image">
                <SanityImg
                  image={resource.cover}
                  sizes="(min-width: 769px) 33vw, 100vw"
                  className="card__image resource-grid__image"
                />
                <div className="card__content">
                  <h2 className="card__title">{resource.title}</h2>
                  <p className="card__body">{resource.teaser}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
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
          <a
            href={href}
            className="button button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {resource.linkLabel || "Herunterladen"}
          </a>
        ) : null}
      </div>
    </section>
  );
}
