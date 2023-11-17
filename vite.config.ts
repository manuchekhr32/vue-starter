import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@composables": fileURLToPath(
        new URL("./src/composables", import.meta.url),
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
