import type { ReactNode } from "react";

export function NewsletterHero({ headline, children }: { headline: string; children: ReactNode }) {
  return (
    <section className="hero newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <img
          src="/resources/newsletter-lisa.jpg"
          alt="Lisa Vandenhoeck sitzt mit einem Tablet auf einem Sofa vor einer Backsteinwand"
          className="newsletter__photo"
        />
        <div className="newsletter__content">
          <span className="flag flag--accent2" style={{ alignSelf: "flex-start" }}>
            Newsletter
          </span>
          <h1 className="hero__headline">{headline}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
