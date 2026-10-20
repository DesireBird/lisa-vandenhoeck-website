import {defineConfig, type DocumentActionComponent, type Template} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

// Seiteneinstellungen gibt es genau einmal: nicht neu anlegen, nicht löschen oder duplizieren.
const SINGLETONS = new Set(['siteSettings', 'designSystem'])
const SINGLETON_ACTIONS = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'vandenhoeck.de',
  projectId: '4y4m7dt1',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (templates: Template[]) =>
      templates.filter(({schemaType}) => !SINGLETONS.has(schemaType)),
  },
  document: {
    actions: (input: DocumentActionComponent[], context: {schemaType: string}) =>
      SINGLETONS.has(context.schemaType)
        ? input.filter(({action}) => action && SINGLETON_ACTIONS.has(action))
        : input,
  },
})
