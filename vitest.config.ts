import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage",
      all: true,
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: ["src/test/**", "src/**/*.test.tsx", "src/main.tsx"],
    },
  },
});
