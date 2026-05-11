// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only, opt-in),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel Node Functions.
// - cloudflare: false disables the Workers build adapter shipped by the lovable config.
// - tanstackStart.server.entry routes SSR through src/server.ts (our Web-fetch error wrapper);
//   the resulting bundle is consumed by api/index.js at runtime.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
