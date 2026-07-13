import type { StaticImageData } from "next/image";

import aashishPortrait from "@/assets/images/Portraits/aashish_panthi.png";
import bibekPortrait from "@/assets/images/Portraits/bibek_bhandari.png";

export type Leader = {
  slug: string;
  name: string;
  role: string;
  quote: string;
  portrait: StaticImageData;
  portraitInset?: StaticImageData;
  order: number;
};

export const leaders: Leader[] = [
  {
    slug: "bibek-bhandari",
    name: "Bibek Bhandari",
    role: "Founder and Executive Chairman, Cosog Nepal",
    quote:
      'Cosog Nepal is the chance I wish I had in school, the chance to discover technology early. My vision is a Nepal where every student gets that "early chance", where every school opens the door, and every student can walk right in.',
    portrait: bibekPortrait,
    portraitInset: bibekPortrait,
    order: 1,
  },
  {
    slug: "aashish-panthi",
    name: "Aashish Panthi",
    role: "Founder and President, Cosog Nepal",
    quote:
      "I started the first CS club at my high school. It taught me how to learn in team, how to organize an event, and participate in others. Cosog Nepal exists to set off that chain in every school we reach.",
    portrait: aashishPortrait,
    portraitInset: aashishPortrait,
    order: 2,
  },
];

export function getLeaders(): Leader[] {
  return [...leaders].sort((a, b) => a.order - b.order);
}
