export interface Stat {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  division: "ecommerce" | "traditional";
  market: "africa" | "europe" | "americas" | "global";
  headline: string;
  thumbnail: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: Stat[];
  testimonial?: { quote: string; name: string; role: string };
  tags: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lagos-fashion-house-4x-roas",
    brand: "Lagos Fashion House",
    division: "ecommerce",
    market: "africa",
    headline: "4x ROAS in 60 Days",
    thumbnail: "/placeholders/case-1.jpg",
    challenge:
      "Lagos Fashion House had an incredible product line but was burning through ad spend with a fragmented creative strategy and no cohesive performance framework. ROAS was sitting at 0.9x — they were losing money on every sale.",
    strategy:
      "We deployed the full D.R.I.V.E. methodology: deep audience Diagnostics revealed a mismatch between creative hooks and buyer intent. We rebuilt the Research layer with fresh competitor analysis, then overhauled creative Infrastructure with 60 scroll-stopping ad creatives in week one.",
    execution:
      "60 new ad creatives launched across Meta and TikTok in the first 10 days. Media buying was restructured around a proven campaign architecture. Weekly iteration cycles meant underperformers were cut within 48 hours and winning variants scaled aggressively.",
    results: [
      { label: "ROAS Achieved", value: "4.2x" },
      { label: "Revenue Increase", value: "+340%" },
      { label: "CPM Reduction", value: "-62%" },
      { label: "Creative Winning Rate", value: "38%" },
    ],
    testimonial: {
      quote:
        "Grow N Co transformed our entire approach to performance marketing. The results speak for themselves — 4x ROAS in under two months.",
      name: "Adaeze Okonkwo",
      role: "Founder, Lagos Fashion House",
    },
    tags: ["Performance", "Meta Ads", "TikTok", "Fashion", "Africa"],
    featured: true,
  },
  {
    slug: "cape-town-supplements-scale",
    brand: "PeakForm Supplements",
    division: "ecommerce",
    market: "africa",
    headline: "$120K Revenue in First 90 Days",
    thumbnail: "/placeholders/case-2.jpg",
    challenge:
      "A new supplements brand entering a saturated African market with zero brand awareness and limited budget. They needed rapid market penetration without the luxury of a slow brand-building phase.",
    strategy:
      "Rather than compete head-to-head on price, we identified a positioning gap around performance-focused African athletes. D.R.I.V.E. Research surfaced an untapped audience of semi-professional footballers and gym-goers aged 22–34 with high purchase intent.",
    execution:
      "Launched AI Content Factory to produce 200+ pieces of content in month one. UGC creator network activated with 15 micro-influencers. Media buying concentrated on high-intent interest stacks. Funnel optimised with three-step advertorial landing page.",
    results: [
      { label: "Revenue (90 days)", value: "$120K" },
      { label: "Customer Acquisition Cost", value: "$4.20" },
      { label: "Email List Built", value: "8,400" },
      { label: "Return Customer Rate", value: "34%" },
    ],
    testimonial: {
      quote:
        "We went from zero to a real business in three months. The content volume alone was unlike anything we'd seen from an agency.",
      name: "Sipho Dlamini",
      role: "Co-Founder, PeakForm Supplements",
    },
    tags: ["Launch", "Content", "UGC", "Health", "Africa"],
    featured: true,
  },
  {
    slug: "london-luxury-brand-europe",
    brand: "Maison Alderton",
    division: "traditional",
    market: "europe",
    headline: "180% Brand Awareness Lift in 6 Months",
    thumbnail: "/placeholders/case-3.jpg",
    challenge:
      "A heritage British luxury brand struggling to connect with younger affluent consumers in continental Europe. Existing marketing felt dated and failed to resonate with the 28–40 demographic they needed to win.",
    strategy:
      "Applied the Empire package: full brand identity overhaul, editorial content strategy, and a coordinated launch across PR, digital, and experiential. D.R.I.V.E. Diagnostics revealed the brand had strong equity but weak visibility — the solution was amplification, not reinvention.",
    execution:
      "New brand identity rolled out across all touchpoints. Editorial video series produced over 8 weeks. Press seeding to 40 European luxury publications. Three pop-up experiences in Paris, Milan, and Amsterdam. Influencer programme with 8 macro-creators.",
    results: [
      { label: "Brand Awareness Lift", value: "+180%" },
      { label: "PR Reach", value: "12M" },
      { label: "Social Following Growth", value: "+94K" },
      { label: "Wholesale Enquiries", value: "+340%" },
    ],
    testimonial: {
      quote:
        "Grow N Co understood our brand better than agencies we'd worked with for years. The European rollout exceeded every benchmark.",
      name: "James Alderton",
      role: "CEO, Maison Alderton",
    },
    tags: ["Brand", "PR", "Luxury", "Europe", "Traditional"],
    featured: true,
  },
  {
    slug: "miami-streetwear-americas",
    brand: "CTRL Streetwear",
    division: "ecommerce",
    market: "americas",
    headline: "8x Revenue Growth in One Quarter",
    thumbnail: "/placeholders/case-4.jpg",
    challenge:
      "Miami-based streetwear brand with cult following but no performance infrastructure. They were leaving serious money on the table — organic content was converting but paid acquisition was untested.",
    strategy:
      "The brand's organic content was already gold — we built a paid amplification engine around it. D.R.I.V.E. Infrastructure assessment identified key UGC hooks that resonated most, and we systematised production of similar content at scale.",
    execution:
      "60 ad creatives produced from existing organic content and new UGC shoots. TikTok Ads launched alongside Meta retargeting. Email flows rebuilt from scratch. Three-tier loyalty programme launched to boost LTV.",
    results: [
      { label: "Revenue Growth (Q1)", value: "8x" },
      { label: "TikTok ROAS", value: "6.1x" },
      { label: "Email Revenue Share", value: "41%" },
      { label: "Average Order Value", value: "+67%" },
    ],
    tags: ["E-Commerce", "TikTok", "Email", "Streetwear", "Americas"],
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}
