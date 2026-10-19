import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BFSG, im Design System verankert",
  alternates: { canonical: "/bfsg/" },
};

export default function BfsgPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="bfsg-hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="flag flag--accent1" style={{ alignSelf: "flex-start" }}>
              BFSG
            </span>
            <h1 className="hero__headline">BFSG, im Design System verankert</h1>
            <p className="hero__sub">
              Kontrastprobleme, Skalierungsfehler und unklare Screenreader-Texte türmen sich in
              euren Anwendungen? Euer Design System ist der größte Hebel das zu lösen.
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
              src="/resources/cover-bfsg-deepdive.jpeg"
              alt="BFSG Deepdive mit Lisa Vandenhoeck, Design System Architektin"
              className="bfsg-hero__image"
            />
          </div>
        </div>
      </section>
      {/* ── Die Spannung ───────────────────────────────────────── */}
      <section className="section" id="warum-nicht-nebenbei">
        <div className="container">
          <h2 className="section__heading">Warum das BFSG Thema systematisch gelöst werden muss</h2>
          <div className="narrative">
            <div className="narrative__body">
              <p>
                Wenn Barrierefreiheit nicht im Design System verankert ist, entstehen dieselben
                Fehler immer wieder aufs Neue: zu geringe Kontraste, Text, der beim Skalieren
                bricht, Bilder ohne durchdachte Alt-Texte, Unklarheit darüber, was ein Screenreader
                eigentlich vorliest. Das BFSG macht daraus kein theoretisches, sondern ein
                rechtliches Risiko.
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
                <circle
                  cx="14"
                  cy="14"
                  r="9"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M14 5A9 9 0 0 1 14 23"
                  style={{ stroke: "var(--color-accent1-500)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M9 9L19 19M19 9L9 19"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Kontraste, die durchrutschen</span>
              <p className="symptom-card__body">
                Farbkombinationen, die im Design gut aussehen, aber WCAG-Werte reißen.
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
                <path
                  d="M6 20L10 8H12L16 20"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 16H14.5"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M18 11L22 20"
                  style={{ stroke: "var(--color-accent1-500)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 20L23 20"
                  style={{ stroke: "var(--color-accent1-500)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Schrift, die nicht mitwächst</span>
              <p className="symptom-card__body">
                Skalierungsprobleme, sobald Nutzer die Textgröße anpassen.
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
                  width="14"
                  height="11"
                  rx="2"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <circle
                  cx="8.5"
                  cy="10.5"
                  r="1.3"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <path
                  d="M4 15L9 11L13 14L18 10"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 8C23 9.5 23 15.5 21 17"
                  style={{ stroke: "var(--color-accent1-500)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M23.5 6C26.5 8.5 26.5 16.5 23.5 19"
                  style={{ stroke: "var(--color-accent1-500)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Bilder und Screenreader ohne Konzept</span>
              <p className="symptom-card__body">
                Unklarheit, was wirklich vorgelesen wird und was Bilder eigentlich transportieren
                sollen.
              </p>
            </div>
          </div>
          <p className="legal-note">
            Das BFSG ist seit dem 28. Juni 2025 in Kraft und verpflichtet Unternehmen, die Produkte
            oder Dienstleistungen für Verbraucher:innen anbieten, zu digitaler Barrierefreiheit nach
            WCAG 2.1 AA. Bei Verstößen drohen Bußgelder und Abmahnungen. (Keine Rechtsberatung – für
            eure konkrete Pflicht empfiehlt sich juristische Beratung.)
          </p>
        </div>
      </section>
      {/* ── Wie ihr das löst ─────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="narrative__heading">
            Wie ihr das löst, statt Fehler immer wieder neu zu machen
          </h2>
          <div className="narrative__body">
            <p>
              Genau darum geht es im Deep Dive. Wir schauen uns typische Use Cases an, die in der
              Praxis zu Problemen führen, und entwickeln gemeinsam Prozesse, wie Barrierefreiheit
              direkt in eurem Design System verankert wird – statt sie in jedem Projekt neu zu
              lösen.
            </p>
            <div className="process-result process-result--media">
              <img
                src="/resources/PlaybookBFSG.png"
                alt="Playbook Cover: BFSG im Design System verankert"
                className="process-result__image"
              />
              <div className="process-result__content">
                <span className="process-result__label">Ihr geht raus mit:</span>
                <ul className="bullet-list">
                  <li>Einem Board, auf dem wir aktiv an euren Use Cases arbeiten</li>
                  <li>
                    Einem Playbook, wie BFSG dauerhaft in eurem Design System verankert bleibt
                  </li>
                </ul>
              </div>
            </div>
            <div className="card card--note">
              <span className="process-step__title">Was der Deep Dive nicht ist</span>
              <p className="process-step__body">
                Kein BFSG-Audit, keine Rechtsberatung, keine Zusicherung von BFSG-Konformität. Der
                Deep Dive sorgt dafür, dass die größten Risiken gar nicht erst entstehen – das
                Design System ist dafür der Hebel, nicht die Garantie.
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
                  Status Quo <span className="process-step__meta">(aus dem Kennenlerntermin)</span>
                </span>
                <p className="process-step__body">
                  Im Briefing Call besprechen wir euren Stand und eure Herausforderungen. Ihr bringt
                  Beispiele mit, anhand derer wir uns anschauen, wie typische Probleme gelöst werden
                  können.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">2</span>
              <div className="process-step__content">
                <span className="process-step__title">Use Cases durchgehen</span>
                <p className="process-step__body">
                  Wir gehen typische Use Cases durch, die in der Praxis immer wieder zu
                  Barrierefreiheits-Problemen führen.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">3</span>
              <div className="process-step__content">
                <span className="process-step__title">Offene Runde</span>
                <p className="process-step__body">
                  Wo seid ihr euch unsicher, wo gibt es offene Fragen zu BFSG? Wir sammeln das
                  gemeinsam und ordnen ein.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">4</span>
              <div className="process-step__content">
                <span className="process-step__title">Prozesse verankern</span>
                <p className="process-step__body">
                  Wir entwickeln, wie Barrierefreiheit direkt in eurem Design System verankert
                  werden kann, statt nur in einzelnen Projekten mitgedacht zu werden.
                </p>
              </div>
            </div>
          </div>
          <div className="process-result">
            <span className="process-result__label">Ergebnis</span>
            <p className="process-result__body">
              Prozesse, mit denen euer Design System Barrierefreiheit von sich aus mitträgt.
            </p>
          </div>
        </div>
      </section>
      {/* ── Dringlichkeit ──────────────────────────────────────── */}
      <section className="section" id="dringlichkeit">
        <div className="container narrative">
          <h2 className="narrative__heading">Warum euer Design System der größte Hebel ist</h2>
          <div className="narrative__body">
            <p>
              Kaum eine Stelle hat so viel Einfluss auf BFSG-Konformität wie euer Design System – im
              Guten wie im Schlechten. Es kann der größte Verursacher von
              Barrierefreiheits-Unstimmigkeiten sein, weil sich Fehler in jedem Projekt wiederholen.{" "}
              <strong>
                Oder es wird der größte Hebel, der diese Fehler von vornherein verhindert.
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
                Ersetzt der Deep Dive ein BFSG-Audit?{" "}
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
                Nein. Der Deep Dive ist kein Audit und keine Rechtsberatung, ich gewährleiste keine
                BFSG-Konformität. Ziel ist, dass die größten Risiken erst gar nicht entstehen und
                euer Design System als Hebel für Barrierefreiheit funktioniert. Wenn gewünscht, kann
                ich vorher aber gerne ein Audit durchführen. Sprecht mich dazu gerne an.
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
                Es hilft, wenn ihr Beispiele aus eurem Design System mitbringt, anhand derer wir
                typische Probleme durchgehen können.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Brauchst du Zugriff auf unsere Dateien?{" "}
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
                Nicht unbedingt, es wäre aber hilfreich, wenn ich in Figma View-Rechte bekomme.
                Screen-Sharing ist aber auch möglich.
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
                Für Design Teams, die BFSG angehen müssen und ihr Design System als Hebel dafür
                nutzen wollen, statt Fehler in jedem Projekt neu zu lösen.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Ist der Deep Dive vor Ort oder remote?{" "}
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
              <p className="faq-item__answer">Ich biete den Deep Dive ausschließlich remote an.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Welche Tools nutzt du für den Deep Dive?{" "}
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
                Ich nutze FigJam und Figma, ihr bekommt dazu einen Einladungslink von mir.
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
