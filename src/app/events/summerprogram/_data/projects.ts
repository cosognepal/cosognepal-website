import type { StaticImageData } from "next/image";
import prashantBhattaPhoto from "@/assets/images/SummerCamp/PrashantBhatta.jpeg";
import samikshaKhadkaPhoto from "@/assets/images/SummerCamp/SamikshaKhadka.jpeg";
import sarojRegmiPhoto from "@/assets/images/SummerCamp/SarojRegmi.jpeg";
import ashishPandeyPhoto from "@/assets/images/SummerCamp/AshishPandey.jpg";
import kailashPanthaPhoto from "@/assets/images/SummerCamp/KailashPantha.jpeg";
import bhishmaBhandariPhoto from "@/assets/images/SummerCamp/BhismaBhandari.png";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectPerson = {
  name: string;
  role: string;
  photo: string | StaticImageData;
  linkedin?: string;
};

export type SummerProject = {
  slug: string;
  emoji: string;
  name: string;
  hook: string;
  about: string;
  problem: string;
  techStack: string[];
  mentor: ProjectPerson;
  coMentor: ProjectPerson;
  links: ProjectLink[];
};

export const PROJECTS_SECTION_TITLE = "Projects";

export const PROJECTS_SECTION_SUBTITLE =
  "";

export const summerProjects: SummerProject[] = [
  {
    slug: "forest-fire-detection",
    emoji: "🌲",
    name: "Forest-Fire Detection",
    hook: "Live wildfire alerts for Nepal, straight from satellites",
    about:
      "The team builds a real-time wildfire monitoring system that pulls live hotspot data from NASA FIRMS satellites, plots active fires on an interactive map of Nepal, and automatically sends SMS alerts to at-risk communities through Twilio.",
    problem:
      "Nepal recorded 5,125 wildfire incidents in the first half of 2024 alone — the highest ever. Most rural communities receive no early warning at all; fires are discovered when smoke is already visible.",
    techStack: ["Python", "Leaflet.js", "NASA FIRMS API", "Twilio"],
    mentor: { name: "Kailash Pantha", role: "Mentor", photo: kailashPanthaPhoto },
    coMentor: { name: "Roshan Acharya", role: "Co-Mentor", photo: "" },
    links: [],
  },
  {
    slug: "deforestation-watch",
    emoji: "🌳",
    name: "Deforestation Watch",
    hook: "Making Nepal's disappearing forests visible from space",
    about:
      "The team tracks forest-cover loss using open satellite data from Global Forest Watch, builds before-and-after comparison maps in QGIS, and calculates canopy loss across districts with Python — turning invisible, gradual destruction into hard evidence.",
    problem:
      "Nepal has lost over 58,000 hectares of forest since 2001 to illegal logging, encroachment, and road construction. Without visual evidence, enforcement and policy accountability remain weak.",
    techStack: ["Python", "QGIS", "Global Forest Watch"],
    mentor: { name: "Ashish Pandey", role: "Mentor", photo: ashishPandeyPhoto },
    coMentor: { name: "Binod Pandey", role: "Co-Mentor", photo: "" },
    links: [],
  },
  {
    slug: "endangered-species-tracker",
    emoji: "🦅",
    name: "Endangered-Species Tracker",
    hook: "Mapping the shrinking habitats of Nepal's rarest animals",
    about:
      "The team cleans real wildlife sighting data, then builds interactive maps and charts showing where Nepal's endangered species live and how their habitats are changing — guided by IUCN Red List criteria and real field survey methods.",
    problem:
      "23% of Nepal's 212 mammal species are at risk, from snow leopards to one-horned rhinos. Conservation decisions need clear, accessible data — most of it currently sits in scattered spreadsheets.",
    techStack: ["Python", "pandas", "Chart.js"],
    mentor: { name: "Samiksha Khadka", role: "Mentor", photo: samikshaKhadkaPhoto },
    coMentor: { name: "Raushan Pandit", role: "Co-Mentor", photo: "" },
    links: [],
  },
  {
    slug: "nepali-eco-chatbot",
    emoji: "💬",
    name: "Nepali Eco-Chatbot",
    hook: "Conservation knowledge for anyone with WhatsApp... in Nepali",
    about:
      "The team builds a conversational chatbot in Nepali using Botpress, integrated directly with WhatsApp through the Meta Cloud API. It answers everyday conservation questions — making environmental knowledge accessible to farmers, students, and communities in their own language.",
    problem:
      "Most environmental information in Nepal exists only in English or buried in government documents. Over 44% of Nepalis speak Nepali as their first language, and WhatsApp is the country's most used messaging platform.",
    techStack: ["Botpress", "Meta Cloud API", "WhatsApp"],
    mentor: { name: "Saroj Regmi", role: "Mentor", photo: sarojRegmiPhoto },
    coMentor: { name: "Shrijan Poudel", role: "Co-Mentor", photo: "" },
    links: [],
  },
  {
    slug: "plant-disease-detector",
    emoji: "🌿",
    name: "Plant-Disease Detector",
    hook: "Point a camera at a sick crop, get a diagnosis in seconds",
    about:
      "The team builds a Flutter mobile app that runs a TensorFlow Lite machine-learning model directly on the phone — a farmer photographs a diseased plant and instantly receives the diagnosis plus organic remedy suggestions, no internet required.",
    problem:
      "Two-thirds of Nepalis depend on agriculture. Crop diseases like potato late blight devastate harvests, and without diagnosis tools, farmers over-spray pesticides — harming soil, water, and their own health.",
    techStack: ["Flutter", "Dart", "TensorFlow Lite"],
    mentor: {
      name: "Bhishma Pd. Bhandari",
      role: "Mentor",
      photo: bhishmaBhandariPhoto,
    },
    coMentor: { name: "Satakshee Ghimire", role: "Co-Mentor", photo: "" },
    links: [],
  },
  {
    slug: "urban-air-quality-alarm",
    emoji: "💨",
    name: "Urban Air-Quality Alarm",
    hook: "Know when air near you turns dangerous - before you breathe it",
    about:
      "The team builds a real-time dashboard streaming PM2.5 data from OpenAQ sensors, calculates the Air Quality Index live, and pushes notifications through Firebase the moment pollution crosses dangerous thresholds.",
    problem:
      "Kathmandu's PM2.5 levels average nearly nine times the WHO guideline, and the city has topped global pollution rankings. Air pollution contributes to an estimated 35,000+ premature deaths in Nepal every year — most people never know when the air is at its worst.",
    techStack: ["React", "Firebase", "OpenAQ API"],
    mentor: { name: "Prashant Bhatta", role: "Mentor", photo: prashantBhattaPhoto },
    coMentor: { name: "Pradeep Bhatta", role: "Co-Mentor", photo: "" },
    links: [],
  },
];

export function getProjectBySlug(slug: string): SummerProject | undefined {
  return summerProjects.find((project) => project.slug === slug);
}
