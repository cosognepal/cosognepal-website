export type { Stat } from "./types";
export { getStats } from "./stats";

export type {
  FocusSlug,
  FocusArea,
  Program,
  ProgramStatus,
  Press,
  Award,
  Partner,
  PartnerRole,
  Story,
  CTA,
} from "./types";

export { schoolsFocusArea } from "./focus-areas/schools";
export { skillsFocusArea } from "./focus-areas/skills";
export {
  charityFocusArea,
  charityHowToApply,
  charityWhyVolunteer,
} from "./focus-areas/charity";

export {
  getPrograms,
  getProgramBySlug,
  getProgramsByFocus,
  getArchivedPrograms,
  getActivePrograms,
} from "./programs";

export { getPress, getPressByProgram, getFeaturedPress } from "./press";

export {
  getAwards,
  getFeaturedAwards,
  getFeaturedRecognition,
} from "./awards";

export { getPartners, getPartnersForHomepage } from "./partners";

export {
  getStories,
  getStoryById,
  getStoriesByProgram,
  getCharityTestimonials,
  getFeaturedStory,
} from "./stories";

export { getCharityPartners } from "./partners";

import type { FocusArea, FocusSlug } from "./types";
import { schoolsFocusArea } from "./focus-areas/schools";
import { skillsFocusArea } from "./focus-areas/skills";
import { charityFocusArea } from "./focus-areas/charity";

const FOCUS_AREAS: FocusArea[] = [
  schoolsFocusArea,
  skillsFocusArea,
  charityFocusArea,
];

export function getFocusAreas(): FocusArea[] {
  return FOCUS_AREAS;
}

export function getFocusAreaBySlug(slug: FocusSlug): FocusArea | undefined {
  return FOCUS_AREAS.find((f) => f.slug === slug);
}
