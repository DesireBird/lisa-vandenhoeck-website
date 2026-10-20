/**
 * Einmalige Übernahme der bisher statischen Inhalte (web/app/<deepdive>/page.tsx, Stand 20.10.2026) nach Sanity.
 * Ausführen: `npx sanity exec seed/initial-content.ts --with-user-token`
 * Überschreibt die Dokumente mit festen IDs (createOrReplace) – nach Änderungen im Studio nicht erneut ausführen.
 */
import {createReadStream} from 'node:fs'
import {basename, join} from 'node:path'
import type {IdentifiedSanityDocumentStub} from '@sanity/client'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const resources = join(process.cwd(), '../web/public/resources')

let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36).padStart(4, '0')}`
const withKeys = <T extends object>(items: T[]) => items.map((item) => ({_key: key(), ...item}))

type Span = string | {strong: string}
/** Absätze aus Text-Stücken; {strong} = fett. */
function blocks(...paragraphs: Span[][]) {
  return paragraphs.map((spans) => ({
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    children: spans.map((span) => ({
      _type: 'span',
      _key: key(),
      text: typeof span === 'string' ? span : span.strong,
      marks: typeof span === 'string' ? [] : ['strong'],
    })),
  }))
}

async function image(file: string, alt: string) {
  const asset = await client.assets.upload('image', createReadStream(join(resources, file)), {
    filename: basename(file),
  })
  return {_type: 'accessibleImage', alt, asset: {_type: 'reference', _ref: asset._id}}
}

async function run() {
  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    heroHeadline:
      'Die Anforderungen an euer Design System verändern sich schneller, als ihr mitkommt?',
    heroSub:
      'Ich mache eine Sache: Designsystem-Klarheit. Ein Deep-Dive, an eurem eigenen System. Damit euer System wieder die Tools beherrscht und nicht umgekehrt.',
    bookingUrl: 'https://calendly.com/lisa-vandenhoeck/30min',
    seoTitle: 'Lisa Vandenhoeck — Designsystem-Klarheit',
  }

  const figmaConfig = {
    _id: 'deepdive-figma-config',
    _type: 'deepdive',
    title: 'Figma Config: Level up – ohne Chaos',
    slug: {_type: 'slug', current: 'figma-config'},
    flag: 'Figma Config',
    flagTone: 'neutral',
    headline: 'Figma Config: Level up – ohne Chaos.',
    heroText:
      'Ohne Strategie wird aus jedem neuen Figma-Feature ein neuer Sonderfall im System. Gemeinsam übersetzen wir die Updates in sinnvolle Artefakte für euren Workflow – bevor jeder einzeln losgeht und dabei Zeit und Nerven verliert.',
    heroImage: await image(
      'figma-config-deepdive.jpeg',
      'Figma Config Deepdive mit Lisa Vandenhoeck, Design System Architektin',
    ),
    problemHeading: 'Warum das nicht nebenbei geht',
    problemText:
      'Ständig neue Spielregeln? Da kommt niemand hinterher, vor allem nicht das Design-System. Zeit für die Reißleine: Schaltet vom Brandlöschen in den Aktiv-Modus. Ihr müsst selbst bestimmen, was ins System darf und was draußen bleibt. Wer diese Grenze nicht zieht, versinkt im Chaos.',
    problemCards: withKeys([
      {
        _type: 'problemCard',
        icon: 'trophy-crossed',
        label: 'Vielversprechend ≠ nützlich',
        body: 'Was auf den ersten Blick glänzt, hält der echten Anwendung selten stand.',
      },
      {
        _type: 'problemCard',
        icon: 'shapes',
        label: 'Kein Standard im Team',
        body: 'Jeder nutzt neue Features anders – oder gar nicht.',
      },
      {
        _type: 'problemCard',
        icon: 'stopwatch',
        label: 'Keine Zeit für Trial-and-Error',
        body: 'Ihr habt Projekte, keine Kapazität zum Selbst-Erforschen.',
      },
    ]),
    approachHeading: 'Wie ihr diesen Sprung schafft, anstatt im Feature-Chaos zu versinken?',
    approachText:
      'Genau darum geht es in unserem Deep Dive zu den neuesten Figma Config Updates. Wir dröseln auf, welche neuen Features euer Design-System wirklich nach vorne bringen und was ihr getrost ignorieren könnt. Ihr geht raus mit:',
    outcomes: [
      'Einem Board mit priorisierten Use Cases für euer Team – was ihr sofort übernehmt, was ihr testet, was ihr bewusst liegen lasst',
      'Einem Cheat Sheet mit euren eigenen Spielregeln, damit nicht jeder im Team etwas anderes macht',
    ],
    featuresHeading: 'Jedes Feature verdient seinen eigenen Blick',
    featuresLead:
      'Jedes Team hat andere Herausforderungen und Ansprüche – jedes Feature braucht deshalb eine eigene Sichtweise und einen eigenen Detailgrad.',
    features: withKeys([
      {
        _type: 'feature',
        label: 'Agents kuratiert',
        body: 'Agents wirken auf den ersten Blick nach Automatisierung pur. Wir prüfen, welche Workflows sie wirklich beschleunigen – und wo sie nur zusätzlichen Aufwand erzeugen.',
      },
      {
        _type: 'feature',
        label: 'Animations mit Maß',
        body: 'Beeindruckend in der Demo, aber nicht jedes Projekt braucht Bewegung. Wir finden die Fälle, in denen es sich lohnt.',
      },
      {
        _type: 'feature',
        label: 'Shader eingeordnet',
        body: 'Zwischen „sieht cool aus" und „bringt Wert" liegt oft wenig. Wir ziehen die Linie für euer Setup.',
      },
      {
        _type: 'feature',
        label: 'Weave eingeordnet',
        body: 'Generative Workflows klingen nach Zukunft – wir schauen, wo sie euren Prozess tatsächlich tragen, statt ihn zu verkomplizieren.',
      },
    ]),
    processHeading: "So läuft's ab",
    steps: withKeys([
      {
        _type: 'step',
        title: 'Fokus setzen',
        meta: '· ca. 15 Min',
        body: 'Ihr steigt nicht bei null ein: Der Fokus (welche der 4 Bereiche: Agents, Weave, Animations, Shader am dringlichsten sind) steht schon aus dem Kennenlerntermin. Kurzes Alignment: Ziel des Teams für diesen Deep Dive.',
      },
      {
        _type: 'step',
        title: 'Case-by-Case-Bewertung',
        meta: '· ca. 90 Min',
        body: "Ihr bringt eigene Fälle aus eurem Alltag mit (keine Freigaben nötig, da nichts an eurem System hängt) oder, falls nichts da ist, bringe ich kuratierte Use Cases mit, die wir gemeinsam durchspielen. Für jedes Feature: Was bringt's wirklich, was ist nur Spielerei für euren Workflow?",
      },
      {
        _type: 'step',
        title: 'Priorisierung & Systematisierung',
        meta: '· ca. 45 Min',
        body: 'Aus den bewerteten Cases wird eine klare Struktur – was übernehmt ihr sofort, was testet ihr, was lasst ihr bewusst liegen. Hier entsteht das Board.',
      },
      {
        _type: 'step',
        title: 'Chaos-Prävention: eure Spielregeln',
        meta: '· ca. 30 Min',
        body: 'Ich bringe Strategien mit, wie das Team verhindert, dass „jeder es ein bisschen anders macht". Zum Beispiel eine gemeinsame Konvention, wann und wie neue Features genutzt werden. Das ist der Teil, der das eigentliche Kernversprechen einlöst: Klarheit statt Chaos.',
      },
    ]),
    processResult:
      'Board mit priorisierten Use Cases + Cheat Sheet mit den Team-Spielregeln zum Umgang mit neuen Figma-Features.',
    urgencyHeading: 'Warum Abwarten gerade jetzt teuer wird',
    urgencyText: blocks([
      'Mit jedem Tag, den wir verstreichen lassen, wachsen die Design-Schulden weiter an. Und durch die Flut an neuen Figma-Features droht dieses Kartenhaus vollends einzustürzen: ',
      {
        strong:
          'Wer jetzt ohne klare Strategie einfach alles einbaut, schafft kein moderneres System, sondern beschleunigt nur das Chaos.',
      },
    ]),
    faqHeading: 'Häufige Fragen',
    faqs: withKeys([
      {
        _type: 'faq',
        question: 'Ist das eine Demo der neuen Features?',
        answer:
          'Ne,ist es nicht. Wir bewerten gemeinsam, was für euren Workflow zählt – keine Show, sondern Arbeit an eurem Fall.',
      },
      {
        _type: 'faq',
        question: 'Brauchen wir Vorbereitung?',
        answer: 'Nicht unbebedingt, ihr könnt eigene Fälle mitbringen, müsst aber nicht.',
      },
      {
        _type: 'faq',
        question: 'Braucht ihr Zugriff auf unsere Dateien/Freigaben?',
        answer:
          'Das ist nicht nötig, ich setze nicht in eurem System an und bringe selbst Figma Dateien mit.',
      },
      {
        _type: 'faq',
        question: 'Für wen ist das gedacht?',
        answer:
          'Für Design Teams, die merken, dass sie mit dem Tempo der Figma-Updates nicht mehr mitkommen.',
      },
    ]),
    ctaHeading: 'Bereit für den Deep Dive?',
  }

  const kiReady = {
    _id: 'deepdive-ki-ready',
    _type: 'deepdive',
    title: 'Design System, AI-Ready',
    slug: {_type: 'slug', current: 'ki-ready'},
    flag: 'Tokens',
    flagTone: 'accent2',
    headline: 'Design System, AI-Ready',
    heroText:
      'KI-Tools ignorieren eure Design Guidelines und erfinden eigene Werte? Im Deep Dive sagen wir Inkonsistenz und Chaos durch KI den Kampf an.',
    heroImage: await image(
      'cover-ds-ai-ready.jpeg',
      'Design System AI-Ready Deepdive mit Lisa Vandenhoeck, Design System Architektin',
    ),
    problemHeading: 'Warum das nicht nebenbei geht',
    problemText:
      'Auch Figma MCP ist nicht allmächtig. Ohne klare Prinzipien neigt KI schnell dazu, neue Werte zu erfinden oder aus eurem System auszubrechen – statt das zu nutzen, was schon da ist. Was für euer Team selbsterklärend ist, bleibt für ein KI-Tool oft uneindeutig.',
    problemCards: withKeys([
      {
        _type: 'problemCard',
        icon: 'dot-grid',
        label: 'KI rät, wenn ihr nicht führt',
        body: 'Ohne klare Prinzipien erfindet die KI neue Werte, statt bestehende zu nutzen.',
      },
      {
        _type: 'problemCard',
        icon: 'shapes',
        label: 'Kein Standard für Maschinen',
        body: 'Was für Menschen selbsterklärend ist, bleibt für KI-Tools uneindeutig.',
      },
      {
        _type: 'problemCard',
        icon: 'document',
        label: 'Doku für Menschen ≠ Doku für KI',
        body: 'Eine Anleitung, die euer Team versteht, ist für ein KI-Tool schnell zu viel.',
      },
    ]),
    approachHeading: 'Wie ihr diesen Sprung schafft, anstatt KI zum Chaos-Verstärker zu machen',
    approachText:
      'Genau darum geht es in unserem Deep Dive. Wir schauen uns eure Tokens, Variablen, Doku und Tools an und identifizieren, was es braucht, damit KI euer Design System konsistent versteht und anwendet, statt zu raten.',
    outcomesImage: await image(
      'Playbook_DS_AI_Ready.png',
      'Playbook Cover: Design System, AI-Ready',
    ),
    outcomesLabel: 'Ihr geht raus mit:',
    outcomes: [
      'Einem Board (Figjam), an dem wir aktiv arbeiten, mit den nächsten Schritten für euer Team, um danach eigenständig weiterzumachen',
      'Einem Playbook, das die Inhalte zum Thema festhält',
    ],
    processHeading: "So läuft's ab",
    steps: withKeys([
      {
        _type: 'step',
        title: 'Fokus setzen',
        meta: '(aus dem Kennenlerntermin) · ca. 15 Min',
        body: 'Im Briefing-Call haben wir Stand und Herausforderungen erörtert: Wie sind eure Tokens aufgebaut, wie ist die Doku, welche Tools nutzt ihr. Der Fokus für den Deep Dive steht damit schon – Tiefe und Themen richten sich nach eurer Problematik.',
      },
      {
        _type: 'step',
        title: 'Architektur-Check',
        body: 'Wir gehen gemeinsam durch, wie eure Tokens, Variablen und Components aufgebaut sind und wo KI-Tools aktuell noch raten müssen statt zu wissen.',
      },
      {
        _type: 'step',
        title: 'Der Plan',
        body: 'Aus dem Check wird ein Plan, wie KI-Tools zuverlässig interpretieren können.',
      },
    ]),
    processResult:
      'Board mit priorisierten nächsten Schritten + Playbook zur konsistenten KI-Anwendung eures Design Systems.',
    urgencyHeading: 'Warum Abwarten gerade jetzt teuer wird',
    urgencyText: blocks([
      'Skalieren mit KI geht in beide Richtungen: Ordnung oder Chaos. Wenn euer Design System nicht zusätzlich für KI mitgedacht wird, verschenkt ihr nicht nur Potenzial – ',
      {
        strong:
          'ihr macht KI zum Brandbeschleuniger für genau das Chaos, das ihr eigentlich vermeiden wolltet.',
      },
    ]),
    faqHeading: 'Häufige Fragen',
    faqs: withKeys([
      {
        _type: 'faq',
        question: 'Ist das eine Demo von KI-Tools?',
        answer:
          'Nein. Wir arbeiten an eurem Design System – keine Show, sondern Arbeit an eurem Fall.',
      },
      {
        _type: 'faq',
        question: 'Brauchen wir Vorbereitung?',
        answer:
          'Es hilft, wenn ihr eure Tokens, Doku und genutzten Tools mitbringt (zum Beispiel über Figma) – darauf gehen wir im Deep Dive ein.',
      },
      {
        _type: 'faq',
        question: 'Braucht ihr Zugriff auf unsere Dateien?',
        answer:
          'Ja, hier schauen wir uns euer bestehendes System an, deshalb ist Einblick in eure Tokens und Doku nötig.',
      },
      {
        _type: 'faq',
        question: 'Für wen ist das gedacht?',
        answer:
          'Für Design Teams, die KI-Tools produktiv nutzen wollen und merken, dass ihr Design System dafür noch nicht bereit ist.',
      },
      {
        _type: 'faq',
        question: 'Ist der Deep Dive vor Ort oder remote?',
        answer: 'Ja, ich biete den Deep Dive ausschließlich remote an.',
      },
      {
        _type: 'faq',
        question: 'Welche Tools nutzt du für den Deep Dive?',
        answer: 'Ich werde Figjam und Figma nutzen, ihr bekommt dazu von mir einen Einladungslink.',
      },
    ]),
    ctaHeading: 'Bereit für den Deep Dive?',
  }

  const bfsg = {
    _id: 'deepdive-bfsg',
    _type: 'deepdive',
    title: 'BFSG, im Design System verankert',
    slug: {_type: 'slug', current: 'bfsg'},
    flag: 'BFSG',
    flagTone: 'accent1',
    headline: 'BFSG, im Design System verankert',
    heroText:
      'Kontrastprobleme, Skalierungsfehler und unklare Screenreader-Texte türmen sich in euren Anwendungen? Euer Design System ist der größte Hebel das zu lösen.',
    heroImage: await image(
      'cover-bfsg-deepdive.jpeg',
      'BFSG Deepdive mit Lisa Vandenhoeck, Design System Architektin',
    ),
    problemHeading: 'Warum das BFSG Thema systematisch gelöst werden muss',
    problemText:
      'Wenn Barrierefreiheit nicht im Design System verankert ist, entstehen dieselben Fehler immer wieder aufs Neue: zu geringe Kontraste, Text, der beim Skalieren bricht, Bilder ohne durchdachte Alt-Texte, Unklarheit darüber, was ein Screenreader eigentlich vorliest. Das BFSG macht daraus kein theoretisches, sondern ein rechtliches Risiko.',
    problemCards: withKeys([
      {
        _type: 'problemCard',
        icon: 'contrast',
        label: 'Kontraste, die durchrutschen',
        body: 'Farbkombinationen, die im Design gut aussehen, aber WCAG-Werte reißen.',
      },
      {
        _type: 'problemCard',
        icon: 'text-size',
        label: 'Schrift, die nicht mitwächst',
        body: 'Skalierungsprobleme, sobald Nutzer die Textgröße anpassen.',
      },
      {
        _type: 'problemCard',
        icon: 'image-audio',
        label: 'Bilder und Screenreader ohne Konzept',
        body: 'Unklarheit, was wirklich vorgelesen wird und was Bilder eigentlich transportieren sollen.',
      },
    ]),
    legalNote:
      'Das BFSG ist seit dem 28. Juni 2025 in Kraft und verpflichtet Unternehmen, die Produkte oder Dienstleistungen für Verbraucher:innen anbieten, zu digitaler Barrierefreiheit nach WCAG 2.1 AA. Bei Verstößen drohen Bußgelder und Abmahnungen. (Keine Rechtsberatung – für eure konkrete Pflicht empfiehlt sich juristische Beratung.)',
    approachHeading: 'Wie ihr das löst, statt Fehler immer wieder neu zu machen',
    approachText:
      'Genau darum geht es im Deep Dive. Wir schauen uns typische Use Cases an, die in der Praxis zu Problemen führen, und entwickeln gemeinsam Prozesse, wie Barrierefreiheit direkt in eurem Design System verankert wird – statt sie in jedem Projekt neu zu lösen.',
    outcomesImage: await image(
      'PlaybookBFSG.png',
      'Playbook Cover: BFSG im Design System verankert',
    ),
    outcomesLabel: 'Ihr geht raus mit:',
    outcomes: [
      'Einem Board, auf dem wir aktiv an euren Use Cases arbeiten',
      'Einem Playbook, wie BFSG dauerhaft in eurem Design System verankert bleibt',
    ],
    note: {
      title: 'Was der Deep Dive nicht ist',
      body: 'Kein BFSG-Audit, keine Rechtsberatung, keine Zusicherung von BFSG-Konformität. Der Deep Dive sorgt dafür, dass die größten Risiken gar nicht erst entstehen – das Design System ist dafür der Hebel, nicht die Garantie.',
    },
    processHeading: "So läuft's ab",
    steps: withKeys([
      {
        _type: 'step',
        title: 'Status Quo',
        meta: '(aus dem Kennenlerntermin)',
        body: 'Im Briefing Call besprechen wir euren Stand und eure Herausforderungen. Ihr bringt Beispiele mit, anhand derer wir uns anschauen, wie typische Probleme gelöst werden können.',
      },
      {
        _type: 'step',
        title: 'Use Cases durchgehen',
        body: 'Wir gehen typische Use Cases durch, die in der Praxis immer wieder zu Barrierefreiheits-Problemen führen.',
      },
      {
        _type: 'step',
        title: 'Offene Runde',
        body: 'Wo seid ihr euch unsicher, wo gibt es offene Fragen zu BFSG? Wir sammeln das gemeinsam und ordnen ein.',
      },
      {
        _type: 'step',
        title: 'Prozesse verankern',
        body: 'Wir entwickeln, wie Barrierefreiheit direkt in eurem Design System verankert werden kann, statt nur in einzelnen Projekten mitgedacht zu werden.',
      },
    ]),
    processResult: 'Prozesse, mit denen euer Design System Barrierefreiheit von sich aus mitträgt.',
    urgencyHeading: 'Warum euer Design System der größte Hebel ist',
    urgencyText: blocks([
      'Kaum eine Stelle hat so viel Einfluss auf BFSG-Konformität wie euer Design System – im Guten wie im Schlechten. Es kann der größte Verursacher von Barrierefreiheits-Unstimmigkeiten sein, weil sich Fehler in jedem Projekt wiederholen. ',
      {strong: 'Oder es wird der größte Hebel, der diese Fehler von vornherein verhindert.'},
    ]),
    faqHeading: 'Häufige Fragen',
    faqs: withKeys([
      {
        _type: 'faq',
        question: 'Ersetzt der Deep Dive ein BFSG-Audit?',
        answer:
          'Nein. Der Deep Dive ist kein Audit und keine Rechtsberatung, ich gewährleiste keine BFSG-Konformität. Ziel ist, dass die größten Risiken erst gar nicht entstehen und euer Design System als Hebel für Barrierefreiheit funktioniert. Wenn gewünscht, kann ich vorher aber gerne ein Audit durchführen. Sprecht mich dazu gerne an.',
      },
      {
        _type: 'faq',
        question: 'Brauchen wir Vorbereitung?',
        answer:
          'Es hilft, wenn ihr Beispiele aus eurem Design System mitbringt, anhand derer wir typische Probleme durchgehen können.',
      },
      {
        _type: 'faq',
        question: 'Brauchst du Zugriff auf unsere Dateien?',
        answer:
          'Nicht unbedingt, es wäre aber hilfreich, wenn ich in Figma View-Rechte bekomme. Screen-Sharing ist aber auch möglich.',
      },
      {
        _type: 'faq',
        question: 'Für wen ist das gedacht?',
        answer:
          'Für Design Teams, die BFSG angehen müssen und ihr Design System als Hebel dafür nutzen wollen, statt Fehler in jedem Projekt neu zu lösen.',
      },
      {
        _type: 'faq',
        question: 'Ist der Deep Dive vor Ort oder remote?',
        answer: 'Ich biete den Deep Dive ausschließlich remote an.',
      },
      {
        _type: 'faq',
        question: 'Welche Tools nutzt du für den Deep Dive?',
        answer: 'Ich nutze FigJam und Figma, ihr bekommt dazu einen Einladungslink von mir.',
      },
    ]),
    ctaHeading: 'Bereit für den Deep Dive?',
  }

  const tx = client.transaction()
  const docs: IdentifiedSanityDocumentStub[] = [siteSettings, figmaConfig, kiReady, bfsg]
  for (const doc of docs) tx.createOrReplace(doc)
  const result = await tx.commit()
  console.log(`${result.results.length} Dokumente geschrieben`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
