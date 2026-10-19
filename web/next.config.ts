import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Komplett statische Seite für Netlify, keine Serverfunktionen (wie Paw Holidays).
  output: "export",
  trailingSlash: true,
  // Bilder liegen in public/ (später Sanity-CDN mit eigenem Loader), kein Next-Optimierer im Export.
  images: { unoptimized: true },
  // Tokens und Components liegen außerhalb von web/ (brand/) → Repo-Root als Turbopack-Root.
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
