"use client";

interface PricingToggleProps {
  value: "africa" | "global";
  onChange: (v: "africa" | "global") => void;
}

export default function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 bg-surface border border-white/10 rounded-sm p-1">
      {(["africa", "global"] as const).map((region) => (
        <button
          key={region}
          onClick={() => onChange(region)}
          className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-widest transition-all duration-200 ${
            value === region
              ? "bg-gold text-background"
              : "text-muted hover:text-text-primary"
          }`}
        >
          {region === "africa" ? "Africa" : "EU / Americas"}
        </button>
      ))}
    </div>
  );
}
