# Astoria — Next.js Website

Bespoke menswear website for Astoria, Abuja Nigeria.
Domain: https://astoriagallery.online

---

## Stack
- **Framework**: Next.js 16 (App Router, Static Site Generation)
- **Hosting**: Deploy to Vercel (recommended) — zero config, free SSL, global CDN
- **Domain**: astoriagallery.online (non-www canonical)

---

## 1. Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## 2. Add Your Real Photos

Replace the placeholder SVG files in `/public/images/` with real photos:

| Filename | Used On |
|---|---|
| `diplomat-model.jpg` | Hero main, Abuja Agbada card |
| `commander-model.jpg` | Hero sub-cell, Senator/Trouser cards |
| `sovereign-model.jpg` | Hero sub-cell, Kaftan card, Philosophy section |
| `IMG_2881.JPG` | Aso-Oke Set card |
| `IMG_2882.JPG` | The Quiet Shirt card |
| `og-image.jpg` | Social share preview (1200×630px) |

**Image requirements:**
- Format: JPEG or WebP preferred
- Hero (`diplomat-model.jpg`): under 150KB after compression
- Other images: under 80KB
- Aspect ratio: portrait (2:3 recommended) for piece cards
- Compress at: https://squoosh.app → WebP, quality 82

---

## 3. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Framework: Next.js (auto-detected)
# - Build command: npm run build (default)
# - Output directory: .next (default)
```

**Domain setup on Vercel:**
1. Go to Project → Settings → Domains
2. Add `astoriagallery.online`
3. Add `www.astoriagallery.online` (Vercel will auto-redirect to non-www)
4. Update DNS at your domain registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME record: `www` → `cname.vercel-dns.com`
5. SSL is automatic — no steps needed

---

## 4. Site Map

| Page | URL | Purpose |
|---|---|---|
| Homepage | `/` | Main landing, collection preview, commission CTA |
| Collection | `/collection/` | All pieces grid |
| Native Formal | `/collection/native-formal/` | Agbada, kaftan, aso-oke |
| Smart Casual | `/collection/smart-casual/` | Senator, shirts, trousers |
| Commission | `/commission/` | WhatsApp commission form |
| Atelier | `/atelier/` | About + process + FAQ |
| Contact | `/contact/` | WhatsApp contact form |
| Sitemap | `/sitemap.xml` | Auto-generated for Google |
| Robots | `/robots.txt` | Allows all crawlers |

---

## 5. Adding New Pieces to the Collection

Edit `/lib/pieces.ts`:

```typescript
{
  id: "your-piece-slug",           // unique, lowercase, hyphenated
  name: "The Piece Name",
  category: "Native Formal",       // or "Smart Casual"
  categorySlug: "native",          // or "smart"
  price: "₦150,000",
  image: "/images/your-photo.jpg", // add photo to /public/images/
  description: "Short description for alt text and context.",
  details: ["Detail 1", "Detail 2", "Custom fit — 7–14 days"],
}
```

The piece automatically appears on: Homepage collection, `/collection/`, and the relevant category page.

---

## 6. Changing Prices

All prices live in `/lib/pieces.ts`. Edit the `price` field for any piece. The WhatsApp messages sent to clients automatically use the updated price.

---

## 7. SEO — What's Included

- ✅ Unique title tags and meta descriptions on every page
- ✅ Canonical tags (non-www, HTTPS, trailing slash)
- ✅ Schema.org structured data: ClothingStore, CollectionPage, FAQPage, BreadcrumbList
- ✅ Open Graph + Twitter Card meta tags
- ✅ Sitemap at `/sitemap.xml`
- ✅ robots.txt (allows all)
- ✅ www → non-www redirect (301)
- ✅ Static Site Generation (SSG) — every page pre-rendered for maximum speed
- ✅ Alt text on all images
- ✅ Mobile-first responsive design

**After launch — do these:**
1. Submit sitemap to Google Search Console: `https://astoriagallery.online/sitemap.xml`
2. Submit sitemap to Bing Webmaster Tools
3. Create/claim Google Business Profile for Astoria Abuja
4. Link website to Instagram bio

---

## 8. WhatsApp Integration

All "Request This Piece" and commission buttons open WhatsApp with a pre-filled message.

WhatsApp number: **+234 701 587 0376**

To change the number, find and replace `2347015870376` across:
- `/components/Nav.tsx`
- `/components/Footer.tsx`
- `/lib/pieces.ts` (if referenced)
- `/app/page.tsx`
- `/app/collection/page.tsx`
- `/app/collection/native-formal/page.tsx`
- `/app/collection/smart-casual/page.tsx`
- `/app/commission/page.tsx`
- `/app/contact/page.tsx`
- `/app/layout.tsx` (schema)

---

## 9. Performance

The site is fully static (SSG). Every page pre-renders at build time. On Vercel with edge CDN, TTFB is typically under 50ms globally.

PageSpeed targets:
- Mobile: 90+ (depends on image compression — compress all photos)
- Desktop: 95+

---

## 10. Project Structure

```
astoria/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, schema
│   ├── page.tsx            # Homepage
│   ├── globals.css         # All styles (design system)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── collection/
│   │   ├── page.tsx        # All pieces
│   │   ├── native-formal/page.tsx
│   │   └── smart-casual/page.tsx
│   ├── commission/
│   │   ├── layout.tsx      # Metadata
│   │   └── page.tsx        # Commission form
│   ├── atelier/page.tsx    # About + process
│   └── contact/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── Nav.tsx             # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── FadeUp.tsx          # Scroll animation wrapper
│   └── PieceCard.tsx       # Reusable piece card (available)
├── lib/
│   └── pieces.ts           # Collection data — edit here to add/change pieces
├── public/
│   ├── images/             # Product and brand photos — replace placeholders
│   └── robots.txt
└── next.config.ts          # Redirects, headers, image config
```
