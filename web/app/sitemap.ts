import type { MetadataRoute } from "next";
import { getAllResources, getFlatSlugs } from "@/lib/queries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Platzhalterseiten (services; ressourcen ohne Einträge) erst aufnehmen, wenn sie Inhalt haben.
const staticPaths = ["/", "/about/", "/impressum/", "/datenschutz/"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, resources] = await Promise.all([getFlatSlugs(), getAllResources()]);
  const paths = [
    ...staticPaths,
    ...slugs.map(({ slug }) => `/${slug}/`),
    ...(resources.length
      ? ["/ressourcen/", ...resources.map(({ slug }) => `/ressourcen/${slug}/`)]
      : []),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
