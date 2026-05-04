"use client";

import RevealOnScroll from "./RevealOnScroll";

const SERVICES = [
  {
    title: "Pool Cleaning",
    benefit: "Spotless water, every visit — skim, brush, vacuum, balanced.",
    icon: DropIcon,
  },
  {
    title: "Maintenance Plans",
    benefit: "Weekly or bi-weekly service that keeps chemistry locked in.",
    icon: GearIcon,
  },
  {
    title: "Equipment Repair",
    benefit: "Pumps, filters, heaters, and salt systems fixed fast.",
    icon: WrenchIcon,
  },
  {
    title: "Spa Services",
    benefit: "Crystal jets, balanced spa water, and seasonal tune-ups.",
    icon: SparkleIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <RevealOnScroll>
            <div className="chip mb-4">WHAT WE DO</div>
            <h2 className="heading-lg">
              Premium pool care, <span className="text-glow">end to end.</span>
            </h2>
            <p className="text-muted mt-4">
              From weekly cleanings to complex repairs, our techs handle it all
              with the consistency you can set your watch by.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ title, benefit, icon: Icon }, i) => (
            <RevealOnScroll key={title} delay={i * 80}>
              <article className="card card-hover h-full group">
                <div className="w-12 h-12 rounded-xl bg-brand-grad shadow-glow flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {benefit}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-aqua text-sm font-semibold opacity-80 group-hover:opacity-100">
                  Learn more
                  <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function DropIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13z" />
    </svg>
  );
}
function GearIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}
function WrenchIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 1 1 3 3l-9.6 9.6a2 2 0 0 1-2.8-2.8l9.4-9.8z" />
    </svg>
  );
}
function SparkleIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM18 14l1 2.6L21 18l-2.6 1L18 22l-1-2.6L14 18l2.6-1L18 14zM6 14l1 2.6L9 18l-2.6 1L6 22l-1-2.6L2 18l2.6-1L6 14z" />
    </svg>
  );
}
