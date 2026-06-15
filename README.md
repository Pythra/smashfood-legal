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

## Play Console URLs

Live on GitHub Pages:

| Field | URL |
|-------|-----|
| Privacy policy | https://pythra.github.io/smashfood-legal/privacy-policy |
| Data deletion | https://pythra.github.io/smashfood-legal/data-deletion |

Enable **Settings → Pages → Source: GitHub Actions** in the repo if the site does not appear after the first push.

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
