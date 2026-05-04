"use client";

/**
 * Mobile-first floating call button. Pulses gently to draw the eye.
 * Hidden on large screens because the navbar shows the number directly.
 */

export default function FloatingCall() {
  return (
    <a
      href="tel:+12393780640"
      aria-label="Call Arctic Pools"
      className="lg:hidden fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 pl-4 pr-5 py-3
        rounded-full bg-brand-grad text-white font-semibold shadow-glowStrong
        active:scale-95 transition-transform"
    >
      <span className="relative inline-flex w-3 h-3">
        <span className="absolute inset-0 rounded-full bg-aqua animate-ripple" />
        <span className="absolute inset-0 rounded-full bg-white" />
      </span>
      Call Now
    </a>
  );
}
