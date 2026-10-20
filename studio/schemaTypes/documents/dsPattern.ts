import {defineArrayMember, defineField, defineType} from 'sanity'
import {dsComponents} from '../lib/dsComponents'
import {slugify} from '../lib/slug'

/** Pattern (z. B. Formulare, Validierung, Filter) unter /ressourcen/design-system/patterns/<slug>/. */
export const dsPattern = defineType({
  name: 'dsPattern',
  title: 'Pattern',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', slugify},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl steht weiter oben.',
      initialValue: 10,
    }),
    defineField({
      name: 'summary',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({name: 'body', title: 'Text', type: 'blockContent'}),
    defineField({
      name: 'components',
      title: 'Verwendete Components',
      type: 'array',
      of: [defineArrayMember({type: 'string', options: {list: dsComponents}})],
      options: {layout: 'grid'},
    }),
  ],
  orderings: [{title: 'Reihenfolge', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'summary'}},
})
