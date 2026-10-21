"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  { href: "/figma-config/", label: "Figma Config: Was wirklich zählt" },
  { href: "/ki-ready/", label: "Design System, AI-Ready" },
  { href: "/bfsg/", label: "BFSG, im Design System verankert" },
];

/** Hauptnavigation mit Mobile-Toggle und Services-Dropdown (vorher scripts/site.js). */
export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Dropdown schließen bei Klick daneben oder Escape
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const closeAll = () => {
    setNavOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="container">
        <Link href="/" className="site-nav__logo">
          Vandenhoeck UX
        </Link>
        <button
          type="button"
          className={`site-nav__toggle${navOpen ? " is-expanded" : ""}`}
          aria-expanded={navOpen}
          aria-controls="siteNavList"
          aria-label={navOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            className="site-nav__toggle-icon site-nav__toggle-icon--open"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="site-nav__toggle-icon site-nav__toggle-icon--close"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav aria-label="Hauptnavigation">
          <ul className={`site-nav__list${navOpen ? " is-expanded" : ""}`} id="siteNavList">
            <li className="site-nav__item site-nav__item--dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`site-nav__link site-nav__dropdown-toggle${servicesOpen ? " is-expanded" : ""}`}
                aria-expanded={servicesOpen}
                aria-controls="servicesMenu"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg
                  className="site-nav__dropdown-icon"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <ul
                className={`site-nav__dropdown${servicesOpen ? " is-expanded" : ""}`}
                id="servicesMenu"
              >
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="site-nav__dropdown-link" onClick={closeAll}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/ressourcen/" className="site-nav__link" onClick={closeAll}>
                Ressourcen
              </Link>
            </li>
            <li>
              <Link href="/about/" className="site-nav__link" onClick={closeAll}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
