import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [sitemap(), compress(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
