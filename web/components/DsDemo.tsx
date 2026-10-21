"use client";

import { useEffect, useRef } from "react";
import { initCarousels } from "../../brand/design-system/src/scripts/carousel.js";
import { initListboxes } from "../../brand/design-system/src/scripts/listbox.js";

/*
 * Live-Beispiel einer Component aus brand/design-system/preview.html.
 * Einfache Interaktionen (Chips, Accordion, Mehrfachauswahl) stecken als onclick im HTML.
 * Select/Combobox und Carousel nutzen die Skripte aus dem Design System (src/scripts/).
 */
export function DsDemo({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    // Carousel (Wischen, Maus ziehen, Pfeiltasten, Punkte) und Select, Combobox
    // (+ List Box Items): Verhalten aus dem Design System, eine Quelle
    cleanups.push(initCarousels(root));
    cleanups.push(initListboxes(root));

    return () => cleanups.forEach((fn) => fn());
  }, [html]);

  return <div ref={ref} className="ds-demo" dangerouslySetInnerHTML={{ __html: html }} />;
}
