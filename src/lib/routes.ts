export const APP_ROUTES = {
  HOME: "/",
  ABOUT: {
    HOME: "/about",
    OUR_IMPACT: "/about/our-impact",
    OUR_VISION: "/about/our-vision",
    OUR_TEAM: "/about/our-team",
  },
  PROGRAMS: {
    HOME: "/programs",
    CS_AWARENESS: "/programs/cs-awareness",
    CODE_FOR_CHARITY: "/programs/code-for-charity",
    SKILL_DEVELOPMENT: "/programs/skill-development",
    CODING_COMPETITIONS: "/programs/coding-competitions",
  },
  EVENTS: "/events",
  BLOG: "https://blog.cosognepal.org",
  CONTACT: "/contact",
  DONATE: "/donate",
} as const;
