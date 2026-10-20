import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'title',
      title: 'SEO-Titel',
      type: 'string',
      description: 'Leer lassen → Titel des Dokuments. Empfehlung: max. 60 Zeichen.',
      validation: (rule) =>
        rule.max(70).warning('Länger als 70 Zeichen wird in Google abgeschnitten.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta-Beschreibung',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160).error('Maximal 160 Zeichen.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social-Media-Bild',
      type: 'accessibleImage',
      description: 'Leer lassen → Titel- bzw. Hero-Bild. Ideal 1200 × 630 px.',
    }),
  ],
})
