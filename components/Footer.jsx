import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-gradient-to-b from-ink to-[#020a14]">
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-lg bg-brand-grad shadow-glow" />
            <span className="font-display text-xl font-extrabold text-glow">
              ARCTIC POOL & SPA
            </span>
          </div>
          <p className="text-muted max-w-md">
            Crystal clear pools. Reliable service. Every time. Servicing
            Southwest Florida with weekly maintenance, repairs, and spa care.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-frost mb-3">Company</h4>
          <ul className="space-y-2 text-frost/70 text-sm">
            <li><Link href="/services" className="hover:text-aqua">Services</Link></li>
            <li><Link href="/about" className="hover:text-aqua">About</Link></li>
            <li><Link href="/contact" className="hover:text-aqua">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-frost mb-3">Contact</h4>
          <ul className="space-y-2 text-frost/70 text-sm">
            <li>
              <a href="tel:+12393780640" className="hover:text-aqua">
                (239) 378-0640
              </a>
            </li>
            <li>
              <a href="mailto:service@arcticpools.org" className="hover:text-aqua">
                service@arcticpools.org
              </a>
            </li>
            <li>www.arcticpools.org</li>
            <li>Service • Maintenance • Repair</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-frost/50">
          <p>© {new Date().getFullYear()} Arctic Pool & Spa Services. All rights reserved.</p>
          <p>Licensed & Insured · Southwest Florida</p>
        </div>
      </div>
    </footer>
  );
}
