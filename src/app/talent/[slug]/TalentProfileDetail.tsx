"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Talent } from "@/data/talent";
import FadeInUp from "@/components/ui/FadeInUp";
import CtaSection from "@/components/sections/CtaSection";

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  twitter: "Twitter / X",
};

export default function TalentProfileDetail({ talent }: { talent: Talent }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors duration-200 mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Talent
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <motion.div
              className="aspect-[3/4] bg-surface-2 rounded-sm border border-white/5 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-9xl font-bold text-white/5 select-none">
                {talent.name.slice(0, 2).toUpperCase()}
              </span>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {talent.niche.map((n) => (
                  <span key={n} className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold/30 px-2 py-1 rounded-sm">{n}</span>
                ))}
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-2">{talent.name}</h1>
              <p className="font-mono text-sm text-muted mb-6">{talent.location}</p>

              <p className="font-body text-muted leading-relaxed mb-8">{talent.bio}</p>

              {/* Platform stats */}
              <div className="space-y-4 mb-8">
                {talent.platforms.map((p) => (
                  <div key={p.name} className="p-4 bg-surface border border-white/5 rounded-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-gold">{platformLabels[p.name]}</span>
                      <span className="font-mono text-xs text-muted">{p.handle}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-display text-xl font-bold text-text-primary">{p.followers}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Followers</p>
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-gold">{p.engagementRate}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Engagement</p>
                      </div>
                      {p.avgViews && (
                        <div>
                          <p className="font-display text-xl font-bold text-text-primary">{p.avgViews}</p>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Avg Views</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 bg-gold text-background rounded-sm hover:bg-gold/90 transition-colors duration-200"
              >
                Book a Collaboration
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand partnerships */}
      {talent.brandHistory && talent.brandHistory.length > 0 && (
        <section className="section-pad bg-surface border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Past Partnerships</p>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Brand Collaborations</h2>
              <div className="flex flex-wrap gap-4">
                {talent.brandHistory.map((brand) => (
                  <div key={brand} className="px-5 py-3 bg-background border border-white/10 rounded-sm">
                    <span className="font-body text-sm text-muted">{brand}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* Content examples */}
      <section className="section-pad bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Content Examples</p>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Recent Work</h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <FadeInUp key={i} delay={i * 0.08}>
                <div className="aspect-square bg-surface border border-white/5 rounded-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-muted/40">Content {i + 1}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={`Work With ${talent.name.split(" ")[0]}`}
        subtext="Get in touch to discuss collaboration opportunities, sponsored content, and brand partnerships."
        ctaText="Book a Collaboration"
      />
    </>
  );
}
