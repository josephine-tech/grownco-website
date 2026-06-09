"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

const previewServices = [
  {
    name: "60 Ad Creatives",
    price: "From $1,800 / mo",
    description: "Psychology-backed ad creatives built to sell desire, not products. 20 AI videos and 40 statics, delivered in two batches every month.",
    deliverables: ["20 AI videos + 40 statics and b-roll", "Desire-mapped creative briefs", "Platform-sized for Meta, TikTok, Google", "Delivered Day 7 and Day 21"],
  },
  {
    name: "AI Content Factory",
    price: "From $5,000 / mo",
    description: "550 AI-generated videos per month. Four distinct AI influencer characters. Every video tested organically before paid spend touches it.",
    deliverables: ["550 videos per month", "4 hyper-realistic AI influencers", "Desire-mapped and hook-tested", "TikTok, Reels, YouTube Shorts ready"],
    featured: true,
  },
  {
    name: "Media Buying",
    price: "From $1,500 / mo",
    description: "Daily campaign management across Meta, Google, and TikTok. Kill decisions within 72 hours. Your budget never burns on untested content.",
    deliverables: ["Meta, Google, TikTok campaigns", "Daily monitoring and optimisation", "Kill decisions within 72 hours", "Weekly performance reports"],
  },
  {
    name: "Growth & Scale Strategy",
    price: "From $1,200 / mo",
    description: "Two AI influencers, twenty videos each, posted ten per day organically. The market picks the winner before your ad budget goes behind it.",
    deliverables: ["2 AI influencers, 40 videos total", "10 videos posted daily organically", "Data-driven kill and scale protocol", "Winners scaled with paid immediately"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Services Built<br />to Perform.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
            >
              See All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewServices.map((svc, i) => (
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
  );
}
