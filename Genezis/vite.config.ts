import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import { useProfileStore } from "@/store/profile";
const profileStore = useProfileStore();

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      // Прокси для amoCRM API
      "/amocrm-api": {
        target: `https://${profileStore.baseDomain}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/amocrm-api/, ""), // Заменяем префикс для API
        secure: false,
      },
      // Прокси для другого API
      "/gnzs-api": {
        target: "https://app2.gnzs.ru",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gnzs-api/, ""), // Заменяем префикс для API
        secure: false,
      },
    },
  },
});
