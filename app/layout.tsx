import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://astoriagallery.online"),
  title: {
    default: "Buy Nigerian Native Clothes Online — Bespoke Menswear | Astoria",
    template: "%s | Astoria",
  },
  description: "Astoria makes bespoke Nigerian menswear — agbada, senator suits, kaftan sets — cut to your measurements, sewn by hand, shipped nationwide and worldwide.",
  keywords: ["buy Nigerian native clothes online","buy agbada Nigeria","bespoke Nigerian menswear","senator suit Abuja","native wear Nigeria","agbada Abuja"],
  openGraph: {
    type: "website", locale: "en_NG",
    url: "https://astoriagallery.online",
    siteName: "Astoria",
    title: "Buy Nigerian Native Clothes Online — Bespoke Menswear | Astoria",
    description: "Bespoke Nigerian menswear — agbada, senator suits, kaftan sets — cut to your measurements, sewn by hand, shipped nationwide and worldwide.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Astoria Bespoke Nigerian Menswear" }],
  },
  twitter: { card: "summary_large_image", title: "Astoria — Bespoke Nigerian Menswear", description: "Made to measure. Delivered in 7–14 days.", images: ["/images/og-image.jpg"] },
  alternates: { canonical: "https://astoriagallery.online/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ClothingStore",
      "@id": "https://astoriagallery.online/#store",
      name: "Astoria",
      url: "https://astoriagallery.online/",
      description: "Bespoke Nigerian menswear — agbada, senator suits, kaftan sets made to measure in Abuja. Ships nationwide and worldwide.",
      telephone: "+2347015870376",
      address: { "@type": "PostalAddress", addressLocality: "Abuja", addressRegion: "FCT", addressCountry: "NG" },
      openingHours: "Mo-Sa 09:00-18:00",
      priceRange: "₦₦₦",
      currenciesAccepted: "NGN",
      areaServed: { "@type": "Country", name: "Nigeria" },
      sameAs: ["https://instagram.com/astoriagallery", "https://tiktok.com/@astoriagallery", "https://wa.me/2347015870376"],
    },
    { "@type": "WebSite", "@id": "https://astoriagallery.online/#website", url: "https://astoriagallery.online/", name: "Astoria", publisher: { "@id": "https://astoriagallery.online/#store" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
