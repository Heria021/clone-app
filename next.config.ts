import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint ignore during build
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['www.centralaxis.com', 'assets.basehub.com'],
  },
};

export default nextConfig;
