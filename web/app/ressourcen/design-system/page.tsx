import type { Metadata } from "next";
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
      </div>
    </section>
  );
}
