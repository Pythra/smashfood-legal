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

The site is published from the **`docs/`** folder on the **`main`** branch.

1. Open **https://github.com/Pythra/smashfood-legal/settings/pages**
2. **Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `main` → **Folder:** `/docs`
4. Click **Save**
5. Wait 2–5 minutes

You should see: **"Your site is live at https://pythra.github.io/smashfood-legal/"**

> Do **not** use **GitHub Actions** as the Pages source for this repo.  
> Do **not** use the `gh-pages` branch unless you switch the folder manually.

## Play Console URLs

Live on GitHub Pages:

| Field | URL |
|-------|-----|
| Privacy policy | https://pythra.github.io/smashfood-legal/privacy-policy |
| Data deletion | https://pythra.github.io/smashfood-legal/data-deletion |

Set **Settings → Pages → Source: Deploy from a branch → `main` → `/docs`**. See README if the site shows 404.

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
