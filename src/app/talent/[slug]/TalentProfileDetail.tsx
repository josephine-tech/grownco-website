"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
              className="relative aspect-[3/4] bg-surface-2 rounded-sm border border-white/5 overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {talent.photo.startsWith("/talent/") ? (
                <Image
                  src={talent.photo}
                  alt={talent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="font-display text-9xl font-bold text-white/5 select-none">
                  {talent.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">{talent.name}</h1>

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
                className="btn-gold inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
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

      {/* Campaign story */}
      {talent.origin && (
        <section className="section-pad bg-background border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Campaign</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">Where It Started</h2>
              {talent.origin.split("\n\n").map((para, i) => (
                <p key={i} className="font-body text-muted leading-relaxed text-lg mb-4">{para}</p>
              ))}
            </FadeInUp>
          </div>
        </section>
      )}

      {talent.campaignWork && (
        <section className="section-pad bg-surface border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">What We Did</h2>
              {talent.campaignWork.split("\n\n").map((para, i) => (
                <p key={i} className="font-body text-muted leading-relaxed text-lg mb-4">{para}</p>
              ))}
            </FadeInUp>
          </div>
        </section>
      )}

      {talent.campaignResults && talent.campaignResults.length > 0 && (
        <section className="section-pad bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Results</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Numbers Don&apos;t Lie.</h2>
            </FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {talent.campaignResults.map((stat, i) => (
                <FadeInUp key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <p className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-2">{stat.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{stat.label}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {talent.testimonial && (
        <section className="section-pad bg-surface border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInUp>
              <svg className="mx-auto mb-6 text-gold/30" width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M0 30V20C0 8.954 6.716 2.286 20.148 0L22 3.5C15.432 5.214 12 9.143 12 15H18V30H0ZM22 30V20C22 8.954 28.716 2.286 42.148 0L44 3.5C37.432 5.214 34 9.143 34 15H40V30H22Z" fill="currentColor" />
              </svg>
              <blockquote className="font-display text-2xl md:text-3xl text-text-primary leading-relaxed italic mb-6">
                &ldquo;{talent.testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-mono text-xs text-muted uppercase tracking-widest">{talent.testimonial.source}</p>
            </FadeInUp>
          </div>
        </section>
      )}

      {talent.campaignNote && (
        <section className="section-pad bg-background border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Why This Matters</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">The Bigger Picture</h2>
              {talent.campaignNote.split("\n\n").map((para, i) => (
                <p key={i} className={`font-body leading-relaxed text-lg mb-4 ${i === talent.campaignNote!.split("\n\n").length - 1 ? "text-text-primary font-semibold" : "text-muted"}`}>{para}</p>
              ))}
            </FadeInUp>
          </div>
        </section>
      )}

      <CtaSection
        headline={`Work With ${talent.name.split(" ")[0]}`}
        subtext="Get in touch to discuss collaboration opportunities, sponsored content, and brand partnerships."
        ctaText="Book a Collaboration"
      />
    </>
  );
}
