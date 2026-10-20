import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Deepdive } from "@/components/Deepdive";
import { RichText } from "@/components/RichText";
import { SanityImg } from "@/components/SanityImg";
import { getDeepdive, getFlatSlugs, getPage } from "@/lib/queries";
import { sanityMetadata } from "@/lib/seo";

// Statischer Export: nur Slugs aus Sanity, alles andere ist 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getFlatSlugs();
  return slugs.map(({ slug }) => ({ slug: slug as string }));
}

async function load(slug: string) {
  const deepdive = await getDeepdive(slug);
  if (deepdive) return { deepdive, page: null };
  return { deepdive: null, page: await getPage(slug) };
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { deepdive, page } = await load(slug);
  const doc = deepdive ?? page;
  if (!doc) return {};
  return sanityMetadata({
    title: doc.title ?? "",
    path: `/${slug}/`,
    seo: doc.seo,
    description: page?.intro,
    image: deepdive?.heroImage ?? page?.mainImage,
  });
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const { deepdive, page } = await load(slug);
  if (deepdive) return <Deepdive deepdive={deepdive} />;
  if (!page) notFound();
  return (
    <section className="section section--white">
      <div className="container narrative">
        <h1 className="narrative__heading">{page.title}</h1>
        {page.intro ? <p className="section__lead">{page.intro}</p> : null}
        {page.mainImage?.asset ? (
          <SanityImg
            image={page.mainImage}
            sizes="(min-width: 768px) 720px, 100vw"
            className="page__image"
            priority
          />
        ) : null}
        <div className="narrative__body rich-text">
          <RichText value={page.body} />
        </div>
      </div>
    </section>
  );
}
