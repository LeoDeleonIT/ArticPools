"use client";

/**
 * Lightweight quote-request modal. Submits to a `mailto:` for now —
 * swap the handler for a real API/Cloudflare Worker later.
 */

import { useEffect, useState } from "react";

export default function QuoteModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Pool service quote request");
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get(
        "email"
      )}\nAddress: ${f.get("address")}\nService: ${f.get(
        "service"
      )}\nNotes: ${f.get("notes")}`
    );
    window.location.href = `mailto:service@arcticpools.org?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg card border-aqua/30 shadow-glowStrong animate-rise">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth="2" fill="none">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {!sent ? (
          <>
            <div className="chip mb-3">FREE QUOTE</div>
            <h3 className="heading-lg mb-2">Tell us about your pool</h3>
            <p className="text-muted text-sm mb-5">
              We&apos;ll respond within one business day. Or call us now at{" "}
              <a href="tel:+12393780640" className="text-aqua font-semibold">
                (239) 378-0640
              </a>
              .
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
              <Field name="name" label="Name" required />
              <Field name="phone" label="Phone" required type="tel" />
              <Field name="email" label="Email" type="email" className="col-span-2" />
              <Field name="address" label="Service Address" className="col-span-2" />
              <div className="col-span-2">
                <label className="text-xs font-semibold text-frost/70 mb-1 block">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-frost focus:outline-none focus:border-aqua"
                  defaultValue="Pool Cleaning"
                >
                  <option>Pool Cleaning</option>
                  <option>Maintenance Plan</option>
                  <option>Equipment Repair</option>
                  <option>Spa Services</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-xs font-semibold text-frost/70 mb-1 block">
                  Notes (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-frost focus:outline-none focus:border-aqua"
                  placeholder="Anything we should know?"
                />
              </div>
              <button type="submit" className="btn-primary col-span-2 mt-2">
                Send Request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto w-14 h-14 rounded-full bg-aqua/15 border border-aqua/40 flex items-center justify-center mb-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-aqua" stroke="currentColor" strokeWidth="2" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="heading-lg mb-2">Thanks — your email is open</h3>
            <p className="text-muted">
              Hit send and we&apos;ll get back to you fast.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ name, label, type = "text", required, className = "" }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold text-frost/70 mb-1 block">
        {label} {required && <span className="text-aqua">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-frost placeholder-frost/40 focus:outline-none focus:border-aqua"
      />
    </div>
  );
}
