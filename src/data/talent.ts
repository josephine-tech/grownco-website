export interface Platform {
  name: "instagram" | "tiktok" | "youtube" | "twitter";
  handle: string;
  followers: string;
  engagementRate: string;
  avgViews?: string;
}

export interface CampaignResult {
  label: string;
  value: string;
}

export interface BrandDeal {
  name: string;
  upcoming?: boolean;
}

export interface Talent {
  slug: string;
  name: string;
  photo: string;
  bio: string;
  niche: string[];
  platforms: Platform[];
  featured: boolean;
  location: string;
  brandHistory?: string[];
  brandDeals?: BrandDeal[];
  origin?: string;
  campaignWork?: string;
  campaignResults?: CampaignResult[];
  campaignNote?: string;
  testimonial?: { quote: string; source: string };
}

export const talent: Talent[] = [
  {
    slug: "ilebaye-odiniya",
    name: "Ilebaye Odiniya",
    photo: "/talent/ilebaye-odiniya.webp",
    bio: "Winner of Big Brother Naija All Stars Season 8. Ilebaye entered the All Stars house as the only finalist who had never previously been a finalist - having been evicted in week three during Level Up. Grow N Co managed her entire digital presence for the full 71-day campaign while she was locked inside the house, building the Baye Tribe into one of the most mobilised fan communities in the show's history.",
    niche: ["Entertainment", "Reality TV", "Lifestyle", "Culture"],
    platforms: [
      {
        name: "instagram",
        handle: "@ilebaye_",
        followers: "759K",
        engagementRate: "30%",
      },
      {
        name: "twitter",
        handle: "@ilebayeofficial_",
        followers: "179K",
        engagementRate: "12%",
      },
    ],
    featured: true,
    location: "Lagos, Nigeria",
    brandDeals: [
      { name: "Body by Beautiful" },
      { name: "AFCON" },
    ],
    origin: "When Ilebaye entered the Big Brother Naija All Stars house, the odds were stacked against her. She was competing against former winners, established fan favourites, and some of the most celebrated personalities in Nigerian entertainment history. She had previously been evicted in her third week during Level Up Season 7, making her the only All Stars finalist who had never been a finalist before. The public knew her. They just hadn't chosen her yet.\n\nGrow N Co took over her entire digital presence from day one of the show. With Ilebaye locked inside the house and unable to communicate with the outside world, we became her voice, her strategists, and her campaign team simultaneously.",
    campaignWork: "The challenge was unique. We were running a live, 71-day public campaign for someone who couldn't give us direction, couldn't approve content, and couldn't course-correct in real time. Every decision had to be right the first time.\n\nWe mapped the public conversation daily, identifying which narratives were building in her favour and which needed to be shifted. We identified the desires of her audience, not just what they liked about Ilebaye, but what they needed her to represent. The Baye Tribe didn't just want her to win. They needed her to win. That distinction changed everything about how we ran the campaign.\n\nInfluencer partnerships were activated strategically, timed around nominations, eviction votes, and key house moments to maximise visibility and mobilise voting behaviour at the exact moments that counted. Social media content was produced and posted with precision, building her narrative week by week and keeping the Baye Tribe informed, activated, and emotionally invested.\n\nCommunity management ran around the clock. Every comment, every conversation, every emerging narrative across Twitter, Instagram, and TikTok was monitored and steered. Public sentiment was not left to chance.",
    campaignResults: [
      { label: "Views Generated", value: "50M+" },
      { label: "Followers Gained", value: "400K+" },
      { label: "Final Public Vote Share", value: "30.08%" },
      { label: "Grand Prize", value: "₦120M" },
    ],
    campaignNote: "This is not a standard social media management case study. This is a 71-day live public campaign run entirely externally, with no client communication, under constant public scrutiny, where the metric for success was binary. She either won or she didn't.\n\nShe won.",
    testimonial: {
      quote: "ILEBAYE's handler almost single-handedly turned things around for her. Forever goated.",
      source: "Public fan sentiment during the campaign",
    },
  },
  {
    slug: "temilade",
    name: "Temilade",
    photo: "/talent/temilade.webp",
    bio: "Temilade is a UK-based fitness and wellness creator and the go-to voice for gym girls on a real journey. Having lost 26KG and counting while managing PCOS, her content sits at the intersection of transformation, education, and community. She covers workout splits, glute and back training, high protein meal ideas, and the kind of honest, relatable gym content that her audience saves, shares, and comes back to. Grow N Co manages her content strategy and every view milestone on her account has been built on ideation, not luck.",
    niche: ["Fitness", "Wellness", "Transformation"],
    platforms: [
      {
        name: "tiktok",
        handle: "@temilfitness",
        followers: "16.5K",
        engagementRate: "TBC",
        avgViews: "150K+",
      },
    ],
    featured: true,
    location: "UK",
    brandDeals: [
      { name: "Applied Nutrition" },
    ],
    origin: "Temilade came to Grow N Co with a story worth telling and an audience that hadn't found her yet. Her PCOS weight loss journey, 26KG and counting, gave her a hook that was personal, powerful, and deeply relevant to millions of women navigating the same path. The challenge was translating that story into content that consistently reached beyond her existing followers and built real, compounding momentum.",
    campaignWork: "We took over Temilade's content ideation entirely. Every concept, every hook, every angle was developed by the Grow N Co team, from her most-saved workout splits to her high protein meal content and transformation posts. We identified the content pillars that speak to her core audience: women who want a body goal they can actually believe in, from someone who has lived it. We built her content around three pillars: transformation proof, educational fitness content, and gym community. Her pinned videos now sit at 555K, 535K, and 3.1M views respectively.",
    campaignResults: [
      { label: "Views Under Grow N Co", value: "150K+" },
      { label: "Followers", value: "16.5K" },
      { label: "Single Video High", value: "3.1M" },
      { label: "Brand Deals Secured", value: "1" },
    ],
    campaignNote: "Every view on this page came from a strategy. None of it was accidental.",
    testimonial: {
      quote: "Every view on this page came from a strategy. None of it was accidental.",
      source: "Temilade",
    },
  },
  {
    slug: "ibisaki",
    name: "Ibisaki",
    photo: "/talent/ibisaki.webp",
    bio: "Ibisaki is a London-based beauty and lifestyle creator on a self-defined journey to becoming 'that girl', and bringing her audience along for every step. Her content covers makeup tutorials, GRWM videos, skin prep routines, brow techniques, soft glam looks, and everyday lifestyle. Warm, accessible, and genuinely educational, Ibisaki speaks directly to the girls who want to look good and understand why what they're doing works. Grow N Co manages her content strategy, and the results, 50,000 views from a 1,500-follower base, are proof that the right creative direction makes audience size irrelevant.",
    niche: ["Beauty", "Lifestyle", "Makeup"],
    platforms: [
      {
        name: "tiktok",
        handle: "@ibisaki.xo",
        followers: "1.5K",
        engagementRate: "50%",
        avgViews: "50K+",
      },
    ],
    featured: true,
    location: "London, UK",
    brandDeals: [
      { name: "ISEE Hair" },
      { name: "Superdrug" },
      { name: "Afrofete", upcoming: true },
    ],
    origin: "Ibisaki had the look, the personality, and the content instinct. What she needed was a strategy that could take her beyond her existing circle and into the feeds of the audiences that needed to find her. Grow N Co came on board to build a content framework around her strengths, beauty education, lifestyle relatability, and that specific London girl aesthetic that resonates deeply on TikTok.",
    campaignWork: "We mapped Ibisaki's content across her core pillars, makeup tutorials, skin prep, GRWM, and lifestyle, and built a creative strategy designed to generate reach without requiring a large existing audience. The content focuses on accessibility and education: techniques that feel achievable, products that are real, and a personality that makes viewers want to return. Brands noticed before the follower count justified it. ISEE Hair came on board first, followed by Superdrug, with Afrofete confirmed as an upcoming collaboration, a testament to what a focused creative strategy does for a creator's commercial appeal.",
    campaignResults: [
      { label: "Views Under Grow N Co", value: "50K+" },
      { label: "Followers Reached", value: "1.5K" },
      { label: "Brand Deals Secured", value: "3" },
      { label: "Total Likes", value: "56.9K" },
    ],
    campaignNote: "The right content strategy doesn't wait for a big audience. It builds one.",
    testimonial: {
      quote: "The right content strategy doesn't wait for a big audience. It builds one.",
      source: "Grow N Co",
    },
  },
];

export function getTalent(slug: string): Talent | undefined {
  return talent.find((t) => t.slug === slug);
}

export function getFeaturedTalent(): Talent[] {
  return talent.filter((t) => t.featured);
}
