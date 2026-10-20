import {defineField, defineType} from 'sanity'
import {isUniqueAcrossTypes, reservedSlugs, slugify} from '../lib/slug'

/** Freie Seite. Liegt flach unter /<slug>/ wie die Deepdives. */
export const page = defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  groups: [
    {name: 'content', title: 'Inhalt', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'URL: /<slug>/. Eindeutig über Seiten und Deepdives.',
      options: {source: 'title', slugify, isUnique: isUniqueAcrossTypes},
      validation: (rule) =>
        rule
          .required()
          .custom((slug) =>
            slug?.current && reservedSlugs.includes(slug.current)
              ? 'Dieser Slug ist reserviert.'
              : true,
          ),
    }),
    defineField({
      name: 'intro',
      title: 'Einleitung',
      type: 'text',
      rows: 3,
      group: 'content',
      description:
        'Kurzer Einstieg unter der Überschrift, auch Fallback für die Meta-Beschreibung.',
    }),
    defineField({name: 'mainImage', title: 'Titelbild', type: 'accessibleImage', group: 'content'}),
    defineField({name: 'body', title: 'Text', type: 'blockContent', group: 'content'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {select: {title: 'title', subtitle: 'slug.current', media: 'mainImage'}},
})
