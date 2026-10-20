/** Mehrzeiliger Text aus Sanity: Leerzeile = neuer Absatz. */
export function Paragraphs({ text, className }: { text?: string | null; className?: string }) {
  if (!text) return null;
  return text.split(/\n\s*\n/).map((paragraph, i) => (
    <p key={i} className={className}>
      {paragraph.trim()}
    </p>
  ));
}
