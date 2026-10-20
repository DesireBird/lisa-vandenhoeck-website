import {defineField, defineType} from 'sanity'
import {slugify} from '../lib/slug'

/** Ressource (z. B. Playbook): Liste unter /ressourcen/, Detailseite unter /ressourcen/<slug>/. */
export const resource = defineType({
  name: 'resource',
  title: 'Ressource',
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
      description: 'URL: /ressourcen/<slug>/',
      options: {source: 'title', slugify},
      validation: (rule) =>
        rule
          .required()
          .custom((slug) =>
            slug?.current === 'design-system' ? 'Reserviert für den Design-System-Bereich.' : true,
          ),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'date',
      group: 'content',
      description: 'Sortierung der Liste: neueste zuerst.',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Kurztext für die Karte in der Liste, auch Fallback für die Meta-Beschreibung.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'accessibleImage',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'body', title: 'Text', type: 'blockContent', group: 'content'}),
    defineField({
      name: 'file',
      title: 'Datei (PDF)',
      type: 'file',
      group: 'content',
      description: 'Optional. Achtung: Dateien im öffentlichen Dataset sind für alle abrufbar.',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'externalUrl',
      title: 'Externer Link',
      type: 'url',
      group: 'content',
      description: 'Optional, z. B. Figma-Community oder Shop.',
      validation: (rule) => rule.uri({scheme: ['https']}),
    }),
    defineField({
      name: 'linkLabel',
      title: 'Button-Text',
      type: 'string',
      group: 'content',
      initialValue: 'Herunterladen',
      hidden: ({document}) => !document?.file && !document?.externalUrl,
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {select: {title: 'title', subtitle: 'publishedAt', media: 'cover'}},
})
