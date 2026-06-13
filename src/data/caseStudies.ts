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
      "Lagos Fashion House had an incredible product line but was burning through ad spend with a fragmented creative strategy and no cohesive performance framework. ROAS was sitting at 0.9x - they were losing money on every sale.",
    strategy:
      "We applied D.R.I.V.E. from the ground up. Desire mapping revealed the brand was selling products when it should have been selling aspiration. Reflection exposed a complete mismatch between creative hooks and buyer intent. Identity was rebuilt around the emotional desire of the customer, then Voice was deployed across 60 new creatives in week one.",
    execution:
      "60 new ad creatives launched across Meta and TikTok in the first 10 days. Media buying was restructured around a proven campaign architecture. Weekly Execution cycles meant underperformers were cut within 48 hours and winning variants scaled aggressively.",
    results: [
      { label: "ROAS Achieved", value: "4.2x" },
      { label: "Revenue Increase", value: "+340%" },
      { label: "CPM Reduction", value: "-62%" },
      { label: "Creative Winning Rate", value: "38%" },
    ],
    testimonial: {
      quote:
        "Grow N Co transformed our entire approach to performance marketing. The results speak for themselves - 4x ROAS in under two months.",
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
      "D.R.I.V.E. Desire mapping surfaced something the brand had missed: their buyer was not chasing fitness, they were chasing status and belonging. Reflection identified an untapped audience of semi-professional footballers and gym-goers aged 22-34. Identity was rebuilt around performance culture, and Voice was deployed through 15 micro-influencers who lived inside the community.",
    execution:
      "AI Content Factory deployed to produce 200+ pieces of content in month one. UGC creator network activated with 15 micro-influencers. Media buying concentrated on high-intent interest stacks. Funnel optimised with a three-step advertorial landing page built around the core desire.",
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
      "A heritage British luxury brand struggling to connect with younger affluent consumers in continental Europe. Existing marketing felt dated and failed to resonate with the 28-40 demographic they needed to win.",
    strategy:
      "Applied the Empire package through the D.R.I.V.E. lens. Desire mapping revealed the 28-40 audience craved access and cultural credibility, not heritage. Reflection showed the brand had strong equity but weak visibility. Identity was sharpened around quiet luxury, and Voice was rebuilt for editorial channels rather than traditional advertising.",
    execution:
      "New brand identity rolled out across all touchpoints. Editorial video series produced over 8 weeks. Press seeding to 40 European luxury publications. Pop-up experiences in Paris, Milan, and Amsterdam. Influencer programme with 8 macro-creators selected for cultural authority, not just reach.",
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
    slug: "warriors-of-the-divine-5x-roas",
    brand: "Warriors of the Divine",
    division: "ecommerce",
    market: "global",
    headline: "5.4x ROAS in a 1-Month Campaign",
    thumbnail: "/placeholders/case-4.jpg",
    challenge:
      "In 2023, this Aussie clothing brand for earthy women had just gotten Alicia Keys in one of their pieces and decided to launch a sale in her name. Our job: take their 2.1x ROAS, run with their in-house team, to the level Alicia Keys deserved.",
    strategy:
      "We applied D.R.I.V.E. from the ground up. Desire mapping revealed the brand was selling products when it should have been selling aspiration. Reflection exposed a complete mismatch between creative hooks and buyer intent. Identity was rebuilt around the emotional desire of the customer, then Voice was deployed across 60 new creatives in week one. The desire: the closer your clothes are to earth, the closer you are to the divine. Desire two: being one with earth and in right standing with the divine through sustainable clothing.",
    execution:
      "60 creatives with multiple hooks led with achieving your highest consciousness through Warriors of the Divine. All 60 new ad creatives launched across Meta and TikTok in the first 10 days. Media buying was restructured around a proven campaign architecture. Weekly Execution cycles meant underperformers were cut within 48 hours and winning variants scaled aggressively.",
    results: [
      { label: "ROAS Achieved", value: "5.4x" },
      { label: "ROAS Before Campaign", value: "2.1x" },
      { label: "New Ad Creatives", value: "60" },
      { label: "Campaign Length", value: "1 Month" },
    ],
    tags: ["E-Commerce", "Meta Ads", "TikTok", "Fashion", "Global"],
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}
