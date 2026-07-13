import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs/code-for-charity",
        destination: "/focus/charity",
        permanent: true,
      },
      {
        source: "/programs/cs-awareness",
        destination: "/focus/schools",
        permanent: true,
      },
      {
        source: "/programs/skill-development",
        destination: "/focus/skills",
        permanent: true,
      },
      {
        source: "/programs/code-for-charity/web-development",
        destination: "/programs/web-development-wordpress",
        permanent: true,
      },
      {
        source: "/featured",
        destination: "/about/press",
        permanent: true,
      },
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
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
