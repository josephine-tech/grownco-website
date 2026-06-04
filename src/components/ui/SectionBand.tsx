"use client";

import { motion } from "framer-motion";

interface SectionBandProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionBand({ label, title, subtitle, centered = false, className = "" }: SectionBandProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-gold mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-4 font-body text-muted leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
