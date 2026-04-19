import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/auth";
import { createServiceClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const isAdmin = await verifyAdminToken();
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: "Supabase not configured. Add env vars in Vercel." }, { status: 503 });

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) return NextResponse.json({ error: "File must be JPEG, PNG, or WebP" }, { status: 400 });
    if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "File must be under 5MB" }, { status: 400 });

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const slug = file.name.replace(/\.[^/.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60);
    const path = `pieces/${Date.now()}-${slug}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const { error } = await supabase.storage.from("piece-images").upload(path, arrayBuffer, { contentType: file.type, upsert: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const { data: urlData } = supabase.storage.from("piece-images").getPublicUrl(path);
    return NextResponse.json({ url: urlData.publicUrl, path });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
