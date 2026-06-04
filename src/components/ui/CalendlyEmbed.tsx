"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
}

export default function CalendlyEmbed({ url = "https://calendly.com/grownco" }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-sm overflow-hidden border border-white/10"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
