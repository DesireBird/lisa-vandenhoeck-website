import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { imageUrlSized } from "@/lib/image";
import { getSettings } from "@/lib/settings";
import { isProduction, siteUrl } from "@/lib/site";
import "./brand.css";
import "./site.css";

// Standard-Titel, -Beschreibung und -OG-Bild aus den Seiteneinstellungen (Sanity).
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const ogImage = imageUrlSized(settings.ogImage, 1200, 630);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: settings.seoTitle,
      template: "%s — Lisa Vandenhoeck",
    },
    description: settings.seoDescription ?? undefined,
    openGraph: {
      siteName: "Vandenhoeck Deepdives",
      locale: "de_DE",
      type: "website",
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    // Staging/Previews: nie indexieren (siehe lib/site.ts)
    robots: isProduction ? undefined : { index: false, follow: false },
  };
}

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
