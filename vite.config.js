import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  alias: {
    "/@/": path.resolve(__dirname, "./src")
  },
  optimizeDeps: {
    include: ["axios"]
  },
  server: {
    port: 8080,
    "/api": {
      target: "",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, "")
    }
  },
  plugins: [vue()]
});
