import {defineArrayMember, defineField, defineType} from 'sanity'
import {dsComponents} from '../lib/dsComponents'

const fromRepo =
  'Wird aus AgentSchmiede/designSystem übernommen (docs/components/*.md) – dort ändern, nicht hier.'

/**
 * Component im Design-System-Bereich. Technische Doku kommt schreibgeschützt aus dem DS-Repo
 * (Sync per GitHub Action), Kurzbeschreibung, Hinweise und Beispiele werden hier gepflegt.
 */
export const dsComponent = defineType({
  name: 'dsComponent',
  title: 'Component',
  type: 'document',
  groups: [
    {name: 'site', title: 'Website', default: true},
    {name: 'examples', title: 'Beispiele'},
    {name: 'repo', title: 'Doku (aus dem Repo)'},
  ],
  fields: [
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      group: 'site',
      options: {list: dsComponents},
      description: 'Seite: /ressourcen/design-system/components/<component>/',
      readOnly: ({document}) => Boolean(document?.docsMarkdown),
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
          return count === 0 ? true : 'Zu dieser Component gibt es schon ein Dokument.'
        }),
    }),
    defineField({
      name: 'summary',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
      group: 'site',
      description:
        'Für die Karte in der Übersicht und unter dem Titel. Ohne Text: Untertitel aus preview.html.',
    }),
    defineField({
      name: 'notes',
      title: 'Hinweise für die Website',
      type: 'blockContent',
      group: 'site',
      description:
        'Nur auf vandenhoeck.de, z. B. Einordnung für Kund:innen. Steht bewusst nicht im Repo.',
    }),
    defineField({
      name: 'examples',
      title: 'Beispiele',
      type: 'array',
      group: 'examples',
      description: 'Eigene Beispiele für menschliche Leser:innen, unter der technischen Doku.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'dsExample',
          title: 'Beispiel',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'kind',
              title: 'Art',
              type: 'string',
              options: {
                list: [
                  {title: 'Bild mit Text', value: 'image'},
                  {title: 'Live-Beispiel (HTML)', value: 'html'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              initialValue: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Bild',
              type: 'accessibleImage',
              hidden: ({parent}) => parent?.kind !== 'image',
            }),
            defineField({
              name: 'html',
              title: 'HTML',
              type: 'text',
              rows: 10,
              hidden: ({parent}) => parent?.kind !== 'html',
              description:
                'Markup mit den Klassen aus dem Design System (z. B. class="form-field"). Wird live und bedienbar angezeigt.',
            }),
            defineField({name: 'text', title: 'Text', type: 'simpleText'}),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'exampleLink',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Text',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                      validation: (rule) =>
                        rule.required().uri({allowRelative: true, scheme: ['https', 'http']}),
                    }),
                  ],
                  preview: {select: {title: 'label', subtitle: 'url'}},
                }),
              ],
            }),
          ],
          preview: {
            select: {title: 'title', kind: 'kind', media: 'image'},
            prepare: ({title, kind, media}) => ({
              title,
              subtitle: kind === 'html' ? 'Live-Beispiel' : 'Bild mit Text',
              media,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'docsMarkdown',
      title: 'Doku (Markdown)',
      type: 'text',
      rows: 20,
      group: 'repo',
      readOnly: true,
      description: fromRepo,
    }),
    defineField({
      name: 'docsMeta',
      title: 'Herkunft',
      type: 'object',
      group: 'repo',
      readOnly: true,
      description: fromRepo,
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'title', title: 'Titel', type: 'string'}),
        defineField({name: 'status', title: 'Status', type: 'string'}),
        defineField({name: 'version', title: 'Version', type: 'string'}),
        defineField({name: 'updated', title: 'Aktualisiert (laut Datei)', type: 'string'}),
        defineField({name: 'path', title: 'Datei', type: 'string'}),
        defineField({name: 'commit', title: 'Commit', type: 'string'}),
        defineField({name: 'syncedAt', title: 'Übertragen am', type: 'datetime'}),
      ],
    }),
  ],
  preview: {
    select: {component: 'component', summary: 'summary', status: 'docsMeta.status'},
    prepare: ({component, summary, status}) => ({
      title: dsComponents.find((c) => c.value === component)?.title ?? component,
      subtitle: [status ? `Doku: ${status}` : 'ohne Repo-Doku', summary]
        .filter(Boolean)
        .join(' · '),
    }),
  },
})
