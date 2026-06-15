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

## Deploy to Cloudflare Pages (Git)

Connect the repo in Cloudflare — no API tokens or GitHub secrets needed.

### Cloudflare dashboard settings

**Workers & Pages → Create → Pages → Connect to Git** → select `Pythra/smashfood-legal`

| Setting | Value |
|---------|-------|
| Framework preset | `Vite` (or `None`) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (leave empty if repo root is this project) |
| **Deploy command** | **leave empty** |

Do **not** set the deploy command to `wrangler deploy` — that is for Workers, not static Pages. Cloudflare publishes `dist/` automatically after the build.

Every push to `main` rebuilds and redeploys the site.

### Play Console URLs

After deploy, use your Cloudflare Pages URL (e.g. `https://smashfood-legal.pages.dev`):

| Field | URL |
|-------|-----|
| Privacy policy | `https://smashfood-legal.pages.dev/privacy-policy` |
| Data deletion | `https://smashfood-legal.pages.dev/data-deletion` |

Replace the hostname if you add a custom domain under **Workers & Pages → smashfood-legal → Custom domains**.

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
