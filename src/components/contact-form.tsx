"use client";

import type { FormEvent } from "react";

type ContactFormProps = { email: string; endpoint: string };

export function ContactForm({ email, endpoint }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (endpoint) return;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const sender = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Website message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${sender}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" action={endpoint || undefined} method="POST" onSubmit={handleSubmit}>
      <label>Name<input name="name" type="text" autoComplete="name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="button primary" type="submit">Send message <span aria-hidden="true">↗</span></button>
    </form>
  );
}
