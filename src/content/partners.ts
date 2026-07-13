import type { Partner } from "./types";

import naaee from "@/assets/images/Partners/naaee.webp";
import paymentology from "@/assets/images/Partners/paymentology.png";
import fleckor_tech from "@/assets/images/Partners/fleckor_tech.png";
import technify from "@/assets/images/Partners/technify.png";
import cornor_tech from "@/assets/images/Partners/cornor_tech.png";

export const PARTNERS: Partner[] = [
  {
    id: "naaee",
    name: "North American Association for Environmental Education",
    logo: naaee,
    url: "https://naaee.org/",
    roles: ["funder"],
    description:
      "North American Association for Environmental Education is a non-profit organization that provides funding for environmental education projects.",
  },
  {
    id: "paymentology",
    name: "Paymentology",
    logo: paymentology,
    url: "https://www.paymentology.com/",
    roles: ["funder"],
    description:
      "Paymentology is a global card issuing and processing platform. We help fintechs, digital banks, and financial institutions launch, run, and scale card programmes. In any market, without rebuilding when you want to scale, pivot or run into red tape.",
  },
  {
    id: "technify-duke",
    name: "Technify Club @ Duke University",
    logo: technify,
    url: "https://www.instagram.com/technifyclub/",
    roles: ["academic"],
    description:
      "Technify is a student organisation uniting Duke University tech talent at the intersection of technology, design, and social good, working to bridge the digital divide in Southeast Asia. Our collaboration ran for over six months on a single project.",
  },
  {
    id: "cornortech",
    name: "Cornor Tech",
    logo: cornor_tech,
    url: "https://www.cornortech.com/",
    roles: ["internship"],
    description:
      "Aashish Panthi, President of Coding for Social Good Nepal, and Santosh Kunwar, COO of Cornor Tech, signed an MOU to partner. Outstanding students from Code for Charity receive internship and job opportunities, gaining hands-on industry experience on real technology projects.",
  },
  {
    id: "fleckor",
    name: "Fleckor Tech",
    logo: fleckor_tech,
    url: "https://fleckor.com",
    roles: ["mentor", "internship"],
    description:
      "Fleckor is a creative firm offering web development, design, marketing, and video production. They mentored students building a website for a public school under Code for Charity. Through our partnership, outstanding graduates are offered internships at Fleckor Tech India as part of their CSR initiative, the EducationSkilledU Programme.",
  },
];

export function getPartners(): Partner[] {
  return PARTNERS;
}

export function getPartnersForHomepage(): Partner[] {
  return PARTNERS.slice(0, 6);
}

export function getCharityPartners(): Partner[] {
  return PARTNERS.filter((p) => p.roles && p.roles.length > 0);
}
