import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { CloudflareAdaptor, vono } from "@vonojs/vite";

export default defineConfig({
  plugins: [
    react(),
    vono({
      server: "./server/index.ts",
      adaptor: new CloudflareAdaptor(),
    }),
  ],
});
