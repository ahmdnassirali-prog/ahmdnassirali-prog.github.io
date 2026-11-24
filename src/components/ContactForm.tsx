"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

/**
 * Real behaviour, no backend required:
 *  - If `site.contact.formEndpoint` is set (e.g. Formspree), the form POSTs there.
 *  - Otherwise it opens the visitor's email app with the message filled in.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const endpoint = site.contact.formEndpoint;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const need = String(data.get("need") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({ kind: "error", message: "Please fill in your name, email and a short message." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ kind: "error", message: "That email address doesn't look right." });
      return;
    }

    if (endpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, need, message }),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus({ kind: "sent", message: "Thank you. Your message has been sent, I will reply soon." });
      } catch {
        setStatus({
          kind: "error",
          message: `Something went wrong sending the form. Please email ${site.contact.email} directly.`,
        });
      }
      return;
    }

    const subject = `Website enquiry from ${name}${need ? ` (${need})` : ""}`;
    const body = `${message}\n\nName: ${name}\nEmail: ${email}${need ? `\nInterested in: ${need}` : ""}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      kind: "sent",
      message: "Your email app should now be open with the message ready. Just press send.",
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7" aria-describedby="form-note">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-bone-soft">Your name</span>
          <input name="name" type="text" autoComplete="name" required className="field" placeholder="Full name" />
        </label>
        <label className="block">
          <span className="text-sm text-bone-soft">Email</span>
          <input name="email" type="email" autoComplete="email" required className="field" placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm text-bone-soft">What do you need?</span>
        <select name="need" className="field" defaultValue="">
          <option value="">Choose one (optional)</option>
          {site.services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm text-bone-soft">Tell me about your project</span>
        <textarea
          name="message"
          required
          rows={4}
          className="field resize-y"
          placeholder="Your business, what the website should do, any deadline."
        />
      </label>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
        <button type="submit" className="btn btn-solid disabled:opacity-60" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"}
          <span className="arrow" aria-hidden="true">→</span>
        </button>
        <p id="form-note" className="text-sm text-bone-soft">
          {endpoint ? "Your message is sent securely." : "Opens your email app with your message ready to send."}
        </p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-[1.5rem] text-sm ${status.kind === "error" ? "text-[#f4a38c]" : "text-accent-light"}`}
      >
        {status.message}
      </p>
    </form>
  );
}
