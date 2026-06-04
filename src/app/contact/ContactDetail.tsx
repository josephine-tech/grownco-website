"use client";

import { motion } from "framer-motion";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";
import FadeInUp from "@/components/ui/FadeInUp";

const contactOptions = [
  {
    label: "Email",
    value: "hello@grownco.uk",
    href: "mailto:hello@grownco.uk",
    icon: "✉",
  },
  {
    label: "WhatsApp",
    value: "+44 7XXX XXX XXX",
    href: "https://wa.me/447000000000",
    icon: "💬",
  },
];

export default function ContactDetail() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Let&apos;s Talk</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary leading-[0.9] mb-6">
              Book a Free<br />
              <span className="gradient-text italic">Strategy Call.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              30 minutes. No pitch. Just a straight conversation about your brand,
              your goals, and whether we&apos;re the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              {/* What to expect */}
              <FadeInUp>
                <div className="p-6 bg-surface border border-white/5 rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">What to Expect</p>
                  <ul className="space-y-3">
                    {[
                      "A genuine listen — we ask first, pitch second",
                      "Honest assessment of what's working and what isn't",
                      "A rough roadmap of what we'd do for your brand",
                      "Clear, transparent pricing with no hidden costs",
                      "A decision by end of call on whether we're the right fit",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span className="font-body text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>

              {/* Other contact options */}
              <FadeInUp delay={0.1}>
                <div className="p-6 bg-surface border border-white/5 rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Other Ways to Reach Us</p>
                  <div className="space-y-3">
                    {contactOptions.map((opt) => (
                      <a
                        key={opt.label}
                        href={opt.href}
                        className="flex items-center gap-3 p-3 bg-background border border-white/5 rounded-sm hover:border-gold/30 transition-colors duration-200 group"
                      >
                        <span className="text-lg">{opt.icon}</span>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{opt.label}</p>
                          <p className="font-body text-sm text-text-primary group-hover:text-gold transition-colors">{opt.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Response time */}
              <FadeInUp delay={0.2}>
                <div className="p-4 border border-gold/20 bg-gold-dim rounded-sm">
                  <p className="font-mono text-xs text-gold">
                    ⚡ We typically respond within 2 hours during business hours (Mon–Fri, 9am–6pm GMT).
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Calendly */}
            <div className="md:col-span-2">
              <FadeInUp delay={0.1}>
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Pick a Time</p>
                <CalendlyEmbed />
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
