import type { DeepdiveBySlugQueryResult } from "@/lib/sanity.types";
import { BookingButton } from "./BookingButton";
import { deepdiveIcons } from "./DeepdiveIcon";
import { Paragraphs } from "./Paragraphs";
import { RichText } from "./RichText";
import { SanityImg } from "./SanityImg";

type Props = { deepdive: NonNullable<DeepdiveBySlugQueryResult> };

const faqIcon = (
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
);

/** Deepdive-Landingpage aus Sanity. Abschnitte und Klassen wie die frühere statische Seite. */
export function Deepdive({ deepdive: d }: Props) {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero hero--deepdive" id={`${d.slug}-hero`}>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className={`flag flag--${d.flagTone}`} style={{ alignSelf: "flex-start" }}>
              {d.flag}
            </span>
            <h1 className="hero__headline">{d.headline}</h1>
            <p className="hero__sub">{d.heroText}</p>
            <BookingButton />
          </div>
          <div className="hero__visual">
            <SanityImg
              image={d.heroImage}
              sizes="(min-width: 769px) 50vw, 100vw"
              className="deepdive-hero__image"
              priority
            />
          </div>
        </div>
      </section>
      {/* ── Die Spannung ───────────────────────────────────────── */}
      <section className="section" id="warum-nicht-nebenbei">
        <div className="container">
          <h2 className="section__heading">{d.problemHeading}</h2>
          {d.problemText ? (
            <div className="narrative">
              <div className="narrative__body">
                <Paragraphs text={d.problemText} />
              </div>
            </div>
          ) : null}
          {d.problemCards?.length ? (
            <div className="symptom-grid">
              {d.problemCards.map((card) => (
                <div className="symptom-card" key={card._key}>
                  {deepdiveIcons[card.icon]}
                  <span className="symptom-card__label">{card.label}</span>
                  {card.body ? <p className="symptom-card__body">{card.body}</p> : null}
                </div>
              ))}
            </div>
          ) : null}
          {d.legalNote ? <p className="legal-note">{d.legalNote}</p> : null}
        </div>
      </section>
      {/* ── Lösung ─────────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="narrative__heading">{d.approachHeading}</h2>
          <div className="narrative__body">
            <Paragraphs text={d.approachText} />
            {d.outcomesImage?.asset ? (
              <div className="process-result process-result--media">
                <SanityImg
                  image={d.outcomesImage}
                  sizes="(min-width: 641px) 360px, 100vw"
                  className="process-result__image"
                />
                <div className="process-result__content">
                  {d.outcomesLabel ? (
                    <span className="process-result__label">{d.outcomesLabel}</span>
                  ) : null}
                  {d.outcomes?.length ? (
                    <ul className="bullet-list">
                      {d.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ) : (
              d.outcomes?.map((outcome, i) => (
                <div className="process-result" key={i}>
                  <p className="process-result__body">{outcome}</p>
                </div>
              ))
            )}
            {d.note?.title || d.note?.body ? (
              <div className="card card--note">
                {d.note.title ? <span className="process-step__title">{d.note.title}</span> : null}
                {d.note.body ? <p className="process-step__body">{d.note.body}</p> : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* ── Features ───────────────────────────────────────────── */}
      {d.features?.length ? (
        <section className="section section--paper section--dots">
          <div className="container">
            {d.featuresHeading ? <h2 className="section__heading">{d.featuresHeading}</h2> : null}
            {d.featuresLead ? <p className="section__lead">{d.featuresLead}</p> : null}
            <div className="feature-grid">
              {d.features.map((feature, i) => (
                <div
                  className={`symptom-card symptom-card--${i % 2 ? "accent2" : "accent1"}`}
                  key={feature._key}
                >
                  <span className="symptom-card__label">{feature.label}</span>
                  {feature.body ? <p className="symptom-card__body">{feature.body}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {/* ── So läuft's ab ──────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container narrative">
          <h2 className="section__heading">{d.processHeading}</h2>
          {d.steps?.length ? (
            <div className="process-list">
              {d.steps.map((step, i) => (
                <div className="process-step" key={step._key}>
                  <span className="process-step__number">{i + 1}</span>
                  <div className="process-step__content">
                    <span className="process-step__title">
                      {step.title}
                      {step.meta ? (
                        <>
                          {" "}
                          <span className="process-step__meta">{step.meta}</span>
                        </>
                      ) : null}
                    </span>
                    {step.body ? <p className="process-step__body">{step.body}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {d.processResult ? (
            <div className="process-result">
              <span className="process-result__label">Ergebnis</span>
              <p className="process-result__body">{d.processResult}</p>
            </div>
          ) : null}
        </div>
      </section>
      {/* ── Dringlichkeit ──────────────────────────────────────── */}
      <section className="section" id="dringlichkeit">
        <div className="container narrative">
          <h2 className="narrative__heading">{d.urgencyHeading}</h2>
          <div className="narrative__body">
            <RichText value={d.urgencyText} />
          </div>
          <BookingButton />
        </div>
      </section>
      {/* ── FAQ ────────────────────────────────────────────────── */}
      {d.faqs?.length ? (
        <section className="section section--white">
          <div className="container narrative">
            <h2 className="section__heading">{d.faqHeading}</h2>
            <div className="faq-list">
              {d.faqs.map((faq) => (
                <details className="faq-item" key={faq._key}>
                  <summary className="faq-item__question">
                    {faq.question} {faqIcon}
                  </summary>
                  <p className="faq-item__answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section section--paper" id="finale-cta">
        <div className="container">
          <h2 className="section__heading">{d.ctaHeading}</h2>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
