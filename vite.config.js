import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory for the build
    rollupOptions: {
      input: "index.html", // Use index.html as the entry point
    },
  },
  base: "/", // Base public path when serving the app
});
