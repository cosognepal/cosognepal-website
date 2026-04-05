import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/events/summerprogram",
        destination: "https://summercamp.cosognepal.org",
        permanent: true,
      },
    ];
  },
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
