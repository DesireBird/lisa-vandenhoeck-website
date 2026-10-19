import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumPage() {
  return (
    <>
      {/* ── Impressum ──────────────────────────────────────────── */}
      <section className="section section--paper">
        <div className="container narrative">
          <h1 className="narrative__heading">Impressum</h1>
          <div className="narrative__body">
            <p>
              <strong>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</strong>
            </p>
            <p>Diese Website wird betrieben von:</p>
            <p>
              Desire Bird GmbH
              <br />
              Hauptstr. 44
              <br />
              40789 Monheim am Rhein
              <br />
              Deutschland
            </p>
            <p>
              <strong>Vertreten durch:</strong>
              <br />
              Lisa Vandenhoeck, Geschäftsführerin
            </p>
            <p>
              <strong>Kontakt:</strong>
              <br />
              Telefon: +49 176 80847142
              <br />
              E-Mail: lisa@vandenhoeck.de
            </p>
            <p>
              <strong>Registereintrag:</strong>
              <br />
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht Düsseldorf
              <br />
              Registernummer: HRB 102711
            </p>
            <p>
              <strong>Umsatzsteuer-ID:</strong>
              <br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE365157023
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
