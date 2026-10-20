import { cache } from "react";
import { getDesignSystem } from "./queries";

/** Ersatzwerte, solange das Design-System-Dokument in Sanity (noch) leer ist. */
const fallback = {
  title: "Design System",
  teaser: "Tokens, Components und Patterns meines Design Systems – mit Live-Beispielen.",
};

export const getDsContent = cache(async () => {
  const ds = await getDesignSystem();
  return {
    title: ds?.title || fallback.title,
    teaser: ds?.teaser || fallback.teaser,
    cover: ds?.cover ?? null,
    intro: ds?.intro ?? null,
    foundationIntro: ds?.foundationIntro ?? null,
    componentsIntro: ds?.componentsIntro ?? null,
    patternsIntro: ds?.patternsIntro ?? null,
    seo: ds?.seo ?? null,
  };
});

export const dsBase = "/ressourcen/design-system";
