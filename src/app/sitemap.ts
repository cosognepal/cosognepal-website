import type { MetadataRoute } from "next";

import { getFocusAreas, getPrograms } from "@/content";
import { APP_ROUTES } from "@/lib/routes";
import {
  absoluteUrl,
  getSitemapPriority,
  PRIORITY_SEO_PATHS,
} from "@/lib/seo";

function sitemapEntry(
  path: string,
  options?: { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"] }
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: options?.changeFrequency ?? "monthly",
    priority: getSitemapPriority(path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    APP_ROUTES.HOME,
    PRIORITY_SEO_PATHS.summerCamp,
    PRIORITY_SEO_PATHS.charity,
    APP_ROUTES.ABOUT,
    APP_ROUTES.ABOUT_AWARDS,
    APP_ROUTES.ABOUT_PRESS,
    APP_ROUTES.ABOUT_REPORTS,
    APP_ROUTES.ABOUT_BRAND_KIT,
    APP_ROUTES.PROGRAMS,
    APP_ROUTES.EVENTS,
    APP_ROUTES.CONTACT,
    APP_ROUTES.DONATE,
    APP_ROUTES.LINKS,
    APP_ROUTES.GET_INVOLVED.VOLUNTEER,
    APP_ROUTES.GET_INVOLVED.START_CLUB,
    APP_ROUTES.GET_INVOLVED.PARTNER,
    APP_ROUTES.GET_INVOLVED.TEACH,
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) =>
    sitemapEntry(route, {
      changeFrequency:
        route === PRIORITY_SEO_PATHS.home ||
        route === PRIORITY_SEO_PATHS.summerCamp
          ? "weekly"
          : "monthly",
    })
  );

  const focusPages: MetadataRoute.Sitemap = getFocusAreas()
    .filter((focusArea) => focusArea.slug !== "charity")
    .map((focusArea) => sitemapEntry(`/focus/${focusArea.slug}`));

  const programPages: MetadataRoute.Sitemap = getPrograms()
    .filter((program) => !program.noindex && !program.external)
    .map((program) => sitemapEntry(`/programs/${program.slug}`));

  return [...pages, ...focusPages, ...programPages];
}
