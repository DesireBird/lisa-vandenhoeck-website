import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressourcen",
  alternates: { canonical: "/ressourcen/" },
};

export default function RessourcenPage() {
  return (
    <>
      {/* ── Baustelle ──────────────────────────────────────────── */}
      <section className="section section--paper">
        <div
          className="container narrative"
          style={{
            textAlign: "center",
            marginTop: "var(--space-layout-lg)",
            marginBottom: "var(--space-layout-lg)",
          }}
        >
          <span className="flag flag--neutral">Ressourcen</span>
          <h1 className="narrative__heading" style={{ marginTop: "var(--space-gap-md)" }}>
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
            className="btn btn--secondary"
            style={{ marginTop: "var(--space-layout-sm)" }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </>
  );
}
