"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import QuoteModal from "./QuoteModal";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-aqua/30 p-10 sm:p-16 bg-gradient-to-br from-deep via-midnight to-ink">
            {/* glow rings */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-aqua/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-deep/60 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 water-grid opacity-40 pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="chip mb-4">READY WHEN YOU ARE</div>
                <h2 className="heading-xl">
                  Ready for a <span className="text-glow">cleaner pool?</span>
                </h2>
                <p className="text-muted mt-4 max-w-md">
                  Book a free quote in under a minute. Or just call — we
                  actually pick up.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-3">
                <button onClick={() => setOpen(true)} className="btn-primary text-base">
                  Get a Free Quote
                </button>
                <a
                  href="tel:+12393780640"
                  className="btn-ghost text-base"
                >
                  Call (239) 378-0640
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
