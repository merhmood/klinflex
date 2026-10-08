"use client";

import { useState } from "react";

const topics = [
  "Vessel chartering",
  "ROV services",
  "EPCI project",
  "Manpower supply",
  "Tender or bid support",
  "Registration and compliance",
];

export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `${f.get("topic")} enquiry from ${f.get("name")}`;
    const body = `${f.get("message")}\n\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nReply to: ${f.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-sm border border-line bg-navy px-4 py-3 text-bone placeholder:text-steel/60 focus:border-flare focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm text-steel">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm text-steel">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm text-steel sm:col-span-2">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm text-steel sm:col-span-2">
        What do you need?
        <select name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="text-sm text-steel sm:col-span-2">
        Project details
        <textarea name="message" required rows={5} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          className="rounded-sm bg-flare px-6 py-3 font-medium text-abyss transition-colors hover:bg-bone"
        >
          Send enquiry
        </button>
        {sent && (
          <p role="status" className="text-sm text-steel">
            Your email app should open with the message ready. If it does not, write to {email}.
          </p>
        )}
      </div>
    </form>
  );
}
