"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";
import StatCounter from "@/components/ui/StatCounter";
import FadeInUp from "@/components/ui/FadeInUp";
import CtaSection from "@/components/sections/CtaSection";

const driveMap: Record<string, string> = {
  D: "Desire",
  R: "Reflection",
  I: "Identity",
  V: "Voice",
  E: "Execution",
};

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const marketLabel =
    study.market.charAt(0).toUpperCase() + study.market.slice(1);
  const divisionLabel =
    study.division === "ecommerce" ? "E-Commerce" : "Traditional Marketing";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(to right, #FAFAF7 1px, transparent 1px), linear-gradient(to bottom, #FAFAF7 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors duration-200 mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-1 rounded-sm">{divisionLabel}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted border border-white/10 px-2 py-1 rounded-sm">{marketLabel}</span>
              {study.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-muted/60 bg-surface px-2 py-1 rounded-sm">{tag}</span>
              ))}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-4">
              {study.brand}
            </h1>
            <p className="font-display text-2xl md:text-3xl text-gold font-medium italic">
              {study.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail placeholder */}
      <section className="bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="aspect-[16/6] bg-surface border border-white/5 rounded-sm flex items-center justify-center -mt-4">
            <span className="font-display text-8xl font-bold text-white/5 select-none">{study.brand.slice(0, 2).toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-pad bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInUp>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Challenge</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">Where They Started</h2>
            <p className="font-body text-muted leading-relaxed text-lg">{study.challenge}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Strategy - D.R.I.V.E. */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInUp>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Strategy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">How We Applied D.R.I.V.E.</h2>
            <p className="font-body text-muted leading-relaxed text-lg mb-10">{study.strategy}</p>
          </FadeInUp>

          {/* D.R.I.V.E. visual */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(driveMap).map(([letter, name], i) => (
              <motion.div
                key={letter}
                className="flex items-center gap-2 bg-background border border-white/10 rounded-sm px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-xl font-bold text-gold">{letter}</span>
                <span className="font-mono text-xs text-muted">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="section-pad bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInUp>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Execution</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">What We Built & Launched</h2>
            <p className="font-body text-muted leading-relaxed text-lg">{study.execution}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Numbers Don&apos;t Lie.</h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.results.map((stat, i) => (
              <FadeInUp key={stat.label} delay={i * 0.1}>
                <StatCounter value={stat.value} label={stat.label} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="section-pad bg-background border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInUp>
              <svg className="mx-auto mb-6 text-gold/30" width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M0 30V20C0 8.954 6.716 2.286 20.148 0L22 3.5C15.432 5.214 12 9.143 12 15H18V30H0ZM22 30V20C22 8.954 28.716 2.286 42.148 0L44 3.5C37.432 5.214 34 9.143 34 15H40V30H22Z" fill="currentColor" />
              </svg>
              <blockquote className="font-display text-2xl md:text-3xl text-text-primary leading-relaxed italic mb-8">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-body font-semibold text-text-primary">{study.testimonial.name}</p>
              <p className="font-mono text-xs text-muted mt-1">{study.testimonial.role}</p>
            </FadeInUp>
          </div>
        </section>
      )}

      <CtaSection headline="Want Results Like This?" subtext="Let's talk about your brand, your goals, and exactly how we'd approach your growth." ctaText="Book a Strategy Call" />
    </>
  );
}
