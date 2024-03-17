// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/App.jsx", // Path to your main React component
      name: "ChatApp",
      formats: ["umd"], // Universal Module Definition for compatibility
      fileName: (format) => `chat-app.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ["react", "react-dom"],
      output: {
        // Global variables for external dependencies
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
