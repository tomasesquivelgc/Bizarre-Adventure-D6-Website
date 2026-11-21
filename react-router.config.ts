import type { Config } from "@react-router/dev/config";

export default {
  // Static hosting: no runtime Node server; pages are pre-rendered at build time.
  ssr: false,
  prerender: true,
} satisfies Config;
