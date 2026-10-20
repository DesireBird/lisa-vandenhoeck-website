import type { Metadata } from "next";
import Link from "next/link";
import { foundationCategories, tokensFor } from "@/lib/designSystem";
import { dsBase, getDsContent } from "@/lib/dsContent";

export const metadata: Metadata = {
  title: "Foundation – Design System",
  alternates: { canonical: `${dsBase}/foundation/` },
};

export default async function FoundationPage() {
  const ds = await getDsContent();
  const counts = await Promise.all(
    foundationCategories.map(async (c) => (await tokensFor(...c.prefixes)).length),
  );
  return (
    <section className="section section--paper">
      <div className="container">
        <h1 className="section__heading">Foundation</h1>
        <p className="section__lead">
          {ds.foundationIntro ??
            "Alle Werte kommen direkt aus den Design Tokens – was hier steht, ist das, was im Code gilt."}
        </p>
        <ul className="resource-grid">
          {foundationCategories.map((c, i) => (
            <li key={c.slug}>
              <Link href={`${dsBase}/foundation/${c.slug}/`} className="card card--link">
                <span className="ds-card__meta">{counts[i]} Tokens</span>
                <h2 className="card__title">{c.title}</h2>
                <p className="card__body">{c.lead}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
