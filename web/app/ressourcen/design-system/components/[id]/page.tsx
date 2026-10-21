import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopySpecButton } from "@/components/CopySpecButton";
import { DsDemo } from "@/components/DsDemo";
import { RichText } from "@/components/RichText";
import { SanityImg } from "@/components/SanityImg";
import { getDsComponents } from "@/lib/designSystem";
import { dsBase } from "@/lib/dsContent";
import { markdownToHtml } from "@/lib/markdown";
import { getDsComponentDoc } from "@/lib/queries";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDsComponents().map(({ id }) => ({ id }));
}

const find = (id: string) => getDsComponents().find((c) => c.id === id);

export async function generateMetadata({
  params,
}: PageProps<"/ressourcen/design-system/components/[id]">): Promise<Metadata> {
  const { id } = await params;
  const component = find(id);
  if (!component) return {};
  const doc = await getDsComponentDoc(id);
  return {
    title: `${component.title} – Design System`,
    description: doc?.summary || component.subtitle,
    alternates: { canonical: `${dsBase}/components/${id}/` },
  };
}

export default async function ComponentPage({
  params,
}: PageProps<"/ressourcen/design-system/components/[id]">) {
  const { id } = await params;
  const component = find(id);
  if (!component) notFound();
  const doc = await getDsComponentDoc(id);
  return (
    <section className="section section--white">
      <div className="container">
        <Link href={`${dsBase}/components/`} className="ds-back">
          ← Components
        </Link>
        <h1 className="section__heading">{component.title}</h1>
        <p className="section__lead">{doc?.summary || component.subtitle}</p>
        {component.hasDemo ? (
          <DsDemo html={component.html} />
        ) : (
          <p className="ds-note">
            Diese Component siehst du auf dieser Website im Einsatz – ein eigenes Beispiel folgt.
          </p>
        )}
        {doc?.docsMarkdown ? (
          <div className="ds-doc">
            <div className="ds-doc__header">
              <h2 className="ds-doc__heading">Spec</h2>
              <CopySpecButton markdown={doc.docsMarkdown} component={component.title} />
            </div>
            <div
              className="narrative__body rich-text ds-markdown"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(doc.docsMarkdown, (file) => {
                  const target = file.replace(/-/g, "");
                  return getDsComponents().some((c) => c.id === target)
                    ? `${dsBase}/components/${target}/`
                    : null;
                }),
              }}
            />
            {doc.docsMeta ? (
              <p className="ds-doc__meta">
                Doku {doc.docsMeta.status} · Version {doc.docsMeta.version}
                {doc.docsMeta.updated ? ` · Stand ${doc.docsMeta.updated}` : ""}
              </p>
            ) : null}
          </div>
        ) : null}
        {doc?.examples?.length ? (
          <div className="ds-doc">
            <h2 className="ds-token-group__heading">Beispiele</h2>
            <div className="ds-examples">
              {doc.examples.map((example) => (
                <figure key={example._key} className="card ds-example">
                  <figcaption className="card__title ds-example__title">{example.title}</figcaption>
                  {example.kind === "html" && example.html ? (
                    <DsDemo html={example.html} />
                  ) : example.image?.asset ? (
                    <SanityImg
                      image={example.image}
                      sizes="(min-width: 768px) 720px, 100vw"
                      className="ds-example__image"
                    />
                  ) : null}
                  {example.text?.length ? (
                    <div className="card__body rich-text">
                      <RichText value={example.text} />
                    </div>
                  ) : null}
                  {example.links?.length ? (
                    <ul className="ds-example__links">
                      {example.links.map((link) => (
                        <li key={link._key}>
                          <a
                            href={link.url}
                            {...(/^https?:\/\//.test(link.url)
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        ) : null}
        {doc?.notes?.length ? (
          <div className="ds-doc">
            <h2 className="ds-token-group__heading">Hinweise</h2>
            <div className="narrative__body rich-text">
              <RichText value={doc.notes} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
