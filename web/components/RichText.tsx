import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { BlockContent, Figure, SimpleText } from "@/lib/sanity.types";
import { SanityImg } from "./SanityImg";

const components: PortableTextComponents = {
  types: {
    figure: ({ value }: { value: Figure }) => (
      <figure className="rich-text__figure">
        <SanityImg image={value} sizes="(min-width: 768px) 720px, 100vw" />
        {value.caption ? <figcaption>{value.caption}</figcaption> : null}
      </figure>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  },
};

/** Portable Text aus Sanity (Seiten, Ressourcen, kurze Texte in Deepdives). */
export function RichText({ value }: { value?: BlockContent | SimpleText | null }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
