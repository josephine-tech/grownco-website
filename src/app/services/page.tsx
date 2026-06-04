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
      description: "60 scroll-stopping ad creatives per month built for Meta and TikTok performance. Ideated to scale.",
      deliverables: ["60 static + video ads", "Platform-native formats", "Weekly creative briefs", "Performance reporting", "Unlimited revisions"],
    },
    {
      name: "AI Content Factory",
      price: "From $3,000 / mo",
      description: "Unlimited AI-assisted content production at a fraction of traditional costs. Ideated to scale.",
      deliverables: ["200+ content pieces/month", "AI-assisted production pipeline", "Brand voice training", "Multi-platform distribution", "Content calendar management"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "From $1,200 / mo",
      description: "The strategic layer. Includes 2 ideated AI influencers with up to 50+ videos each, built to scale your brand. Ideated to scale.",
      deliverables: ["2 AI influencers (50+ videos each)", "Quarterly growth plan", "Competitor market analysis", "Channel strategy", "KPI framework + tracking", "Monthly strategy sessions"],
    },
    {
      name: "Media Buying",
      price: "From $1,500 / mo",
      description: "Full-service paid media management across Meta, Google, TikTok, and programmatic channels. Ideated to scale.",
      deliverables: ["Campaign architecture", "Daily budget optimisation", "A/B testing framework", "Monthly performance reports", "Cross-channel attribution"],
    },
  ],
  global: [
    {
      name: "60 Ad Creatives",
      price: "From $2,400 / mo",
      description: "60 scroll-stopping ad creatives per month built for Meta and TikTok performance. Ideated to scale.",
      deliverables: ["60 static + video ads", "Platform-native formats", "Weekly creative briefs", "Performance reporting", "Unlimited revisions"],
    },
    {
      name: "AI Content Factory",
      price: "From $3,000 / mo",
      description: "Unlimited AI-assisted content production at a fraction of traditional costs. Ideated to scale.",
      deliverables: ["200+ content pieces/month", "AI-assisted production pipeline", "Brand voice training", "Multi-platform distribution", "Content calendar management"],
      featured: true,
    },
    {
      name: "Growth & Scale Strategy",
      price: "From $1,800 / mo",
      description: "The strategic layer. Includes 2 ideated AI influencers with up to 50+ videos each, built to scale your brand. Ideated to scale.",
      deliverables: ["2 AI influencers (50+ videos each)", "Quarterly growth plan", "Competitor market analysis", "Channel strategy", "KPI framework + tracking", "Monthly strategy sessions"],
    },
    {
      name: "Media Buying",
      price: "From $2,200 / mo",
      description: "Full-service paid media management across Meta, Google, TikTok, and programmatic channels. Ideated to scale.",
      deliverables: ["Campaign architecture", "Daily budget optimisation", "A/B testing framework", "Monthly performance reports", "Cross-channel attribution"],
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
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "2 AI Influencers (50+ videos each)", "Weekly Optimisation Calls"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "From $9,500 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (200+ pieces)", "Full Media Buying Suite", "Growth & Scale Strategy", "2 AI Influencers (50+ videos each)", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls", "Custom Reporting"],
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
      includes: ["60 Ad Creatives", "AI Content Factory (50 pieces)", "Media Buying (Multi-channel)", "Growth & Scale Strategy", "2 AI Influencers (50+ videos each)", "Weekly Optimisation Calls"],
      featured: true,
    },
    {
      tier: "Scale",
      price: "From $14,000 / mo",
      tagline: "Everything. Maximum velocity. No ceiling.",
      includes: ["AI Content Factory (200+ pieces)", "Full Media Buying Suite", "Growth & Scale Strategy", "2 AI Influencers (50+ videos each)", "UGC Creator Network (10 creators)", "Dedicated Account Manager", "Weekly Strategy Calls", "Custom Reporting"],
    },
  ],
};

const traditionalServices = {
  africa: [
    {
      name: "Presence",
      price: "From $800 / mo",
      description: "Establish a commanding brand presence across key digital and traditional channels. Ideated to scale.",
      deliverables: ["Social media management", "Basic PR outreach", "Brand consistency audit", "Monthly content calendar", "Basic SEO foundation"],
    },
    {
      name: "Brand",
      price: "From $2,500 / mo",
      description: "Full brand marketing activation, identity, storytelling, and multi-channel campaigns. Ideated to scale.",
      deliverables: ["Brand identity refinement", "Campaign development", "PR & media relations", "Influencer strategy", "Editorial content production", "Market positioning"],
      featured: true,
    },
    {
      name: "Empire",
      price: "From $6,000 / mo",
      description: "Total market domination. Full-spectrum brand marketing with global reach. Ideated to scale.",
      deliverables: ["Complete brand strategy", "Pan-regional campaigns", "Tier-1 PR & press", "Celebrity / macro influencer", "Experiential activations", "Cross-border market entry", "Executive brand advisory"],
    },
  ],
  global: [
    {
      name: "Presence",
      price: "From $1,500 / mo",
      description: "Establish a commanding brand presence across key digital and traditional channels. Ideated to scale.",
      deliverables: ["Social media management", "Basic PR outreach", "Brand consistency audit", "Monthly content calendar", "Basic SEO foundation"],
    },
    {
      name: "Brand",
      price: "From $4,500 / mo",
      description: "Full brand marketing activation, identity, storytelling, and multi-channel campaigns. Ideated to scale.",
      deliverables: ["Brand identity refinement", "Campaign development", "PR & media relations", "Influencer strategy", "Editorial content production", "Market positioning"],
      featured: true,
    },
    {
      name: "Empire",
      price: "From $10,000 / mo",
      description: "Total market domination. Full-spectrum brand marketing with global reach. Ideated to scale.",
      deliverables: ["Complete brand strategy", "Pan-regional campaigns", "Tier-1 PR & press", "Celebrity / macro influencer", "Experiential activations", "Cross-border market entry", "Executive brand advisory"],
    },
  ],
};

const valueAdded = {
  africa: [
    {
      name: "Brand Foundation",
      price: "From $350 one-time",
      description: "Logo, brand guidelines, colour palette, typography system. The foundation everything is built on. Ideated to scale.",
      deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"],
    },
    {
      name: "UGC & Influencer Matching",
      price: "From $100 / creator",
      description: "We source, vet, and match your brand with the right UGC creators and micro-influencers. Ideated to scale.",
      deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"],
    },
    {
      name: "Outreach & Onboarding",
      price: "From $500 / 100 creators",
      description: "Mass creator outreach and professional onboarding at scale. Ideated to scale.",
      deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"],
    },
    {
      name: "Talent Management (Personal)",
      price: "$300 / creator",
      description: "Full personal brand management for individual creators, from brand deals to platform growth. Ideated to scale.",
      deliverables: ["Brand deal sourcing", "Contract negotiation", "Content strategy", "Platform growth support"],
    },
    {
      name: "Talent Management (Brand)",
      price: "$500 / brand campaign",
      description: "For brands looking to ideate viral videos using their own talent or creators. We concept, script, and produce. Ideated to scale.",
      deliverables: ["Viral concept ideation", "Script & brief development", "Creator direction", "Production oversight", "Performance reporting"],
    },
  ],
  global: [
    {
      name: "Brand Foundation",
      price: "From $600 one-time",
      description: "Logo, brand guidelines, colour palette, typography system. The foundation everything is built on. Ideated to scale.",
      deliverables: ["Logo suite", "Brand guidelines doc", "Colour + typography system", "Business card design"],
    },
    {
      name: "UGC & Influencer Matching",
      price: "From $150 / creator",
      description: "We source, vet, and match your brand with the right UGC creators and micro-influencers. Ideated to scale.",
      deliverables: ["Creator vetting", "Brief development", "Contracting support", "Performance tracking"],
    },
    {
      name: "Outreach & Onboarding",
      price: "From $800 / 100 creators",
      description: "Mass creator outreach and professional onboarding at scale. Ideated to scale.",
      deliverables: ["100 creator outreach", "Onboarding flow", "Contract templates", "Dashboard access"],
    },
    {
      name: "Talent Management (Personal)",
      price: "$300 / creator",
      description: "Full personal brand management for individual creators, from brand deals to platform growth. Ideated to scale.",
      deliverables: ["Brand deal sourcing", "Contract negotiation", "Content strategy", "Platform growth support"],
    },
    {
      name: "Talent Management (Brand)",
      price: "$500 / brand campaign",
      description: "For brands looking to ideate viral videos using their own talent or creators. We concept, script, and produce. Ideated to scale.",
      deliverables: ["Viral concept ideation", "Script & brief development", "Creator direction", "Production oversight", "Performance reporting"],
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
              Every service is ideated to scale.
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
              <SectionBand label="E-Commerce Division" title="Individual Services" subtitle="Each service is available standalone or as part of a bundle. All ideated to scale." className="mb-12" />
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
            <SectionBand label="Traditional Marketing Division" title="Brand Packages" subtitle="Three tiers of brand marketing, from establishing presence to owning your entire market. All ideated to scale." className="mb-12" />
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
          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                Full personal brand management for individual creators. We handle brand deals, contracts, content strategy, and platform growth so you can focus on creating.
              </p>
              <ul className="space-y-2">
                {["Brand deal sourcing", "Contract negotiation", "Content strategy", "Platform growth support", "Audience monetisation"].map((item) => (
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
          <SectionBand label="Add-Ons" title="Value-Added Services" subtitle="Stack these with any package to extend your reach. All ideated to scale." className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueAdded[region].slice(0, 3).map((svc, i) => (
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
