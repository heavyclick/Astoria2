import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://astoriagallery.online";
  const now = new Date();
  const weekly = "weekly" as const;
  const monthly = "monthly" as const;
  const yearly = "yearly" as const;

  return [
    // Core
    { url: `${base}/`, lastModified: now, changeFrequency: weekly, priority: 1.0 },

    // Pillar pages
    { url: `${base}/buy-agbada-nigeria/`, lastModified: now, changeFrequency: monthly, priority: 0.95 },
    { url: `${base}/buy-native-wear-nigeria/`, lastModified: now, changeFrequency: monthly, priority: 0.95 },
    { url: `${base}/shop-african-wear-for-men/`, lastModified: now, changeFrequency: monthly, priority: 0.9 },
    { url: `${base}/buy-nigerian-native-clothes-online/`, lastModified: now, changeFrequency: monthly, priority: 0.9 },

    // Shop by event
    { url: `${base}/shop-by-event/`, lastModified: now, changeFrequency: monthly, priority: 0.9 },
    { url: `${base}/shop-by-event/wedding-owambe/`, lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/shop-by-event/date-night/`, lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/shop-by-event/business-meeting/`, lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/shop-by-event/everyday-smart-casual/`, lastModified: now, changeFrequency: monthly, priority: 0.85 },

    // Utility
    { url: `${base}/commission/`, lastModified: now, changeFrequency: monthly, priority: 0.9 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: yearly, priority: 0.7 },

    // Blog
    { url: `${base}/blog/`, lastModified: now, changeFrequency: weekly, priority: 0.8 },
    { url: `${base}/blog/best-mens-native-styles-nigerian-wedding/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/blog/date-night-outfit-men-nigeria/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/blog/agbada-vs-senator-suit/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/blog/how-to-commission-native-wear-online-nigeria/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/blog/outfit-nigerian-business-meeting/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/blog/how-long-bespoke-native-wear-nigeria/`, lastModified: now, changeFrequency: monthly, priority: 0.8 },
  ];
}
