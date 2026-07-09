import type { Press } from "./types";

import TechPana from "@/assets/images/Featured/techpana.jpg";
import ICTAward from "@/assets/images/Featured/ictaward.jpg";
import StartupAndIdeaFest from "@/assets/images/Featured/startupandideafest.jpg";
import HamroPatro from "@/assets/images/Featured/hamropatro.png";
import ArthaBazar from "@/assets/images/Featured/arthabazar.png";
import OnlinePatrika from "@/assets/images/Featured/onlinepatrika.png";

export const PRESS: Press[] = [
  {
    id: "hamro-patro",
    source: "Hamro Patro",
    date: "December 3, 2025",
    title:
      "Bridging the Digital Divide: How Cosog Nepal is Revolutionizing Computer Science Education",
    imageUrl: HamroPatro,
    imageAlt:
      "Bridging the Digital Divide: How Cosog Nepal is Revolutionizing Computer Science Education",
    link: "https://english.hamropatro.com/news/details/1801855539886753",
    featured: true,
  },
  {
    id: "techpana",
    source: "TechPana",
    date: "June 1, 2025",
    title: "Computer science students are creating free websites for NGOs",
    imageUrl: TechPana,
    imageAlt: "TechPana feature on Code for Charity",
    link: "https://techpana.com/2025/151116/",
    featured: true,
  },
  {
    id: "artha-bazar",
    source: "Artha Bazar",
    date: "December 2, 2025",
    title:
      "Two Teenagers Spark a National Movement in Tech Education Through Cosog Nepal",
    imageUrl: ArthaBazar,
    imageAlt:
      "Two Teenagers Spark a National Movement in Tech Education Through Cosog Nepal",
    link: "https://arthabazar.com/120226",
    featured: true,
  },
  {
    id: "online-patrika",
    source: "Online Patrika",
    date: "December 2, 2025",
    title:
      "Cosog Nepal: The Youth-Led Movement Transforming CS Education in Nepal",
    imageUrl: OnlinePatrika,
    imageAlt:
      "Cosog Nepal: The Youth-Led Movement Transforming CS Education in Nepal",
    link: "https://english.onlinepatrika.com/posts/2559",
  },
  {
    id: "startup-ideafest",
    source: "TechPana",
    date: "November 6, 2025",
    title: "Exhibitor for the Startup and Idea Fest 2025",
    imageUrl: StartupAndIdeaFest,
    imageAlt: "Startup and Idea Fest 2025",
    link: "https://www.instagram.com/p/DQtNDlPiPzz/",
  },
  {
    id: "ict-award-press",
    source: "ICT Award",
    date: "October 10, 2025",
    title: "Social Innovation ICT Award 2025 — Coding for Social Good Nepal",
    imageUrl: ICTAward,
    imageAlt: "Social Innovation ICT Award 2025",
    link: "https://www.instagram.com/p/DPoB1PEka4p/?img_index=2",
  },
];

export function getPress(): Press[] {
  return PRESS;
}

export function getPressByProgram(slug: string): Press[] {
  return PRESS.filter((p) => p.program === slug);
}

export function getFeaturedPress(): Press[] {
  return PRESS.filter((p) => p.featured);
}
