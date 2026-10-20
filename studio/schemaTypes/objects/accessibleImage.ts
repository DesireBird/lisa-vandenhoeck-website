import {defineField, defineType} from 'sanity'

/** Bild mit Pflicht-Alt-Text. Basis für Titelbilder und OG-Bilder. */
export const accessibleImage = defineType({
  name: 'accessibleImage',
  title: 'Bild',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt-Text',
      type: 'string',
      description: 'Beschreibt das Bild für Screenreader und Suchmaschinen. Pflicht.',
      validation: (rule) =>
        rule.custom((alt, context) => {
          const parent = context.parent as {asset?: unknown} | undefined
          if (parent?.asset && !alt?.trim()) return 'Alt-Text ist Pflicht.'
          return true
        }),
    }),
  ],
})
