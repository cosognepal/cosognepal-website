import type { Award } from "./types";

import ICTAward from "@/assets/images/Awards/ict_award.jpg";
import ESTEMGrant from "@/assets/images/Awards/E-STEM-Awards-Web.png";
import CitizenEntrepreneurship from "@/assets/images/Awards/citizen_entrepreneurship_award.jpeg";
import GlocalTeenHero from "@/assets/images/Awards/glocal_teen_hero.jpg";
import DianaAward from "@/assets/images/Awards/diana_award.webp";

export const AWARDS: Award[] = [
  {
    id: "estem-grant-2025",
    title: "Global E-STEM Innovation Grant",
    organization: "Pratt & Whitney / NAAEE",
    recipient: "Cosog Nepal",
    year: 2025,
    level: "awardee",
    description:
      "Selected as one of 15 nonprofit organizations across 14 countries to receive the Global E-STEM Innovation Grant, presented by Pratt & Whitney in collaboration with the North American Association for Environmental Education (NAAEE). The grant totalling $250,000 supports advancing environmental problem-solving through science, technology, engineering, and math for students ages 11–22.",
    imageUrl: ESTEMGrant,
    link: "https://blog.cosognepal.org/cosognepal-selected-for-estem-innovation-grant-awardee",
    sourceUrl: "https://naaee.org/e-stem-awards",
    featured: true,
  },
  {
    id: "ict-award-2025",
    title: "Social Innovation ICT Award",
    organization: "ICT Award Nepal",
    recipient: "Cosog Nepal",
    year: 2025,
    level: "semi-finalist",
    description:
      "Code for Charity was named a semi-finalist — one of the top 13 programmes — in the Social Innovation category of the ICT Award 2025, the largest technology award in Nepal. The team showcased at the Startup & Idea Fest 2025, drawing over 15,000 visitors, and pitched at the Grand Jury Session.",
    imageUrl: ICTAward,
    link: "https://blog.cosognepal.org/code-for-charity-at-social-innovation-ict-award",
    sourceUrl: "https://www.instagram.com/p/DPoB1PEka4p/?img_index=2",
    featured: true,
    focusArea: "charity",
  },
  {
    id: "diana-award-2024",
    title: "The Diana Award",
    organization: "The Diana Award",
    recipient: "Bibek Bhandari",
    year: 2024,
    level: "awardee",
    description:
      "Bibek Bhandari received The Diana Award 2024 for founding Cosog Nepal and expanding access to computer science education through CS clubs, coding competitions, career counselling workshops, Python Primer, and Code for Charity.",
    imageUrl: DianaAward,
    link: "https://blog.cosognepal.org/bibek-bhandari-receives-diana-award",
    featured: true,
  },
  {
    id: "glocal-teen-hero-2024",
    title: "Glocal Teen Hero Nepal",
    organization: "Glocal",
    recipient: "Aashish Panthi",
    year: 2024,
    level: "finalist",
    description:
      "Recognized among Nepal's top under-20 changemakers for leadership in computer science education, Aashish presented our work at UN Women, Embassy of Germany, EU in Nepal, and more places.",
    imageUrl: GlocalTeenHero,
    featured: true,
  },
  {
    id: "cec-2023",
    title: "Citizen Entrepreneurship Competition",
    organization: "Stiftung Entrepreneurship / Goi Peace Foundation",
    recipient: "Bibek Bhandari",
    year: 2023,
    level: "winner",
    description:
      "Cosog Nepal won first place in the Citizen Entrepreneurship Competition 2023, competing against entrepreneurs from around 90 countries. The competition was judged on innovation, customer benefits, market opportunities, feasibility, and relevance to the UN Sustainable Development Goals.",
    imageUrl: CitizenEntrepreneurship,
    link: "https://entrepreneurship.de/en/magazin/winner-of-the-cec-2023",
    featured: true,
  },
];

export function getAwards(): Award[] {
  return AWARDS;
}

export function getFeaturedAwards(): Award[] {
  return AWARDS.filter((a) => a.featured);
}

export function getFeaturedRecognition(): Award[] {
  return getFeaturedAwards();
}
