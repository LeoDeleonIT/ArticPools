"use client";

/**
 * Sticky, blur-on-scroll navbar with mobile drawer + always-visible
 * Call CTA. Uses Next.js Link for client-side nav.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import QuoteModal from "./QuoteModal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Arctic Pool & Spa Services"
          >
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-grad shadow-glow">
              <BubbleIcon className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight">
              <span className="text-glow">ARCTIC</span>{" "}
              <span className="text-frost/80 font-semibold hidden sm:inline">
                POOL &amp; SPA
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-frost/80 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+12393780640"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-frost hover:text-aqua transition"
            >
              <PhoneIcon className="w-4 h-4" />
              (239) 378-0640
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="btn-primary text-sm py-2 px-4 sm:py-2.5 sm:px-5"
            >
              Get a Quote
            </button>
            {/* Mobile burger */}
            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <BurgerIcon open={open} className="w-5 h-5 text-frost" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-x pb-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-frost/90 bg-white/5 hover:bg-white/10 border border-white/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+12393780640"
              className="mt-2 px-4 py-3 rounded-xl font-semibold text-aqua border border-aqua/40 bg-aqua/5"
            >
              Call (239) 378-0640
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-20" />

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

/* ---------- Inline SVG icons (no external deps) ---------- */
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}
function BubbleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="9" cy="10" r="5" opacity="0.95" />
      <circle cx="16" cy="15" r="3" opacity="0.7" />
      <circle cx="7" cy="17" r="1.6" opacity="0.6" />
    </svg>
  );
}
function BurgerIcon({ open, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
