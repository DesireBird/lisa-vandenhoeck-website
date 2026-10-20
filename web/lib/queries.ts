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

// ── Design System (/ressourcen/design-system/) ──────────────────────────

export const designSystemQuery = defineQuery(`
  *[_type == "designSystem" && _id == "designSystem"][0] {
    title, teaser, cover ${image}, intro, foundationIntro, componentsIntro, patternsIntro, ${seo}
  }
`);

export const dsComponentDocsQuery = defineQuery(`
  *[_type == "dsComponent" && defined(component)] { component, summary }
`);

export const dsComponentDocQuery = defineQuery(`
  *[_type == "dsComponent" && component == $component][0] {
    component, summary, notes, docsMarkdown, docsMeta,
    examples[] { _key, title, kind, image ${image}, html, text, links[] { _key, label, url } }
  }
`);

const patternCard = /* groq */ `{ _id, title, "slug": slug.current, summary }`;

export const dsPatternsQuery = defineQuery(`
  *[_type == "dsPattern" && defined(slug.current)] | order(order asc, title asc) ${patternCard}
`);

export const dsPatternBySlugQuery = defineQuery(`
  *[_type == "dsPattern" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, summary, body, components
  }
`);

export const getDesignSystem = () => client.fetch(designSystemQuery);
export const getDsComponentDocs = () => client.fetch(dsComponentDocsQuery);
export const getDsComponentDoc = (component: string) =>
  client.fetch(dsComponentDocQuery, { component });
export const getDsPatterns = () => client.fetch(dsPatternsQuery);
export const getDsPattern = (slug: string) => client.fetch(dsPatternBySlugQuery, { slug });
