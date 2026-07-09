import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/programs/tech-paila"],
      },
    ],
    sitemap: "https://cosognepal.org/sitemap.xml",
  };
}
