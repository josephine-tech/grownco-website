"use client";

import StatCounter from "@/components/ui/StatCounter";
import FadeInUp from "@/components/ui/FadeInUp";

const stats = [
  { value: "200+", label: "Brands Scaled" },
  { value: "5000+", label: "Videos Produced" },
  { value: "420%", label: "Avg ROAS Increase" },
  { value: "12+", label: "Markets Served" },
];

export default function StatsSection() {
  return (
    <section className="section-pad bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">By the Numbers</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Results That Speak.
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
          {stats.map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 0.1} className="md:px-8">
              <StatCounter value={stat.value} label={stat.label} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
