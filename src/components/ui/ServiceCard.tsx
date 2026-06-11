"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  deliverables: string[];
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({ name, price, description, deliverables, href = "/contact", featured = false }: ServiceCardProps) {
  return (
    <motion.div
      className={`group relative flex flex-col p-6 rounded-sm border transition-all duration-300 ${
        featured
          ? "bg-gold-dim border-gold/40 hover:border-gold/80"
          : "bg-surface border-white/8 hover:border-white/20"
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-0.5 rounded-sm">
            Popular
          </span>
        </div>
      )}
      <div className="mb-4">
        <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{price}</p>
        <h3 className="font-display text-xl font-semibold text-text-primary">{name}</h3>
        <p className="mt-2 font-body text-sm text-muted leading-relaxed">{description}</p>
      </div>
      <ul className="flex-1 space-y-2 mb-6">
        {deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full gold-orb flex-shrink-0" />
            <span className="font-body text-sm text-muted/80">{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
      >
        Get Started
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1 duration-200">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  );
}
