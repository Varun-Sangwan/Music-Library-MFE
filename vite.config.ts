import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "musicLibrary",
      filename: "remoteEntry.js",
      exposes: {
        "./MusicLibrary": "./src/MusicLibrary.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    strictPort: true,
    host: "localhost",
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
  },
  preview: {
    port: 3001,
    strictPort: true,
    host: "localhost",
  },
});
