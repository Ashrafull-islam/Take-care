import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds:true
  },
  images: {
    domains: ['i.ibb.co'], // Add the domain here
  },
};

export default nextConfig;
