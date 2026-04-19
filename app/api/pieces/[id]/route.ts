import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/auth";
import { createServiceClient } from "@/lib/supabase";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdminToken();
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
    const { id } = await params;
    const body = await req.json();
    const { data, error } = await supabase.from("pieces").update(body).eq("id", id).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdminToken();
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
    const { id } = await params;
    const { data: piece } = await supabase.from("pieces").select("image_path").eq("id", id).single();
    if (piece?.image_path) await supabase.storage.from("piece-images").remove([piece.image_path]);
    const { error } = await supabase.from("pieces").delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
