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

Pushes to `main` deploy automatically via GitHub Actions.

### One-time Cloudflare setup

1. Create a [Cloudflare API token](https://dash.cloudflare.com/profile/api-tokens) with **Cloudflare Pages — Edit** permission.
2. Copy your **Account ID** from the Cloudflare dashboard (right sidebar on any zone overview).
3. In GitHub repo **Settings → Secrets and variables → Actions**, add:
   - `CLOUDFLARE_API_TOKEN` — your API token
   - `CLOUDFLARE_ACCOUNT_ID` — your account ID
4. Push to `main` (or run the **Deploy to Cloudflare Pages** workflow manually).

The first deploy creates the `smashfood-legal` Pages project if it does not exist yet.

### Play Console URLs

After deploy, use your Cloudflare Pages URL (e.g. `https://smashfood-legal.pages.dev`):

| Field | URL |
|-------|-----|
| Privacy policy | `https://smashfood-legal.pages.dev/privacy-policy` |
| Data deletion | `https://smashfood-legal.pages.dev/data-deletion` |

Replace the hostname if you add a custom domain under **Workers & Pages → smashfood-legal → Custom domains**.

Update `SUPPORT_EMAIL` in `src/pages/PrivacyPolicy.jsx` and `src/pages/DataDeletion.jsx` if needed.
