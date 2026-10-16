// Keep the public origin shared by canonical URLs, social cards and crawl files.
export const siteConfig = {
  url: "https://beautyblendlab.com/",
  name: "Beauty Blend Lab",
  language: "en-US",
  locale: "en_US",
  title: "Custom Lipstick & Foundation in New York | Beauty Blend Lab",
  description:
    "Custom lipstick and foundation in New York, blended by Estela Schmidt, NY licensed esthetician. Find your shade with a one-to-one appointment.",
  // Public service area is intentionally state-level, with no city or street address.
  serviceArea: {
    "@type": "State",
    name: "New York",
    containedInPlace: { "@type": "Country", name: "United States" }
  },
  socialTitle: "Your color. Made personal. | Beauty Blend Lab",
  socialImage: {
    path: "/social/beauty-blend-lab-share-v2.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: "Beauty Blend Lab: Your color. Made personal. Custom lipstick and foundation, with a rose lipstick beauty portrait."
  },
  logo: "/brand/beauty-blend-lab-logo.png",
  // Update only when the page content changes, not on every build.
  lastModified: "2026-10-16"
} as const;
