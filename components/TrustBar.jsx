import RevealOnScroll from "./RevealOnScroll";

const ITEMS = [
  { label: "Licensed & Insured", icon: ShieldIcon },
  { label: "Weekly Service Plans", icon: CalendarIcon },
  { label: "Fast Response Times", icon: BoltIcon },
  { label: "5-Star Service", icon: StarIcon },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-8 sm:-mt-12 z-10">
      <div className="container-x">
        <RevealOnScroll className="card border-aqua/20 bg-ink/70 backdrop-blur-xl">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ITEMS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-aqua/10 border border-aqua/30 flex items-center justify-center text-aqua">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="font-semibold text-frost text-sm sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ShieldIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}
function CalendarIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}
function BoltIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" />
    </svg>
  );
}
function StarIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.5l7.1-.6L12 2z" />
    </svg>
  );
}
