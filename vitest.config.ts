import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // ✅ Allows testing React components
    globals: true, // ✅ Enables Jest-like syntax (e.g., `expect`)
    setupFiles: "./src/test/setup.ts", // ✅ Setup file (for jest-dom)
    coverage: {
      provider: "istanbul", // ✅ Use Istanbul for coverage
      reporter: ["text", "json", "html"], // ✅ Generate multiple report formats
      reportsDirectory: "coverage", // ✅ Output directory
      all: true, // ✅ Include all files in coverage report
      include: ["src/**/*.tsx", "src/**/*.ts"], // ✅ Only track source files
      exclude: ["src/test/**", "src/**/*.test.tsx", "src/main.tsx"], // ✅ Ignore test files
    },
  },
});
