import type {StructureResolver} from 'sanity/structure'

/** Einstellungen (Singleton), Deepdives, Ressourcen, Design System, Seiten. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalte')
    .items([
      S.listItem()
        .title('Seiteneinstellungen')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Seiteneinstellungen'),
        ),
      S.divider(),
      S.documentTypeListItem('deepdive').title('Deepdives'),
      S.documentTypeListItem('resource').title('Ressourcen'),
      S.divider(),
      S.listItem()
        .title('Design System')
        .id('designSystem')
        .child(
          S.document().schemaType('designSystem').documentId('designSystem').title('Design System'),
        ),
      S.documentTypeListItem('dsComponent').title('Component-Doku'),
      S.documentTypeListItem('dsPattern').title('Patterns'),
      S.divider(),
      S.documentTypeListItem('page').title('Seiten'),
    ])
