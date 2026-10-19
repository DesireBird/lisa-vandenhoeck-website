"use client";

import { useEffect } from "react";

/**
 * Interaktionen der Startseite, 1:1 aus dem früheren Inline-Skript in index.html:
 * Tilt-Card, Self-Check-Zähler, Value-Props-Scrollytelling, Zitat-Reveal.
 * Arbeitet über die IDs im Markup von app/page.tsx.
 */
export function HomeEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | HTMLElement,
      type: K,
      fn: (e: WindowEventMap[K]) => void,
      opts?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, fn as EventListener, opts);
      cleanups.push(() => target.removeEventListener(type, fn as EventListener, opts));
    };

    // ── Tilt Card ──
    const card = document.getElementById("tiltCard");
    const visual = card?.parentElement;
    if (card && visual) {
      on(visual, "mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rotY = ((e.clientX - cx) / (rect.width / 2)) * 14;
        const rotX = -((e.clientY - cy) / (rect.height / 2)) * 10;
        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      on(visual, "mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        card.style.transition = "transform 400ms ease-out";
        setTimeout(() => {
          card.style.transition = "transform 60ms ease-out";
        }, 420);
      });
    }

    // ── Self-Check Counter ──
    const items = Array.from(document.querySelectorAll<HTMLInputElement>(".check-item"));
    const counter = document.getElementById("checkCounter");
    const cta = document.getElementById("checkCta");
    if (items.length && counter && cta) {
      const update = () => {
        const count = items.filter((cb) => cb.checked).length;
        if (count >= 3) {
          counter.textContent = "Das lässt sich ändern.";
          cta.removeAttribute("hidden");
        } else {
          counter.textContent = `${count}/6 Wähle die Punkte aus, die auf euch zutreffen`;
          cta.setAttribute("hidden", "");
        }
      };
      items.forEach((cb) => on(cb, "change", update));
    }

    // Scroll-gesteuerte Effekte: per requestAnimationFrame gedrosselt
    const onScrollFrame = (update: () => void) => {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            ticking = false;
            update();
          });
          ticking = true;
        }
      };
      on(window, "scroll", onScroll, { passive: true });
      on(window, "resize", onScroll);
      on(window, "load", onScroll);
      update();
    };

    // ── Value-Props Scrollytelling (Desktop) ──
    // Track wird entlang des Scroll-Fortschritts per translateY verschoben; das Fenster ist
    // etwas höher als eine Karte, damit die nächste Karte unten schon „peekt“.
    const runway = document.getElementById("scrollytellingRunway");
    const win = document.getElementById("scrollytellingCards");
    const track = document.getElementById("scrollCardTrack");
    if (runway && win && track) {
      const cards = Array.from(track.querySelectorAll<HTMLElement>(".scroll-card"));
      const peekPx = 48;
      const gapPx = () => {
        const g = parseFloat(getComputedStyle(track).rowGap || getComputedStyle(track).gap || "0");
        return isNaN(g) ? 0 : g;
      };
      onScrollFrame(() => {
        if (window.innerWidth <= 768) {
          win.style.height = "";
          track.style.transform = "";
          return;
        }
        const cardSize = cards[0].getBoundingClientRect().height;
        win.style.height = `${cardSize + peekPx}px`;
        const rect = runway.getBoundingClientRect();
        const scrollable = runway.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, scrollable > 0 ? -rect.top / scrollable : 0));
        const offset = progress * (cards.length - 1) * (cardSize + gapPx());
        track.style.transform = `translateY(${-offset}px)`;
      });
    }

    // ── Zitat: Wort-für-Wort Scroll-Reveal (Pin) ──
    // Wörter sind in app/page.tsx schon als .quote-word gerendert.
    const quoteRunway = document.getElementById("quoteRunway");
    const words = Array.from(document.querySelectorAll<HTMLElement>("#quoteText .quote-word"));
    if (quoteRunway && words.length) {
      onScrollFrame(() => {
        if (window.innerWidth <= 768) return;
        const rect = quoteRunway.getBoundingClientRect();
        const scrollable = quoteRunway.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, scrollable > 0 ? -rect.top / scrollable : 0));
        const revealFloat = progress * words.length;
        words.forEach((word, i) => {
          const p =
            i < Math.floor(revealFloat) ? 1 : i === Math.floor(revealFloat) ? revealFloat - i : 0;
          word.style.setProperty("--word-progress", String(p));
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
