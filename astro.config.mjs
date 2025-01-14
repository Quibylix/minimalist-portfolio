// @ts-check
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  adapter: vercel(),
});
