import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory for the build
    rollupOptions: {
      input: {
        main: "index.html", // Entry point for the application
      },
    },
  },
  base: "/", // Base public path when serving the app. Adjust if deploying to a subdirectory.
});
