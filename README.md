# Smashfood Legal Pages

Simple React + Vite site for Google Play Store requirements:

- **Privacy Policy:** `/privacy-policy`
- **Data Deletion:** `/data-deletion`

## Development

```bash
cd frontend/legal-pages
npm install
npm run dev
```

Open http://localhost:5173

## Build for hosting

```bash
npm run build
```

Upload the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## GitHub Pages setup (required)

If you see **"There isn't a GitHub Pages site here"**, fix the source in repo settings:

1. Open **https://github.com/Pythra/smashfood-legal/settings/pages**
2. **Build and deployment → Source:** choose **Deploy from a branch** (not GitHub Actions)
3. **Branch:** `gh-pages` → **Folder:** `/ (root)`
4. Click **Save**
5. Wait 2–5 minutes, then open the URLs below

> If Source was set to **GitHub Actions**, the site will stay 404 until you switch to **Deploy from a branch → gh-pages**.

## Play Console URLs

Live on GitHub Pages:

| Field | URL |
|-------|-----|
| Privacy policy | https://pythra.github.io/smashfood-legal/privacy-policy |
| Data deletion | https://pythra.github.io/smashfood-legal/data-deletion |

Enable **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then choose branch **`gh-pages`** and folder **`/ (root)`**. See README for troubleshooting if the site shows 404.

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
