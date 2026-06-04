"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive session to understand your brand, goals, and current performance. We diagnose before we prescribe." },
  { num: "02", title: "Strategy", desc: "Custom growth strategy built on D.R.I.V.E. — market research, positioning, channel mix, and KPI framework." },
  { num: "03", title: "Production", desc: "Creative infrastructure built. Ad creatives, content systems, campaign architecture — everything set up to perform." },
  { num: "04", title: "Launch", desc: "Campaigns go live with precision. Every variable tracked, every result attributed." },
  { num: "05", title: "Scale", desc: "We double down on what works and eliminate what doesn't. Continuous iteration toward your growth ceiling." },
];

export default function ClientJourney() {
  return (
    <section className="section-pad bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="font-mono text-xs uppercase tracking-widest text-gold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Client Journey.
          </motion.h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Node */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-sm border border-gold/40 bg-background flex items-center justify-center">
                    <span className="font-mono text-gold font-medium">{step.num}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-sm border border-gold/40 bg-background flex items-center justify-center z-10 relative">
                    <span className="font-mono text-gold text-sm font-medium">{step.num}</span>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
