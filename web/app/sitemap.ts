import type { MetadataRoute } from "next";
import { foundationCategories, getDsComponents } from "@/lib/designSystem";
import { dsBase } from "@/lib/dsContent";
import { getAllResources, getDsPatterns, getFlatSlugs } from "@/lib/queries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Platzhalterseite services erst aufnehmen, wenn sie Inhalt hat.
const staticPaths = ["/", "/about/", "/impressum/", "/datenschutz/"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, resources, patterns] = await Promise.all([
    getFlatSlugs(),
    getAllResources(),
    getDsPatterns(),
  ]);
  const paths = [
    ...staticPaths,
    ...slugs.map(({ slug }) => `/${slug}/`),
    "/ressourcen/",
    ...resources.map(({ slug }) => `/ressourcen/${slug}/`),
    `${dsBase}/`,
    `${dsBase}/foundation/`,
    ...foundationCategories.map(({ slug }) => `${dsBase}/foundation/${slug}/`),
    `${dsBase}/components/`,
    ...getDsComponents().map(({ id }) => `${dsBase}/components/${id}/`),
    `${dsBase}/patterns/`,
    ...patterns.map(({ slug }) => `${dsBase}/patterns/${slug}/`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
