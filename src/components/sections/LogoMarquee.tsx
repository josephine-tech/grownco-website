"use client";

const logos = [
  "Brand Alpha", "Nexus Co", "Meridian", "Vortex Labs", "Pinnacle",
  "Axiom", "Solaris", "Crestview", "Luminary", "Zenith",
  "Brand Alpha", "Nexus Co", "Meridian", "Vortex Labs", "Pinnacle",
  "Axiom", "Solaris", "Crestview", "Luminary", "Zenith",
];

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-surface border-y border-white/5 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="marquee-wrapper flex items-center">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex-shrink-0 flex items-center gap-2"
            >
              {/* Logo placeholder — replace with <Image> */}
              <div className="h-7 w-24 bg-white/5 rounded-sm flex items-center justify-center border border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted/50">{logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-mono text-xs uppercase tracking-widest text-muted/40 mt-6">
        Trusted by brands across Africa, Europe &amp; the Americas
      </p>
    </section>
  );
}
