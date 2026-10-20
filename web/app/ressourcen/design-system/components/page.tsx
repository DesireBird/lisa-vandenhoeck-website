import type { Metadata } from "next";
import Link from "next/link";
import { getDsComponents } from "@/lib/designSystem";
import { dsBase, getDsContent } from "@/lib/dsContent";
import { getDsComponentDocs } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Components – Design System",
  alternates: { canonical: `${dsBase}/components/` },
};

export default async function ComponentsPage() {
  const [ds, docs] = await Promise.all([getDsContent(), getDsComponentDocs()]);
  const summaries = new Map<string, string | null>(docs.map((d) => [d.component, d.summary]));
  return (
    <section className="section section--paper">
      <div className="container">
        <h1 className="section__heading">Components</h1>
        <p className="section__lead">
          {ds.componentsIntro ??
            "Jede Component mit ihren Varianten und Zuständen – die Beispiele sind echt und bedienbar."}
        </p>
        <ul className="resource-grid">
          {getDsComponents().map((c) => (
            <li key={c.id}>
              <Link href={`${dsBase}/components/${c.id}/`} className="card card--link">
                <h2 className="card__title">{c.title}</h2>
                <p className="card__body">{summaries.get(c.id) || c.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
