import type { StaticImageData } from "next/image";

export type FocusSlug = "schools" | "skills" | "charity";

export type ProgramStatus = "coming-soon" | "open" | "running" | "completed";

export type FocusArea = {
  slug: FocusSlug;
  title: string;
  summary: string;
  body: string[];
};

export type PartnerRole =
  | "funder"
  | "client"
  | "academic"
  | "mentor"
  | "internship"
  | "fiscal";

export type Partner = {
  id: string;
  name: string;
  logo: StaticImageData | string;
  url?: string;
  roles?: PartnerRole[];
  description?: string;
};

export type Story = {
  id: string;
  title: string;
  quote: string;
  author: string;
  role?: string;
  organization?: string;
  program?: string;
  year?: number;
  image?: StaticImageData | string;
  videoId?: string;
};

export type CaptionedPhoto = {
  src: StaticImageData | string;
  alt: string;
  caption: string;
  date: string;
  location: string;
};

export type Program = {
  slug: string;
  title: string;
  focusArea: FocusSlug;
  status: ProgramStatus;
  startDate?: string;
  endDate?: string;
  external?: string;
  noindex?: boolean;
  hero?: StaticImageData;
  /** How the hero image fills its frame. Use "contain" for logos. Defaults to "cover". */
  heroFit?: "cover" | "contain";
  summary: string;
  origin?: string[];
  approach?: string[];
  cohortSize?: number;
  partners?: Partner[];
  sponsors?: Partner[];
  stories?: Story[];
  photos?: CaptionedPhoto[];
  videoUrl?: string;
  videoTitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  liveUrl?: string;
  blogUrl?: string;
  playlistId?: string;
  projects?: { title: string; description: string }[];
  programPartners?: { name: string; role: string }[];
};

export type Press = {
  id: string;
  source: string;
  date: string;
  title: string;
  imageUrl?: StaticImageData | string;
  imageAlt?: string;
  link?: string;
  program?: string;
  featured?: boolean;
};

export type AwardLevel = "winner" | "finalist" | "semi-finalist" | "awardee";

export type Award = {
  id: string;
  title: string;
  organization: string;
  recipient: string;
  year: number;
  level: AwardLevel;
  description?: string;
  link?: string;
  sourceUrl?: string;
  imageUrl?: StaticImageData | string;
  featured?: boolean;
  program?: string;
  focusArea?: FocusSlug;
};

export type Stat = {
  value: string;
  label: string;
  order: number;
};

export type CTA = {
  label: string;
  href: string;
  external?: boolean;
};
