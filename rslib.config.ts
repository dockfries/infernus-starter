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
      banner: {
        js: isDev ? `import "source-map-support/register.js"` : "",
      },
    },
  ],
  output: {
    cleanDistPath: !isDev,
    target: "node",
    sourceMap: isDev,
    minify: !isDev,
  },
  tools: {
    rspack: {
      output: {
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
      },
    },
  },
});
