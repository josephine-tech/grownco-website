"use client";

import TestimonialCard from "@/components/ui/TestimonialCard";

const row1 = [
  { quote: "Grow N Co completely transformed our paid media strategy. 4x ROAS in under two months.", name: "Adaeze Okonkwo", brand: "Lagos Fashion House", source: "Clutch" },
  { quote: "The creative output is unlike anything we've seen from an agency. Relentless and data-driven.", name: "Sipho Dlamini", brand: "PeakForm", source: "Google" },
  { quote: "They understood our brand better in week one than agencies we'd worked with for years.", name: "James Alderton", brand: "Maison Alderton", source: "Trustpilot" },
  { quote: "The talent management team secured us deals we couldn't have touched alone.", name: "Marcus Chen", brand: "Self", source: "Google" },
  { quote: "From zero to $120K revenue in 90 days. Genuinely transformative.", name: "Sipho Dlamini", brand: "PeakForm", source: "Clutch" },
  { quote: "Our TikTok ROAS hit 6.1x. We'd never seen anything like it.", name: "Carlos Reyes", brand: "CTRL Streetwear", source: "Google" },
];

const row2 = [
  { quote: "D.R.I.V.E. isn't just marketing language - they live it in every decision.", name: "Aisha Mensah", brand: "Luminary Labs", source: "Clutch" },
  { quote: "Three campaigns, three wins. The consistency is what stands out.", name: "Tomás García", brand: "Meridian Brands", source: "Trustpilot" },
  { quote: "Our brand awareness across Europe is up 180%. The PR strategy was exceptional.", name: "James Alderton", brand: "Maison Alderton", source: "Google" },
  { quote: "They built our creator roster from scratch. The results speak for themselves.", name: "Kwame Asante", brand: "Self", source: "Google" },
  { quote: "Finally, an agency that treats media buying like a science, not an art.", name: "Priya Nair", brand: "Solaris DTC", source: "Clutch" },
  { quote: "Grow N Co is the best investment we've made in marketing. Full stop.", name: "David Osei", brand: "Pinnacle Commerce", source: "Google" },
];

export default function TestimonialsMarquee() {
  return (
    <section className="section-pad bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Client Voices</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            What They Say.
          </h2>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="marquee-wrapper flex">
          <div className="flex animate-marquee">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="marquee-wrapper flex">
          <div className="flex animate-marquee-reverse">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
