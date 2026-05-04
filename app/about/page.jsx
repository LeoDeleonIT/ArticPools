import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About | Arctic Pool & Spa",
  description:
    "A locally owned pool service team built on consistency, professionalism, and clear water.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-12 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <RevealOnScroll>
            <div className="chip mb-4">ABOUT ARCTIC</div>
            <h1 className="heading-xl">
              Locally owned. <br />
              <span className="text-glow">Obsessed with consistency.</span>
            </h1>
            <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
              Arctic Pool & Spa was founded on a simple idea: pool care should
              never feel unpredictable. We built a service company where techs
              show up on time, communicate clearly, and leave water that&apos;s
              measurably cleaner than when they arrived.
            </p>
            <p className="text-muted mt-4 max-w-xl leading-relaxed">
              Today we care for hundreds of residential pools and spas across
              Lee and Collier counties, and we&apos;re trusted by homeowners,
              property managers, and seasonal residents who need service that
              just works — even when they&apos;re a thousand miles away.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat label="Pools serviced" value="500+" />
              <Stat label="On-time rate" value="99%" />
              <Stat label="Avg rating" value="4.9★" />
            </div>
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-5 relative">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-glowStrong">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80"
                alt="Backyard pool oasis serviced by Arctic Pools"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-aqua/25 blur-3xl -z-10" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="container-x pb-10">
        <div className="grid md:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <RevealOnScroll key={v.title} delay={i * 80}>
              <div className="card card-hover h-full">
                <h3 className="font-display font-bold text-xl text-white">
                  {v.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{v.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card text-center">
      <div className="font-display font-extrabold text-3xl text-glow">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-frost/60 mt-1">
        {label}
      </div>
    </div>
  );
}

const VALUES = [
  {
    title: "Reliable",
    body: "Same tech, same day, same standard. Predictable service is the whole product.",
  },
  {
    title: "Consistent",
    body: "Documented chemistry checks every visit. Your pool's history is always one tap away.",
  },
  {
    title: "Professional",
    body: "Uniformed, trained, insured. We treat your home like our own.",
  },
];
