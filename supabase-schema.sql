-- ═══════════════════════════════════════════════════════════
-- ASTORIA DATABASE SCHEMA
-- Run this in your Supabase SQL editor (Dashboard → SQL Editor)
-- ═══════════════════════════════════════════════════════════

-- 1. PIECES TABLE
-- ──────────────────────────────────────────────────────────
create table if not exists public.pieces (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  category    text not null check (category in ('Native Formal', 'Smart Casual')),
  price       text not null,                    -- e.g. "₦185,000"
  price_value integer,                          -- numeric for sorting, e.g. 185000
  image_url   text not null,                    -- full URL from Supabase Storage
  image_path  text,                             -- storage path for deletion
  description text,
  details     text[] default '{}',             -- e.g. {"Hand-embroidered","7–14 days"}
  published   boolean not null default true,
  sort_order  integer default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger pieces_updated_at
  before update on public.pieces
  for each row execute function public.handle_updated_at();

-- 2. ROW LEVEL SECURITY
-- ──────────────────────────────────────────────────────────
alter table public.pieces enable row level security;

-- Public can read published pieces only
create policy "Public can read published pieces"
  on public.pieces for select
  using (published = true);

-- Service role (used by admin API routes) has full access
-- This is handled automatically by the service role key bypassing RLS

-- 3. STORAGE BUCKET FOR IMAGES
-- ──────────────────────────────────────────────────────────
-- Run this in the SQL editor to create the storage bucket
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'piece-images',
  'piece-images',
  true,                          -- public bucket — images served via CDN URL
  5242880,                       -- 5MB max per image
  array['image/jpeg','image/jpg','image/png','image/webp']
)
on conflict (id) do nothing;

-- Public read policy for storage
create policy "Public can read piece images"
  on storage.objects for select
  using (bucket_id = 'piece-images');

-- Service role handles writes (via admin API using service key)
create policy "Service role can manage piece images"
  on storage.objects for all
  using (bucket_id = 'piece-images');

-- 4. SEED DATA (optional — matches the original static collection)
-- ──────────────────────────────────────────────────────────
-- Uncomment and run AFTER you've uploaded placeholder images to storage
/*
insert into public.pieces (name, category, price, price_value, image_url, description, details, sort_order)
values
  ('The Abuja Agbada',  'Native Formal', '₦185,000', 185000, 'YOUR_STORAGE_URL/diplomat-model.jpg',  'The commanding native set for occasions that demand presence.', array['Hand-embroidered neckline','Premium aso-oke fabric','Three-piece set','Custom fit — 7–14 days'], 1),
  ('The Linen Senator', 'Smart Casual',  '₦95,000',   95000, 'YOUR_STORAGE_URL/commander-model.jpg', 'Refined and relaxed. The senator set built for the Abuja climate.', array['100% linen construction','Structured collar','Two-piece set','Custom fit — 7–14 days'], 2),
  ('The Abuja Kaftan',  'Native Formal', '₦120,000', 120000, 'YOUR_STORAGE_URL/sovereign-model.jpg', 'Single-piece formal kaftan for the man who doesn''t need to try.', array['Hand-finished hems','Embroidered chest detail','Premium damask fabric','Custom fit — 7–14 days'], 3),
  ('The Board Trouser', 'Smart Casual',  '₦55,000',   55000, 'YOUR_STORAGE_URL/commander-model.jpg', 'Tailored trousers cut for the boardroom and the dinner table.',  array['Mid-rise cut','Clean flat front','Slight tapered leg','Custom fit — 7–14 days'], 4),
  ('The Aso-Oke Set',   'Native Formal', '₦210,000', 210000, 'YOUR_STORAGE_URL/aso-oke.jpg',         'The full ceremonial set — hand-woven aso-oke in your choice of colour.', array['Hand-woven aso-oke','Choice of colour','Full ceremonial set','Custom fit — 10–14 days'], 5),
  ('The Quiet Shirt',   'Smart Casual',  '₦48,000',   48000, 'YOUR_STORAGE_URL/quiet-shirt.jpg',    'The shirt that doesn''t announce itself.',                      array['Oxford cloth fabric','Barrel cuffs','Relaxed spread collar','Custom fit — 7–14 days'], 6);
*/

-- 5. VERIFICATION QUERIES
-- ──────────────────────────────────────────────────────────
-- After setup, run these to verify:
-- select * from public.pieces;
-- select * from storage.buckets where id = 'piece-images';
