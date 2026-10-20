"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dsBase } from "@/lib/dsContent";

const items = [
  { href: `${dsBase}/`, label: "Übersicht", exact: true },
  { href: `${dsBase}/foundation/`, label: "Foundation" },
  { href: `${dsBase}/components/`, label: "Components" },
  { href: `${dsBase}/patterns/`, label: "Patterns" },
];

/** Bereichsnavigation im Design System. Aktiver Eintrag als Selection-State (accent2). */
export function DsNav() {
  const pathname = usePathname();
  return (
    <nav className="ds-nav" aria-label="Design System">
      <div className="container">
        <ul className="ds-nav__list">
          {items.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="ds-nav__link"
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
