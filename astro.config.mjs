import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://joalloce.github.io",
  base: "/learning-ruby-on-rails",
  integrations: [tailwind()],
});
