import {defineArrayMember, defineField, defineType} from 'sanity'
import {isUniqueAcrossTypes, reservedSlugs, slugify} from '../lib/slug'

/** Icons der Problem-Karten. Die SVGs liegen im Code (web/components/DeepdiveIcon.tsx). */
export const deepdiveIcons = [
  {title: 'Pokal, durchgestrichen', value: 'trophy-crossed'},
  {title: 'Zwei Formen', value: 'shapes'},
  {title: 'Stoppuhr', value: 'stopwatch'},
  {title: 'Punktraster', value: 'dot-grid'},
  {title: 'Dokument', value: 'document'},
  {title: 'Kontrast', value: 'contrast'},
  {title: 'Schriftgröße', value: 'text-size'},
  {title: 'Bild & Ton', value: 'image-audio'},
]

const paragraphsHint = 'Leerzeile = neuer Absatz.'

/**
 * Deepdive-Landingpage (Figma Config, KI-ready, BFSG …) unter /<slug>/.
 * Feste Abschnitte in fester Reihenfolge, damit das Layout gleich bleibt.
 */
export const deepdive = defineType({
  name: 'deepdive',
  title: 'Deepdive',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'problem', title: 'Warum'},
    {name: 'approach', title: 'Lösung'},
    {name: 'features', title: 'Features'},
    {name: 'process', title: 'Ablauf'},
    {name: 'urgency', title: 'Dringlichkeit'},
    {name: 'faq', title: 'FAQ & Abschluss'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // ── Hero
    defineField({
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      group: 'hero',
      description: 'Browser-Tab und Suchergebnis: „<Seitentitel> — Lisa Vandenhoeck“.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'hero',
      description: 'URL: /<slug>/. Bestehende Slugs nicht ändern (Links, Google).',
      options: {source: 'title', slugify, isUnique: isUniqueAcrossTypes},
      validation: (rule) =>
        rule
          .required()
          .custom((slug) =>
            slug?.current && reservedSlugs.includes(slug.current)
              ? 'Dieser Slug ist reserviert.'
              : true,
          ),
    }),
    defineField({
      name: 'flag',
      title: 'Label über der Überschrift',
      type: 'string',
      group: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'flagTone',
      title: 'Label-Farbe',
      type: 'string',
      group: 'hero',
      options: {
        list: [
          {title: 'Neutral', value: 'neutral'},
          {title: 'Coral (accent1)', value: 'accent1'},
          {title: 'Blau (accent2)', value: 'accent2'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'neutral',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Überschrift (H1)',
      type: 'string',
      group: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroText',
      title: 'Untertitel',
      type: 'text',
      rows: 3,
      group: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero-Bild',
      type: 'accessibleImage',
      group: 'hero',
      description: 'Quadratischer Ausschnitt (1:1). Hotspot auf das Motiv setzen.',
      validation: (rule) => rule.required(),
    }),

    // ── Warum
    defineField({
      name: 'problemHeading',
      title: 'Überschrift',
      type: 'string',
      group: 'problem',
      initialValue: 'Warum das nicht nebenbei geht',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'problemText',
      title: 'Text',
      type: 'text',
      rows: 5,
      group: 'problem',
      description: paragraphsHint,
    }),
    defineField({
      name: 'problemCards',
      title: 'Karten',
      type: 'array',
      group: 'problem',
      validation: (rule) => rule.max(3),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'problemCard',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {list: deepdiveIcons},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'body', title: 'Text', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'label', subtitle: 'body'}},
        }),
      ],
    }),
    defineField({
      name: 'legalNote',
      title: 'Hinweis unter den Karten',
      type: 'text',
      rows: 3,
      group: 'problem',
      description: 'Optional, kleine Schrift (z. B. rechtlicher Hinweis).',
    }),

    // ── Lösung
    defineField({
      name: 'approachHeading',
      title: 'Überschrift',
      type: 'string',
      group: 'approach',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'approachText',
      title: 'Text',
      type: 'text',
      rows: 5,
      group: 'approach',
      description: paragraphsHint,
    }),
    defineField({
      name: 'outcomesImage',
      title: 'Bild zu den Ergebnissen',
      type: 'accessibleImage',
      group: 'approach',
      description:
        'Optional, z. B. Playbook-Cover. Mit Bild: Kasten mit Bild, Label und Aufzählung. Ohne Bild: jedes Ergebnis als eigener Kasten.',
    }),
    defineField({
      name: 'outcomesLabel',
      title: 'Label über der Aufzählung',
      type: 'string',
      group: 'approach',
      initialValue: 'Ihr geht raus mit:',
      hidden: ({document}) => !document?.outcomesImage,
    }),
    defineField({
      name: 'outcomes',
      title: 'Ergebnisse',
      type: 'array',
      group: 'approach',
      of: [defineArrayMember({type: 'text', rows: 2})],
    }),
    defineField({
      name: 'note',
      title: 'Abgrenzung',
      type: 'object',
      group: 'approach',
      description: 'Optionaler Kasten, z. B. „Was der Deep Dive nicht ist“.',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'title', title: 'Titel', type: 'string'}),
        defineField({name: 'body', title: 'Text', type: 'text', rows: 3}),
      ],
    }),

    // ── Features
    defineField({
      name: 'featuresHeading',
      title: 'Überschrift',
      type: 'string',
      group: 'features',
      description: 'Abschnitt erscheint nur, wenn es Features gibt.',
    }),
    defineField({
      name: 'featuresLead',
      title: 'Einleitung',
      type: 'text',
      rows: 3,
      group: 'features',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'features',
      description: 'Karten wechseln automatisch zwischen Coral und Blau.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({
              name: 'label',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'body', title: 'Text', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'label', subtitle: 'body'}},
        }),
      ],
    }),

    // ── Ablauf
    defineField({
      name: 'processHeading',
      title: 'Überschrift',
      type: 'string',
      group: 'process',
      initialValue: "So läuft's ab",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'steps',
      title: 'Schritte',
      type: 'array',
      group: 'process',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'meta',
              title: 'Zusatz',
              type: 'string',
              description: 'Grau hinter dem Titel, z. B. „· ca. 15 Min“.',
            }),
            defineField({name: 'body', title: 'Text', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'title', subtitle: 'meta'}},
        }),
      ],
    }),
    defineField({
      name: 'processResult',
      title: 'Ergebnis',
      type: 'text',
      rows: 3,
      group: 'process',
    }),

    // ── Dringlichkeit
    defineField({
      name: 'urgencyHeading',
      title: 'Überschrift',
      type: 'string',
      group: 'urgency',
      initialValue: 'Warum Abwarten gerade jetzt teuer wird',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'urgencyText',
      title: 'Text',
      type: 'simpleText',
      group: 'urgency',
      description: 'Fett gesetzter Text wird hervorgehoben.',
    }),

    // ── FAQ & Abschluss
    defineField({
      name: 'faqHeading',
      title: 'FAQ: Überschrift',
      type: 'string',
      group: 'faq',
      initialValue: 'Häufige Fragen',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'Fragen',
      type: 'array',
      group: 'faq',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          fields: [
            defineField({
              name: 'question',
              title: 'Frage',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Antwort',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        }),
      ],
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Abschluss: Überschrift',
      type: 'string',
      group: 'faq',
      initialValue: 'Bereit für den Deep Dive?',
      validation: (rule) => rule.required(),
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {select: {title: 'title', subtitle: 'slug.current', media: 'heroImage'}},
})
