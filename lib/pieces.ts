export interface Piece {
  id: string;
  name: string;
  category: "Native Formal" | "Smart Casual";
  categorySlug?: "native" | "smart";
  price: string;
  price_value?: number | null;
  image_url?: string;
  image?: string;
  description?: string | null;
  details: string[];
  published?: boolean;
  sort_order?: number;
}

// Static fallback — used when Supabase not yet connected
// These are also the exact filenames the placeholder images use in /public/images/
export const pieces: Piece[] = [
  { id:"abuja-agbada", name:"The Abuja Agbada", category:"Native Formal", categorySlug:"native", price:"₦185,000", image_url:"/images/diplomat-model.jpg", image:"/images/diplomat-model.jpg", description:"The commanding native set for occasions that demand presence. Three-piece flowing agbada in premium aso-oke with embroidered trim.", details:["Hand-embroidered neckline","Premium aso-oke fabric","Three-piece set","Custom fit — 7–14 days"], published:true, sort_order:1 },
  { id:"linen-senator", name:"The Linen Senator", category:"Smart Casual", categorySlug:"smart", price:"₦95,000", image_url:"/images/commander-model.jpg", image:"/images/commander-model.jpg", description:"Refined and relaxed. The senator set built for the Abuja climate.", details:["100% linen construction","Structured collar","Two-piece set","Custom fit — 7–14 days"], published:true, sort_order:2 },
  { id:"abuja-kaftan", name:"The Abuja Kaftan", category:"Native Formal", categorySlug:"native", price:"₦120,000", image_url:"/images/sovereign-model.jpg", image:"/images/sovereign-model.jpg", description:"Single-piece formal kaftan for the man who doesn't need to try.", details:["Hand-finished hems","Embroidered chest detail","Premium damask fabric","Custom fit — 7–14 days"], published:true, sort_order:3 },
  { id:"board-trouser", name:"The Board Trouser", category:"Smart Casual", categorySlug:"smart", price:"₦55,000", image_url:"/images/commander-model.jpg", image:"/images/commander-model.jpg", description:"Tailored trousers cut for the boardroom and the dinner table.", details:["Mid-rise cut","Clean flat front","Slight tapered leg","Custom fit — 7–14 days"], published:true, sort_order:4 },
  { id:"aso-oke-set", name:"The Aso-Oke Set", category:"Native Formal", categorySlug:"native", price:"₦210,000", image_url:"/images/IMG_2881.JPG", image:"/images/IMG_2881.JPG", description:"The full ceremonial set — hand-woven aso-oke in your choice of colour.", details:["Hand-woven aso-oke","Choice of colour","Full ceremonial set","Custom fit — 10–14 days"], published:true, sort_order:5 },
  { id:"quiet-shirt", name:"The Quiet Shirt", category:"Smart Casual", categorySlug:"smart", price:"₦48,000", image_url:"/images/IMG_2882.JPG", image:"/images/IMG_2882.JPG", description:"The shirt that doesn't announce itself. Oxford cloth, barrel cuffs, relaxed spread collar.", details:["Oxford cloth fabric","Barrel cuffs","Relaxed spread collar","Custom fit — 7–14 days"], published:true, sort_order:6 },
];

export function getImageSrc(piece: Piece): string {
  return piece.image_url || piece.image || "/images/diplomat-model.jpg";
}

export function getCategorySlug(category: string): "native" | "smart" {
  return category === "Native Formal" ? "native" : "smart";
}
