import { defineConfig } from "@rslib/core";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  lib: [
    {
      source: {
        entry: {
          bundle: "./src/main.ts",
        },
      },
    },
  ],
  output: {
    target: "node",
    sourceMap: {
      js: isDev ? "cheap-module-source-map" : false,
    },
    minify: !isDev,
  },
});
