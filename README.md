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
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | `npx wrangler deploy` |

`wrangler.jsonc` in the repo tells Cloudflare this is a static SPA. Routing (`/privacy-policy`, `/data-deletion`) is handled by `not_found_handling: "single-page-application"` — no separate HTML file per page.

The project name in `wrangler.jsonc` (`smashfood-legal`) must match your Cloudflare Pages project name.

### If deploy fails after "Success! Uploaded X files"

The build is working. A failure on the last line (`A request to the Cloudflare API failed...`) is usually:

1. **Name mismatch** — Pages project name must match `"name"` in `wrangler.jsonc` (`smashfood-legal`)
2. **Retry** — click **Retry deployment** in Cloudflare (often a transient API error)
3. **Duplicate project** — delete any old broken Worker/Pages project with the same name and recreate

Paste the **full** error line from the log if it keeps failing.

### Play Console URLs

After deploy, use your Cloudflare URL (e.g. `https://smashfood-legal.pages.dev`):

| Field | URL |
|-------|-----|
| Privacy policy | `https://smashfood-legal.pages.dev/privacy-policy` |
| Data deletion | `https://smashfood-legal.pages.dev/data-deletion` |

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
