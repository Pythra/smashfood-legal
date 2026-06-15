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

After deploying (example with `https://legal.smashfood.com`):

| Field | URL |
|-------|-----|
| Privacy policy | `https://legal.smashfood.com/privacy-policy` |
| Data deletion | `https://legal.smashfood.com/data-deletion` |

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
