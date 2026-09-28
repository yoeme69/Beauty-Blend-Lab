import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://estela-schmidt.pages.dev",
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
