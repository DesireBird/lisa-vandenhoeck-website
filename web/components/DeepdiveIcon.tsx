import type { ReactElement } from "react";

// Icons der Problem-Karten auf Deepdive-Seiten. Auswahl im Studio (deepdive.problemCards[].icon).
// Strich-/Füllfarben nur über Tokens.
export const deepdiveIcons: Record<string, ReactElement> = {
  "trophy-crossed": (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 5H19L17 13H11L9 5Z"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 7C6 7 6 11 9.5 11"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 7C22 7 22 11 18.5 11"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14 13V17" style={{ stroke: "var(--color-neutral-dark-400)" }} strokeWidth="1.5" />
      <path
        d="M11 17H17"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 21H19"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="23"
        x2="24"
        y2="4"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  shapes: (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="10"
        height="10"
        rx="2"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <circle
        cx="14"
        cy="9"
        r="1.8"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <rect
        x="15"
        y="13"
        width="10"
        height="10"
        rx="2"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <circle
        cx="15"
        cy="16"
        r="1.8"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
    </svg>
  ),
  stopwatch: (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="14"
        cy="16"
        r="8"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <path
        d="M14 16V11"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 16L17 18"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 4H17"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14 4V6" style={{ stroke: "var(--color-neutral-dark-400)" }} strokeWidth="1.5" />
      <path
        d="M21 8L23 6"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "dot-grid": (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="16"
        height="16"
        rx="3"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <circle cx="10.5" cy="10.5" r="1.2" style={{ fill: "var(--color-neutral-dark-400)" }} />
      <circle cx="17.5" cy="10.5" r="1.2" style={{ fill: "var(--color-fill-accent1-solid)" }} />
      <circle cx="14" cy="14" r="1.2" style={{ fill: "var(--color-neutral-dark-400)" }} />
      <circle cx="10.5" cy="17.5" r="1.2" style={{ fill: "var(--color-fill-accent1-solid)" }} />
      <circle cx="17.5" cy="17.5" r="1.2" style={{ fill: "var(--color-neutral-dark-400)" }} />
    </svg>
  ),
  document: (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 4H16L20 8V24H9V4Z"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 4V8H20"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 13H17.5"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 16.5H17.5"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 20H15"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  contrast: (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="14"
        cy="14"
        r="9"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <path
        d="M14 5A9 9 0 0 1 14 23"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
      />
      <path
        d="M9 9L19 19M19 9L9 19"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "text-size": (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 20L10 8H12L16 20"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16H14.5"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <path
        d="M18 11L22 20"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 20L23 20"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "image-audio": (
    <svg
      className="symptom-card__icon"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="14"
        height="11"
        rx="2"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <circle
        cx="8.5"
        cy="10.5"
        r="1.3"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
      />
      <path
        d="M4 15L9 11L13 14L18 10"
        style={{ stroke: "var(--color-neutral-dark-400)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8C23 9.5 23 15.5 21 17"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M23.5 6C26.5 8.5 26.5 16.5 23.5 19"
        style={{ stroke: "var(--color-border-accent1)" }}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};
