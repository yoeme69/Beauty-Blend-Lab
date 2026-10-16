import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

// This is a one-page site. Section anchors and the 404 are not separate URLs.
export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.url}</loc>
    <lastmod>${siteConfig.lastModified}</lastmod>
  </url>
</urlset>
`,
  { headers: { "Content-Type": "application/xml; charset=utf-8" } }
);
