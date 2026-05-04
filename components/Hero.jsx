"use client";

/**
 * Premium hero with:
 * - shimmering gradient headline
 * - dual CTAs
 * - inline trust signals
 * - parallax background water layers
 * - floating "stat card"
 * - animated truck-style hero image (luxury pool photo)
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import QuoteModal from "./QuoteModal";

export default function Hero() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const layerRef = useRef(null);

  // Subtle parallax on the background water layer
  useEffect(() => {
    const onScroll = () => {
      if (!layerRef.current) return;
      layerRef.current.style.transform = `translate3d(0, ${
        window.scrollY * 0.15
      }px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Layer 1: brand radial */}
      <div className="absolute inset-0 bg-brand-radial pointer-events-none" />
      {/* Layer 2: water photo, dimmed */}
      <div
        ref={layerRef}
        className="absolute inset-0 -z-10 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
      </div>

      <div className="container-x pt-16 sm:pt-24 pb-20 sm:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 relative">
          <div className="chip mb-5 animate-rise">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
            Now booking weekly service in SW Florida
          </div>
          <h1 className="heading-xl animate-rise [animation-delay:80ms]">
            Crystal Clear Pools.{" "}
            <span className="text-glow">Reliable Service.</span>{" "}
            <span className="block sm:inline">Every Time.</span>
          </h1>
          <p className="mt-6 text-lg text-frost/80 max-w-xl animate-rise [animation-delay:160ms]">
            Trusted weekly cleaning, expert equipment repair, and spa care from
            a team that actually shows up. Licensed, insured, and locally
            owned.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-rise [animation-delay:240ms]">
            <button
              onClick={() => setQuoteOpen(true)}
              className="btn-primary"
            >
              Get a Free Quote
              <ArrowIcon className="w-4 h-4" />
            </button>
            <a href="tel:+12393780640" className="btn-ghost">
              <PhoneIcon className="w-4 h-4" />
              (239) 378-0640
            </a>
          </div>

          {/* Inline trust strip */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-frost/70 animate-rise [animation-delay:320ms]">
            <li className="flex items-center gap-2"><CheckIcon /> Licensed & Insured</li>
            <li className="flex items-center gap-2"><CheckIcon /> 5-Star Rated</li>
            <li className="flex items-center gap-2"><CheckIcon /> Same-Week Response</li>
          </ul>
        </div>

        {/* Visual card */}
        <div className="lg:col-span-5 relative animate-rise [animation-delay:200ms]">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden border border-white/10 shadow-glowStrong">
            <Image
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80"
              alt="Sparkling backyard pool serviced by Arctic Pools"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* aqua glow edge */}
            <div className="absolute inset-0 ring-1 ring-aqua/30 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

            {/* Floating stat card */}
            <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6">
              <div className="card border-aqua/30 bg-ink/60 animate-floatY">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-grad flex items-center justify-center shadow-glow">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-frost font-bold">4.9 ★ Average</div>
                    <div className="text-xs text-frost/60">From local homeowners</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-display font-extrabold text-glow">
                      500+
                    </div>
                    <div className="text-[10px] tracking-wider text-frost/60 uppercase">
                      Pools Cared For
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bubble */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-aqua/20 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-deep/40 blur-3xl" />
        </div>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}

/* ---- icons ---- */
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
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
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-aqua" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4 10-10" />
    </svg>
  );
}
function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.5l7.1-.6L12 2z" />
    </svg>
  );
}
