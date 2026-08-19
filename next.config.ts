import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't walk up past the repo and
  // pick up an unrelated lockfile from the home directory.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
