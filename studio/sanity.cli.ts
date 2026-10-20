import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4y4m7dt1',
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
    appId: 'cor8l2iasbbw0bbyb5ao2r4t',
    autoUpdates: true,
  },
})
