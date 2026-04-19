import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    unoptimized: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.astoriagallery.online" }],
        destination: "https://astoriagallery.online/:path*",
        permanent: true,
      },
      // Old pages → new pages
      { source: "/atelier/", destination: "/about/", permanent: true },
      { source: "/atelier", destination: "/about/", permanent: true },
      { source: "/contact/", destination: "/commission/", permanent: true },
      { source: "/contact", destination: "/commission/", permanent: true },
      // Old collection paths (from first build iteration)
      { source: "/collection/", destination: "/buy-native-wear-nigeria/", permanent: true },
      { source: "/collection/native-formal/", destination: "/buy-agbada-nigeria/", permanent: true },
      { source: "/collection/smart-casual/", destination: "/shop-by-event/everyday-smart-casual/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
