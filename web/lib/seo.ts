import type { Metadata } from "next";
import { imageUrlSized, type SanityImageSource } from "./image";

type Seo = {
  title?: string | null;
  description?: string | null;
  ogImage?: SanityImageSource;
} | null;

/** Metadaten einer Sanity-Seite: SEO-Felder vor Titel/Fallbacks, OG-Bild 1200 × 630. */
export function sanityMetadata({
  title,
  path,
  seo,
  description,
  image,
}: {
  title: string;
  path: string;
  seo?: Seo;
  description?: string | null;
  image?: SanityImageSource;
}): Metadata {
  const ogImage = imageUrlSized(seo?.ogImage ?? image ?? null, 1200, 630);
  const desc = seo?.description || description || undefined;
  return {
    title: seo?.title || title,
    description: desc,
    alternates: { canonical: path },
    openGraph: ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : undefined,
  };
}
