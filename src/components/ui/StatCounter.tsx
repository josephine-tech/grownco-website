"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function parseValue(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1] || "",
    num: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const { num, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * num);
      if (current >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, num]);

  const displayValue = num % 1 !== 0 ? count.toFixed(1) : Math.round(count).toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-6xl md:text-7xl font-bold text-text-primary leading-none">
        {prefix}
        {isInView ? displayValue : "0"}
        {suffix}
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}
