"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Website inquiry — Arctic Pools");
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get(
        "email"
      )}\nAddress: ${f.get("address")}\n\nMessage:\n${f.get("message")}`
    );
    window.location.href = `mailto:service@arcticpools.org?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="container-x pt-12 pb-24">
      <RevealOnScroll>
        <div className="chip mb-4">GET IN TOUCH</div>
        <h1 className="heading-xl max-w-3xl">
          Let&apos;s get your <span className="text-glow">pool perfect.</span>
        </h1>
        <p className="text-muted mt-5 max-w-xl">
          Fill out the form or call us directly. We respond within one business day.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid lg:grid-cols-12 gap-8">
        {/* Form */}
        <div className="lg:col-span-7">
          <RevealOnScroll>
            <form
              onSubmit={handleSubmit}
              className="card border-aqua/20 grid sm:grid-cols-2 gap-4"
            >
              <Field name="name" label="Name" required />
              <Field name="phone" label="Phone" type="tel" required />
              <Field name="email" label="Email" type="email" className="sm:col-span-2" />
              <Field name="address" label="Service Address" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-frost/70 mb-1 block">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-frost placeholder-frost/40 focus:outline-none focus:border-aqua"
                  placeholder="Tell us about your pool, spa, or equipment issue."
                />
              </div>
              <button type="submit" className="btn-primary sm:col-span-2 mt-2">
                {sent ? "Email Opened — Hit Send" : "Send Message"}
              </button>
            </form>
          </RevealOnScroll>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-4">
          <RevealOnScroll>
            <a
              href="tel:+12393780640"
              className="card card-hover flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-xl bg-brand-grad flex items-center justify-center shadow-glow">
                <PhoneIcon className="w-5 h-5 text-white" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-frost/60">
                  Call us
                </div>
                <div className="font-display font-extrabold text-2xl text-glow">
                  (239) 378-0640
                </div>
              </div>
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <a
              href="mailto:service@arcticpools.org"
              className="card card-hover flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-xl bg-aqua/15 border border-aqua/30 flex items-center justify-center text-aqua">
                <MailIcon className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-frost/60">
                  Email
                </div>
                <div className="font-semibold text-white">
                  service@arcticpools.org
                </div>
              </div>
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <div className="card">
              <div className="text-xs uppercase tracking-wider text-frost/60 mb-2">
                Service Area
              </div>
              <p className="text-frost/85 leading-relaxed">
                Lee &amp; Collier counties — including Naples, Bonita Springs,
                Estero, Fort Myers, Cape Coral, and surrounding communities.
              </p>
              {/* Map placeholder (no API key required) */}
              <div className="mt-4 aspect-[4/3] rounded-xl border border-white/10 overflow-hidden bg-midnight/60 relative">
                <iframe
                  title="Service area map"
                  loading="lazy"
                  className="w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-82.2%2C25.9%2C-81.4%2C26.7&layer=mapnik"
                />
              </div>
            </div>
          </RevealOnScroll>
        </aside>
      </div>
    </section>
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

function PhoneIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}
function MailIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
