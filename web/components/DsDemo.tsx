"use client";

import { useEffect, useRef } from "react";
import { initCarousels } from "../../brand/design-system/src/scripts/carousel.js";
import { initListboxes } from "../../brand/design-system/src/scripts/listbox.js";
import { initPlaygrounds } from "../../brand/design-system/src/scripts/playground.js";

/*
 * Live-Beispiel einer Component aus brand/design-system/preview.html.
 * Einfache Interaktionen (Chips, Accordion, Mehrfachauswahl) stecken als onclick im HTML.
 * Select/Combobox, Carousel und Playground nutzen die Skripte aus dem Design System (src/scripts/).
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
    // Playground (State + Properties) für Components mit Spec; danach, da er eigene Listboxen startet
    cleanups.push(initPlaygrounds(root));

    return () => cleanups.forEach((fn) => fn());
  }, [html]);

  return <div ref={ref} className="ds-demo" dangerouslySetInnerHTML={{ __html: html }} />;
}
