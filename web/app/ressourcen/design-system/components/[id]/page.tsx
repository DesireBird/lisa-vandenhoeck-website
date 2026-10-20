import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DsDemo } from "@/components/DsDemo";
import { RichText } from "@/components/RichText";
import { getDsComponents } from "@/lib/designSystem";
import { dsBase } from "@/lib/dsContent";
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
        {doc?.usage?.length ? (
          <div className="ds-doc">
            <h2 className="ds-token-group__heading">Einsatz</h2>
            <div className="narrative__body rich-text">
              <RichText value={doc.usage} />
            </div>
          </div>
        ) : null}
        {doc?.dos?.length || doc?.donts?.length ? (
          <div className="ds-dodont">
            {doc.dos?.length ? (
              <div className="ds-dodont__col ds-dodont__col--do">
                <span className="ds-dodont__label">Do</span>
                <ul className="bullet-list">
                  {doc.dos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {doc.donts?.length ? (
              <div className="ds-dodont__col ds-dodont__col--dont">
                <span className="ds-dodont__label">Don&apos;t</span>
                <ul className="bullet-list">
                  {doc.donts.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
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
