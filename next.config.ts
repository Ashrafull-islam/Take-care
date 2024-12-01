// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Custom Webpack configuration (if needed)
  webpack(config) {
    // You can add custom webpack settings here
    return config;
  },

  // ESLint configuration to ignore during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image domains allowed
  images: {
    domains: ['i.ibb.co'], // Add your external domains here
  },
};

export default nextConfig;
