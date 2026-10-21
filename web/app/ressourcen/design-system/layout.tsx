import type { ReactNode } from "react";
import { DsSidebar, type DsNavSection } from "@/components/DsSidebar";
import { foundationCategories, getDsComponents } from "@/lib/designSystem";
import { dsBase } from "@/lib/dsContent";
import { getDsPatterns } from "@/lib/queries";
// Components, die nur hier gebraucht werden (Button, Card, SelectionControl, Chip lädt app/brand.css).
import "../../../../brand/design-system/src/components/Accordion.css";
import "../../../../brand/design-system/src/components/Alert.css";
import "../../../../brand/design-system/src/components/Avatar.css";
import "../../../../brand/design-system/src/components/Banner.css";
import "../../../../brand/design-system/src/components/Carousel.css";
import "../../../../brand/design-system/src/components/DisplayField.css";
import "../../../../brand/design-system/src/components/FormField.css";
import "../../../../brand/design-system/src/components/ListBoxItem.css";
import "../../../../brand/design-system/src/components/Select.css";
import "../../../../brand/design-system/src/components/Combobox.css";
import "../../../../brand/design-system/src/components/Header.css";
import "../../../../brand/design-system/src/components/ListItem.css";
import "../../../../brand/design-system/src/components/SectionDivider.css";
import "../../../../brand/design-system/src/components/Sidebar.css";
import "../../../../brand/design-system/src/components/Segmented.css";
import "../../../../brand/design-system/src/components/Toggle.css";
import "../../../../brand/design-system/src/docs/Playground.css";
import "./ds.css";

// Icons wie in brand/design-system/preview.html
const icon = (path: ReactNode) => (
  <svg
    className="sidebar__icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    {path}
  </svg>
);
const stroke = { stroke: "currentColor", strokeWidth: 1.5 } as const;

/** Design-System-Bereich unter /ressourcen/design-system/: Sidebar aus dem Design System + Seiten. */
export default async function DesignSystemLayout({
  children,
}: LayoutProps<"/ressourcen/design-system">) {
  const patterns = await getDsPatterns();
  const sections: DsNavSection[] = [
    {
      key: "overview",
      label: "Übersicht",
      href: `${dsBase}/`,
      icon: icon(
        <>
          <path d="M2 6.5L8 2l6 4.5V14H2V6.5z" {...stroke} strokeLinejoin="round" />
          <path d="M6 14v-4h4v4" {...stroke} strokeLinejoin="round" />
        </>,
      ),
      children: [],
    },
    {
      key: "foundation",
      label: "Foundation",
      href: `${dsBase}/foundation/`,
      icon: icon(<path d="M8 2L14 8L8 14L2 8L8 2z" {...stroke} strokeLinejoin="round" />),
      children: foundationCategories.map((c) => ({
        href: `${dsBase}/foundation/${c.slug}/`,
        label: c.title,
      })),
    },
    {
      key: "components",
      label: "Components",
      href: `${dsBase}/components/`,
      icon: icon(
        <>
          <rect x="2" y="2" width="5" height="5" rx="1" {...stroke} />
          <rect x="9" y="2" width="5" height="5" rx="1" {...stroke} />
          <rect x="2" y="9" width="5" height="5" rx="1" {...stroke} />
          <rect x="9" y="9" width="5" height="5" rx="1" {...stroke} />
        </>,
      ),
      children: getDsComponents().map((c) => ({
        href: `${dsBase}/components/${c.id}/`,
        label: c.title,
      })),
    },
    {
      key: "patterns",
      label: "Patterns",
      href: `${dsBase}/patterns/`,
      icon: icon(<path d="M3 4h10M3 8h7M3 12h9" {...stroke} strokeLinecap="round" />),
      children: patterns.map((p) => ({
        href: `${dsBase}/patterns/${p.slug}/`,
        label: p.title,
      })),
    },
  ];
  return <DsSidebar sections={sections}>{children}</DsSidebar>;
}
