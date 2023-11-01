import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.daniel.devopportunities.dev/",
  integrations: [tailwind()],
  // vite: {
  //   ssr: {
  //     external: ["svgo"]
  //   }
  // },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});