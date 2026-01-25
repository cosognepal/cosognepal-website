import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "fleckor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cornortech.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
