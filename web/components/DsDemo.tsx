"use client";

import { useEffect, useRef } from "react";
import { initListboxes } from "../../brand/design-system/src/scripts/listbox.js";

/*
 * Live-Beispiel einer Component aus brand/design-system/preview.html.
 * Einfache Interaktionen (Chips, Accordion, Mehrfachauswahl) stecken als onclick im HTML.
 * Select/Combobox nutzen src/scripts/listbox.js aus dem Design System; das Carousel-Verhalten
 * ist aus dem Skript von preview.html portiert.
 */
export function DsDemo({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof DocumentEventMap>(
      target: Document | HTMLElement,
      type: K,
      fn: (e: DocumentEventMap[K]) => void,
    ) => {
      target.addEventListener(type, fn as EventListener);
      cleanups.push(() => target.removeEventListener(type, fn as EventListener));
    };

    // Carousel: Scroll ↔ Punkte
    root.querySelectorAll<HTMLElement>(".carousel").forEach((carousel) => {
      const track = carousel.querySelector<HTMLElement>(".carousel__track");
      const dots = carousel.querySelectorAll<HTMLElement>(".carousel__dot");
      if (!track) return;
      on(track, "scroll", () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        dots.forEach((d, j) =>
          j === i ? d.setAttribute("aria-current", "true") : d.removeAttribute("aria-current"),
        );
      });
      dots.forEach((d, j) =>
        on(d, "click", () => track.scrollTo({ left: j * track.clientWidth, behavior: "smooth" })),
      );
    });

    // Select, Combobox (+ List Box Items): Verhalten aus dem Design System, eine Quelle
    cleanups.push(initListboxes(root));

    return () => cleanups.forEach((fn) => fn());
  }, [html]);

  return <div ref={ref} className="ds-demo" dangerouslySetInnerHTML={{ __html: html }} />;
}
