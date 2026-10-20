import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'o18b50z8',
    dataset: 'production',
  },
  // Auf Sanity gehostet: https://vandenhoeck.sanity.studio
  studioHost: 'vandenhoeck',
  // Typen fürs Frontend: Abfragen in web/lib → web/lib/sanity.types.ts (`npm run typegen`)
  typegen: {
    path: '../web/lib/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../web/lib/sanity.types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    appId: 'jpycbp4j5wgn0z48p7lcjm6r',
    autoUpdates: true,
  },
})
