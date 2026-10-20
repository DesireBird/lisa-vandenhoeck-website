import {defineField, defineType} from 'sanity'

/**
 * Seiteneinstellungen (Singleton, feste ID „siteSettings“).
 * Startseiten-Hero, Buchungslink und Standard-SEO. Ersatzwerte in web/lib/settings.ts.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Seiteneinstellungen',
  type: 'document',
  groups: [
    {name: 'home', title: 'Startseite', default: true},
    {name: 'booking', title: 'Buchung'},
    {name: 'seo', title: 'Standard-SEO'},
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero: Überschrift',
      type: 'string',
      group: 'home',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'heroSub', title: 'Hero: Untertitel', type: 'text', rows: 3, group: 'home'}),
    defineField({
      name: 'bookingUrl',
      title: 'Buchungslink (Calendly)',
      type: 'url',
      group: 'booking',
      description: 'Ziel aller „Termin buchen“-Buttons auf der Seite.',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Standard-Titel',
      type: 'string',
      group: 'seo',
      description: 'Titel der Startseite. Unterseiten: „<Seitentitel> — Lisa Vandenhoeck“.',
      validation: (rule) => rule.max(70).warning('Länger als 70 Zeichen wird abgeschnitten.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Standard-Beschreibung',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (rule) => rule.max(160).error('Maximal 160 Zeichen.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Standard-Social-Media-Bild',
      type: 'accessibleImage',
      group: 'seo',
      description: 'Wird genutzt, wenn eine Seite kein eigenes Bild hat. Ideal 1200 × 630 px.',
    }),
  ],
  preview: {prepare: () => ({title: 'Seiteneinstellungen'})},
})
