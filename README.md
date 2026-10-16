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

On Windows PowerShell, run `npm.cmd run dev` from the project folder. Open
`http://127.0.0.1:4321/`; Astro reloads the page when files change. Stop the server
with `Ctrl+C`.

## Studio material and contact

The shared layout includes a WhatsApp contact button for `+1 (845) 670-8740`.
The home page combines two generated editorial campaign images with three retouched workshop
photos, a real portrait frame of Estela, and a 7.5-second silent montage from the selected Facebook video. Original
source files are preserved. Asset provenance and edit prompts are recorded in
`src/assets/estela/README.md` and `src/assets/estela/EDIT-PROMPTS.md`.
Campaign asset provenance and generation prompts are recorded in `src/assets/campaign/README.md`.

The temporary `.review/` folder is ignored by Git and is not published.
The original `videos y material tia estela/` folder stays local and is ignored by
Git. The selected, edited assets needed by the site are included under
`src/assets/` and `public/`.
Google Tag Manager is pending: the user requested creating its dedicated container
from scratch later. No unrelated container has been connected.

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Search and link previews

`src/config/site.ts` is the source of truth for the public origin
(`https://beautyblendlab.com/`), search title, description, social card and content
modification date. The sitemap and robots.txt are generated as static files from
that configuration. Update `lastModified` only after substantive page changes.

The business provides a local, appointment-based service in New York State.
At the owner's request, public copy and Organization/Service `areaServed` markup
use only New York; no city, street address, coordinates or statewide travel service
are implied. Keep that geographic scope consistent in future SEO edits.

The shared layout renders canonical, Open Graph and Twitter card tags in the
initial HTML. The home page includes linked Organization, Person, WebSite,
WebPage, ImageObject and Service JSON-LD. Physical address, hours, prices and
reviews are not included because they have not been supplied. The 404 is noindex
and excluded from the sitemap. Tracking parameters are omitted from canonicals.

The social preview is `public/social/beauty-blend-lab-share-v2.jpg` (1200 x 630).
Its filename differs from the original `/og.png` to give crawlers a new image URL.
Generation details are in `src/assets/campaign/SOCIAL-PREVIEW.md`. SVG and PNG
favicons use a simplified flask and lipstick motif; the full supplied brand logo
is served at `/brand/beauty-blend-lab-logo.png` for structured data.

After the final visual review and deployment:

1. Verify the published canonical and social image use `beautyblendlab.com`, and
   that `/robots.txt`, `/sitemap.xml` and the JPEG return 200 with correct types.
2. Inspect the home page in Search Console, submit the updated sitemap, then
   request a recrawl of the published home page. Do not submit the local preview.
3. Use Facebook Sharing Debugger to fetch the published URL again; messaging
   platforms may cache their previous previews. Google chooses its own snippet
   and can show text other than the supplied meta description.

Reference: [Google snippets](https://developers.google.com/search/docs/appearance/snippet),
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[Open Graph](https://ogp.me/).

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

The site includes Cloudflare Pages `_headers` and `_redirects` files in `public/`.

## GitHub deployment flow

Create a GitHub repository, push this project to `main`, then connect that repository from Cloudflare Pages.
