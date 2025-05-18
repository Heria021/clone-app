import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint ignore during build
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.centralaxis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.basehub.com',
      },
    ],
  },
};

export default nextConfig;
