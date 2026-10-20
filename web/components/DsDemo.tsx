"use client";

import { useEffect, useRef } from "react";

/*
 * Live-Beispiel einer Component aus brand/design-system/preview.html.
 * Einfache Interaktionen (Chips, Accordion, Mehrfachauswahl) stecken als onclick im HTML.
 * Dropdown und Carousel brauchen das Verhalten aus dem Skript von preview.html – hier portiert.
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

    // Dropdown / Select / Combobox
    root.querySelectorAll<HTMLElement>(".dropdown").forEach((wrapper) => {
      const isCombobox = wrapper.classList.contains("dropdown--combobox");
      const trigger = wrapper.querySelector<HTMLElement>(".dropdown__trigger");
      const input = wrapper.querySelector<HTMLInputElement>(".dropdown__input");
      const list = wrapper.querySelector<HTMLElement>(".dropdown__list");
      if (!list) return;
      const options = Array.from(list.querySelectorAll<HTMLElement>(".dropdown__option"));
      const control = isCombobox ? input : trigger;
      const placeholder = trigger?.dataset.placeholder ?? "";

      if (trigger) {
        trigger.textContent = placeholder;
        trigger.classList.toggle("is-placeholder", !!placeholder);
      }
      const open = () => {
        wrapper.classList.add("is-open");
        control?.setAttribute("aria-expanded", "true");
      };
      const close = () => {
        wrapper.classList.remove("is-open");
        control?.setAttribute("aria-expanded", "false");
      };
      const filterOptions = (query: string) => {
        const q = query.trim().toLowerCase();
        let anyVisible = false;
        options.forEach((opt) => {
          const visible =
            opt.classList.contains("dropdown__option--none") ||
            (opt.textContent ?? "").trim().toLowerCase().includes(q);
          opt.style.display = visible ? "" : "none";
          if (visible) anyVisible = true;
        });
        let empty = list.querySelector<HTMLElement>(".dropdown__empty");
        if (!anyVisible) {
          if (!empty) {
            empty = document.createElement("li");
            empty.className = "dropdown__empty";
            empty.textContent = "Keine Ergebnisse";
            list.appendChild(empty);
          }
          empty.style.display = "";
        } else if (empty) {
          empty.style.display = "none";
        }
      };
      const select = (opt: HTMLElement) => {
        options.forEach((o) => o.setAttribute("aria-selected", "false"));
        opt.setAttribute("aria-selected", "true");
        const isNone = opt.classList.contains("dropdown__option--none");
        if (trigger) {
          trigger.textContent = (opt.textContent ?? "").trim();
          trigger.classList.toggle("is-placeholder", isNone);
        }
        if (input) {
          input.value = isNone ? "" : (opt.textContent ?? "").trim();
          filterOptions("");
        }
        close();
      };

      if (trigger)
        on(trigger, "click", () => (wrapper.classList.contains("is-open") ? close() : open()));
      if (input) {
        on(input, "focus", open);
        on(input, "input", () => {
          filterOptions(input.value);
          open();
        });
      }
      options.forEach((opt) =>
        on(opt, "mousedown", (e) => {
          e.preventDefault();
          select(opt);
        }),
      );
      on(document, "click", (e) => {
        if (!wrapper.contains(e.target as Node)) close();
      });
      on(document, "keydown", (e) => {
        if (e.key === "Escape" && wrapper.classList.contains("is-open")) close();
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [html]);

  return <div ref={ref} className="ds-demo" dangerouslySetInnerHTML={{ __html: html }} />;
}
