import sanityImageLoader from "@/lib/sanityImageLoader";
import { imageDimensions, imageUrl, objectPosition, type SanityImageSource } from "@/lib/image";

type Props = {
  image: SanityImageSource;
  sizes: string;
  className?: string;
  /** Bild oben im Viewport (LCP): sofort und mit hoher Priorität laden. */
  priority?: boolean;
};

const WIDTHS = [480, 800, 1200, 1600, 2000];

/**
 * Sanity-Bild als schlichtes <img> mit srcset vom Sanity-CDN.
 * Bewusst kein next/image: dessen width/height-Attribute überschreiben die CSS-Größen
 * (aspect-ratio, Flex-Stretch) der übernommenen Seiten-Styles.
 */
export function SanityImg({ image, sizes, className, priority }: Props) {
  const src = imageUrl(image);
  if (!src) return null;
  const { width } = imageDimensions(image);
  const widths = WIDTHS.filter((w) => w < width).concat(Math.min(width, 2000));
  const srcSet = widths.map((w) => `${sanityImageLoader({ src, width: w })} ${w}w`).join(", ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sanityImageLoader({ src, width: Math.min(width, 1200) })}
      srcSet={srcSet}
      sizes={sizes}
      alt={image?.alt ?? ""}
      className={className}
      style={image?.hotspot ? { objectPosition: objectPosition(image) } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
