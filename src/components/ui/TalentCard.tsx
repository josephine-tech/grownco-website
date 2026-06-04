"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Talent } from "@/data/talent";

const platformIcons: Record<string, string> = {
  instagram: "IG",
  tiktok: "TK",
  youtube: "YT",
  twitter: "TW",
};

export default function TalentCard({ talent }: { talent: Talent }) {
  const topPlatform = talent.platforms[0];

  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/talent/${talent.slug}`}>
        {/* Photo */}
        <div className="relative aspect-[3/4] bg-surface-2 rounded-sm overflow-hidden mb-4 border border-white/5">
          <div className="absolute inset-0 flex items-end p-4">
            <div className="w-full bg-background/80 backdrop-blur-sm border border-white/10 rounded-sm p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex gap-2">
                {talent.platforms.slice(0, 3).map((p) => (
                  <span key={p.name} className="font-mono text-[9px] uppercase tracking-widest text-gold border border-gold/30 px-1.5 py-0.5 rounded-sm">
                    {platformIcons[p.name]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-white/5 select-none">
              {talent.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-gold transition-colors duration-200">
          {talent.name}
        </h3>
        <p className="font-body text-sm text-muted mt-0.5">{talent.niche.slice(0, 2).join(" · ")}</p>

        {/* Key stat */}
        <div className="mt-3 flex items-center gap-4">
          <div>
            <p className="font-display text-xl font-bold text-text-primary">{topPlatform.followers}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">followers</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <p className="font-display text-xl font-bold text-gold">{topPlatform.engagementRate}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">engagement</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
