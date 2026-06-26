import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xxxx.supabase.co"
      }
    ]
  }
};

export default nextConfig;
