import type { Metadata } from "next";

export const SITE_URL = "https://cosognepal.org";
export const SITE_NAME = "Cosog Nepal";
export const SITE_TAGLINE = "Coding for Social Good Nepal";
export const DEFAULT_DESCRIPTION =
  "Cosog Nepal brings computer science education to schools across Nepal through CS clubs, skills fellowships, and Code for Charity — free tech builds for nonprofits.";

export const DEFAULT_OG_IMAGE = "/assets/about_banner.png";

/** Pages we want Google to rank highest */
export const PRIORITY_SEO_PATHS = {
  home: "/",
  summerCamp: "/programs/summer-camp",
  charity: "/focus/charity",
  skills: "/focus/skills",
} as const;

const SITEMAP_PRIORITY: Record<string, number> = {
  [PRIORITY_SEO_PATHS.home]: 1,
  [PRIORITY_SEO_PATHS.summerCamp]: 0.95,
  [PRIORITY_SEO_PATHS.charity]: 0.95,
  [PRIORITY_SEO_PATHS.skills]: 0.95,
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function getSitemapPriority(path: string): number {
  return SITEMAP_PRIORITY[path] ?? 0.6;
}

type CreatePageMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  keywords = [],
}: CreatePageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@cosognepal",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: SITE_URL,
    logo: absoluteUrl("/assets/logo.png"),
    description: DEFAULT_DESCRIPTION,
    email: "contact@cosognepal.org",
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    sameAs: [
      "https://www.facebook.com/cosognepal",
      "https://www.instagram.com/cosognepal",
      "https://www.linkedin.com/company/cosognepal",
      "https://www.youtube.com/@cosognepal",
      "https://blog.cosognepal.org",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@type": "NGO",
      name: SITE_NAME,
    },
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function educationalProgramJsonLd({
  name,
  description,
  path,
  provider = SITE_NAME,
}: {
  name: string;
  description: string;
  path: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "NGO",
      name: provider,
      url: SITE_URL,
    },
    educationalProgramMode: "blended",
    occupationalCategory: "Computer Science",
  };
}
