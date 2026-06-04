"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    letter: "D",
    name: "Diagnostics",
    description: "We start with deep data analysis. Audience research, competitor teardowns, funnel audits — before we touch a single creative, we know exactly what's broken and what the opportunity is.",
  },
  {
    letter: "R",
    name: "Research",
    description: "Market intelligence drives everything. We build positioning frameworks, identify untapped audience segments, and map the competitive landscape before a single pound is spent.",
  },
  {
    letter: "I",
    name: "Infrastructure",
    description: "Winning at scale requires the right foundation. Creative systems, campaign architecture, tech stack, tracking — we build infrastructure that compounds over time.",
  },
  {
    letter: "V",
    name: "Velocity",
    description: "Speed is the advantage. Weekly iteration cycles, rapid creative testing, and real-time optimisation mean we move faster than the competition and faster than the market.",
  },
  {
    letter: "E",
    name: "Expansion",
    description: "Scale what works. New markets, new channels, new audiences — sustainable expansion built on the proven foundation of what's already performing.",
  },
];

export default function DriveSection() {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Our Methodology</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              The <span className="gradient-text italic">D.R.I.V.E.</span><br />Framework
            </h2>
          </motion.div>
          <motion.p
            className="font-body text-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every engagement begins with D.R.I.V.E. — our proprietary five-pillar methodology
            that has powered hundreds of brands to measurable, repeatable growth. Not guesswork.
            Not gut feel. A proven system.
          </motion.p>
        </div>

        <div className="space-y-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.letter}
              className="group flex items-start gap-6 p-6 md:p-8 rounded-sm border border-white/5 bg-surface hover:border-gold/20 hover:bg-surface-2 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Letter */}
              <div className="flex-shrink-0 w-16 h-16 border border-gold/20 group-hover:border-gold/60 rounded-sm flex items-center justify-center transition-colors duration-300">
                <span className="font-display text-3xl font-bold text-gold">{pillar.letter}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-semibold text-text-primary">{pillar.name}</h3>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed max-w-2xl">{pillar.description}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex flex-shrink-0 text-gold/20 group-hover:text-gold/60 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
