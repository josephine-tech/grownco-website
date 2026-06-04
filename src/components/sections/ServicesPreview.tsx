"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

const previewServices = [
  {
    name: "60 Ad Creatives",
    price: "$1,800 / mo",
    description: "60 scroll-stopping ad creatives per month, optimised for Meta and TikTok performance.",
    deliverables: ["60 static + video ads", "Platform-native formats", "Weekly creative briefs", "Performance reporting"],
  },
  {
    name: "AI Content Factory",
    price: "$5,000 / mo",
    description: "Unlimited AI-assisted content production — video, copy, graphics — at a fraction of traditional costs.",
    deliverables: ["200+ content pieces/month", "AI-assisted production", "Brand voice training", "Multi-platform distribution"],
    featured: true,
  },
  {
    name: "Media Buying",
    price: "$1,500 / mo",
    description: "Full-service paid media management across Meta, Google, TikTok, and programmatic.",
    deliverables: ["Campaign architecture", "Daily optimisation", "A/B testing framework", "Monthly reporting"],
  },
  {
    name: "Growth & Scale Strategy",
    price: "$1,200 / mo",
    description: "The strategic layer — market analysis, growth roadmap, channel mix, and competitive positioning.",
    deliverables: ["Quarterly growth plan", "Market analysis", "Channel strategy", "KPI framework"],
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
