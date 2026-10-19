import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <>
      {/* ── Datenschutzerklärung ───────────────────────────────── */}
      <section className="section section--paper">
        <div className="container narrative">
          <h1 className="narrative__heading">Datenschutzerklärung</h1>
          <div className="narrative__body">
            <p>
              <strong>1. Verantwortlicher</strong>
            </p>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
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
              Vertreten durch: Lisa Vandenhoeck, Geschäftsführerin
              <br />
              E-Mail: lisa@vandenhoeck.de
              <br />
              Telefon: +49 176 80847142
            </p>
            <p>
              <strong>2. Allgemeines zur Datenverarbeitung</strong>
            </p>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Diese Website verwendet keine Cookies, keine Analyse- oder
              Tracking-Tools (z. B. Google Analytics, Meta-Pixel o. Ä.) und keine Formulare, über
              die personenbezogene Daten erhoben werden. Es findet keine Speicherung von Daten über{" "}
              <code>localStorage</code> oder <code>sessionStorage</code> statt.
            </p>
            <p>
              Die auf dieser Website verwendeten Schriftarten (Unbounded, Plus Jakarta Sans,
              JetBrains Mono) sind lokal in die Website eingebunden (Self-Hosting). Es findet keine
              Verbindung zu Servern von Google oder anderen Drittanbietern zum Nachladen von
              Schriftarten statt, sodass hierbei keine Daten wie z. B. Ihre IP-Adresse an Dritte
              übertragen werden.
            </p>
            <p>
              <strong>3. Hosting über Netlify</strong>
            </p>
            <p>
              Diese Website wird bei dem externen Dienstleister Netlify, Inc., 101 2nd St, Suite
              575, San Francisco, CA 94105, USA, gehostet.
            </p>
            <p>
              Beim Aufruf dieser Website werden durch Netlify automatisch technische Informationen
              in sogenannten Server-Logfiles erfasst, insbesondere:
            </p>
            <ul className="bullet-list">
              <li>IP-Adresse des zugreifenden Geräts</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite/Datei</li>
              <li>übertragene Datenmenge</li>
              <li>Browsertyp und -version, verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p>
              Diese Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO) an einer technisch fehlerfreien, sicheren und performanten
              Bereitstellung unserer Website.
            </p>
            <p>
              Da Netlify, Inc. ihren Sitz in den USA hat, kann es im Rahmen der Datenverarbeitung zu
              einer Übermittlung personenbezogener Daten in die USA kommen, einem Land, das von der
              EU-Kommission nicht durchgehend als Land mit angemessenem Datenschutzniveau eingestuft
              ist. Netlify ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert; darüber
              hinaus besteht ein Auftragsverarbeitungsvertrag mit Standardvertragsklauseln (SCC) der
              EU-Kommission als zusätzliche Garantie für ein angemessenes Datenschutzniveau.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Netlify finden Sie in dessen
              Datenschutzerklärung:{" "}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                netlify.com/privacy
              </a>
            </p>
            <p>
              <strong>4. Link zu Calendly</strong>
            </p>
            <p>
              Auf dieser Website befindet sich ein Link zur Terminbuchung (&quot;Kennenlern-Gespräch
              buchen&quot;), der zum externen Anbieter Calendly führt (
              <code>calendly.com/lisa-vandenhoeck/30min</code>
              ). Dieser Link öffnet sich in einem neuen Tab (<code>target=&quot;_blank&quot;</code>)
              und stellt lediglich einen Verweis auf die externe Website dar – Calendly ist nicht in
              Form eines iFrames oder anderer eingebetteter Inhalte auf dieser Website integriert.
            </p>
            <p>
              Solange Sie den Link nicht anklicken, findet keine Datenübertragung an Calendly statt
              und Calendly setzt auf dieser Website keine Cookies und führt kein Tracking durch.
            </p>
            <p>
              Erst nach einem Klick auf den Link verlassen Sie unsere Website und gelangen auf das
              Angebot von Calendly, für das eine eigene Datenschutzerklärung des Anbieters gilt.
              Anbieter ist: Calendly LLC, 271 17th St NW, Suite 1000, Atlanta, GA 30363, USA.
            </p>
            <p>
              Deren Datenschutzerklärung finden Sie unter:{" "}
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
                calendly.com/privacy
              </a>
            </p>
            <p>
              <strong>5. Ihre Rechte als betroffene Person</strong>
            </p>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <ul className="bullet-list">
              <li>
                Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)
              </li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>
                Einschränkung der Verarbeitung, sofern gesetzliche Voraussetzungen vorliegen (Art.
                18 DSGVO)
              </li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
              <li>
                Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder
                ein Vertrag zur automatisierten Datenverarbeitung besteht (Art. 20 DSGVO)
              </li>
            </ul>
            <p>
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig ist die
              Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
            </p>
            <p>
              <strong>6. Aktualität und Änderung dieser Datenschutzerklärung</strong>
            </p>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig (Stand: Juli 2026). Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw.
              behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
