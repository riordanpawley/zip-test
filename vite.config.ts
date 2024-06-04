import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    // exclude: ["**/node_modules/**", "**/E2E/**"],
    dir: "./tests/unit",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  plugins: [tsconfigPaths()],
});
