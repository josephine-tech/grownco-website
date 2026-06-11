"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pb-24">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FAFAF7 1px, transparent 1px),
              linear-gradient(to bottom, #FAFAF7 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(8,8,8,0.9) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="font-display font-bold text-text-primary leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          Every successful brand sells a desire.{" "}
          <span className="gradient-text italic">We want to find yours.</span>
        </motion.h1>

        <motion.p
          className="mt-8 font-body text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Two Divisions. One Secret Methodology; Scaling Six Figure Brands &amp; Talent across Africa, Europe and the Americas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <Link
            href="/contact"
            className="btn-gold px-8 py-4 font-body font-semibold rounded-sm transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-4 border border-white/20 text-text-primary font-body font-semibold rounded-sm hover:border-gold/40 hover:text-gold transition-colors duration-200 w-full sm:w-auto text-center"
          >
            See Our Work
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: "200+", label: "Brands Scaled" },
            { value: "2", label: "Divisions" },
            { value: "4.2x", label: "Avg ROAS" },
            { value: "12+", label: "Markets" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl font-bold text-text-primary">{value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 4, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
