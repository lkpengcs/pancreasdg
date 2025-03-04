import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://nubagcilab.github.io/PancreasDG/', // Replace with your GitHub Pages URL
  base: '/PancreasDG/', // Replace with your actual repository name
  output: 'static', // Ensures the build is static
  integrations: [tailwind(), icon(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});