"use client";

import { motion } from "framer-motion";
import FadeInUp from "@/components/ui/FadeInUp";
import DriveSection from "@/components/sections/DriveSection";
import CtaSection from "@/components/sections/CtaSection";

const team = [
  { name: "Alex Okonkwo", role: "Founder & CEO", bio: "Built his first performance marketing agency at 22. 8 years scaling brands across three continents.", initials: "AO" },
  { name: "Sophie Laurent", role: "Head of Brand Strategy", bio: "Former creative director at two of Europe's top agencies. Architect of the D.R.I.V.E. methodology.", initials: "SL" },
  { name: "Kwesi Mensah", role: "Head of E-Commerce", bio: "Generated over $40M in tracked revenue across Meta and TikTok. Obsessive about media buying.", initials: "KM" },
  { name: "Priya Sharma", role: "Head of Talent", bio: "Built creator programmes for global brands. Manages a roster of 50+ creators across 8 markets.", initials: "PS" },
];

const values = [
  { label: "Results First", desc: "We don't celebrate effort. We celebrate outcomes. Every decision is evaluated against a single question: does this move the numbers?" },
  { label: "Radical Transparency", desc: "No smoke, no mirrors. You'll always know exactly where your budget is going, what's working, and what we're going to do about what isn't." },
  { label: "Global Ambition", desc: "We built Grow N Co to prove that world-class marketing doesn't have a postcode. The best strategies work everywhere." },
  { label: "Continuous Iteration", desc: "The market never stops moving. Neither do we. Weekly testing cycles mean we're always one step ahead of the algorithm." },
];

const markets = [
  { region: "Africa", cities: "Lagos · Accra · Nairobi · Cape Town · Johannesburg", focus: "E-Commerce, Brand Marketing, Talent" },
  { region: "Europe", cities: "London · Paris · Amsterdam · Berlin", focus: "Brand Marketing, E-Commerce" },
  { region: "Americas", cities: "Miami · New York · Los Angeles · Toronto", focus: "E-Commerce, Talent Management" },
];

export default function AboutDetail() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
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
            className="max-w-4xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-8">
              Built to Scale<br />
              <span className="gradient-text italic">Every Brand.</span>
            </h1>
            <p className="font-body text-muted text-xl leading-relaxed max-w-2xl">
              Grow N Co was founded on a single belief: that world-class performance marketing
              shouldn&apos;t be reserved for brands with London or New York postcodes.
              The methodology, the tools, the talent - it&apos;s all available, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The Philosophy</p>
              <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
                We Started with a Problem.
              </h2>
              <p className="font-body text-muted leading-relaxed mb-4">
                Too many great brands - particularly across Africa - were either being ignored
                by global agencies or being served watered-down strategies that weren&apos;t built
                for their markets.
              </p>
              <p className="font-body text-muted leading-relaxed mb-4">
                So we built Grow N Co: an agency with genuine global reach, real African
                market expertise, and a methodology that works regardless of geography.
              </p>
              <p className="font-body text-muted leading-relaxed">
                Two divisions. One relentless focus. Scale.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="space-y-4">
                {[
                  { year: "2021", event: "Grow N Co founded." },
                  { year: "2022", event: "£500,000 in profit generated for PPC clients." },
                  { year: "2023", event: "$2M+ in profits generated across all clients." },
                  { year: "2024", event: "D.R.I.V.E. methodology formulated." },
                  { year: "2025", event: "$6M in profit generated across all clients." },
                  { year: "2026", event: "Methods reiterated for the modern climate." },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-6 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="font-mono text-sm text-gold flex-shrink-0 w-12">{item.year}</span>
                    <div className="flex-1 pb-4 border-b border-white/5">
                      <p className="font-body text-sm text-text-primary">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* D.R.I.V.E. */}
      <DriveSection />

      {/* Values */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Our Values.</h2>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeInUp key={v.label} delay={i * 0.1}>
                <div className="p-6 bg-background border border-white/5 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">{v.label}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">The People</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Meet the Team.</h2>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeInUp key={member.name} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-square bg-surface-2 border border-white/5 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-display text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">{member.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">{member.name}</h3>
                  <p className="font-mono text-xs text-gold mt-0.5 mb-2">{member.role}</p>
                  <p className="font-body text-sm text-muted leading-relaxed">{member.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Global Presence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Where We Operate.</h2>
          </FadeInUp>
          <div className="grid md:grid-cols-3 gap-4">
            {markets.map((m, i) => (
              <FadeInUp key={m.region} delay={i * 0.1}>
                <div className="p-6 bg-background border border-white/5 rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">{m.region}</p>
                  <p className="font-body text-sm text-text-primary mb-2">{m.cities}</p>
                  <p className="font-mono text-xs text-muted">{m.focus}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <CtaSection headline="Work With Us." subtext="Whether you're a brand looking to scale or a creator looking to build - we want to hear from you." ctaText="Get in Touch" />
    </>
  );
}
