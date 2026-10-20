import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deep-Dives",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Baustelle ──────────────────────────────────────────── */}
      <section className="section section--paper">
        <div
          className="container narrative"
          style={{
            textAlign: "center",
            marginTop: "var(--space-layout-l)",
            marginBottom: "var(--space-layout-l)",
          }}
        >
          <span className="flag flag--neutral">Deep-Dives</span>
          <h1 className="narrative__heading" style={{ marginTop: "var(--space-gap-m)" }}>
            Diese Seite ist noch im Aufbau
          </h1>
          <div className="narrative__body">
            <p>
              Was Gutes braucht Zeit. Eine Standard-Seite wollte ich hier nicht vorsetzen – deshalb
              baue ich noch ein bisschen länger.
            </p>
          </div>
          <Link
            href="/"
            className="button button--secondary"
            style={{ marginTop: "var(--space-layout-s)" }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </>
  );
}
