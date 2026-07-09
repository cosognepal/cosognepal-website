import type { MetadataRoute } from "next";

import {
  getFocusAreas,
  getPrograms,
} from "@/content";
import { APP_ROUTES } from "@/lib/routes";

const BASE_URL = "https://cosognepal.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    APP_ROUTES.HOME,
    APP_ROUTES.ABOUT,
    APP_ROUTES.ABOUT_AWARDS,
    APP_ROUTES.ABOUT_PRESS,
    APP_ROUTES.ABOUT_REPORTS,
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

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));

  const focusPages: MetadataRoute.Sitemap = getFocusAreas().map((focusArea) => ({
    url: `${BASE_URL}/focus/${focusArea.slug}`,
  }));

  const programPages: MetadataRoute.Sitemap = getPrograms()
    .filter((program) => !program.noindex && !program.external)
    .map((program) => ({
      url: `${BASE_URL}/programs/${program.slug}`,
    }));

  return [...pages, ...focusPages, ...programPages];
}
