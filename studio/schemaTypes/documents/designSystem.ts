import {defineField, defineType} from 'sanity'

/**
 * Design-System-Bereich (Singleton, feste ID „designSystem“): Karte auf /ressourcen/ und
 * Texte für /ressourcen/design-system/. Tokens und Component-Beispiele kommen automatisch
 * aus dem Design-System-Repo (brand/design-system).
 */
export const designSystem = defineType({
  name: 'designSystem',
  title: 'Design System',
  type: 'document',
  groups: [
    {name: 'card', title: 'Karte', default: true},
    {name: 'intro', title: 'Übersicht'},
    {name: 'sections', title: 'Bereiche'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      group: 'card',
      initialValue: 'Design System',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
      rows: 3,
      group: 'card',
      description: 'Kurztext auf der Karte unter /ressourcen/, auch Meta-Beschreibung.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({name: 'cover', title: 'Cover', type: 'accessibleImage', group: 'card'}),
    defineField({name: 'intro', title: 'Einleitung', type: 'blockContent', group: 'intro'}),
    defineField({
      name: 'foundationIntro',
      title: 'Foundation: Einleitung',
      type: 'text',
      rows: 3,
      group: 'sections',
    }),
    defineField({
      name: 'componentsIntro',
      title: 'Components: Einleitung',
      type: 'text',
      rows: 3,
      group: 'sections',
    }),
    defineField({
      name: 'patternsIntro',
      title: 'Patterns: Einleitung',
      type: 'text',
      rows: 3,
      group: 'sections',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {prepare: () => ({title: 'Design System'})},
})
