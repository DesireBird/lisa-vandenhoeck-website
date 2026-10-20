import {defineField, defineType} from 'sanity'

/** Bild im Fließtext, mit Alt-Text und optionaler Bildunterschrift. */
export const figure = defineType({
  name: 'figure',
  title: 'Bild',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt-Text',
      type: 'string',
      validation: (rule) => rule.required().error('Alt-Text ist Pflicht.'),
    }),
    defineField({name: 'caption', title: 'Bildunterschrift', type: 'string'}),
  ],
  preview: {select: {title: 'caption', subtitle: 'alt', media: 'asset'}},
})
