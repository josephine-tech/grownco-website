"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CtaSectionProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CtaSection({
  headline = "Ready to Scale?",
  subtext = "Book a free 30-minute strategy call and discover exactly how we'd approach your growth.",
  ctaText = "Book Your Free Strategy Call",
  ctaHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="section-pad bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold/30" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Let&apos;s Work Together</span>
            <div className="h-px w-16 bg-gold/30" />
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-6">
            {headline}
          </h2>
          <p className="font-body text-muted text-lg mb-10 max-w-xl mx-auto">
            {subtext}
          </p>

          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-background font-body font-bold text-base rounded-sm hover:bg-gold/90 transition-colors duration-200"
          >
            {ctaText}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
