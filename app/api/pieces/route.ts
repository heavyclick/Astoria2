import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/auth";
import { createServiceClient, createPublicClient } from "@/lib/supabase";
import { pieces as staticPieces } from "@/lib/pieces";

export async function GET(req: NextRequest) {
  try {
    const isAdmin = await verifyAdminToken();
    const supabase = isAdmin ? createServiceClient() : createPublicClient();

    // No Supabase configured — return static pieces so the site works without env vars
    if (!supabase) {
      return NextResponse.json(staticPieces);
    }

    let query = supabase
      .from("pieces")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (!isAdmin) {
      query = query.eq("published", true);
    }

    const { data, error } = await query;
    if (error) {
      // Supabase error — fall back to static pieces
      return NextResponse.json(staticPieces);
    }
    return NextResponse.json(data && data.length > 0 ? data : staticPieces);
  } catch {
    // Any unexpected error — return static pieces, never crash
    return NextResponse.json(staticPieces);
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAdmin = await verifyAdminToken();
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });

    const body = await req.json();
    const { name, category, price, price_value, image_url, image_path, description, details, published, sort_order } = body;

    if (!name || !category || !price || !image_url) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("pieces")
      .insert({
        name, category, price,
        price_value: price_value || null,
        image_url,
        image_path: image_path || null,
        description: description || null,
        details: details || [],
        published: published !== false,
        sort_order: sort_order || 0,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
