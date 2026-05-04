import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const SHOTS = [
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=80",
    label: "Restored Crystal Water",
    sub: "Algae cleared. Chemistry locked in.",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    label: "Premium Properties",
    sub: "Service plans for homes that don't compromise.",
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80",
    label: "Resort-Grade Care",
    sub: "Service that keeps every pool tour-ready.",
  },
];

export default function VisualProof() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent via-midnight/40 to-transparent">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="chip mb-4">REAL WORK · REAL RESULTS</div>
              <h2 className="heading-lg">
                The proof is in the <span className="text-glow">water.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <RevealOnScroll>
              <p className="text-muted">
                Our customers stay because the water stays clear. Browse a few
                recent jobs from across Lee and Collier counties.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SHOTS.map((s, i) => (
            <RevealOnScroll key={s.src} delay={i * 100}>
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] shadow-card">
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Brand-tinted overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-50 group-hover:opacity-30 transition"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,191,255,0.35), rgba(11,60,93,0.35))",
                  }}
                />
                <figcaption className="absolute left-5 right-5 bottom-5">
                  <div className="font-display text-white font-bold text-lg">
                    {s.label}
                  </div>
                  <div className="text-frost/70 text-sm">{s.sub}</div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
