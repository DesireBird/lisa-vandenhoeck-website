import type {SlugValidationContext} from 'sanity'

/** Slug aus Titel: Umlaute ausschreiben, nur a–z, 0–9 und Bindestrich. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
}

/**
 * Slug muss über Deepdives und Seiten hinweg eindeutig sein, weil beide flach unter /<slug>/ liegen.
 * Entwurf und veröffentlichte Version desselben Dokuments zählen nicht als Konflikt.
 */
export async function isUniqueAcrossTypes(slug: string, context: SlugValidationContext) {
  const {document, getClient} = context
  const id = document?._id.replace(/^drafts\./, '')
  const client = getClient({apiVersion: '2025-01-01'})
  const count = await client.fetch<number>(
    `count(*[_type in ["deepdive", "page"] && slug.current == $slug && !(_id in [$draft, $published])])`,
    {slug, draft: `drafts.${id}`, published: id},
  )
  return count === 0
}

/** Pfade, die im Code liegen (web/app/*) und von keinem Deepdive / keiner Seite belegt werden dürfen. */
export const reservedSlugs = [
  'about',
  'services',
  'ressourcen',
  'impressum',
  'datenschutz',
  'studio',
  'api',
]
