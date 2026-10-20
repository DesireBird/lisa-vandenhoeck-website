import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groupTokens, TokenList } from "@/components/TokenList";
import { foundationCategories, tokensFor } from "@/lib/designSystem";
import { dsBase } from "@/lib/dsContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return foundationCategories.map(({ slug }) => ({ category: slug }));
}

const find = (slug: string) => foundationCategories.find((c) => c.slug === slug);

export async function generateMetadata({
  params,
}: PageProps<"/ressourcen/design-system/foundation/[category]">): Promise<Metadata> {
  const category = find((await params).category);
  if (!category) return {};
  return {
    title: `${category.title} – Design System`,
    description: category.lead,
    alternates: { canonical: `${dsBase}/foundation/${category.slug}/` },
  };
}

export default async function FoundationCategoryPage({
  params,
}: PageProps<"/ressourcen/design-system/foundation/[category]">) {
  const category = find((await params).category);
  if (!category) notFound();
  const tokens = await tokensFor(...category.prefixes);
  // Farben nach Rampe/Rolle (color.accent1), sonst nach oberster Gruppe (space, size …)
  // Gruppen in der Reihenfolge der Kategorie-Präfixe (font vor fontSize …), nicht wie in tokens.json
  const rank = (group: string) =>
    category.prefixes.findIndex((p) => group === p || group.startsWith(`${p}.`));
  const groups = groupTokens(tokens, category.slug === "farben" ? 2 : 1).sort(
    ([a], [b]) => rank(a) - rank(b),
  );
  return (
    <section className="section section--white">
      <div className="container">
        <Link href={`${dsBase}/foundation/`} className="ds-back">
          ← Foundation
        </Link>
        <h1 className="section__heading">{category.title}</h1>
        <p className="section__lead">{category.lead}</p>
        {groups.map(([group, groupTokens]) => (
          <div key={group} className="ds-token-group">
            <h2 className="ds-token-group__heading">{group}</h2>
            <TokenList tokens={groupTokens} />
          </div>
        ))}
      </div>
    </section>
  );
}
