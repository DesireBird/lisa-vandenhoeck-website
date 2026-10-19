import type { Metadata } from "next";
import Link from "next/link";
import { HomeEffects } from "@/components/HomeEffects";

export const metadata: Metadata = {
  title: { absolute: "Lisa Vandenhoeck — Designsystem-Klarheit" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Ticker ─────────────────────────────────────────────── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <span className="ticker__item">Design System</span> <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">AI-Progress</span> <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Neue Arbeitsweisen</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">Neue Tools</span>{" "}
          <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Figma Releases</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">Variables</span>{" "}
          <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Component Libraries</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">BFSG</span>{" "}
          <span className="ticker__sep">·</span>
          {/* Duplicate for seamless loop */}
          <span className="ticker__item">Design System</span> <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">AI-Progress</span> <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Neue Arbeitsweisen</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">Neue Tools</span>{" "}
          <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Figma Releases</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">Variables</span>{" "}
          <span className="ticker__sep">·</span>{" "}
          <span className="ticker__item">Component Libraries</span>{" "}
          <span className="ticker__sep">·</span> <span className="ticker__item">BFSG</span>{" "}
          <span className="ticker__sep">·</span>
        </div>
      </div>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__headline">
              Die Anforderungen an euer Design System verändern sich schneller, als ihr mitkommt?
            </h1>
            <p className="hero__sub">
              Ich mache eine Sache: Designsystem-Klarheit. Ein Deep-Dive, an eurem eigenen System.
              Damit euer System wieder die Tools beherrscht und nicht umgekehrt.
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
            <div className="tilt-card" id="tiltCard">
              <svg
                className="tilt-card__svg"
                viewBox="0 0 360 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="360" height="460" fill="#1a1e25" />
                {/* Top label */}
                <text
                  x="24"
                  y="38"
                  fill="#d2461e"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10"
                  letterSpacing="2.5"
                  fontWeight="400"
                >
                  DESIGN SYSTEM
                </text>
                <circle cx="344" cy="32" r="5" fill="#d2461e" opacity="0.9" />
                <circle cx="344" cy="32" r="9" fill="#d2461e" opacity="0.2" />
                {/* Divider */}
                <line x1="24" y1="52" x2="336" y2="52" stroke="#262c38" strokeWidth="1" />
                {/* ── Layer: Tokens ────────────────────────────── */}
                <text
                  x="24"
                  y="74"
                  fill="#94a0b0"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="9"
                  letterSpacing="1.5"
                >
                  TOKENS
                </text>
                {/* Color swatches: accent1 */}
                <rect x="24" y="84" width="22" height="22" rx="4" fill="#d2461e" />
                <rect x="50" y="84" width="22" height="22" rx="4" fill="#f59a75" />
                <rect x="76" y="84" width="22" height="22" rx="4" fill="#fbd9cc" />
                <text
                  x="24"
                  y="120"
                  fill="#8899aa"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                >
                  accent1
                </text>
                {/* Color swatches: accent2 */}
                <rect x="130" y="84" width="22" height="22" rx="4" fill="#2563eb" />
                <rect x="156" y="84" width="22" height="22" rx="4" fill="#7fa8f9" />
                <rect x="182" y="84" width="22" height="22" rx="4" fill="#d2e2fd" />
                <text
                  x="130"
                  y="120"
                  fill="#8899aa"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                >
                  accent2
                </text>
                {/* Color swatches: neutral */}
                <rect
                  x="236"
                  y="84"
                  width="22"
                  height="22"
                  rx="4"
                  fill="#262c38"
                  stroke="#5b6473"
                  strokeWidth="1.5"
                />
                <rect x="262" y="84" width="22" height="22" rx="4" fill="#94a0b0" />
                <rect x="288" y="84" width="22" height="22" rx="4" fill="#e4e8ed" />
                <text
                  x="236"
                  y="120"
                  fill="#8899aa"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                >
                  neutral
                </text>
                {/* Spacing bars */}
                <rect x="24" y="132" width="4" height="14" rx="1" fill="#7fa8f9" opacity="0.85" />
                <rect x="32" y="129" width="6" height="17" rx="1" fill="#7fa8f9" opacity="0.85" />
                <rect x="42" y="126" width="10" height="20" rx="1" fill="#7fa8f9" opacity="0.85" />
                <rect x="56" y="122" width="14" height="24" rx="1" fill="#7fa8f9" opacity="0.85" />
                <rect x="74" y="117" width="20" height="29" rx="1" fill="#7fa8f9" opacity="0.85" />
                <text
                  x="24"
                  y="160"
                  fill="#8899aa"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                >
                  spacing
                </text>
                {/* Type scale */}
                <text
                  x="140"
                  y="150"
                  fill="#f4f6f8"
                  fontFamily="sans-serif"
                  fontSize="26"
                  fontWeight="700"
                  opacity="0.9"
                >
                  Aa
                </text>
                <text
                  x="192"
                  y="145"
                  fill="#f4f6f8"
                  fontFamily="sans-serif"
                  fontSize="17"
                  fontWeight="700"
                  opacity="0.6"
                >
                  Aa
                </text>
                <text
                  x="224"
                  y="150"
                  fill="#94a0b0"
                  fontFamily="sans-serif"
                  fontSize="11"
                  opacity="0.7"
                >
                  Aa
                </text>
                <text
                  x="140"
                  y="162"
                  fill="#8899aa"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                >
                  typography
                </text>
                {/* Arrow down */}
                <line
                  x1="180"
                  y1="174"
                  x2="180"
                  y2="194"
                  stroke="#38414f"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <polygon points="176,191 184,191 180,198" fill="#38414f" />
                {/* ── Layer: Components ────────────────────────── */}
                <line x1="24" y1="208" x2="336" y2="208" stroke="#262c38" strokeWidth="1" />
                <text
                  x="24"
                  y="224"
                  fill="#94a0b0"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="9"
                  letterSpacing="1.5"
                >
                  COMPONENTS
                </text>
                {/* Button */}
                <rect x="24" y="234" width="76" height="26" rx="4" fill="#d2461e" />
                <text
                  x="62"
                  y="251"
                  fill="white"
                  fontFamily="sans-serif"
                  fontSize="9"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  Label
                </text>
                {/* Chip inactive */}
                <rect
                  x="114"
                  y="234"
                  width="52"
                  height="26"
                  rx="13"
                  fill="#1a1e25"
                  stroke="#38414f"
                  strokeWidth="1.5"
                />
                <text
                  x="140"
                  y="251"
                  fill="#8899aa"
                  fontFamily="sans-serif"
                  fontSize="9"
                  textAnchor="middle"
                >
                  Filter
                </text>
                {/* Chip active */}
                <rect
                  x="178"
                  y="234"
                  width="66"
                  height="26"
                  rx="13"
                  fill="#eaf1fe"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                />
                <text
                  x="211"
                  y="251"
                  fill="#2563eb"
                  fontFamily="sans-serif"
                  fontSize="9"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  ✓ Aktiv
                </text>
                {/* Input field */}
                <rect
                  x="24"
                  y="272"
                  width="220"
                  height="26"
                  rx="4"
                  fill="#14171c"
                  stroke="#38414f"
                  strokeWidth="1.5"
                />
                <text x="34" y="289" fill="#8899aa" fontFamily="sans-serif" fontSize="9">
                  Eingabefeld...
                </text>
                {/* Checkbox */}
                <rect x="262" y="272" width="14" height="14" rx="2" fill="#d2461e" />
                <path
                  d="M265 279L268 282L273 276"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="280" y="283" fill="#94a0b0" fontFamily="sans-serif" fontSize="8">
                  Label
                </text>
                {/* Arrow down */}
                <line
                  x1="180"
                  y1="308"
                  x2="180"
                  y2="328"
                  stroke="#38414f"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <polygon points="176,325 184,325 180,332" fill="#38414f" />
                {/* ── Layer: System ────────────────────────────── */}
                <line x1="24" y1="342" x2="336" y2="342" stroke="#262c38" strokeWidth="1" />
                <text
                  x="24"
                  y="358"
                  fill="#94a0b0"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="9"
                  letterSpacing="1.5"
                >
                  SYSTEM
                </text>
                {/* Wireframe preview: nav bar */}
                <rect x="24" y="368" width="312" height="18" rx="2" fill="#262c38" />
                <rect x="30" y="372" width="60" height="8" rx="1" fill="#d2461e" opacity="0.6" />
                <rect x="216" y="372" width="30" height="8" rx="1" fill="#38414f" />
                <rect x="252" y="372" width="30" height="8" rx="1" fill="#38414f" />
                <rect x="290" y="372" width="30" height="8" rx="1" fill="#38414f" />
                {/* Wireframe preview: hero */}
                <rect x="24" y="392" width="190" height="30" rx="2" fill="#1f2430" />
                <rect x="30" y="397" width="140" height="8" rx="1" fill="#38414f" />
                <rect x="30" y="409" width="100" height="6" rx="1" fill="#262c38" />
                <rect x="220" y="392" width="116" height="30" rx="2" fill="#262c38" />
                {/* Wireframe preview: 3 cards */}
                <rect
                  x="24"
                  y="430"
                  width="94"
                  height="20"
                  rx="2"
                  fill="#1f2430"
                  stroke="#262c38"
                  strokeWidth="1"
                />
                <rect
                  x="124"
                  y="430"
                  width="94"
                  height="20"
                  rx="2"
                  fill="#1f2430"
                  stroke="#262c38"
                  strokeWidth="1"
                />
                <rect
                  x="224"
                  y="430"
                  width="94"
                  height="20"
                  rx="2"
                  fill="#1f2430"
                  stroke="#262c38"
                  strokeWidth="1"
                />
              </svg>
              <div className="tilt-card__shine" />
            </div>
          </div>
        </div>
      </section>
      {/* ── Value Props (Scrollytelling) ──────────────────────────── */}
      <section className="section section--paper scrollytelling" id="value-props">
        <div className="scrollytelling__runway" id="scrollytellingRunway">
          <div className="scrollytelling__pin section--dots">
            <div className="container scrollytelling__grid">
              <div className="scrollytelling__text">
                <h2 className="scrollytelling__statement">
                  Für weniger Chaos als letzte Woche. Für eine saubere Skalierung braucht es ein
                  System, welches die Richtung vorgibt.
                </h2>
              </div>
              <div className="scrollytelling__cards" id="scrollytellingCards">
                <div className="scroll-card-track" id="scrollCardTrack">
                  <div className="scroll-card" data-index="0">
                    <p className="scroll-card__body">
                      Ihr wisst sofort, ob ein neues Feature für euer System relevant ist – oder ob
                      ihr es getrost ignorieren könnt.
                    </p>
                  </div>
                  <div className="scroll-card" data-index="1">
                    <p className="scroll-card__body">
                      Components laufen nicht schon nach einer Woche in den nächsten Engpass, weil
                      der Weg zur Skalierung von Anfang an mitgedacht ist.
                    </p>
                  </div>
                  <div className="scroll-card" data-index="2">
                    <p className="scroll-card__body">
                      Ihr versteht die großen Trends, ohne jedem hinterherzulaufen, und wisst,
                      welcher Teil davon euch wirklich betrifft.
                    </p>
                  </div>
                  <div className="scroll-card scroll-card--accent" data-index="3">
                    <p className="scroll-card__body scroll-card__body--strong">
                      Prozess durch einen Deepdive-Booster beschleunigen.
                    </p>
                    <a
                      href="https://calendly.com/lisa-vandenhoeck/30min"
                      className="btn scroll-card__cta btn--body-l"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn__label-full">Jetzt Kennenlern-Gespräch buchen</span>
                      <span className="btn__label-short">Termin buchen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Symptome ───────────────────────────────────────────── */}
      <section className="section section--white symptoms-section" id="symptoms">
        <div className="symptoms-runway">
          <div className="symptoms-pin">
            <div className="container">
              <h2 className="section__heading">Symptome, dass das Design System hinterher hinkt</h2>
              <p className="section__lead">
                KI skaliert, leider auch Fehler und Designschulden. So ist die Anwendung von KI und
                neuen Features schnell ein Multiplikator für Chaos.
              </p>
              <div className="symptom-grid">
                <div className="symptom-card">
                  <svg
                    className="symptom-card__graphic"
                    viewBox="0 0 120 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="100"
                      height="44"
                      rx="4"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.5"
                    />
                    <rect
                      x="26"
                      y="24"
                      width="20"
                      height="16"
                      rx="2"
                      style={{ fill: "var(--color-accent2-600)" }}
                    />
                  </svg>
                  <span className="symptom-card__label">Kein Color Mapping</span>
                  <p className="symptom-card__body">
                    Das UI läuft regelmäßig in Kontrastprobleme rein.
                  </p>
                </div>
                <div className="symptom-card">
                  <svg
                    className="symptom-card__graphic"
                    viewBox="0 0 120 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M46 4H62L70 12V26H46V4Z"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M62 4V12H70"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="11"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="21"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="31"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="41"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="51"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="61"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="71"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="81"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="91"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="101"
                      y="36"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="11"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="21"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="31"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="41"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="51"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="61"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="71"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="81"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="91"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                    <rect
                      x="101"
                      y="46"
                      width="8"
                      height="8"
                      style={{ fill: "var(--color-neutral-dark-600)" }}
                    />
                  </svg>
                  <span className="symptom-card__label">Für jeden Case eine Component</span>
                  <p className="symptom-card__body">
                    Die Bibliothek wächst schneller, als sie gepflegt wird.
                  </p>
                </div>
                <div className="symptom-card">
                  <svg
                    className="symptom-card__graphic"
                    viewBox="0 0 120 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="6"
                      y="6"
                      width="22"
                      height="14"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="32"
                      y="6"
                      width="14"
                      height="10"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="50"
                      y="4"
                      width="10"
                      height="22"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="64"
                      y="8"
                      width="20"
                      height="12"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="88"
                      y="6"
                      width="18"
                      height="16"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="6"
                      y="24"
                      width="18"
                      height="12"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="28"
                      y="28"
                      width="12"
                      height="20"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="44"
                      y="32"
                      width="26"
                      height="10"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="74"
                      y="26"
                      width="16"
                      height="24"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="94"
                      y="24"
                      width="20"
                      height="16"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="6"
                      y="40"
                      width="20"
                      height="14"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="30"
                      y="50"
                      width="24"
                      height="8"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="58"
                      y="44"
                      width="18"
                      height="14"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="80"
                      y="42"
                      width="30"
                      height="16"
                      rx="1"
                      style={{ stroke: "var(--color-neutral-dark-500)" }}
                      strokeWidth="1.2"
                    />
                  </svg>
                  <span className="symptom-card__label">50+ Varianten in einer Component</span>
                  <p className="symptom-card__body">Aufräumen traut sich niemand mehr.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Zitat ──────────────────────────────────────────────── */}
      <section className="section section--paper quote-section" id="quote">
        <div className="quote-runway" id="quoteRunway">
          <div className="quote-pin section--dots">
            <div className="container">
              <p className="section__footnote" id="quoteText">
                <span className="quote-word">Wenn</span> <span className="quote-word">sich</span>{" "}
                <span className="quote-word">die</span> <span className="quote-word">Themen,</span>{" "}
                <span className="quote-word">„die</span> <span className="quote-word">man</span>{" "}
                <span className="quote-word">sich</span> <span className="quote-word">mal</span>{" "}
                <span className="quote-word">anschauen</span>{" "}
                <span className="quote-word">muss&quot;,</span>{" "}
                <span className="quote-word">schneller</span>{" "}
                <span className="quote-word">stapeln,</span> <span className="quote-word">als</span>{" "}
                <span className="quote-word">das</span>{" "}
                <span className="quote-word">Tagesgeschäft</span>{" "}
                <span className="quote-word">Platz</span> <span className="quote-word">dafür</span>{" "}
                <span className="quote-word">lässt,</span>{" "}
                <span className="quote-word">braucht</span> <span className="quote-word">es</span>{" "}
                <span className="quote-word">aktiv</span> <span className="quote-word">den</span>{" "}
                <span className="quote-word">Raum</span> <span className="quote-word">dafür.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Selbst-Check ───────────────────────────────────────── */}
      <section className="section section--white selbst-check-section" id="selbst-check">
        <div className="selbst-check-runway">
          <div className="selbst-check-pin">
            <div className="container">
              <div className="check-header">
                <span className="check-header__eyebrow">Selbst-Check</span>
                <h2 className="section__heading">Kommt ihr nicht mehr hinterher?</h2>
                <p className="section__lead">
                  Die meisten Teams wollen kein weiteres AI-Feature. Sie wollen Klarheit – ein
                  System, das mit den Tools mithält, nicht hinterherhinkt. So sieht das aus:
                </p>
              </div>
              <div className="check-grid">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="Figma Release Frage"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    Ihr habt keine Zeit zu prüfen, ob ein neues Figma-Release euch wirklich
                    weiterbringt.
                  </span>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="Kontrastprobleme"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    Kontrastprobleme tauchen immer wieder auf.
                  </span>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="Component Lebensdauer"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    Eine Component hält selten länger als zwei Use Cases, bevor sie überarbeitet
                    wird.
                  </span>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="AI-Prototypen"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    AI-Prototypen passen oft nicht zum Rest des Systems.
                  </span>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="Variables"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    Variables sind eingerichtet, werden aber nicht gelebt.
                  </span>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input check-item"
                    aria-label="Tokens"
                  />
                  <span className="checkbox__box" aria-hidden="true">
                    <svg
                      className="checkbox__icon"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.5L4 8.5L9.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="checkbox__label">
                    Tokens gibt es, aber kaum jemand nutzt sie konsequent.
                  </span>
                </label>
              </div>
              <div className="check-footer">
                <p className="check-counter" id="checkCounter">
                  0/6 Wähle die Punkte aus, die auf euch zutreffen
                </p>
                <a
                  href="https://calendly.com/lisa-vandenhoeck/30min"
                  className="btn btn--primary check-cta"
                  id="checkCta"
                  target="_blank"
                  rel="noopener noreferrer"
                  hidden
                >
                  Kennenlern-Gespräch buchen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Services / Deep-Dives ──────────────────────────────── */}
      <section className="section section--paper" id="services">
        <div className="container">
          <div className="services-header">
            <h2 className="section__heading" style={{ marginBottom: "0" }}>
              Drei Themen. Ein Anti-Steckenpferd pro Team ↓
            </h2>
            <Link href="/services/" className="btn btn--secondary">
              Alle Deep-Dives
            </Link>
          </div>
          <p className="section__lead" style={{ marginTop: "var(--space-gap-lg)" }}>
            Jedes Team hat eins. Meins ist zufällig, genau das aufzulösen.
          </p>
          <div className="services-grid">
            {/* ── Figma Config ──────────────────────────────────── */}
            <div className="card service-card">
              <div className="service-card__head">
                <span className="service-card__tag flag flag--neutral">Figma</span>{" "}
                <img
                  src="/resources/figma-config-deepdive.jpeg"
                  alt=""
                  className="service-card__cover"
                  loading="lazy"
                />
                <h3 className="card__title">Figma Config: Was wirklich zählt</h3>
                <p className="card__body">
                  Figma bringt laufend neue Config-Features – Code Layers, Agents, Animations. Nicht
                  alles davon ist für euer Setup relevant. In drei Stunden sortieren wir gemeinsam,
                  was ihr wirklich nutzen solltet.
                </p>
              </div>
              <div className="service-card__actions">
                <a
                  href="https://calendly.com/lisa-vandenhoeck/30min"
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buchen
                </a>{" "}
                <Link href="/figma-config/" className="btn btn--secondary">
                  Zum Deep-Dive
                </Link>
              </div>
              <div className="service-card__divider" />
              <div className="service-card__items">
                <div className="service-item">
                  <span className="service-item__title">Agents kuratiert</span>{" "}
                  <span className="service-item__body">
                    Wir schauen gemeinsam, welche Best Practices euren Workflow wirklich
                    beschleunigen.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Shader funktional</span>{" "}
                  <span className="service-item__body">
                    Zwischen „sieht cool aus&quot; und „bringt Wert&quot; liegt oft wenig. Wir
                    ziehen die Linie für euer Setup.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Weave eingeordnet</span>{" "}
                  <span className="service-item__body">
                    Generative Workflows klingen nach Zukunft – wir schauen, wo sie euren Prozess
                    tatsächlich tragen, statt ihn zu verkomplizieren.
                  </span>
                </div>
              </div>
            </div>
            {/* ── Tokens & Variables ────────────────────────────── */}
            <div className="card service-card">
              <div className="service-card__head">
                <span className="service-card__tag flag flag--accent2">Tokens</span>{" "}
                <img
                  src="/resources/cover-ds-ai-ready.jpeg"
                  alt=""
                  className="service-card__cover"
                  loading="lazy"
                />
                <h3 className="card__title">Design System, AI-Ready</h3>
                <p className="card__body">
                  In drei Stunden erarbeiten wir, was es braucht, damit KI-Tools euer Design System
                  konsistent verstehen und wiederverwenden können, statt zu raten.
                </p>
                <p className="card__body">
                  Als Nebeneffekt: Auch die Zusammenarbeit mit euren Dev-Teams wird dadurch spürbar
                  einfacher.
                </p>
              </div>
              <div className="service-card__actions">
                <a
                  href="https://calendly.com/lisa-vandenhoeck/30min"
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buchen
                </a>{" "}
                <Link href="/ki-ready/" className="btn btn--secondary">
                  Zum Deep-Dive
                </Link>
              </div>
              <div className="service-card__divider" />
              <div className="service-card__items">
                <div className="service-item">
                  <span className="service-item__title">Naming, das AI versteht</span>{" "}
                  <span className="service-item__body">
                    Konsistente, semantische Bezeichnungen statt kryptischer Kürzel wie
                    „blue-3&quot;.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Variables, die mitwachsen</span>{" "}
                  <span className="service-item__body">
                    Ein Aufbau, der auch bei neuen Produkten oder Marken nicht bricht – und den AI
                    weiterhin versteht.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Interpretierbare Doku</span>{" "}
                  <span className="service-item__body">
                    Tokens und Variables ohne eine Bedienungsanleitung kommen nicht weit.
                  </span>
                </div>
              </div>
            </div>
            {/* ── BFSG ──────────────────────────────────────────── */}
            <div className="card service-card">
              <div className="service-card__head">
                <span className="service-card__tag flag flag--accent1">BFSG</span>{" "}
                <img
                  src="/resources/cover-bfsg-deepdive.jpeg"
                  alt=""
                  className="service-card__cover"
                  loading="lazy"
                />
                <h3 className="card__title">BFSG, im Design System verankert</h3>
                <p className="card__body">
                  BFSG-Anforderungen lassen sich nicht pro Projekt neu abhaken. In drei Stunden
                  bauen wir Kontrast, ARIA und Focus so ins Design System ein, dass jede neue
                  Component automatisch barrierefrei startet.
                </p>
              </div>
              <div className="service-card__actions">
                <a
                  href="https://calendly.com/lisa-vandenhoeck/30min"
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buchen
                </a>{" "}
                <Link href="/bfsg/" className="btn btn--secondary">
                  Zum Deep-Dive
                </Link>
              </div>
              <div className="service-card__divider" />
              <div className="service-card__items">
                <div className="service-item">
                  <span className="service-item__title">Kontrast, der im System sitzt</span>{" "}
                  <span className="service-item__body">
                    Farbpaare, die WCAG-Kontrastwerte automatisch einhalten – nicht Component für
                    Component neu geprüft.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">ARIA als Standard, nicht Nachgedanke</span>{" "}
                  <span className="service-item__body">
                    Semantik und Rollen direkt in den Components verankert, statt sie der
                    Entwicklung zu überlassen.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Focus States, die niemand vergisst</span>{" "}
                  <span className="service-item__body">
                    Ein einheitliches Focus-Pattern, das in jeder Component mitkommt.
                  </span>
                </div>
                <div className="service-item">
                  <span className="service-item__title">Touch-Targets, die niemand verfehlt</span>{" "}
                  <span className="service-item__body">
                    Sicherheitsabstände und Größen direkt mitgedacht.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeEffects />
    </>
  );
}
