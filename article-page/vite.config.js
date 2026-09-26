import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@blocknote/core": resolve(__dirname, "../blocknote/packages/core/src"),
      "@blocknote/react": resolve(__dirname, "../blocknote/packages/react/src"),
      "@blocknote/mantine": resolve(__dirname, "../blocknote/packages/mantine/src"),
    },
  },
  server: {
    port: 5176,
    host: true,
    fs: {
      allow: [resolve(__dirname, "../blocknote")],
    },
  },
});
