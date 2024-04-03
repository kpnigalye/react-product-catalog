/**
 * Problem Statement: Uncaught ReferenceError: process is not defined
 * Solution reference: https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
 */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [react()],
  };
});
