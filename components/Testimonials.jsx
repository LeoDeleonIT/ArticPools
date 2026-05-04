import RevealOnScroll from "./RevealOnScroll";

const TESTIMONIALS = [
  {
    quote:
      "Our pool has never looked better. Arctic shows up like clockwork and the water is always crystal.",
    name: "Maria G.",
    location: "Naples, FL",
  },
  {
    quote:
      "They fixed a pump issue our last service ignored for months. Honest, fast, and fair.",
    name: "David R.",
    location: "Fort Myers, FL",
  },
  {
    quote:
      "Hands down the most reliable pool team we've used in 12 years of owning a home down here.",
    name: "Elaine T.",
    location: "Cape Coral, FL",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <RevealOnScroll>
            <div className="chip mb-4 mx-auto">FIVE-STAR FEEDBACK</div>
            <h2 className="heading-lg">
              Loved by homeowners across <span className="text-glow">SW Florida.</span>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 100}>
              <figure className="card card-hover h-full">
                <Stars />
                <blockquote className="mt-4 text-frost text-lg leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-grad flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-frost/60">{t.location}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-aqua">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.5l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}
