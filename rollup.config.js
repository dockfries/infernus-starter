import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.NODE_ENV === "dev";

const plugins = [
  typescript({ tsconfig: "./tsconfig.json" }),
  alias({ entries: { "@": "src" } }),
  json(),
  commonjs(),
  nodeResolve(),
];

if (isDev) plugins.push(terser());

export default {
  input: "./src/main.ts",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    sourcemap: isDev,
  },
  external: ["samp-node-lib"],
  plugins,
};
