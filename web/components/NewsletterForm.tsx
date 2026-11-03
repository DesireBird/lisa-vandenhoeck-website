"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { newsletterAction, newsletterConfirmPath } from "@/lib/newsletter";

type BrevoResponse = { success?: boolean; redirect?: string; errors?: Record<string, string> };

export function NewsletterForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData();
    data.set("EMAIL", (form.elements.namedItem("EMAIL") as HTMLInputElement).value.trim());
    data.set(
      "email_address_check",
      (form.elements.namedItem("email_address_check") as HTMLInputElement).value,
    );
    data.set("locale", "de");

    setSending(true);
    setError(null);
    try {
      const response = await fetch(`${newsletterAction}?isAjax=1`, { method: "POST", body: data });
      const result: BrevoResponse = await response.json();
      if (!result.success) {
        setError(
          result.errors?.EMAIL ??
            "Das hat leider nicht geklappt. Bitte prüfe deine E-Mail-Adresse und versuche es noch einmal.",
        );
        return;
      }
      if (result.redirect) {
        window.location.assign(result.redirect);
        return;
      }
      router.push(newsletterConfirmPath);
    } catch {
      setError("Das hat leider nicht geklappt. Bitte versuche es in einem Moment noch einmal.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="newsletter__form" method="post" onSubmit={onSubmit}>
      <div className={`form-field${error ? " form-field--invalid" : ""}`}>
        <label className="form-field__label" htmlFor="newsletter-email">
          E-Mail-Adresse
        </label>
        <input
          className="form-field__input"
          id="newsletter-email"
          name="EMAIL"
          type="email"
          autoComplete="email"
          placeholder="name@firma.de"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "newsletter-error" : "newsletter-hint"}
        />
        {error ? (
          <span className="form-field__validation-message" id="newsletter-error" role="alert">
            {error}
          </span>
        ) : (
          <span className="form-field__helper" id="newsletter-hint">
            Du bekommst eine Bestätigungsmail. Abmelden geht jederzeit mit einem Klick.
          </span>
        )}
      </div>
      <input
        type="text"
        name="email_address_check"
        defaultValue=""
        className="newsletter__trap"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" required />
        <span className="checkbox__box">
          <svg className="checkbox__icon" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path
              d="M2 5.5L4.5 8L9 3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="checkbox__label">
          Ja, ich möchte den Newsletter per E-Mail erhalten und habe die{" "}
          <Link href="/datenschutz/">Datenschutzerklärung</Link> gelesen.
        </span>
      </label>
      <button
        type="submit"
        className="button button--primary button--m button--body-l"
        disabled={sending}
      >
        {sending ? "Wird gesendet …" : "Newsletter abonnieren"}
      </button>
    </form>
  );
}
