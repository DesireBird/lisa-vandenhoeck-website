import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System, AI-Ready",
  alternates: { canonical: "/ki-ready/" },
};

export default function KiReadyPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="ki-ready-hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="flag flag--accent2" style={{ alignSelf: "flex-start" }}>
              Tokens
            </span>
            <h1 className="hero__headline">Design System, AI-Ready</h1>
            <p className="hero__sub">
              KI-Tools ignorieren eure Design Guidelines und erfinden eigene Werte? Im Deep Dive
              sagen wir Inkonsistenz und Chaos durch KI den Kampf an.
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
              src="/resources/cover-ds-ai-ready.jpeg"
              alt="Design System AI-Ready Deepdive mit Lisa Vandenhoeck, Design System Architektin"
              className="ki-ready-hero__image"
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
                Auch Figma MCP ist nicht allmächtig. Ohne klare Prinzipien neigt KI schnell dazu,
                neue Werte zu erfinden oder aus eurem System auszubrechen – statt das zu nutzen, was
                schon da ist. Was für euer Team selbsterklärend ist, bleibt für ein KI-Tool oft
                uneindeutig.
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
                <rect
                  x="6"
                  y="6"
                  width="16"
                  height="16"
                  rx="3"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="1.2"
                  style={{ fill: "var(--color-neutral-dark-400)" }}
                />
                <circle cx="17.5" cy="10.5" r="1.2" style={{ fill: "var(--color-fill-accent1-solid)" }} />
                <circle cx="14" cy="14" r="1.2" style={{ fill: "var(--color-neutral-dark-400)" }} />
                <circle cx="10.5" cy="17.5" r="1.2" style={{ fill: "var(--color-fill-accent1-solid)" }} />
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="1.2"
                  style={{ fill: "var(--color-neutral-dark-400)" }}
                />
              </svg>
              <span className="symptom-card__label">KI rät, wenn ihr nicht führt</span>
              <p className="symptom-card__body">
                Ohne klare Prinzipien erfindet die KI neue Werte, statt bestehende zu nutzen.
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
              <span className="symptom-card__label">Kein Standard für Maschinen</span>
              <p className="symptom-card__body">
                Was für Menschen selbsterklärend ist, bleibt für KI-Tools uneindeutig.
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
                  d="M9 4H16L20 8V24H9V4Z"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 4V8H20"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 13H17.5"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.5 16.5H17.5"
                  style={{ stroke: "var(--color-neutral-dark-400)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.5 20H15"
                  style={{ stroke: "var(--color-border-accent1)" }}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="symptom-card__label">Doku für Menschen ≠ Doku für KI</span>
              <p className="symptom-card__body">
                Eine Anleitung, die euer Team versteht, ist für ein KI-Tool schnell zu viel.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Wie ihr diesen Sprung schafft ─────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="narrative__heading">
            Wie ihr diesen Sprung schafft, anstatt KI zum Chaos-Verstärker zu machen
          </h2>
          <div className="narrative__body">
            <p>
              Genau darum geht es in unserem Deep Dive. Wir schauen uns eure Tokens, Variablen, Doku
              und Tools an und identifizieren, was es braucht, damit KI euer Design System
              konsistent versteht und anwendet, statt zu raten.
            </p>
            <div className="process-result process-result--media">
              <img
                src="/resources/Playbook_DS_AI_Ready.png"
                alt="Playbook Cover: Design System, AI-Ready"
                className="process-result__image"
              />
              <div className="process-result__content">
                <span className="process-result__label">Ihr geht raus mit:</span>
                <ul className="bullet-list">
                  <li>
                    Einem Board (Figjam), an dem wir aktiv arbeiten, mit den nächsten Schritten für
                    euer Team, um danach eigenständig weiterzumachen
                  </li>
                  <li>Einem Playbook, das die Inhalte zum Thema festhält</li>
                </ul>
              </div>
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
                  Fokus setzen{" "}
                  <span className="process-step__meta">
                    (aus dem Kennenlerntermin) · ca. 15 Min
                  </span>
                </span>
                <p className="process-step__body">
                  Im Briefing-Call haben wir Stand und Herausforderungen erörtert: Wie sind eure
                  Tokens aufgebaut, wie ist die Doku, welche Tools nutzt ihr. Der Fokus für den Deep
                  Dive steht damit schon – Tiefe und Themen richten sich nach eurer Problematik.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">2</span>
              <div className="process-step__content">
                <span className="process-step__title">Architektur-Check</span>
                <p className="process-step__body">
                  Wir gehen gemeinsam durch, wie eure Tokens, Variablen und Components aufgebaut
                  sind und wo KI-Tools aktuell noch raten müssen statt zu wissen.
                </p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-step__number">3</span>
              <div className="process-step__content">
                <span className="process-step__title">Der Plan</span>
                <p className="process-step__body">
                  Aus dem Check wird ein Plan, wie KI-Tools zuverlässig interpretieren können.
                </p>
              </div>
            </div>
          </div>
          <div className="process-result">
            <span className="process-result__label">Ergebnis</span>
            <p className="process-result__body">
              Board mit priorisierten nächsten Schritten + Playbook zur konsistenten KI-Anwendung
              eures Design Systems.
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
              Skalieren mit KI geht in beide Richtungen: Ordnung oder Chaos. Wenn euer Design System
              nicht zusätzlich für KI mitgedacht wird, verschenkt ihr nicht nur Potenzial –{" "}
              <strong>
                ihr macht KI zum Brandbeschleuniger für genau das Chaos, das ihr eigentlich
                vermeiden wolltet.
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
                Ist das eine Demo von KI-Tools?{" "}
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
                Nein. Wir arbeiten an eurem Design System – keine Show, sondern Arbeit an eurem
                Fall.
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
                Es hilft, wenn ihr eure Tokens, Doku und genutzten Tools mitbringt (zum Beispiel
                über Figma) – darauf gehen wir im Deep Dive ein.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-item__question">
                Braucht ihr Zugriff auf unsere Dateien?{" "}
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
                Ja, hier schauen wir uns euer bestehendes System an, deshalb ist Einblick in eure
                Tokens und Doku nötig.
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
                Für Design Teams, die KI-Tools produktiv nutzen wollen und merken, dass ihr Design
                System dafür noch nicht bereit ist.
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
              <p className="faq-item__answer">
                Ja, ich biete den Deep Dive ausschließlich remote an.
              </p>
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
                Ich werde Figjam und Figma nutzen, ihr bekommt dazu von mir einen Einladungslink.
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
