# Images — Complete Guide

## Where images live

All images go in: `/public/images/`

When you put a file at `/public/images/photo.jpg`, it's accessible at `https://astoriagallery.online/images/photo.jpg` and automatically used by the site.

---

## The 6 placeholder images — replace these first

These are the files currently in `/public/images/`. They're SVG placeholders.
Replace them with real photos using the EXACT same filenames:

| Filename | Used On | Recommended size |
|---|---|---|
| `diplomat-model.jpg` | Homepage hero (main), Agbada piece card | 800×1200px, under 150KB |
| `commander-model.jpg` | Homepage hero (sub), Senator/Trouser cards | 800×1200px, under 80KB |
| `sovereign-model.jpg` | Homepage hero (sub), Kaftan card, About/Philosophy | 800×1200px, under 80KB |
| `IMG_2881.JPG` | Aso-Oke Set card | 800×1200px, under 80KB |
| `IMG_2882.JPG` | Quiet Shirt card | 800×1200px, under 80KB |
| `og-image.jpg` | Social media share preview (all pages) | 1200×630px, under 200KB |

**Important:** Keep the filenames exactly as shown, including the `.JPG` capitalisation on the last two.

---

## How to add images

### Option A — Replace placeholder files (for the 6 pieces above)
1. Take or prepare your photo
2. Compress it at squoosh.app → WebP or JPEG → quality 80–85
3. Rename it to match the filename above exactly
4. Drop it into `/public/images/` (replacing the existing file)
5. Push to GitHub → Vercel auto-deploys in ~30 seconds

### Option B — Add new piece images via the admin panel
1. Go to `/admin/login`
2. Click "Add Piece"
3. Upload your photo directly in the form
4. The image uploads to Supabase Storage and the piece appears on the site immediately
5. No code changes needed — this is the ongoing workflow after launch

---

## Image requirements

| Use | Format | Max size | Dimensions |
|---|---|---|---|
| Hero image | WebP or JPEG | 150KB | 800×1200px minimum |
| Piece cards | WebP or JPEG | 80KB | 800×1200px (2:3 ratio) |
| Social OG image | JPEG | 200KB | 1200×630px exactly |

---

## How to compress images (free, browser-based)

1. Go to **squoosh.app**
2. Upload your photo
3. On the right panel, select **WebP**
4. Set quality to **82**
5. Check the file size in the bottom left — aim under 80KB
6. Click **Download**

---

## Images on pillar pages and blog posts

The pillar pages (buy-agbada-nigeria, buy-native-wear-nigeria, etc.) and blog posts currently don't display product images inline — they use text-only layouts designed to load fast and rank well. This is intentional.

If you want to add images to these pages later, add them via the admin panel as pieces in the collection, or edit the relevant page file to include an `<Image>` component pointing to your file in `/public/images/`.

---

## Adding a new piece to the collection

**Via admin panel (recommended — no code needed):**
1. Log in at `/admin/login`
2. Click "+ Add Piece"
3. Fill in: name, category (Native Formal or Smart Casual), price, description, details (one per line), upload photo
4. Check "Published" and click "Add to Collection"
5. The piece appears on the homepage, collection grid, and the relevant category page immediately

**Via code (for developers):**
Edit `/lib/pieces.ts` and add a new entry to the `pieces` array. Add the image to `/public/images/`.

---

## The event page images (wedding, date night, etc.)

The Shop by Event hub and the 4 event pages (wedding-owambe, date-night, business-meeting, everyday-smart-casual) use the same 6 placeholder images from the collection grid — they pull from the same `/public/images/` files.

Once you replace those 6 files with real photos, all event pages update automatically. You don't need separate images for each event page.

