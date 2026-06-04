"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

const divisionColors = {
  ecommerce: "text-gold border-gold/30",
  traditional: "text-text-primary/60 border-white/20",
};

const marketLabels = {
  africa: "Africa",
  europe: "Europe",
  americas: "Americas",
  global: "Global",
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/case-studies/${study.slug}`}>
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] bg-surface-2 rounded-sm overflow-hidden mb-4 border border-white/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-white/5 select-none">
              {study.brand.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="font-body text-xs font-semibold text-gold">View Case Study →</span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-mono text-[10px] uppercase tracking-widest border px-2 py-0.5 rounded-sm ${divisionColors[study.division]}`}>
            {study.division === "ecommerce" ? "E-Commerce" : "Traditional"}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {marketLabels[study.market]}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-gold transition-colors duration-200 mb-1">
          {study.brand}
        </h3>
        <p className="font-body text-sm font-medium text-gold">{study.headline}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-muted/60 bg-surface px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
