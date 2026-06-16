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
        followers: "400K+",
        engagementRate: "30.08%",
        avgViews: "50M",
      },
      {
        name: "tiktok",
        handle: "@ilebaye_",
        followers: "400K+",
        engagementRate: "30.08%",
        avgViews: "50M",
      },
    ],
    featured: true,
    location: "Lagos, Nigeria",
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
    slug: "ibisaki-lawson",
    name: "Ibisaki Lawson",
    photo: "/talent/ibisaki-lawson.webp",
    bio: "Coming soon.",
    niche: [],
    platforms: [],
    featured: false,
    location: "",
  },
  {
    slug: "temilade-adeniji",
    name: "Temilade Adeniji",
    photo: "/talent/temilade-adeniji.webp",
    bio: "Coming soon.",
    niche: [],
    platforms: [],
    featured: false,
    location: "",
  },
];

export function getTalent(slug: string): Talent | undefined {
  return talent.find((t) => t.slug === slug);
}

export function getFeaturedTalent(): Talent[] {
  return talent.filter((t) => t.featured);
}
