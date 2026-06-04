"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import CtaSection from "@/components/sections/CtaSection";
import { caseStudies } from "@/data/caseStudies";

type Division = "all" | "ecommerce" | "traditional";
type Market = "all" | "africa" | "europe" | "americas" | "global";

export default function CaseStudiesPage() {
  const [division, setDivision] = useState<Division>("all");
  const [market, setMarket] = useState<Market>("all");

  const filtered = caseStudies.filter((cs) => {
    const divMatch = division === "all" || cs.division === division;
    const marketMatch = market === "all" || cs.market === market;
    return divMatch && marketMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Proof of Work</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[0.9] mb-6">
              Results We&apos;re<br />
              <span className="gradient-text italic">Proud Of.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              Every case study is a real client, real results, and real data.
              No cherry-picking. No inflated numbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-surface border-y border-white/5 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-3">
          {/* Division filter */}
          <div className="flex items-center gap-1 bg-background border border-white/10 rounded-sm p-1">
            {(["all", "ecommerce", "traditional"] as Division[]).map((d) => (
              <button
                key={d}
                onClick={() => setDivision(d)}
                className={`px-3 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                  division === d ? "bg-gold text-background" : "text-muted hover:text-text-primary"
                }`}
              >
                {d === "all" ? "All" : d === "ecommerce" ? "E-Commerce" : "Traditional"}
              </button>
            ))}
          </div>

          {/* Market filter */}
          <div className="flex items-center gap-1 bg-background border border-white/10 rounded-sm p-1">
            {(["all", "africa", "europe", "americas", "global"] as Market[]).map((m) => (
              <button
                key={m}
                onClick={() => setMarket(m)}
                className={`px-3 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                  market === m ? "bg-gold text-background" : "text-muted hover:text-text-primary"
                }`}
              >
                {m === "all" ? "All Markets" : m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          <div className="ml-auto">
            <p className="font-mono text-xs text-muted">{filtered.length} case {filtered.length === 1 ? "study" : "studies"}</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted">No results for these filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection headline="Want Results Like These?" subtext="Every one of these started with a single strategy call." ctaText="Book Your Strategy Call" />
    </>
  );
}
