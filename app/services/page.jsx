import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | Arctic Pool & Spa",
  description:
    "Pool cleaning, weekly maintenance, equipment repair, and spa care — done right, every visit.",
};

const SERVICES = [
  {
    title: "Pool Cleaning",
    desc: "Full skim, brush, vacuum, basket empty, and chemistry balance — every visit.",
    img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Surface skim & wall brush",
      "Vacuum or robot scrub",
      "Skimmer & pump basket clean",
      "Test & balance chemistry",
    ],
  },
  {
    title: "Weekly Maintenance",
    desc: "Locked-in service days. Documented chemistry. Predictable, on-time visits.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Custom service plan",
      "Chlorine, salt, or mineral systems",
      "Filter cleanings included",
      "Service-day reminders",
    ],
  },
  {
    title: "Equipment Repair",
    desc: "Pumps, filters, heaters, and salt systems diagnosed fast and fixed right.",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Pentair, Hayward, Jandy specialists",
      "Pump & motor replacement",
      "Heater & gas valve repair",
      "Salt cell installs",
    ],
  },
  {
    title: "Spa Services",
    desc: "Bring your spa back to life with a deep clean, drain & refill, and tune-up.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Drain, scrub & refill",
      "Filter cartridge service",
      "Jet flush & inspection",
      "Spa chemistry balancing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-x pt-12 pb-16">
        <RevealOnScroll>
          <div className="chip mb-4">SERVICES</div>
          <h1 className="heading-xl max-w-3xl">
            Everything your pool needs. <span className="text-glow">Nothing it doesn&apos;t.</span>
          </h1>
          <p className="text-muted mt-5 max-w-2xl">
            Pick a single service or pair them into a custom plan. Either way,
            you get the same Arctic standard: clean water, on-time techs, and
            zero excuses.
          </p>
        </RevealOnScroll>
      </section>

      <section className="container-x space-y-10 pb-12">
        {SERVICES.map((s, i) => (
          <RevealOnScroll key={s.title} delay={i * 60}>
            <article
              className={`card card-hover overflow-hidden p-0 grid lg:grid-cols-12 gap-0 ${
                i % 2 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="relative lg:col-span-5 aspect-[4/3] lg:aspect-auto [direction:ltr]">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-7 p-7 sm:p-10 [direction:ltr]">
                <h2 className="heading-lg">{s.title}</h2>
                <p className="text-muted mt-3 max-w-xl">{s.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-frost/85"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </section>

      <CTA />
    </>
  );
}
