"use client";

interface DivisionToggleProps {
  value: "ecommerce" | "traditional";
  onChange: (v: "ecommerce" | "traditional") => void;
}

export default function DivisionToggle({ value, onChange }: DivisionToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 bg-surface border border-white/10 rounded-sm p-1">
      {(["ecommerce", "traditional"] as const).map((division) => (
        <button
          key={division}
          onClick={() => onChange(division)}
          className={`px-5 py-2 rounded-sm font-mono text-xs uppercase tracking-widest transition-all duration-200 ${
            value === division
              ? "bg-gold text-background"
              : "text-muted hover:text-text-primary"
          }`}
        >
          {division === "ecommerce" ? "E-Commerce" : "Traditional"}
        </button>
      ))}
    </div>
  );
}
