# How to Push to GitHub and Deploy to Vercel

## Step 1 — Extract the project

Unzip the .tar file you downloaded. You'll get a folder called `astoria/`.

---

## Step 2 — Push to GitHub

Open Terminal (Mac) or Command Prompt (Windows) and run these commands one at a time:

```bash
cd astoria

git init
git remote add origin https://github.com/heavyclick/Astoria2.git
git branch -M main
git add .
git commit -m "Initial commit — Astoria website"
git push -u origin main
```

**If GitHub asks for your username/password:**
- Username: your GitHub username (heavyclick)
- Password: use a Personal Access Token, NOT your GitHub password
  - Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
  - Generate new token → check "repo" scope → copy the token
  - Paste it as the password

---

## Step 3 — Deploy to Vercel

1. Go to **vercel.com** → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Import the `Astoria2` repository from GitHub
4. Vercel auto-detects Next.js — click **Deploy** (no config needed)
5. Your site goes live at a `.vercel.app` URL immediately

---

## Step 4 — Connect your domain

In Vercel → Project → Settings → Domains:

1. Add `astoriagallery.online`
2. Add `www.astoriagallery.online`

Then at your domain registrar (wherever you bought the domain), update DNS:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

SSL is automatic. The site is live at your domain within ~30 minutes of DNS propagating.

---

## Step 5 — Set environment variables on Vercel

Go to Vercel → Project → Settings → Environment Variables.

Add these (from `.env.example` in the project):

```
NEXT_PUBLIC_SUPABASE_URL       = your supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY  = your supabase anon key
SUPABASE_SERVICE_ROLE_KEY      = your supabase service role key
ADMIN_JWT_SECRET               = (run: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
ADMIN_EMAIL                    = admin@astoriagallery.online
ADMIN_PASSWORD_HASH            = (see Step 6 below)
```

---

## Step 6 — Generate your admin password hash

On your computer, open Terminal and run:

```bash
node -e "const b=require('bcryptjs');b.hash('your-chosen-password',12).then(h=>console.log(h))"
```

Copy the output (starts with `$2b$12$...`) — that's your `ADMIN_PASSWORD_HASH`.

---

## Step 7 — Set up Supabase

1. Go to **supabase.com** → New project
2. Go to SQL Editor → paste the contents of `supabase-schema.sql` → Run
3. This creates the `pieces` table and `piece-images` storage bucket

---

## Step 8 — Access the admin panel

Visit: `https://astoriagallery.online/admin/login`

Use the email and password you set in Step 6. This page is not linked from anywhere on the public site.

---

## Step 9 — Launch day checklist

- [ ] Add your real photos (see IMAGES section below)
- [ ] Submit sitemap to Google Search Console: `https://astoriagallery.online/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site in Google Search Console
- [ ] Test every page on mobile
- [ ] Test commission form sends WhatsApp correctly
- [ ] Test admin login works
