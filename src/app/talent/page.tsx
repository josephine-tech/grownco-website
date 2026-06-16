"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TalentCard from "@/components/ui/TalentCard";
import { talent } from "@/data/talent";
import FadeInUp from "@/components/ui/FadeInUp";
import Link from "next/link";

type PlatformFilter = "all" | "instagram" | "tiktok" | "youtube" | "twitter";

export default function TalentPage() {
  const [platform, setPlatform] = useState<PlatformFilter>("all");

  const filtered = talent.filter((t) => {
    return platform === "all" || t.platforms.some((p) => p.name === platform);
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 55% at 70% 0%, rgba(30,122,62,0.13) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 10% 80%, rgba(201,168,76,0.06) 0%, transparent 55%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Talent Management</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-6">
              We Don&apos;t Just Market Brands.<br />
              <span className="gradient-text italic">We Build Talent.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed mb-8">
              Our talent management division handles everything: brand deals, content strategy,
              platform growth, and audience monetisation. We build the careers of the next
              generation of digital creators.
            </p>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Work With Our Talent
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brand Deal Sourcing", desc: "We secure deals that match the creator's audience and values - maximising both revenue and authenticity." },
              { title: "Contract Negotiation", desc: "Industry-standard contracts, rate negotiation, and protection for our creators in every deal." },
              { title: "Content Strategy", desc: "Platform-specific content strategies built to grow audience, engagement, and revenue." },
              { title: "Platform Growth", desc: "Algorithm-aware growth strategies for Instagram, TikTok, and YouTube." },
            ].map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.1}>
                <div className="p-6 bg-background border border-white/5 rounded-sm">
                  <div className="w-8 h-8 border border-gold/30 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-surface border-y border-white/5 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 bg-background border border-white/10 rounded-sm p-1">
            {(["all", "instagram", "tiktok", "twitter"] as PlatformFilter[]).map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-3 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                  platform === p ? "bg-gold text-background" : "text-muted hover:text-text-primary"
                }`}
              >
                {p === "all" ? "All Platforms" : p === "twitter" ? "Twitter / X" : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted">No talent matches these filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((t, i) => (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <TalentCard talent={t} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand CTA */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">For Creators</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Ready to Grow Your Brand?
              </h2>
              <p className="font-body text-muted leading-relaxed mb-6">
                We work with creators who are serious about building a career, not just chasing viral moments.
                If that&apos;s you, let&apos;s talk.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200">
                Apply to Join the Roster
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">For Brands</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Need Creator Campaigns?
              </h2>
              <p className="font-body text-muted leading-relaxed mb-6">
                From UGC to full influencer campaigns, we connect your brand with creators whose audiences
                actually convert.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200">
                Work With Our Talent
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
