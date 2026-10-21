# MAISON BLUSH

A fictional luxury salon portfolio concept built with Next.js, TypeScript, Framer Motion and a small React Three Fiber sculpture. Contact information and enquiry behaviour are intentionally demo-only.

## Run locally

Install Node.js 20.9 or newer, then:

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`. Production build and start:

```bash
pnpm build
pnpm start
```

## Deploy to GitHub Pages

The project builds as a static export. The workflow in `.github/workflows/deploy.yml` deploys automatically whenever you push to `main`. It detects the repository name at build time and configures the correct GitHub Pages subpath. For a user site named `username.github.io`, it uses the domain root.

After pushing, open **Settings → Pages** in the GitHub repository and set the publishing source to **GitHub Actions**. Check the **Actions** tab for deployment status and the live URL.

## Adapting this for a real salon

- **Brand and contact details:** edit `lib/config.ts`. Replace the example email, phone, sample address, hours and optional Instagram/WhatsApp configuration. Configure a real enquiry backend before collecting customer information; the current form deliberately does not send or retain submissions.
- **Services and gallery:** edit the typed `services` and `gallery` arrays in `lib/config.ts`. The image IDs currently point to Unsplash CDN images used as editorial demo imagery. The [Unsplash License](https://unsplash.com/license) permits commercial use, with limits including standalone resale and compiling images to create a competing service. Review the current license and each image’s context before a real client launch, and preferably replace them with client-approved, locally stored images. Keep useful alt text when changing images.
- **Hero and feature imagery:** update the image URLs in `app/globals.css` (hero and signature) and the image IDs in `app/page.tsx` (story and video moment). The video moment intentionally opens a still-photo detail view instead of claiming that an unavailable video is playing. Add a properly licensed, locally hosted video before replacing it with a player.
- **Colours and type:** edit the CSS variables at the top of `app/globals.css`. Fonts load from Google Fonts with local serif/sans fallbacks.
- **Maps:** the location panel remains a sample graphic until a real address is intentionally configured. Add an accurate map embed only after confirming the salon location.
- **Testimonials:** replace the clearly labeled sample quotes only with permissioned, genuine client reviews.

## Notes

The brand is fictional. Appointment requests are validated in the browser and then cleared; no personal data is stored or transmitted. A WebGL sculpture enhances one section and has a CSS fallback. The gallery supports keyboard navigation, Escape to close and backdrop dismissal. The design honors reduced-motion preferences.
