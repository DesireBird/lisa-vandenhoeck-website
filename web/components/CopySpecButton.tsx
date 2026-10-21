"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

/** Kopiert die Spec (Markdown aus dem DS-Repo) in die Zwischenablage. */
export function CopySpecButton({ markdown, component }: { markdown: string; component: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  // Fallback für Browser ohne Clipboard-API-Freigabe (z. B. eingebettete Ansichten)
  const copyWithTextarea = () => {
    const area = document.createElement("textarea");
    area.value = markdown;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  };

  const copy = async () => {
    trackEvent("Design System", "Copy Spec as MD", component);
    try {
      await navigator.clipboard.writeText(markdown);
      setStatus("copied");
    } catch {
      setStatus(copyWithTextarea() ? "copied" : "failed");
    }
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <button type="button" className="button button--secondary" onClick={copy}>
      <span aria-live="polite">
        {status === "copied" ? "Kopiert" : status === "failed" ? "Kopieren fehlgeschlagen" : "Copy Spec as MD"}
      </span>
    </button>
  );
}
