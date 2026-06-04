"use client";

import { motion } from "framer-motion";
import TalentCard from "@/components/ui/TalentCard";
import Link from "next/link";
import { getFeaturedTalent } from "@/data/talent";

export default function TalentPreview() {
  const featuredTalent = getFeaturedTalent();

  return (
    <section className="section-pad bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Talent Management</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              We Don&apos;t Just Market Brands.<br />
              <span className="gradient-text italic">We Build Talent.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="font-body text-muted leading-relaxed mb-6">
              Our talent management division handles everything: brand deals, content strategy,
              platform growth, and audience monetisation. We build the careers of the next
              generation of digital creators.
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTalent.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TalentCard talent={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
