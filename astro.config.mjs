import { defineConfig } from "astro/config";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  build: {
    format: "directory",
    assets: "assets"
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
