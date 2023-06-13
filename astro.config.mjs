import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://joalloce.github.io",
  base: "/learning-ruby-on-rails",
  integrations: [react(), tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: "md-h1",
      h2: "md-h2",
      h3: "md-h3",
      h4: "md-h3",
      h5: "md-h5",
      h6: "md-h6",
      img: "md-img",
      p: "md-p",
      a: "md-a",
      ul: "md-ul",
      ol: "md-ol",
      hr: "md-hr"
    }]]
  }
});