import type {StructureResolver} from 'sanity/structure'

/** Einstellungen (Singleton), Deepdives, Ressourcen, Seiten. */
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
      S.documentTypeListItem('page').title('Seiten'),
    ])
