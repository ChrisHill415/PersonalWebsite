# Chris Hill — personal portfolio

A responsive Next.js portfolio for Chris Hill, a Computer Science and Statistics student at Duke University. Features selected projects with category filters, experience, education, a downloadable resume, mobile navigation, and email contact with clipboard copy.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` before deployment.

## Content

- Portfolio content and project links: `app/page.tsx`
- Biography and education: `app/about/page.tsx`
- Shared navigation: `app/site-header.tsx`
- Responsive styling: `app/globals.css`
- Search and social metadata: `app/layout.tsx`
- Generated social image: `app/opengraph-image.tsx`
- Headshot: `public/chris-hill-headshot.jpg`
- Downloadable resume: `public/Chris-Hill-Resume.pdf`
- Search crawler configuration: `app/robots.ts` and `app/sitemap.ts`

Project images are custom illustrative previews, not screenshots of the linked applications.

## Vercel

- Team: `chris-94ad`
- Project: `chrisjhill`
- Project ID: `prj_tqmGBy7W2JT3qSFGeodwouECfhEU`
- Live Vercel URL: https://chrisjhill.vercel.app
- Intended canonical domain: https://chrisjhill.com
- `www.chrisjhill.com` redirects to `chrisjhill.com` with HTTP 308.

The local `.vercel/` link and `.env.local` are ignored. Do not commit credentials or environment files.

Deploy updates:

```bash
vercel deploy --prod --scope chris-94ad
```

## Cloudflare DNS setup

The domains are attached and ownership-verified in Vercel. Verified October 31, 2026: Cloudflare DNS points to Vercel for both domains, and the apex domain serves the site over HTTPS. The records below document the working configuration. In Cloudflare, select `chrisjhill.com`, then **DNS → Records**:

| Type  | Name | Target                              | Proxy status | TTL  |
| ----- | ---- | ----------------------------------- | ------------ | ---- |
| A     | @    | 216.198.79.1                        | DNS only     | Auto |
| CNAME | www  | 790770d34ae47cef.vercel-dns-017.com | DNS only     | Auto |

These are the project-specific recommended values returned by Vercel. Update any existing conflicting web records for `@` or `www`; preserve email records (MX and TXT). Do not change nameservers. After saving, Vercel automatically checks DNS and provisions HTTPS. Check status in https://vercel.com/chris-94ad/chrisjhill/settings/domains.
