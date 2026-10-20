import { defineQuery } from "groq";
import { client } from "./sanity";

/*
 * GROQ-Abfragen + getypte Funktionen. Typen kommen aus sanity.types.ts
 * (studio: `npm run typegen`). Nach Änderung an Abfragen oder Schema neu erzeugen.
 * Alle Abfragen laufen nur beim Build.
 */

const image = /* groq */ `{ asset, alt, hotspot, crop }`;
const seo = /* groq */ `seo { title, description, ogImage ${image} }`;

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    heroHeadline, heroSub, bookingUrl, seoTitle, seoDescription, ogImage ${image}
  }
`);

/** Alle flachen Slugs (/<slug>/) mit Typ, für generateStaticParams und Sitemap. */
export const flatSlugsQuery = defineQuery(`
  *[_type in ["deepdive", "page"] && defined(slug.current)] { _type, "slug": slug.current }
`);

export const deepdiveBySlugQuery = defineQuery(`
  *[_type == "deepdive" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, flag, flagTone, headline, heroText, heroImage ${image},
    problemHeading, problemText, problemCards[] { _key, icon, label, body }, legalNote,
    approachHeading, approachText, outcomesImage ${image}, outcomesLabel, outcomes, note,
    featuresHeading, featuresLead, features[] { _key, label, body },
    processHeading, steps[] { _key, title, meta, body }, processResult,
    urgencyHeading, urgencyText,
    faqHeading, faqs[] { _key, question, answer }, ctaHeading,
    ${seo}
  }
`);

export const pageBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, intro, mainImage ${image}, body, ${seo}
  }
`);

const resourceCard = /* groq */ `{ _id, title, "slug": slug.current, teaser, publishedAt, cover ${image} }`;

export const allResourcesQuery = defineQuery(`
  *[_type == "resource" && defined(slug.current)] | order(publishedAt desc) ${resourceCard}
`);

export const resourceBySlugQuery = defineQuery(`
  *[_type == "resource" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, teaser, publishedAt, cover ${image}, body,
    "fileUrl": file.asset->url, externalUrl, linkLabel, ${seo}
  }
`);

export const getSiteSettings = () => client.fetch(siteSettingsQuery);
export const getFlatSlugs = () => client.fetch(flatSlugsQuery);
export const getDeepdive = (slug: string) => client.fetch(deepdiveBySlugQuery, { slug });
export const getPage = (slug: string) => client.fetch(pageBySlugQuery, { slug });
export const getAllResources = () => client.fetch(allResourcesQuery);
export const getResource = (slug: string) => client.fetch(resourceBySlugQuery, { slug });
