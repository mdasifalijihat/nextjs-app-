import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'], // ✅ Clerk image domain
  },
};

export default nextConfig;
