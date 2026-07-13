import type { Story } from "./types";

export const STORIES: Story[] = [
  {
    id: "club-origin",
    title: "Why we started Cosog Nepal",
    quote:
      "We saw students graduate from SEE without knowing computer science was even an option in +2. Cosog Nepal exists so no student has to discover CS by accident.",
    author: "Bibek Bhandari",
    role: "Co-founder",
    organization: "Cosog Nepal",
    program: "cs-awareness-sessions",
  },
  {
    id: "charity-impact",
    title: "Building for nonprofits",
    quote:
      "Every Code for Charity project teaches our volunteers that code is most powerful when it serves someone who could not afford it otherwise.",
    author: "Aashish Panthi",
    role: "Co-founder",
    organization: "Cosog Nepal",
    program: "sustainable-actions-afrika",
  },
  {
    id: "saa-testimonial",
    title: "Peter Nfon on working with Cosog Nepal",
    quote:
      "From the very first moment I sent out an email to Coding for Social Good Nepal requesting that they build our website, it has been a wonderful experience. Big thank you to Coding for Social Good Nepal.",
    author: "Peter Nfon",
    role: "Founder & CEO",
    organization: "Sustainable Actions Afrika",
    program: "sustainable-actions-afrika",
    year: 2025,
    videoId: "Dry5hBqGH9o",
  },
  {
    id: "nabn-testimonial",
    title: "Ghanashyam Bishwakarma on the NABN website",
    quote:
      "In collaboration with Coding for Social Good Nepal, we have been able to make an official and functional website, which is helping us to share our activities, our purpose, and all of our programmes.",
    author: "Ghanashyam Bishwakarma",
    role: "President",
    organization: "National Adolescent Boys' Network Nepal",
    program: "nabn-nepal-website",
    year: 2025,
    videoId: "qJdMG6zLY3U",
  },
  {
    id: "nagn-testimonial",
    title: "Anuska Neupane on the NAGN website",
    quote:
      "From the start, president Aashish Panthi coordinated and helped us understand each and every technical detail about the website. We'll continue to remember and work with Coding for Social Good Nepal.",
    author: "Anuska Neupane",
    role: "President",
    organization: "National Adolescent Girls' Network Nepal",
    program: "nagn-nepal-website",
    year: 2025,
    videoId: "iUo-Yj_TzCA",
  },
];

export function getStories(): Story[] {
  return STORIES;
}

export function getStoryById(id: string): Story | undefined {
  return STORIES.find((s) => s.id === id);
}

export function getStoriesByProgram(slug: string): Story[] {
  return STORIES.filter((s) => s.program === slug);
}

export function getCharityTestimonials(): Story[] {
  return STORIES.filter((s) => s.videoId && s.organization);
}

export function getFeaturedStory(): Story {
  return STORIES[0];
}
