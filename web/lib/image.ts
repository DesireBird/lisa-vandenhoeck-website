import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityConfig } from "./sanity";

// Ohne Client-Instanz, damit Komponenten im Browser kein @sanity/client mitladen.
const builder = createImageUrlBuilder(sanityConfig);

export type SanityImageSource = {
  asset?: { _ref: string } | null;
  alt?: string | null;
  hotspot?: { x?: number; y?: number } | null;
  crop?: unknown;
} | null;

/** Basis-URL (inkl. Zuschnitt), Breite/Format ergänzt sanityImageLoader. */
export function imageUrl(image: SanityImageSource) {
  if (!image?.asset?._ref) return null;
  return builder.image(image).url();
}

/** Feste Größe, z. B. Open-Graph-Bild 1200 × 630. */
export function imageUrlSized(image: SanityImageSource, width: number, height: number) {
  if (!image?.asset?._ref) return null;
  return builder.image(image).width(width).height(height).fit("crop").auto("format").url();
}

/** Originalmaße aus der Asset-ID (image-<hash>-<w>x<h>-<ext>). */
export function imageDimensions(image: SanityImageSource) {
  const match = image?.asset?._ref.match(/-(\d+)x(\d+)-/);
  return match
    ? { width: Number(match[1]), height: Number(match[2]) }
    : { width: 1200, height: 800 };
}

/** Hotspot → object-position, damit der Bildausschnitt bei object-fit: cover stimmt. */
export function objectPosition(image: SanityImageSource) {
  const { x = 0.5, y = 0.5 } = image?.hotspot ?? {};
  return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
}
