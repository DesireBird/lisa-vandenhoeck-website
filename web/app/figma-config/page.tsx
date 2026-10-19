import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Figma Config: Level up – ohne Chaos",
  alternates: { canonical: "/figma-config/" },
};

export default function FigmaConfigPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="figma-config-hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="flag flag--neutral" style={{ alignSelf: "flex-start" }}>
              Figma Config
            </span>
            <h1 className="hero__headline">Figma Config: Level up – ohne Chaos.</h1>
            <p className="hero__sub">
              Ohne Strategie wird aus jedem neuen Figma-Feature ein neuer Sonderfall im System.
              Gemeinsam übersetzen wir die Updates in sinnvolle Artefakte für euren Workflow – bevor
              jeder einzeln losgeht und dabei Zeit und Nerven verliert.
            </p>
            <a
              href="https://calendly.com/lisa-vandenhoeck/30min"
              className="btn btn--primary btn--lg btn--body-l"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__label-full">Jetzt Kennenlern-Gespräch buchen</span>
              <span className="btn__label-short">Termin buchen</span>
            </a>
          </div>
          <div className="hero__visual">
            <img
              src="/resources/figma-config-deepdive.jpeg"
              alt="Figma Config Deepdive mit Lisa Vandenhoeck, Design System Architektin"
              className="figma-config-hero__image"
            />
          </div>
        </div>
      </section>
      {/* ── Die Spannung ───────────────────────────────────────── */}
      <section className="section" id="warum-nicht-nebenbei">
        <div className="container">
          <h2 className="section__heading">Warum das nicht nebenbei geht</h2>
          <div className="narrative">
            <div className="narrative__body">
              <p>
                Ständig neue Spielregeln? Da kommt niemand hinterher, vor allem nicht das
                Design-System. Zeit für die Reißleine: Schaltet vom Brandlöschen in den Aktiv-Modus.
                Ihr müsst selbst bestimmen, was ins System darf und was draußen bleibt. Wer diese
                Grenze nicht zieht, versinkt im Chaos.
              </p>
            </div>
          </div>
          <div className="symptom-grid">
            <div className="symptom-card">
              <svg
                className="symptom-card__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 5H19L17 13H11L9 5Z"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7C6 7 6 11 9.5 11"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19 7C22 7 22 11 18.5 11"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 13V17"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M11 17H17"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 21H19"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="23"
                  x2="24"
                  y2="4"
                  style={{ stroke: "var(--color-border-accent1)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Vielversprechend ≠ nützlich</span>
              <p className="symptom-card__body">
                Was auf den ersten Blick glänzt, hält der echten Anwendung selten stand.
              </p>
            </div>
            <div className="symptom-card">
              <svg
                className="symptom-card__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="6"
                  width="10"
                  height="10"
                  rx="2"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <circle
                  cx="14"
                  cy="9"
                  r="1.8"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <rect
                  x="15"
                  y="13"
                  width="10"
                  height="10"
                  rx="2"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <circle
                  cx="15"
                  cy="16"
                  r="1.8"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
              </svg>
              <span className="symptom-card__label">Kein Standard im Team</span>
              <p className="symptom-card__body">
                Jeder nutzt neue Features anders – oder gar nicht.
              </p>
            </div>
            <div className="symptom-card">
              <svg
                className="symptom-card__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="14"
                  cy="16"
                  r="8"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M14 16V11"
                  style={{ stroke: "var(--color-border-accent1)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 16L17 18"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11 4H17"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 4V6"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M21 8L23 6"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Keine Zeit für Trial-and-Error</span>
              <p className="symptom-card__body">
                Ihr habt Projekte, keine Kapazität zum Selbst-Erforschen.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Wie ihr diesen Sprung schafft ─────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="narrative__heading">
            Wie ihr diesen Sprung schafft, anstatt im Feature-Chaos zu versinken?
          </h2>
          <div className="narrative__body">
            <p>
              Genau darum geht es in unserem Deep Dive zu den neuesten Figma Config Updates. Wir
              dröseln auf, welche neuen Features euer Design-System wirklich nach vorne bringen und
              was ihr getrost ignorieren könnt. Ihr geht raus mit:
            </p>
            <div className="process-result">
              <p className="process-result__body">
                Einem Board mit priorisierten Use Cases für euer Team – was ihr sofort übernehmt,
                was ihr testet, was ihr bewusst liegen lasst
              </p>
            </div>
            <div className="process-result">
              <p className="process-result__body">
                Einem Cheat Sheet mit euren eigenen Spielregeln, damit nicht jeder im Team etwas
                anderes macht
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Features ───────────────────────────────────────────── */}
      <section className="section section--paper section--dots">
        <div className="container">
          <h2 className="section__heading">Jedes Feature verdient seinen eigenen Blick</h2>
          <p className="section__lead">
            Jedes Team hat andere Herausforderungen und Ansprüche – jedes Feature braucht deshalb
            eine eigene Sichtweise und einen eigenen Detailgrad.
          </p>
          <div className="feature-grid">
            <div className="symptom-card symptom-card--accent1">
              <span className="symptom-card__label">Agents kuratiert</span>
              <p className="symptom-card__body">
                Agents wirken auf den ersten Blick nach Automatisierung pur. Wir prüfen, welche
                Workflows sie wirklich beschleunigen – und wo sie nur zusätzlichen Aufwand erzeugen.
              </p>
            </div>
            <div className="symptom-card symptom-card--accent2">
              <span className="symptom-card__label">Animations mit Maß</span>
              <p className="symptom-card__body">
                Beeindruckend in der Demo, aber nicht jedes Projekt braucht Bewegung. Wir finden die
                Fälle, in denen es sich lohnt.
              </p>
            </div>
            <div className="symptom-card symptom-card--accent1">
              <span className="symptom-card__label">Shader eingeordnet</span>
              <p className="symptom-card__body">
                Zwischen „sieht cool aus&quot; und „bringt Wert&quot; liegt oft wenig. Wir ziehen
                die Linie für euer Setup.
              </p>
            </div>
            <div className="symptom-card symptom-card--accent2">
              <span className="symptom-card__label">Weave eingeordnet</span>
              <p className="symptom-card__body">
                Generative Workflows klingen nach Zukunft – wir schauen, wo sie euren Prozess
                tatsächlich tragen, statt ihn zu verkomplizieren.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── So läuft's ab ──────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="section__heading">So läuft&apos;s ab</h2>
          <div className="process-list">
            <div className="process-step">
              <span className="process-step__number">1</span>
              <div className="process-step__content">
                <span className="process-step__title">
                  Fokus setzen <span className="process-step__meta">· ca. 15 Min</span>
                </span>
                <p className="process-step__body">
                  Ihr steigt nicht bei null ein: Der Fokus (welche der 4 Bereiche: Agents, Weave,
                  Animations, Shader am dringlichsten sind) steht schon aus dem Kennenlerntermin.
                  Kurzes Alignment: Ziel des Teams für diesen Deep Dive.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">2</span>
              <div className="process-step__content">
                <span className="process-step__title">
                  Case-by-Case-Bewertung <span className="process-step__meta">· ca. 90 Min</span>
                </span>
                <p className="process-step__body">
                  Ihr bringt eigene Fälle aus eurem Alltag mit (keine Freigaben nötig, da nichts an
                  eurem System hängt) oder, falls nichts da ist, bringe ich kuratierte Use Cases
                  mit, die wir gemeinsam durchspielen. Für jedes Feature: Was bringt&apos;s
                  wirklich, was ist nur Spielerei für euren Workflow?
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">3</span>
              <div className="process-step__content">
                <span className="process-step__title">
                  Priorisierung &amp; Systematisierung{" "}
                  <span className="process-step__meta">· ca. 45 Min</span>
                </span>
                <p className="process-step__body">
                  Aus den bewerteten Cases wird eine klare Struktur – was übernehmt ihr sofort, was
                  testet ihr, was lasst ihr bewusst liegen. Hier entsteht das Board.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">4</span>
              <div className="process-step__content">
                <span className="process-step__title">
                  Chaos-Prävention: eure Spielregeln{" "}
                  <span className="process-step__meta">· ca. 30 Min</span>
                </span>
                <p className="process-step__body">
                  Ich bringe Strategien mit, wie das Team verhindert, dass „jeder es ein bisschen
                  anders macht&quot;. Zum Beispiel eine gemeinsame Konvention, wann und wie neue
                  Features genutzt werden. Das ist der Teil, der das eigentliche Kernversprechen
                  einlöst: Klarheit statt Chaos.
                </p>
              </div>
            </div>
          </div>
          <div className="process-result">
            <span className="process-result__label">Ergebnis</span>
            <p className="process-result__body">
              Board mit priorisierten Use Cases + Cheat Sheet mit den Team-Spielregeln zum Umgang
              mit neuen Figma-Features.
            </p>
          </div>
        </div>
      </section>
      {/* ── Dringlichkeit ──────────────────────────────────────── */}
      <section className="section" id="dringlichkeit">
        <div className="container narrative">
          <h2 className="narrative__heading">Warum Abwarten gerade jetzt teuer wird</h2>
          <div className="narrative__body">
            <p>
              Mit jedem Tag, den wir verstreichen lassen, wachsen die Design-Schulden weiter an. Und
              durch die Flut an neuen Figma-Features droht dieses Kartenhaus vollends einzustürzen:{" "}
              <strong>
                Wer jetzt ohne klare Strategie einfach alles einbaut, schafft kein moderneres
                System, sondern beschleunigt nur das Chaos.
              </strong>
            </p>
          </div>
          <a
            href="https://calendly.com/lisa-vandenhoeck/30min"
            className="btn btn--primary btn--lg btn--body-l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn__label-full">Jetzt Kennenlern-Gespräch buchen</span>
            <span className="btn__label-short">Termin buchen</span>
          </a>
        </div>
      </section>
      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="section__heading">Häufige Fragen</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-item__question">
                Ist das eine Demo der neuen Features?{" "}
                <svg
                  className="faq-item__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="faq-item__answer">
                Ne,ist es nicht. Wir bewerten gemeinsam, was für euren Workflow zählt – keine Show,
                sondern Arbeit an eurem Fall.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Brauchen wir Vorbereitung?{" "}
                <svg
                  className="faq-item__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="faq-item__answer">
                Nicht unbebedingt, ihr könnt eigene Fälle mitbringen, müsst aber nicht.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Braucht ihr Zugriff auf unsere Dateien/Freigaben?{" "}
                <svg
                  className="faq-item__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="faq-item__answer">
                Das ist nicht nötig, ich setze nicht in eurem System an und bringe selbst Figma
                Dateien mit.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Für wen ist das gedacht?{" "}
                <svg
                  className="faq-item__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="faq-item__answer">
                Für Design Teams, die merken, dass sie mit dem Tempo der Figma-Updates nicht mehr
                mitkommen.
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section section--paper" id="finale-cta">
        <div className="container">
          <h2 className="section__heading">Bereit für den Deep Dive?</h2>
          <a
            href="https://calendly.com/lisa-vandenhoeck/30min"
            className="btn btn--primary btn--lg btn--body-l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn__label-full">Jetzt Kennenlern-Gespräch buchen</span>
            <span className="btn__label-short">Termin buchen</span>
          </a>
        </div>
      </section>
    </>
  );
}
