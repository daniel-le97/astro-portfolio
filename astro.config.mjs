import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import solidJs from "@astrojs/solid-js";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), vue()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});