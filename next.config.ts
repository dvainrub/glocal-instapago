import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize barrel imports for faster builds and smaller bundles
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
