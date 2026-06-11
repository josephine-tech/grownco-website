"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BundleCardProps {
  tier: string;
  price: string;
  tagline: string;
  includes: string[];
  featured?: boolean;
  href?: string;
}

export default function BundleCard({ tier, price, tagline, includes, featured = false, href = "/contact" }: BundleCardProps) {
  return (
    <motion.div
      className={`relative flex flex-col p-8 rounded-sm border transition-all duration-300 ${
        featured
          ? "bg-gold-dim border-gold/60"
          : "bg-surface border-white/8 hover:border-white/20"
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {featured && (
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      )}
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">{tier}</p>
        <div className="font-display text-4xl font-bold text-text-primary">{price}</div>
        <p className="mt-2 font-body text-sm text-muted">{tagline}</p>
      </div>
      <ul className="flex-1 space-y-3 mb-8">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className="mt-0.5 flex-shrink-0 text-gold" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-body text-sm text-text-primary/80">{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`w-full text-center font-body text-sm font-semibold py-3 rounded-sm transition-colors duration-200 ${
          featured
            ? "btn-gold"
            : "border border-white/20 text-text-primary hover:border-gold/40 hover:text-gold"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
