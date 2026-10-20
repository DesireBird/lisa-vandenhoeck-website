import { DsNav } from "@/components/DsNav";
// Components, die nur hier gebraucht werden (Button, Card, SelectionControl, Chip lädt app/brand.css).
import "../../../../brand/design-system/src/components/Accordion.css";
import "../../../../brand/design-system/src/components/Alert.css";
import "../../../../brand/design-system/src/components/Avatar.css";
import "../../../../brand/design-system/src/components/Banner.css";
import "../../../../brand/design-system/src/components/Carousel.css";
import "../../../../brand/design-system/src/components/DisplayField.css";
import "../../../../brand/design-system/src/components/Dropdown.css";
import "../../../../brand/design-system/src/components/FormField.css";
import "../../../../brand/design-system/src/components/Header.css";
import "../../../../brand/design-system/src/components/ListItem.css";
import "../../../../brand/design-system/src/components/SectionDivider.css";
import "../../../../brand/design-system/src/components/Segmented.css";
import "../../../../brand/design-system/src/components/Toggle.css";
import "./ds.css";

/** Design-System-Bereich unter /ressourcen/design-system/: Bereichsnavigation + Seiten. */
export default function DesignSystemLayout({ children }: LayoutProps<"/ressourcen/design-system">) {
  return (
    <>
      <DsNav />
      {children}
    </>
  );
}
