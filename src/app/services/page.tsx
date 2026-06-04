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
      price: "$1,800 / mo",
      description: "60 scroll-stopping ad creatives per month built for Meta and TikTok performance.",
      deliverables: ["60 static + video ads", "Platform-native formats", "Weekly creative briefs", "Performance reporting", "Unlimited revisions"],
    },
    {
      name: "AI Content Factory",
      price: "$5,000 / mo",
      description: "Unlimited AI-assisted content production — video, copy, graphics at a fraction of traditional costs.",
      deliverables: ["200+ content pieces/month", "AI-assisted production pipeline", "Brand voice training", "Multi-platform distribution", "Content calendar management"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "$1,200 / mo",
      description: "The strategic layer — market analysis, growth roadmap, channel mix, and KPI framework.",
      deliverables: ["Quarterly growth plan", "Competitor market analysis", "Channel strategy", "KPI framework + tracking", "Monthly strategy sessions"],
    },
    {
      name: "Media Buying",
      price: "$1,500 / mo",
      description: "Full-service paid media management across Meta, Google, TikTok, and programmatic channels.",
      deliverables: ["Campaign architecture", "Daily budget optimisation", "A/B testing framework", "Monthly performance reports", "Cross-channel attribution"],
    },
  ],
  global: [
    {
      name: "60 Ad Creatives",
      price: "$2,400 / mo",
      description: "60 scroll-stopping ad creatives per month built for Meta and TikTok performance.",
      deliverables: ["60 static + video ads", "Platform-native formats", "Weekly creative briefs", "Performance reporting", "Unlimited revisions"],
    },
    {
      name: "AI Content Factory",
      price: "$7,000 / mo",
      description: "Unlimited AI-assisted content production — video, copy, graphics at a fraction of traditional costs.",
      deliverables: ["200+ content pieces/month", "AI-assisted production pipeline", "Brand voice training", "Multi-platform distribution", "Content calendar management"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "$1,800 / mo",
      description: "The strategic layer — market analysis, growth roadmap, channel mix, and KPI framework.",
      deliverables: ["Quarterly growth plan", "Competitor market analysis", "Channel strategy", "KPI framework + tracking", "Monthly strategy sessions"],
    },
    {
      name: "Media Buying",
      price: "$2,200 / mo",
      description: "Full-service paid media management across Meta, Google, TikTok, and programmatic channels.",
      deliverables: ["Campaign architecture", "Daily budget optimisation", "A/B testing framework", "Monthly performance reports", "Cross-channel attribution"],
    },
  ],
};

const bundles = {
  africa: [
    {
      tier: "Starter",
      price: "$3,000 / mo",
      tagline: "For brands ready to start scaling with paid media.",
      includes: ["60 Ad Creatives", "Media Buying (Meta)", "Monthly Strategy Session", "Performance Dashboard"],
    },
    {
      tier: "Growth",
      price: "$6,500 / mo",
      tagline: "The full performance engine for serious brands.",
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "Weekly Optimisation Calls", "Performance Dashboard"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "$9,500 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (200+ pieces)", "Full Media Buying Suite", "Growth & Scale Strategy", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls", "Custom Reporting"],
    },
  ],
  global: [
    {
      tier: "Starter",
      price: "$4,500 / mo",
      tagline: "For brands ready to start scaling with paid media.",
      includes: ["60 Ad Creatives", "Media Buying (Meta)", "Monthly Strategy Session", "Performance Dashboard"],
    },
    {
      tier: "Growth",
      price: "$9,000 / mo",
      tagline: "The full performance engine for serious brands.",
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "Weekly Optimisation Calls", "Performance Dashboard"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "$14,000 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (200+ pieces)", "Full Media Buying Suite", "Growth & Scale Strategy", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls", "Custom Reporting"],
    },
  ],
};

const traditionalServices = {
  africa: [
    {
      name: "Presence",
      price: "$800 / mo",
      description: "Establish a commanding brand presence across key digital and traditional channels.",
      deliverables: ["Social media management", "Basic PR outreach", "Brand consistency audit", "Monthly content calendar", "Basic SEO foundation"],
    },
    {
      name: "Brand",
      price: "$2,500 / mo",
      description: "Full brand marketing activation — identity, storytelling, and multi-channel campaigns.",
      deliverables: ["Brand identity refinement", "Campaign development", "PR & media relations", "Influencer strategy", "Editorial content production", "Market positioning"],
      featured: true,
    },
    {
      name: "Empire",
      price: "$6,000 / mo",
      description: "Total market domination. Full-spectrum brand marketing with global reach.",
      deliverables: ["Complete brand strategy", "Pan-regional campaigns", "Tier-1 PR & press", "Celebrity / macro influencer", "Experiential activations", "Cross-border market entry", "Executive brand advisory"],
    },
  ],
  global: [
    {
      name: "Presence",
      price: "$1,500 / mo",
      description: "Establish a commanding brand presence across key digital and traditional channels.",
      deliverables: ["Social media management", "Basic PR outreach", "Brand consistency audit", "Monthly content calendar", "Basic SEO foundation"],
    },
    {
      name: "Brand",
      price: "$4,500 / mo",
      description: "Full brand marketing activation — identity, storytelling, and multi-channel campaigns.",
      deliverables: ["Brand identity refinement", "Campaign development", "PR & media relations", "Influencer strategy", "Editorial content production", "Market positioning"],
      featured: true,
    },
    {
      name: "Empire",
      price: "$10,000 / mo",
      description: "Total market domination. Full-spectrum brand marketing with global reach.",
      deliverables: ["Complete brand strategy", "Pan-regional campaigns", "Tier-1 PR & press", "Celebrity / macro influencer", "Experiential activations", "Cross-border market entry", "Executive brand advisory"],
    },
  ],
};

const valueAdded = {
  africa: [
    { name: "Brand Foundation", price: "$350 one-time", description: "Logo, brand guidelines, colour palette, typography system — the foundation everything is built on.", deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"] },
    { name: "UGC & Influencer Matching", price: "$100 / creator", description: "We source, vet, and match your brand with the right UGC creators and micro-influencers.", deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"] },
    { name: "Outreach & Onboarding", price: "$500 / 100 creators", description: "Mass creator outreach and professional onboarding at scale.", deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"] },
    { name: "Talent Management", price: "$300 / creator (personal)", description: "Full personal brand management for individual creators.", deliverables: ["Brand deal sourcing", "Contract negotiation", "Content strategy", "Platform growth support"] },
  ],
  global: [
    { name: "Brand Foundation", price: "$600 one-time", description: "Logo, brand guidelines, colour palette, typography system — the foundation everything is built on.", deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"] },
    { name: "UGC & Influencer Matching", price: "$150 / creator", description: "We source, vet, and match your brand with the right UGC creators and micro-influencers.", deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"] },
    { name: "Outreach & Onboarding", price: "$800 / 100 creators", description: "Mass creator outreach and professional onboarding at scale.", deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"] },
    { name: "Talent Management (Brand)", price: "$500 / brand campaign", description: "Brand-side talent management — ideating and producing creator campaigns for your brand.", deliverables: ["Creator sourcing", "Campaign ideation", "Production oversight", "Performance reporting"] },
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
              Every service is designed to generate measurable ROI.
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
              {region === "africa" ? "🌍 Africa pricing" : "🌎 EU / Americas pricing"}
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
            <SectionBand label="Traditional Marketing Division" title="Brand Packages" subtitle="Three tiers of brand marketing — from establishing presence to owning your entire market." className="mb-12" />
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

      {/* Value-added services */}
      <section className="section-pad bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionBand label="Add-Ons" title="Value-Added Services" subtitle="Stack these with any package to extend your reach." className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <CtaSection headline="Not Sure Where to Start?" subtext="Book a free strategy call and we'll recommend the right package for your goals and budget." ctaText="Book a Free Consultation" />
    </>
  );
}
