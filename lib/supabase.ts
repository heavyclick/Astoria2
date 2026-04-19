import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function createServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function createPublicClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export interface DbPiece {
  id: string;
  name: string;
  category: "Native Formal" | "Smart Casual";
  price: string;
  price_value: number | null;
  image_url: string;
  image_path: string | null;
  description: string | null;
  details: string[];
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
