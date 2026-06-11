"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionBand from "@/components/ui/SectionBand";
import ServiceCard from "@/components/ui/ServiceCard";
import BundleCard from "@/components/ui/BundleCard";
import DivisionToggle from "@/components/ui/DivisionToggle";
import PricingToggle from "@/components/ui/PricingToggle";
import CtaSection from "@/components/sections/CtaSection";

const ecommerceServices = {
  africa: [
    {
      name: "60 Ad Creatives",
      price: "From $1,800 / mo",
      description: "Psychology-backed ad creatives built to sell desire, not products. Twenty AI-generated videos and forty statics and b-roll pieces, delivered in two batches every month.",
      deliverables: ["20 AI videos + 40 statics and b-roll", "Desire-mapped creative briefs", "Platform-sized for Meta, TikTok, Google", "Delivered Day 7 and Day 21"],
    },
    {
      name: "AI Content Factory",
      price: "From $5,000 / mo",
      description: "550 AI-generated videos per month powered by four distinct AI influencer characters. Every video mapped to a human desire, tested organically before a single dollar of paid spend goes behind it.",
      deliverables: ["550 videos per month", "4 hyper-realistic AI influencers", "Desire-mapped and hook-tested", "TikTok, Reels, YouTube Shorts ready"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "From $1,200 / mo",
      description: "Two AI influencers, twenty videos each, creatively strategized and posted two per day organically so the campaign stretches out over time. We let the market pick the winner before paid spend touches it. You also keep the full b-roll, angles, personas, and backgrounds for both influencers, built around your ideal customer, so you can keep using them long after.",
      deliverables: ["2 AI influencers, 40 videos total", "2 videos posted daily organically", "Data-driven kill and scale protocol", "Winners scaled with paid immediately", "Full b-roll and angles for every AI influencer", "Personas and backgrounds tailored to your ideal customer"],
    },
    {
      name: "Media Buying",
      price: "From $1,500 / mo",
      description: "Daily campaign management across Meta, Google, and TikTok. We kill what doesn't work within 72 hours and scale what does immediately. Your budget never burns on untested content.",
      deliverables: ["Meta, Google, TikTok campaigns", "Daily monitoring and optimisation", "Kill decisions within 72 hours", "Weekly performance reports"],
    },
  ],
  global: [
    {
      name: "60 Ad Creatives",
      price: "From $2,400 / mo",
      description: "Psychology-backed ad creatives built to sell desire, not products. Twenty AI-generated videos and forty statics and b-roll pieces, delivered in two batches every month.",
      deliverables: ["20 AI videos + 40 statics and b-roll", "Desire-mapped creative briefs", "Platform-sized for Meta, TikTok, Google", "Delivered Day 7 and Day 21"],
    },
    {
      name: "AI Content Factory",
      price: "From $5,000 / mo",
      description: "550 AI-generated videos per month powered by four distinct AI influencer characters. Every video mapped to a human desire, tested organically before a single dollar of paid spend goes behind it.",
      deliverables: ["550 videos per month", "4 hyper-realistic AI influencers", "Desire-mapped and hook-tested", "TikTok, Reels, YouTube Shorts ready"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "From $1,800 / mo",
      description: "Two AI influencers, twenty videos each, creatively strategized and posted two per day organically so the campaign stretches out over time. We let the market pick the winner before paid spend touches it. You also keep the full b-roll, angles, personas, and backgrounds for both influencers, built around your ideal customer, so you can keep using them long after.",
      deliverables: ["2 AI influencers, 40 videos total", "2 videos posted daily organically", "Data-driven kill and scale protocol", "Winners scaled with paid immediately", "Full b-roll and angles for every AI influencer", "Personas and backgrounds tailored to your ideal customer"],
    },
    {
      name: "Media Buying",
      price: "From $2,200 / mo",
      description: "Daily campaign management across Meta, Google, and TikTok. We kill what doesn't work within 72 hours and scale what does immediately. Your budget never burns on untested content.",
      deliverables: ["Meta, Google, TikTok campaigns", "Daily monitoring and optimisation", "Kill decisions within 72 hours", "Weekly performance reports"],
    },
  ],
};

const bundles = {
  africa: [
    {
      tier: "Starter",
      price: "From $3,000 / mo",
      tagline: "For brands ready to start scaling with paid media.",
      includes: ["60 Ad Creatives", "Media Buying (Meta)", "Monthly Strategy Session", "Performance Dashboard"],
    },
    {
      tier: "Growth",
      price: "From $6,500 / mo",
      tagline: "The full performance engine for serious brands.",
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "2 AI Influencers (40 videos total)", "Weekly Optimisation Calls"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "From $9,500 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (550 videos/mo)", "Full Media Buying Suite", "Growth & Scale Strategy", "2 AI Influencers (40 videos total)", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls"],
    },
  ],
  global: [
    {
      tier: "Starter",
      price: "From $4,500 / mo",
      tagline: "For brands ready to start scaling with paid media.",
      includes: ["60 Ad Creatives", "Media Buying (Meta)", "Monthly Strategy Session", "Performance Dashboard"],
    },
    {
      tier: "Growth",
      price: "From $9,000 / mo",
      tagline: "The full performance engine for serious brands.",
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "2 AI Influencers (40 videos total)", "Weekly Optimisation Calls"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "From $14,000 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (550 videos/mo)", "Full Media Buying Suite", "Growth & Scale Strategy", "2 AI Influencers (40 videos total)", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls"],
    },
  ],
};

const traditionalServices = {
  africa: [
    {
      name: "Presence",
      price: "From $400 / mo",
      description: "Consistent, professional social media presence across three platforms. Content tailored to grip your specific customer base, posted, managed, and reported on every month.",
      deliverables: ["12-20 posts per month across 3 platforms", "Tailored content creation and direction", "Community management - 50 DMs/day cap", "Monthly performance report"],
    },
    {
      name: "Brand",
      price: "From $800 / mo",
      description: "Everything in Presence plus paid ads, ad testing, and active campaign management. We advise, plan and position events, launches and special offers to boost your engagement.",
      deliverables: ["10 dedicated ad creatives per month", "Paid ads managed by specialist", "Ad testing using D.R.I.V.E. methodology", "Event, launch, and rollout execution", "Weekly strategy call - founder led"],
      featured: true,
    },
    {
      name: "Empire",
      price: "From $1,500 / mo",
      description: "Everything in Brand plus two campaign shoot days, two fully managed events per month, and up to 50 curated influencer recommendations.",
      deliverables: ["2 campaign shoot days per month", "2 events fully managed end-to-end", "Up to 50 influencer recommendations", "Partnership strategy and coordination", "Full offline brand tactics"],
    },
  ],
  global: [
    {
      name: "Presence",
      price: "From $1,500 / mo",
      description: "Consistent, professional social media presence across three platforms. Content tailored to grip your specific customer base, posted, managed, and reported on every month.",
      deliverables: ["12-20 posts per month across 3 platforms", "Tailored content creation and direction", "Community management - 50 DMs/day cap", "Monthly performance report"],
    },
    {
      name: "Brand",
      price: "From $2,500 / mo",
      description: "Everything in Presence plus paid ads, ad testing, and active campaign management. We advise, plan and position events, launches and special offers to boost your engagement.",
      deliverables: ["10 dedicated ad creatives per month", "Paid ads managed by specialist", "Ad testing using D.R.I.V.E. methodology", "Event, launch, and rollout execution", "Weekly strategy call - founder led"],
      featured: true,
    },
    {
      name: "Empire",
      price: "From $4,000 / mo",
      description: "Everything in Brand plus two campaign shoot days, two fully managed events per month, and up to 50 curated influencer recommendations.",
      deliverables: ["2 campaign shoot days per month", "2 events fully managed end-to-end", "Up to 50 influencer recommendations", "Partnership strategy and coordination", "Full offline brand tactics"],
    },
  ],
};

const valueAdded = {
  africa: [
    {
      name: "Brand Foundation",
      price: "From $150 one-time",
      description: "Logo, brand guidelines, colour palette, typography system. The foundation everything is built on.",
      deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"],
    },
    {
      name: "UGC & Influencer Matching",
      price: "From $500 / 100 matched creators",
      description: "We source, vet, and match your brand with the right UGC creators and micro-influencers.",
      deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"],
    },
    {
      name: "Outreach & Onboarding",
      price: "From $500 / 100 creators",
      description: "Mass creator outreach and professional onboarding at scale.",
      deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"],
    },
  ],
  global: [
    {
      name: "Brand Foundation",
      price: "From $150 one-time",
      description: "Logo, brand guidelines, colour palette, typography system. The foundation everything is built on.",
      deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"],
    },
    {
      name: "UGC & Influencer Matching",
      price: "From $500 / 100 matched creators",
      description: "We source, vet, and match your brand with the right UGC creators and micro-influencers.",
      deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"],
    },
    {
      name: "Outreach & Onboarding",
      price: "From $800 / 100 creators",
      description: "Mass creator outreach and professional onboarding at scale.",
      deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"],
    },
  ],
};

export default function ServicesPage() {
  const [division, setDivision] = useState<"ecommerce" | "traditional">("ecommerce");
  const [region, setRegion] = useState<"africa" | "global">("africa");

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">What We Offer</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-6">
              Services Built<br />
              <span className="gradient-text italic">to Perform.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              Transparent pricing. Clear deliverables. No retainers that go nowhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-surface border-y border-white/5 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-4">
          <DivisionToggle value={division} onChange={setDivision} />
          <div className="h-6 w-px bg-white/10 hidden sm:block" />
          <PricingToggle value={region} onChange={setRegion} />
          <div className="ml-auto hidden md:block">
            <p className="font-mono text-xs text-muted">
              {region === "africa" ? "Africa pricing" : "EU / Americas pricing"}
            </p>
          </div>
        </div>
      </section>

      {/* E-Commerce Services */}
      {division === "ecommerce" && (
        <div>
          <section className="section-pad bg-background">
            <div className="max-w-7xl mx-auto px-6">
              <SectionBand label="E-Commerce Division" title="Individual Services" subtitle="Each service is available standalone or as part of a bundle." className="mb-12" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ecommerceServices[region].map((svc, i) => (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ServiceCard {...svc} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad bg-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <SectionBand label="Bundles" title="Performance Packages" subtitle="Combine services into a bundle and save. Most clients start on Growth." className="mb-12" />
              <div className="grid sm:grid-cols-3 gap-6">
                {bundles[region].map((bundle, i) => (
                  <motion.div
                    key={bundle.tier}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <BundleCard {...bundle} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Traditional Services */}
      {division === "traditional" && (
        <section className="section-pad bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <SectionBand label="Traditional Marketing Division" title="Brand Packages" subtitle="Three tiers of brand marketing, from establishing presence to owning your market." className="mb-12" />
            <div className="grid sm:grid-cols-3 gap-6">
              {traditionalServices[region].map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BundleCard tier={svc.name} price={svc.price} tagline={svc.description} includes={svc.deliverables} featured={svc.featured} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Talent Management */}
      <section className="section-pad bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionBand label="Talent Management" title="Two Ways We Manage Talent" subtitle="Whether you are a creator building a personal brand or a company looking to ideate viral videos using talent, we have a service built for you." className="mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal */}
            <motion.div
              className="p-8 bg-background border border-white/8 rounded-sm hover:border-gold/20 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">For Creators</p>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Personal Talent Management</h3>
              <p className="font-display text-3xl font-bold text-gold mb-4">$300 <span className="font-body text-sm text-muted font-normal">/ creator</span></p>
              <p className="font-body text-sm text-muted leading-relaxed mb-6">
                Our strong suit: brand direction and content ideation built for virality, backed by brand deal sourcing and contract negotiation. Terms and conditions apply, with a 10-brand cap before commission.
              </p>
              <ul className="space-y-2">
                {["Brand direction", "Content ideation for virality", "Brand deal sourcing", "Contract negotiation (10-brand cap before commission, T&Cs apply)", "Platform growth support"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-sm text-muted/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Brand */}
            <motion.div
              className="p-8 bg-gold-dim border border-gold/30 rounded-sm hover:border-gold/60 transition-colors duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">For Brands</p>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Brand Talent Ideation</h3>
              <p className="font-display text-3xl font-bold text-gold mb-4">$500 <span className="font-body text-sm text-muted font-normal">/ brand campaign</span></p>
              <p className="font-body text-sm text-muted leading-relaxed mb-6">
                For companies and brands looking to ideate and produce viral videos using their own talent or creators. We concept, script, and direct the whole thing.
              </p>
              <ul className="space-y-2">
                {["Viral concept ideation", "Script & brief development", "Creator direction", "Production oversight", "Performance reporting"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-sm text-muted/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value-added services */}
      <section className="section-pad bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionBand label="Add-Ons" title="Value-Added Services" subtitle="Stack these with any package to extend your reach." className="mb-12" />
          <div className="grid sm:grid-cols-3 gap-4">
            {valueAdded[region].map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ServiceCard {...svc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection headline="Not Sure Where to Start?" subtext="Book a free strategy call and we will recommend the right package for your goals and budget." ctaText="Book a Free Consultation" />
    </>
  );
}
