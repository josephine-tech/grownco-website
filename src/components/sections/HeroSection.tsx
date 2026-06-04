"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid lines */}
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
        {/* Radial gradient pulse */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Noise/vignette */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(8,8,8,0.9) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold border border-gold/30 px-4 py-2 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Global Performance Marketing Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          We Don&apos;t Just{" "}
          <span className="gradient-text italic">Market</span>
          <br />
          Brands. We{" "}
          <span className="gradient-text italic">Scale</span> Them.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-8 font-body text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Three divisions. One methodology. E-Commerce performance, Traditional brand marketing,
          and Talent management — operating across Africa, Europe, and the Americas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-gold text-background font-body font-semibold rounded-sm hover:bg-gold/90 transition-colors duration-200 w-full sm:w-auto text-center"
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
            { value: "3", label: "Global Divisions" },
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
