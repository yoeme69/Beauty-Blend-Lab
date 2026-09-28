# Beauty Blend Lab

Production-ready static marketing website for Beauty Blend Lab by Estela Schmidt, NY Licensed Esthetician.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Static deployment
- Cloudflare Pages

No backend, database, authentication, CMS, booking system, Supabase, or Vercel.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

The site includes Cloudflare Pages `_headers` and `_redirects` files in `public/`.

## GitHub deployment flow

Create a GitHub repository, push this project to `main`, then connect that repository from Cloudflare Pages.
