import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Platzhalterseiten (ressourcen, services) erst aufnehmen, wenn sie Inhalt haben.
const paths = [
  "/",
  "/figma-config/",
  "/ki-ready/",
  "/bfsg/",
  "/about/",
  "/impressum/",
  "/datenschutz/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
