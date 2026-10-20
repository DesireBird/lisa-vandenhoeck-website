import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Komplett statische Seite für Netlify, keine Serverfunktionen (wie Paw Holidays).
  output: "export",
  trailingSlash: true,
  // Kein Next-Optimierer im Export. Sanity-Bilder: <SanityImg> mit srcset vom Sanity-CDN
  // (lib/sanityImageLoader.ts); Bilder in public/ bleiben unverändert.
  images: { unoptimized: true },
  // Tokens und Components liegen außerhalb von web/ (brand/) → Repo-Root als Turbopack-Root.
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
