import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.daniel.devopportunities.dev/",
  integrations: [tailwind(), vue()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
