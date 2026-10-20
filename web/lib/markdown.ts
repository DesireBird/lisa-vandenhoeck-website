import { Marked } from "marked";

/*
 * Component-Doku aus dem DS-Repo (docs/components/*.md, per Sync in Sanity) → HTML beim Build.
 * Der Text kommt aus dem eigenen Repo, daher ohne Sanitizer.
 */

/** Links auf andere Doku-Dateien (./dropdown.md) → Component-Seite auf der Website. */
export function markdownToHtml(markdown: string, componentPath: (file: string) => string | null) {
  const marked = new Marked({ gfm: true });
  marked.use({
    walkTokens(token) {
      if (token.type === "link") {
        const file = token.href.match(/^\.\/([a-z0-9-]+)\.md$/)?.[1];
        if (file) token.href = componentPath(file) ?? "#";
      }
    },
  });
  // Erste Überschrift = Component-Name, steht schon als Seitentitel
  const body = markdown.replace(/^\s*#\s+.*\n+/, "");
  return marked.parse(body, { async: false }) as string;
}
