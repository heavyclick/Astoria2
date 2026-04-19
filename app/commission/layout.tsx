import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Commission — Bespoke Nigerian Menswear | Astoria",
  description: "Start your Astoria commission. Tell us your occasion, measurements, and timeline — we handle everything after that. Response within 24 hours. No deposit to begin.",
  alternates: { canonical: "https://astoriagallery.online/commission/" },
};

export default function CommissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
