import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve" || "build") {
    console.log("command = ", command);
    return {
      plugins: [react()],
      server: {
        proxy: {
          "/api": {
            target: "http://54.180.114.103:8080",
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, ""),
          },
        },
      },
    };
  }
});
