import {defineArrayMember, defineField, defineType} from 'sanity'

const link = defineArrayMember({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      description: 'Extern (https://…) oder intern (/bfsg/).',
      validation: (rule) =>
        rule.required().uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']}),
    }),
  ],
})

/** Portable Text für Seiten und Ressourcen. */
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Zwischenüberschrift (H2)', value: 'h2'},
        {title: 'Unterüberschrift (H3)', value: 'h3'},
        {title: 'Zitat', value: 'blockquote'},
      ],
      lists: [
        {title: 'Aufzählung', value: 'bullet'},
        {title: 'Nummeriert', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Fett', value: 'strong'},
          {title: 'Kursiv', value: 'em'},
        ],
        annotations: [link],
      },
    }),
    defineArrayMember({type: 'figure'}),
  ],
})

/** Nur Absätze mit Fett/Kursiv/Link – für kurze Texte in festen Abschnitten (z. B. Dringlichkeit). */
export const simpleText = defineType({
  name: 'simpleText',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Fett', value: 'strong'},
          {title: 'Kursiv', value: 'em'},
        ],
        annotations: [link],
      },
    }),
  ],
})
