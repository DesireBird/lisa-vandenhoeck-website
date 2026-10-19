import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section section--paper">
      <div
        className="container narrative"
        style={{ textAlign: "center", marginBlock: "var(--space-layout-lg)" }}
      >
        <h1 className="narrative__heading">Hier ist leider nichts</h1>
        <div className="narrative__body">
          <p>Diese Seite gibt es nicht (mehr).</p>
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
  );
}
