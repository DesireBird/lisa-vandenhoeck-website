import {defineField, defineType} from 'sanity'
import {dsComponents} from '../lib/dsComponents'

/** Doku zu einer Component. Beispiele kommen aus dem Code, hier stehen Einsatz und Regeln. */
export const dsComponent = defineType({
  name: 'dsComponent',
  title: 'Component-Doku',
  type: 'document',
  fields: [
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      options: {list: dsComponents},
      description: 'Seite: /ressourcen/design-system/components/<component>/',
      validation: (rule) =>
        rule.required().custom(async (value, context) => {
          if (!value) return true
          const id = context.document?._id.replace(/^drafts\./, '')
          const count = await context
            .getClient({apiVersion: '2025-01-01'})
            .fetch<number>(
              `count(*[_type == "dsComponent" && component == $value && !(_id in [$draft, $published])])`,
              {value, draft: `drafts.${id}`, published: id},
            )
          return count === 0 ? true : 'Zu dieser Component gibt es schon eine Doku.'
        }),
    }),
    defineField({
      name: 'summary',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
      description: 'Erscheint in der Übersicht und unter dem Titel.',
    }),
    defineField({name: 'usage', title: 'Einsatz', type: 'blockContent'}),
    defineField({
      name: 'dos',
      title: 'Do',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'donts',
      title: "Don't",
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notes',
      title: 'Hinweise (Barrierefreiheit, Tokens …)',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {component: 'component', summary: 'summary'},
    prepare: ({component, summary}) => ({
      title: dsComponents.find((c) => c.value === component)?.title ?? component,
      subtitle: summary,
    }),
  },
})
