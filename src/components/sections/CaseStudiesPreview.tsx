"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/data/caseStudies";

export default function CaseStudiesPreview() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Proof of Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Results We&apos;re<br />Proud Of.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
            >
              See All Case Studies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
