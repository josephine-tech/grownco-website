"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const divisions = [
  {
    id: "ecommerce",
    title: "E-Commerce Division",
    tagline: "Performance at Scale",
    description: "We build and scale direct-to-consumer revenue engines. From scroll-stopping creative to precision media buying - every decision is driven by data and optimised for return.",
    services: ["60 Ad Creatives / Month", "AI Content Factory", "Growth & Scale Strategy", "Paid Media Buying"],
    accent: "from-gold/10 to-transparent",
    borderAccent: "border-gold/20 hover:border-gold/60",
    ctaText: "E-Commerce Services",
  },
  {
    id: "traditional",
    title: "Traditional Marketing Division",
    tagline: "Brand. Presence. Empire.",
    description: "For brands that want to own their market, not just compete in it. Full-spectrum brand marketing - from identity to PR to coordinated global campaigns.",
    services: ["Presence Package", "Brand Package", "Empire Package", "Brand Foundation"],
    accent: "from-white/5 to-transparent",
    borderAccent: "border-white/10 hover:border-white/30",
    ctaText: "Traditional Services",
  },
];

export default function DivisionsSection() {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Our Divisions</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Two Divisions.<br />One Standard.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {divisions.map((div, i) => (
            <motion.div
              key={div.id}
              className={`group relative p-8 md:p-10 rounded-sm border bg-gradient-to-br ${div.accent} ${div.borderAccent} transition-all duration-300`}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 h-px bg-gold"
                initial={{ width: "0%" }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              />

              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">{div.tagline}</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">{div.title}</h3>
              <p className="font-body text-muted leading-relaxed mb-8">{div.description}</p>

              <ul className="space-y-2 mb-8">
                {div.services.map((svc) => (
                  <li key={svc} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-sm text-text-primary/80">{svc}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-200"
              >
                {div.ctaText}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Talent teaser */}
        <motion.div
          className="mt-4 p-8 rounded-sm border border-white/5 bg-surface text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">Within Both Divisions</p>
          <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Talent Management</h3>
          <p className="font-body text-muted max-w-2xl mx-auto text-sm mb-6">
            Personal brand management for creators. Viral video ideation for brands using talent. Two distinct offerings, one team.
          </p>
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
          >
            Meet the Talent
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
