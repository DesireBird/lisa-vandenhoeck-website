import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isProduction, siteUrl } from "@/lib/site";
import "./brand.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lisa Vandenhoeck — Designsystem-Klarheit",
    template: "%s — Lisa Vandenhoeck",
  },
  openGraph: {
    siteName: "Vandenhoeck Deepdives",
    locale: "de_DE",
    type: "website",
  },
  // Staging/Previews: nie indexieren (siehe lib/site.ts)
  robots: isProduction ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-theme="vandenhoeck">
      <body>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
