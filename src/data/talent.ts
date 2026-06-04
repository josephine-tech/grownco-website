export interface Platform {
  name: "instagram" | "tiktok" | "youtube" | "twitter";
  handle: string;
  followers: string;
  engagementRate: string;
  avgViews?: string;
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
}

export const talent: Talent[] = [
  {
    slug: "amara-osei",
    name: "Amara Osei",
    photo: "/placeholders/talent-1.jpg",
    bio: "Fashion and lifestyle creator based in Accra, Ghana. Amara blends contemporary African fashion with global trends, creating aspirational content that resonates deeply across the continent and diaspora. Known for her authentic storytelling and exceptional engagement rates.",
    niche: ["Fashion", "Lifestyle", "Beauty", "African Culture"],
    platforms: [
      {
        name: "instagram",
        handle: "@amaraosei",
        followers: "2.4M",
        engagementRate: "8.2%",
        avgViews: "180K",
      },
      {
        name: "tiktok",
        handle: "@amaraosei",
        followers: "1.1M",
        engagementRate: "11.4%",
        avgViews: "420K",
      },
    ],
    featured: true,
    location: "Accra, Ghana",
    brandHistory: ["ZARA", "L'Oréal", "MTN", "Jumia Fashion"],
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    photo: "/placeholders/talent-2.jpg",
    bio: "Tech and finance content creator dominating the UK creator economy. Marcus breaks down complex investment strategies and tech reviews into content that Gen Z actually watches. His audience skews 18–30, high-income, and highly engaged.",
    niche: ["Tech", "Finance", "Lifestyle", "Entrepreneurship"],
    platforms: [
      {
        name: "youtube",
        handle: "@marcuschen",
        followers: "890K",
        engagementRate: "6.8%",
        avgViews: "220K",
      },
      {
        name: "instagram",
        handle: "@marcuschen",
        followers: "340K",
        engagementRate: "9.1%",
      },
      {
        name: "tiktok",
        handle: "@marcuschen",
        followers: "520K",
        engagementRate: "14.2%",
        avgViews: "680K",
      },
    ],
    featured: true,
    location: "London, UK",
    brandHistory: ["Samsung", "Monzo", "Trading212", "Squarespace"],
  },
  {
    slug: "sofia-reyes",
    name: "Sofía Reyes",
    photo: "/placeholders/talent-3.jpg",
    bio: "Miami-based fitness and wellness creator with a highly loyal community built around authentic transformation content. Sofía's brand partnerships consistently outperform industry benchmarks, with audience trust driving exceptional conversion rates for health and lifestyle brands.",
    niche: ["Fitness", "Wellness", "Nutrition", "Lifestyle"],
    platforms: [
      {
        name: "instagram",
        handle: "@sofiareyeswellness",
        followers: "1.8M",
        engagementRate: "7.4%",
        avgViews: "290K",
      },
      {
        name: "tiktok",
        handle: "@sofiareyeswellness",
        followers: "2.1M",
        engagementRate: "9.8%",
        avgViews: "1.2M",
      },
      {
        name: "youtube",
        handle: "@sofiareyeswellness",
        followers: "410K",
        engagementRate: "5.2%",
        avgViews: "180K",
      },
    ],
    featured: true,
    location: "Miami, USA",
    brandHistory: ["Nike", "Gymshark", "MyProtein", "HelloFresh"],
  },
  {
    slug: "kwame-asante",
    name: "Kwame Asante",
    photo: "/placeholders/talent-4.jpg",
    bio: "Comedy and entertainment creator from Lagos, Nigeria. Kwame's skits and social commentary have made him one of the most recognisable faces in West African digital entertainment. His content bridges cultures, making him equally powerful for pan-African and global campaigns.",
    niche: ["Comedy", "Entertainment", "Culture", "Lifestyle"],
    platforms: [
      {
        name: "instagram",
        handle: "@kwameasante",
        followers: "3.2M",
        engagementRate: "12.6%",
        avgViews: "2.8M",
      },
      {
        name: "tiktok",
        handle: "@kwameasante",
        followers: "4.1M",
        engagementRate: "15.8%",
        avgViews: "5.4M",
      },
    ],
    featured: false,
    location: "Lagos, Nigeria",
    brandHistory: ["Pepsi Nigeria", "GTBank", "Spotify Africa", "Bolt"],
  },
];

export function getTalent(slug: string): Talent | undefined {
  return talent.find((t) => t.slug === slug);
}

export function getFeaturedTalent(): Talent[] {
  return talent.filter((t) => t.featured);
}
