import { createClient } from "@sanity/client";

// Projekt-ID und Dataset sind öffentlich (Dataset „production“ ist public).
// Abfragen laufen nur beim Build (statischer Export), ohne Token.
export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || "4y4m7dt1",
  dataset: process.env.SANITY_DATASET || "production",
};

export const client = createClient({
  ...sanityConfig,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
  useCdn: false,
  perspective: "published",
});
