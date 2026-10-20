// Bild-Loader für den statischen Export: Bilder kommen direkt vom Sanity-CDN,
// Breite, Qualität und Format (WebP/AVIF je nach Browser) per URL-Parameter.
export default function sanityImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}
