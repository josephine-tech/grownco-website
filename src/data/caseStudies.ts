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
    slug: "nexy-media-600k-12-companies",
    brand: "Nexy Media",
    division: "ecommerce",
    market: "europe",
    headline: "£600,000 in 12 Months Across 12 Companies",
    thumbnail: "/placeholders/case-nexy.jpg",
    challenge:
      "Nexy Media is a UK-based PPC agency operating in partnership with Google, managing paid advertising across a portfolio of twelve companies. When they brought us in, the business was operating at a deficit. Campaigns were running, money was being spent, but returns were not covering costs. The problem was not the platforms or the budgets. It was the creative strategy - ads built around product features when they should have been built around human desires.",
    strategy:
      "We took on the dual role of creative strategist and media buyer across all twelve accounts simultaneously. Every account received a full D.R.I.V.E. audit in month one. Existing campaigns were mapped against the desire framework, and briefs were rebuilt from the desire outward.",
    execution:
      "Google Ads campaign architectures were restructured across all twelve companies to align creative strategy with media buying. Weekly execution cycles kept every account sharp: what worked got more budget, what didn't got cut within 48 hours.",
    results: [
      { label: "Revenue Generated", value: "£600K" },
      { label: "Companies Managed", value: "12" },
      { label: "Timeframe", value: "12 Months" },
      { label: "Outcome", value: "Best Year Yet" },
    ],
    testimonial: {
      quote:
        "Josephine and the team were impeccable. Our most profitable year till date. It was sad Google let go of our contract.",
      name: "Anna Akhalbedashvili",
      role: "Nexy Media",
    },
    tags: ["PPC", "Google Ads", "Performance", "Agency Partnership", "Europe"],
    featured: true,
  },
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
    slug: "maison-crivelli-180x-awareness",
    brand: "Maison Crivelli",
    division: "traditional",
    market: "europe",
    headline: "180x Brand Awareness · 20M Views · $130,000 in Revenue",
    thumbnail: "/placeholders/case-3.jpg",
    challenge:
      "Maison Crivelli is a heritage British luxury fragrance house with strong brand equity and a loyal but aging customer base. When they came to us, the challenge was clear: the 28 to 40 affluent European consumer they needed to win was not finding them. Existing marketing felt dated, distribution was limited, and the brand's visibility in continental Europe was almost non-existent. The product was exceptional. The presentation was not reaching the right people.",
    strategy:
      "We deployed the Empire package through the D.R.I.V.E. framework from the ground up. Desire mapping revealed that the 28 to 40 demographic did not want heritage, they wanted access. They wanted to feel like they had discovered something rarified before everyone else did. Reflection showed the brand had the equity to support that positioning but lacked the visibility to make it believable. Identity was sharpened entirely around quiet luxury, the kind of confidence that does not announce itself. Voice was rebuilt for editorial channels, culture-forward platforms, and press rather than traditional advertising formats.",
    execution:
      "Execution ran across eight weeks. A new brand identity was rolled out across every touchpoint simultaneously. An editorial video series was produced and distributed across Instagram, TikTok, and YouTube. Press seeding reached 40 European luxury publications. Pop-up experiences were activated in Paris, Milan, and Amsterdam, each one designed as a cultural moment, not a sales event. An influencer programme was built around eight macro-creators selected entirely for cultural authority rather than follower count.",
    results: [
      { label: "Brand Awareness Lift", value: "180x" },
      { label: "New Followers", value: "20K" },
      { label: "Total Views", value: "20M" },
      { label: "Revenue Generated", value: "$130K" },
    ],
    testimonial: {
      quote:
        "Grow N Co understood something our previous agencies never did. Our customer doesn't want to be sold to. They want to be let in. That's exactly what this campaign did.",
      name: "Maison Crivelli",
      role: "Brand Director",
    },
    tags: ["Brand", "PR", "Luxury", "Europe", "Traditional"],
    featured: true,
  },
  {
    slug: "warriors-of-the-divine-5x-roas",
    brand: "Warriors of the Divine",
    division: "ecommerce",
    market: "global",
    headline: "$232,645 in 1.5 Months · 5.4x ROAS",
    thumbnail: "/placeholders/case-4.jpg",
    challenge:
      "Warriors of the Divine is an Australian clothing brand built for earthy women - sustainable, spiritual, grounded in the connection between self and earth. In 2023, Alicia Keys wore one of their pieces and they decided to launch a sale in her name. Their in-house team was running a 2.1x ROAS. For a campaign of this cultural weight, that wasn't enough. Our job was to take 2.1x to wherever Alicia Keys deserved.",
    strategy:
      "We applied D.R.I.V.E. from the ground up. Desire mapping revealed the brand was selling products when it should have been selling aspiration. Two desires emerged: achieving your highest consciousness through what you wear, and being one with earth and in right standing with the divine through sustainable clothing. Reflection exposed a complete mismatch between creative hooks and buyer intent. Identity was rebuilt around the emotional truth of the customer.",
    execution:
      "Sixty new creatives were launched across Meta and TikTok in the first 10 days with multiple hook variations, all leading with the desire, never the product. Media buying was restructured around a proven campaign architecture. Underperformers were cut within 48 hours. Winners were scaled aggressively.",
    results: [
      { label: "Revenue (1.5 Months)", value: "$232,645" },
      { label: "ROAS Achieved", value: "5.4x" },
      { label: "ROAS Before Campaign", value: "2.1x" },
      { label: "Campaign Length", value: "1.5 Months" },
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
