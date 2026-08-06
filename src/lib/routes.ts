export const BLOG_URL = "https://blog.cosognepal.org";
export const TECH_PAILA_URL = "https://techpaila.cosognepal.org";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export const APP_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  ABOUT_TEAM: "/about#team",
  ABOUT_PRESS: "/about/press",
  ABOUT_AWARDS: "/about/awards",
  ABOUT_REPORTS: "/about/reports",
  ABOUT_BRAND_KIT: "/about/brand-kit",
  ABOUT_PARTNERS: "/about#partners",
  PROGRAMS: "/programs",
  FOCUS: {
    SCHOOLS: "/focus/schools",
    SKILLS: "/focus/skills",
    CHARITY: "/focus/charity",
  },
  GET_INVOLVED: {
    VOLUNTEER: "/get-involved/volunteer",
    START_CLUB: "/get-involved/start-a-club",
    PARTNER: "/get-involved/partner",
    TEACH: "/get-involved/teach",
  },
  EVENTS: "/events",
  BLOG: BLOG_URL,
  CONTACT: "/contact",
  DONATE: "/donate",
  LINKS: "/links",
} as const;

export const NAV_PROGRAMS: NavGroup = {
  label: "Programs",
  items: [
    { label: "Schools & CS Clubs", href: APP_ROUTES.FOCUS.SCHOOLS },
    { label: "Code for Charity", href: APP_ROUTES.FOCUS.CHARITY },
    { label: "Skills & Fellowships", href: APP_ROUTES.FOCUS.SKILLS },
    { label: "Past Events", href: APP_ROUTES.EVENTS },
  ],
};

export const NAV_GET_INVOLVED: NavGroup = {
  label: "Get Involved",
  items: [
    { label: "Volunteer with us", href: APP_ROUTES.GET_INVOLVED.VOLUNTEER },
    {
      label: "Start a CS club at your school",
      href: APP_ROUTES.GET_INVOLVED.START_CLUB,
    },
    { label: "Partner with us", href: APP_ROUTES.GET_INVOLVED.PARTNER },
    { label: "Teach a workshop", href: APP_ROUTES.GET_INVOLVED.TEACH },
  ],
};

export const NAV_ABOUT: NavGroup = {
  label: "About",
  items: [
    { label: "Our story", href: APP_ROUTES.ABOUT },
    { label: "Awards & Recognition", href: APP_ROUTES.ABOUT_AWARDS },
    { label: "Press & Features", href: APP_ROUTES.ABOUT_PRESS },
    { label: "Partners & Supporters", href: APP_ROUTES.ABOUT_PARTNERS },
    { label: "Reports & Transparency", href: APP_ROUTES.ABOUT_REPORTS },
  ],
};

export const NAV_NEWS: NavGroup = {
  label: "Blog",
  items: [
    { label: "Blog", href: BLOG_URL, external: true },
  ],
};

export const NAV_GROUPS: NavGroup[] = [
  NAV_ABOUT,
  NAV_PROGRAMS,
  NAV_GET_INVOLVED,
  NAV_NEWS,
];

export const NAV_CTA: NavLink = {
  label: "Contact",
  href: APP_ROUTES.CONTACT,
};

export const FOOTER_LINKS: NavLink[] = [
  { label: "About us", href: APP_ROUTES.ABOUT },
  { label: "Team", href: APP_ROUTES.ABOUT_TEAM },
  { label: "Programs", href: APP_ROUTES.PROGRAMS },
  { label: "Past Events", href: APP_ROUTES.EVENTS },
  { label: "Blog", href: BLOG_URL, external: true },
  { label: "Contact", href: APP_ROUTES.CONTACT },
  { label: "Donate", href: APP_ROUTES.DONATE },
  { label: "Press", href: APP_ROUTES.ABOUT_PRESS },
  { label: "Brand Kit", href: APP_ROUTES.ABOUT_BRAND_KIT },
  { label: "Awards", href: APP_ROUTES.ABOUT_AWARDS },
  { label: "Partners", href: APP_ROUTES.ABOUT_PARTNERS },
  { label: "Reports", href: APP_ROUTES.ABOUT_REPORTS },
];

