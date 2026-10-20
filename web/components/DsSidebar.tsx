"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Navigation des Design-System-Bereichs mit der Sidebar-Component aus dem Design System
 * (brand/design-system/src/components/Sidebar.css, Markup wie in preview.html):
 * Desktop schmale Leiste + Drawer (Level 2), mobil Topbar mit Burger + Overlay.
 * Verhalten aus dem Skript von preview.html portiert; Drawer öffnen zusätzlich per Klick/Tastatur.
 */

export type DsNavLink = { href: string; label: string };
export type DsNavSection = {
  key: string;
  label: string;
  icon: ReactNode;
  href: string;
  /** Unterseiten im Drawer; leer = einfacher Link ohne Drawer */
  children: DsNavLink[];
};

const CLOSE_DELAY = 120;

const chevronRight = (
  <svg className="sidebar__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const chevronDown = (
  <svg className="sidebar-overlay__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function DsSidebar({
  sections,
  children,
}: {
  sections: DsNavSection[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySub, setOverlaySub] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;
  const inSection = (s: DsNavSection) =>
    s.children.length ? pathname.startsWith(s.href) : pathname === s.href;
  const current = sections.find(inSection);

  // Seitenwechsel: Drawer und Overlay schließen (State beim Rendern zurücksetzen, ohne Effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenDrawer(null);
    setOverlayOpen(false);
  }

  // Overlay: Body nicht scrollen; Escape schließt Drawer und Overlay
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDrawer(null);
        setOverlayOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [overlayOpen]);

  // Linke Kante des zentrierten Containers → Drawer daneben positionieren (ds.css)
  useEffect(() => {
    const shell = shellRef.current;
    const body = shell?.querySelector<HTMLElement>(".app-body");
    if (!shell || !body) return;
    const update = () =>
      shell.style.setProperty("--ds-shell-left", `${body.getBoundingClientRect().left}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  // Höhe des sticky Website-Headers → Sidebar und Drawer beginnen darunter (ds.css)
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-nav");
    const shell = shellRef.current;
    if (!header || !shell) return;
    const update = () => shell.style.setProperty("--ds-header-offset", `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const open = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDrawer(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDrawer(null), CLOSE_DELAY);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const overlaySubOpen = (s: DsNavSection) => overlaySub[s.key] ?? inSection(s);

  return (
    <div className="ds-shell" ref={shellRef}>
      {/* Mobile Topbar */}
      <div className="sidebar-topbar">
        <button
          type="button"
          className="sidebar-burger"
          aria-label="Navigation öffnen"
          aria-expanded={overlayOpen}
          aria-controls="ds-sidebar-overlay"
          onClick={() => setOverlayOpen(true)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <span className="sidebar-topbar__title">{current?.label ?? "Design System"}</span>
      </div>

      <div className="app-body">
        <aside className="sidebar" onMouseLeave={scheduleClose}>
          <nav className="sidebar__nav" aria-label="Design System">
            <ul className="sidebar__list">
              {sections.map((s) => {
                if (!s.children.length) {
                  return (
                    <li key={s.key} className="sidebar__item">
                      <Link
                        href={s.href}
                        className={`sidebar__link${isActive(s.href) ? " sidebar__link--current" : ""}`}
                        aria-current={isActive(s.href) ? "page" : undefined}
                      >
                        {s.icon}
                        <span className="sidebar__label">{s.label}</span>
                      </Link>
                    </li>
                  );
                }
                const drawerId = `ds-drawer-${s.key}`;
                const opened = openDrawer === s.key;
                return (
                  <li
                    key={s.key}
                    className={`sidebar__item sidebar__item--has-children${opened ? " is-expanded" : ""}`}
                    onMouseEnter={() => open(s.key)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      className={`sidebar__link${inSection(s) ? " sidebar__link--has-current" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={opened}
                      aria-controls={drawerId}
                      onClick={() => (opened ? setOpenDrawer(null) : open(s.key))}
                    >
                      {s.icon}
                      <span className="sidebar__label">{s.label}</span>
                      {chevronRight}
                    </button>
                    <div
                      className="sidebar__drawer"
                      id={drawerId}
                      role="region"
                      aria-label={`${s.label} Untermenü`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="sidebar__drawer-heading">{s.label}</div>
                      <ul className="sidebar__drawer-list">
                        <li>
                          <Link
                            href={s.href}
                            className={`sidebar__drawer-link${isActive(s.href) ? " sidebar__drawer-link--current" : ""}`}
                            aria-current={isActive(s.href) ? "page" : undefined}
                          >
                            Übersicht
                          </Link>
                        </li>
                        {s.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`sidebar__drawer-link${isActive(c.href) ? " sidebar__drawer-link--current" : ""}`}
                              aria-current={isActive(c.href) ? "page" : undefined}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="app-content">{children}</div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay${overlayOpen ? " is-open" : ""}`}
        id="ds-sidebar-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="sidebar-overlay__panel">
          <ul className="sidebar-overlay__list">
            {sections.map((s) => {
              if (!s.children.length) {
                return (
                  <li key={s.key}>
                    <Link
                      href={s.href}
                      className={`sidebar-overlay__link${isActive(s.href) ? " sidebar-overlay__link--current" : ""}`}
                      aria-current={isActive(s.href) ? "page" : undefined}
                      onClick={() => setOverlayOpen(false)}
                    >
                      {s.icon}
                      {s.label}
                    </Link>
                  </li>
                );
              }
              const subId = `ds-overlay-sub-${s.key}`;
              const subOpen = overlaySubOpen(s);
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    className={`sidebar-overlay__toggle${inSection(s) ? " sidebar-overlay__toggle--has-current" : ""}`}
                    aria-expanded={subOpen}
                    aria-controls={subId}
                    onClick={() => setOverlaySub((prev) => ({ ...prev, [s.key]: !subOpen }))}
                  >
                    <span className="sidebar-overlay__toggle-inner">
                      {s.icon}
                      {s.label}
                    </span>
                    {chevronDown}
                  </button>
                  <ul className={`sidebar-overlay__sub${subOpen ? " is-expanded" : ""}`} id={subId}>
                    {[{ href: s.href, label: "Übersicht" }, ...s.children].map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className={`sidebar-overlay__sub-link${isActive(c.href) ? " sidebar-overlay__sub-link--current" : ""}`}
                          aria-current={isActive(c.href) ? "page" : undefined}
                          onClick={() => setOverlayOpen(false)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-overlay__backdrop" onClick={() => setOverlayOpen(false)} />
      </div>
    </div>
  );
}
