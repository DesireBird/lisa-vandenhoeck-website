import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/" },
};

export default async function AboutPage() {
  const { bookingUrl } = await getSettings();
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="about-hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__headline">Hey, Lisa hier!</h1>
            <p className="hero__sub">
              Ich arbeite mit UX-Teams daran, Design Systeme so zu bauen, dass sie flexibel auf neue
              Anforderungen reagieren können, egal wie schnell die kommen.
            </p>
          </div>
          <div className="hero__visual">
            <img
              src="/resources/Profilbild.jpg"
              alt="Portrait von Lisa Vandenhoeck"
              className="about-hero__photo"
            />
          </div>
        </div>
      </section>
      {/* ── Darum bin ich hier ───────────────────────────────────── */}
      <section className="section section--paper">
        <div className="container narrative">
          <h2 className="narrative__heading">Darum bin ich hier</h2>
          <div className="narrative__body">
            <p>
              Die letzten 8 Jahre habe ich tief im Maschinenraum von UX und Design Systemen
              verbracht. Ich habe Muster gesehen, Erfolge gefeiert und verstanden, was Teams
              ausbremst. Jetzt will ich dieses Wissen nicht mehr nur für ein einziges Produkt
              nutzen, sondern vervielfachen.
            </p>
            <p>
              Mein Sweet Spot? Kleine, schlagkräftige UX-Teams von 4 bis 6 Designern, die bereits
              ein Design System haben, aber Probleme haben zu skalieren.
            </p>
            <p>
              Ich mache genau eine Sache: Design-System-Klarheit. Ein Deep Dive, ein konkretes
              Thema, direkt an eurem eigenen System. Mein persönliches Ziel: Nach diesem Deep Dive
              bin ich für euch überflüssig.
            </p>
            <p>
              Warum das nötig ist? Weil ich seit fast einem Jahrzehnt immer dieselben Hürden sehe:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Feuerwehr-Modus:</strong> Ihr reagiert nur noch ad-hoc auf Anforderungen,
                die von überall reinkommen.
              </li>
              <li>
                <strong>Tech-Rückstand:</strong> Ihr hinkt bei AI und neuen Tool-Workflows
                hinterher.
              </li>
              <li>
                <strong>Wachstumsschmerz:</strong> Das System blockiert euch, weil es nie für echte
                Skalierung gebaut wurde.
              </li>
            </ul>
            <p>
              Klingt das nach eurer Realität? Das ist kein Grund zur Panik, sondern einfach der
              Punkt, an dem jedes wachsende Team mal steht. Das ist lösbar. Gerne löse ich es mit
              euch.
            </p>
            <p>
              Das war die Kurzfassung. Wie die Langversion für euer System aussieht, finden wir am
              besten bei einem kurzen, unverbindlichen Termin heraus.
            </p>
          </div>
        </div>
      </section>
      {/* ── Passen wir zusammen? ─────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__heading">Passen wir zusammen?</h2>
          <div className="fit-grid">
            <div className="fit-card">
              <span className="fit-card__title">Es passt, wenn</span>
              <ul className="fit-list">
                <li>
                  <span className="fit-icon fit-icon--plus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M4 0.5V7.5M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr habt ein Design System in Figma
                </li>
                <li>
                  <span className="fit-icon fit-icon--plus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M4 0.5V7.5M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Euer Team besteht aus 2–8 Personen
                </li>
                <li>
                  <span className="fit-icon fit-icon--plus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M4 0.5V7.5M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr habt das Gefühl, dauernd nur zu reagieren, statt zu agieren
                </li>
                <li>
                  <span className="fit-icon fit-icon--plus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M4 0.5V7.5M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr arbeitet remote oder hybrid
                </li>
              </ul>
            </div>
            <div className="fit-card">
              <span className="fit-card__title">Es passt nicht, wenn</span>
              <ul className="fit-list">
                <li>
                  <span className="fit-icon fit-icon--minus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr habt ein einwandfreies Tokenmapping
                </li>
                <li>
                  <span className="fit-icon fit-icon--minus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  AI ist perfekt auf eure Systeme abgestimmt
                </li>
                <li>
                  <span className="fit-icon fit-icon--minus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr sucht laufende Agentur-Betreuung, keine punktuelle Vertiefung
                </li>
                <li>
                  <span className="fit-icon fit-icon--minus">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path
                        d="M0.5 4H7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Ihr wollt euer Design System komplett neu von null aufbauen, nicht bestehendes
                  einordnen und schärfen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ── Sollen wir loslegen? ─────────────────────────────────── */}
      <section className="section section--paper">
        <div className="container">
          <h2 className="section__heading">Sollen wir loslegen?</h2>
          <a
            href={bookingUrl}
            className="button button--primary button--l"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kennenlern-Gespräch buchen
          </a>
        </div>
      </section>
    </>
  );
}
