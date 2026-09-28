import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        cream: "var(--color-cream)",
        ivory: "var(--color-ivory)",
        nude: "var(--color-nude)",
        blush: "var(--color-blush)",
        burgundy: "var(--color-burgundy)",
        espresso: "var(--color-espresso)",
        ink: "var(--color-text)"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(38, 28, 25, 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
