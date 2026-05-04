import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const POINTS = [
  {
    title: "We show up on time.",
    body: "Service windows you can plan your week around. No vanishing acts.",
  },
  {
    title: "We keep your pool perfect.",
    body: "Routine, documented chemistry checks — no guesswork, no surprises.",
  },
  {
    title: "No missed service days.",
    body: "If we can't make it, you'll know early — and we'll make it right.",
  },
  {
    title: "Real techs, real expertise.",
    body: "Trained on every major equipment brand from Pentair to Hayward.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-glowStrong">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80"
                alt="Pristine backyard pool maintained by Arctic Pools"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            {/* Glow blob */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-aqua/20 blur-3xl -z-10" />
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-7">
          <RevealOnScroll>
            <div className="chip mb-4">WHY HOMEOWNERS CHOOSE ARCTIC</div>
            <h2 className="heading-lg">
              Pool care that&apos;s <span className="text-glow">consistent.</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl">
              Most pool services get one part right. We get all of them right —
              every single visit.
            </p>
          </RevealOnScroll>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {POINTS.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 80}>
                <div className="card card-hover h-full">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-aqua/15 border border-aqua/40 flex items-center justify-center text-aqua">
                      <CheckIcon />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">{p.body}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4 10-10" />
    </svg>
  );
}
