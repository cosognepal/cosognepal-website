import type { Program } from "./types";
import { TECH_PAILA_URL } from "@/lib/routes";

import CSAwarenessBanner from "@/assets/images/Programs/cs_awareness_banner.png";
import TechPailaLogo from "@/assets/images/Programs/techpaila-logo-primary.svg";
import TechAfterTen from "@/assets/techafter10.png";
import WebDevImage from "@/assets/images/Programs/web-dev-with-wordpress.png";
import CodeForCharityBanner from "@/assets/images/Programs/Code_for_charity_banner.png";
import AwarenessImage from "@/assets/images/Programs/awareness.png";
import SummerCampImage from "@/assets/images/Programs/summer_camp.png";

import photo20_1 from "@/assets/images/Events/Open_Souce_101/photo1.jpeg";
import photo20_2 from "@/assets/images/Events/Open_Souce_101/photo2.jpeg";
import photo20_3 from "@/assets/images/Events/Open_Souce_101/photo3.jpeg";
import photo21_1 from "@/assets/images/Events/Web_Development_With_WordPress/photo1.png";
import photo21_2 from "@/assets/images/Events/Web_Development_With_WordPress/photo2.png";

import aaditya from "@/assets/images/Testimonials/aaditya.jpg";
import shashank from "@/assets/images/Testimonials/shashank.jpg";
import nayan from "@/assets/images/Testimonials/nayan.jpg";
import photo21_3 from "@/assets/images/Events/Web_Development_With_WordPress/photo3.png";

export const PROGRAMS: Program[] = [
  {
    slug: "cs-awareness-sessions",
    title: "CS Awareness Sessions",
    focusArea: "schools",
    status: "running",
    hero: CSAwarenessBanner,
    summary:
      "Outreach sessions in secondary and high schools to promote Computer Science education, career paths, and student-led CS clubs.",
    origin: [
      "Cosog Nepal was founded after observing that most Nepali high schools lacked a Computer Science club culture from grade 9 onwards. CS Awareness Sessions are our primary vehicle for changing that — one school visit at a time.",
      "Since 2022, our volunteers have conducted presentations in schools across multiple districts, reaching thousands of students with information about CS streams, careers, and how to start a club.",
    ],
    approach: [
      "Each session is tailored to the school's context: we present career opportunities, explain CS in +2 streams, demo club activities, and leave behind resources for teachers and student leaders.",
      "Follow-up support includes connecting interested students with our team, helping draft club proposals, and inviting schools to future workshops.",
    ],
    ctaLabel: "Start a CS club at your school",
    ctaHref: "/get-involved/start-a-club",
    photos: [
      {
        src: AwarenessImage,
        alt: "CS awareness session at a Nepali school",
        caption: "Students learning about CS career paths",
        date: "August 2024",
        location: "Arniko School, Biratnagar",
      },
    ],
  },
  {
    slug: "techpaila",
    title: "TechPaila",
    focusArea: "schools",
    status: "running",
    hero: TechPailaLogo,
    heroFit: "contain",
    liveUrl: TECH_PAILA_URL,
    summary:
      "537 government technical and vocational schools across Nepal, on one map — free, bilingual, built for the students who need it most.",
    origin: [
      "Nepal's government funds technical streams in hundreds of secondary schools — computer engineering, civil, electrical, plant science, animal science, agriculture — starting from Grade 9 at no cost. But the information sits in a government booklet as a table in an annex. TechPaila puts all 537 schools on an interactive, bilingual map so finding the right school stops depending on who you happen to know.",
    ],
    approach: [
      "TechPaila is an interactive map with a recommendation flow: pick a program, share your location or choose a district, and it ranks the nearest schools with a clear reason for each result. The interface works in English and Nepali.",
      "It lives at techpaila.cosognepal.org. If a school is missing or listed incorrectly, write to us at contact@cosognepal.org.",
    ],
    ctaLabel: "Open TechPaila",
    ctaHref: TECH_PAILA_URL,
  },
  {
    slug: "computer-science-in-plus-two",
    title: "Computer Science in +2",
    focusArea: "schools",
    status: "completed",
    endDate: "2024",
    hero: TechAfterTen,
    summary:
      "An interactive session helping SEE graduates decide whether to pursue computer science in +2, with speakers from Nepal's tech industry.",
    origin: [
      "Choosing a stream after SEE is one of the most consequential decisions a Nepali student makes. Many graduates lack clear information about what CS in +2 actually involves — and what opportunities it unlocks.",
      "Cosog Nepal organized this session on 4 May 2024 with leading figures in Nepali tech to give recent SEE graduates an honest, practical picture of CS education and careers.",
    ],
    approach: [
      "Speakers covered career paths in computer science, differences between science and management streams, and educational and job opportunities in Nepal and abroad.",
      "The session was held online via Google Meet and a recording is available on our YouTube channel.",
    ],
    ctaLabel: "Watch on YouTube",
    ctaHref: "https://www.youtube.com/playlist?list=PLKE1X1xZFAFfvK1tq5GH5fiy4HGXCT_De",
  },
  {
    slug: "summer-camp",
    title: "E-STEM Summer Camp",
    focusArea: "skills",
    status: "running",
    hero: SummerCampImage,
    summary:
      "A 16-week fellowship for high school students aged 15 to 20 who want to solve real environmental problems using technology. Six mentored teams, one public showcase.",
    origin: [
      "The E-STEM Summer Camp is Cosog Nepal's flagship program. Students learn environmental science and practical computer science, then work in teams to build technology prototypes that address challenges in their communities.",
      "Supported by the Global E-STEM Innovation Grant from Pratt & Whitney and NAAEE.",
    ],
    approach: [
      "Students go through workshops, form teams with mentors, and ship a real project over 16 weeks. The fellowship ends with an in-person showcase where all six teams present their work.",
    ],
    ctaLabel: "Visit the Summer Camp site",
    ctaHref: "https://summercamp.cosognepal.org",
  },
  {
    slug: "web-development-wordpress",
    title: "Web Development with WordPress",
    focusArea: "skills",
    status: "completed",
    endDate: "2026",
    hero: WebDevImage,
    blogUrl: "https://blog.cosognepal.org/web-dev-with-wordpress-concluded",
    summary:
      "A two-week hybrid program where 20 public-school students from Grades 9–12 learned to build  websites with WordPress and Elementor...",
    origin: [
      "The Web Development with WordPress program ran under our skills initiative in early 2026. Twenty students from Grades 9–12 at public schools participated in a hybrid model: online instruction over Microsoft Teams, collaboration on Discord, and an in-person graduation at Kalika Manavgyan Secondary School.",
    ],
    approach: [
      "Students learned WordPress, Elementor, CMS management, basic SEO, and security practices. Teams shipped two real-world projects presented at the graduation ceremony.",
      "The program was supported by Paymentology via Changing Lives Initiative, Fleckor Tech, and the ICT Club at Kalika Manavgyan Secondary School.",
    ],
    cohortSize: 20,
    ctaLabel: "Read the recap",
    ctaHref: "https://blog.cosognepal.org/web-dev-with-wordpress-concluded",
    playlistId: "PLKE1X1xZFAFflaCfTlyzfp40ZykAaJfb-",
    projects: [
      {
        title: "Nonprofit organisation website",
        description:
          "A team built a clean, easy-to-navigate site featuring a strong hero section, project showcases highlighting community impact, and ways for visitors to volunteer or support the organisation.",
      },
      {
        title: "School website prototype",
        description:
          "Inspired by Kalika Manavgyan Secondary School. Minimal, organised layout with an icon-based homepage, an interactive faculty section, a gallery of school activities, and a contact page with an integrated map.",
      },
    ],
    programPartners: [
      {
        name: "Paymentology",
        role: "Financial supporter via Changing Lives Initiative",
      },
      {
        name: "Fleckor Tech",
        role: "Mentorship and internship review for graduating students",
      },
      {
        name: "ICT Club, Kalika Manavgyan Secondary School",
        role: "Local coordination and student facilitation",
      },
    ],
    stories: [
      {
        id: "webdev-aaditya",
        title: "Aaditya Khanal on the WordPress program",
        quote:
          "I recently completed the 15+ days free WordPress workshop organized by Cosog Nepal, and it was truly a valuable experience. The mentors were highly supportive, knowledgeable, and always ready to help throughout the sessions. A special thanks to Aashish Panthi, the lead of Cosog Nepal, for being extremely friendly, approachable, and guiding us smoothly during the entire workshop. Overall, this workshop helped me build a strong foundation in WordPress.",
        author: "Aaditya Khanal",
        role: "Student",
        program: "web-development-wordpress",
        image: aaditya,
      },
      {
        id: "webdev-shashank",
        title: "Shashank Shrestha on the WordPress program",
        quote:
          "I signed up for the Web Development course at Cosog Nepal because I wanted to learn how to build websites with WordPress. Taking this course was both hard and rewarding. All of the mentors were very helpful and always available when needed. Working and studying with other students made the process more fun and less stressful. This course helped me grow both as a person and as a professional, and it inspired me to keep learning new things.",
        author: "Shashank Shrestha",
        role: "Student",
        program: "web-development-wordpress",
        image: shashank,
      },
      {
        id: "webdev-nayan",
        title: "Nayan Acharya on the WordPress program",
        quote:
          "Joining Cosog's WordPress Program was fully driven by curiosity to learn and build digital products. This journey was more than just learning about WordPress — it showed us collaboration, mentorship, and growth. Connecting with mentors and other peers gave me a new perspective and inspired me to build meaningful projects. This program didn't just teach skills; it helped shape my mindset toward innovation and continuous learning.",
        author: "Nayan Acharya",
        role: "Student",
        program: "web-development-wordpress",
        image: nayan,
      },
    ],
    photos: [
      {
        src: photo21_1,
        alt: "Students presenting WordPress projects at graduation ceremony",
        caption: "Graduation presentations at Kalika Manavgyan",
        date: "March 2026",
        location: "Kalika Manavgyan Secondary School",
      },
      {
        src: photo21_2,
        alt: "WordPress workshop in session",
        caption: "Hybrid learning session",
        date: "March 2026",
        location: "Online",
      },
      {
        src: photo21_3,
        alt: "Student team collaboration",
        caption: "Team project work",
        date: "March 2026",
        location: "Kalika Manavgyan Secondary School",
      },
    ],
  },
  {
    slug: "open-source-101",
    title: "Open Source 101",
    focusArea: "skills",
    status: "completed",
    endDate: "2026",
    hero: photo20_1,
    summary:
      "A workshop on Git, GitHub, and real open-source contribution, delivered at Embark College during Skill Week. The college students learned to create issues and raise PR to resolve them.",
    origin: [
      "Open source powers the world's most innovative technologies, yet many Nepali students have never contributed to a public repository. Open Source 101 was designed to close that gap.",
    ],
    approach: [
      "On 16 January 2026, Cosog Nepal conducted a comprehensive workshop at Embark College, Pulchowk. Participants learned Git and GitHub workflows, how to find beginner-friendly projects, write effective commit messages, and build an open-source portfolio.",
      "The session covered real-world contribution workflows, collaboration best practices, and how maintainers review pull requests.",
    ],
    photos: [
      {
        src: photo20_1,
        alt: "Open Source 101 workshop",
        caption: "Introduction to Git and GitHub",
        date: "January 2026",
        location: "Embark College, Pulchowk",
      },
      {
        src: photo20_2,
        alt: "Students practicing Git workflows",
        caption: "Hands-on contribution exercise",
        date: "January 2026",
        location: "Embark College, Pulchowk",
      },
      {
        src: photo20_3,
        alt: "Open source collaboration discussion",
        caption: "Q&A on finding projects to contribute to",
        date: "January 2026",
        location: "Embark College, Pulchowk",
      },
    ],
  },
  {
    slug: "sustainable-actions-afrika",
    title: "Sustainable Actions Afrika",
    focusArea: "charity",
    status: "completed",
    endDate: "2025",
    hero: CodeForCharityBanner,
    liveUrl: "https://sustainableactionsafrika.org/",
    summary:
      "A website for a Cameroonian nonprofit working on sustainable development and environmental conservation — our first international build.",
    origin: [
      "Sustainable Actions Afrika is a nonprofit based in Cameroon promoting sustainable development and environmental conservation across Africa. After months of collaboration and training our volunteers, we delivered the website to Mr. Peter Nfon.",
    ],
    approach: [
      "Our volunteer team designed and built sustainableactionsafrika.org under the Code for Charity program. The site highlights the organization's mission, projects, and ways to get involved.",
    ],
    websiteUrl: "https://sustainableactionsafrika.org/",
    websiteLabel: "sustainableactionsafrika.org",
    stories: [
      {
        id: "saa-story",
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
    ],
    ctaLabel: "Apply for Code for Charity",
    ctaHref: "/get-involved/partner",
  },
  {
    slug: "nabn-nepal-website",
    title: "National Adolescent Boys' Network Nepal",
    focusArea: "charity",
    status: "completed",
    endDate: "2025",
    hero: CodeForCharityBanner,
    liveUrl: "https://nabnnepal.org/",
    blogUrl:
      "https://blog.cosognepal.org/code-for-charity-project-national-adolescent-boys-network-nepal",
    summary:
      "A website built with Duke University students for a national network advancing adolescent rights and gender equality.",
    origin: [
      "NABN Nepal was founded to secure the rights of children and adolescents, advocate for gender equality, end gender-based violence, and bring adolescents into that work as active participants.",
      "After months of collaboration with students from the Technify Club at Duke University, we delivered the website to Mr. Ghanashyam Bishwakarma.",
    ],
    approach: [
      "Cosog Nepal volunteers, in collaboration with Technify Club at Duke University, designed and developed nabnnepal.org. The site showcases NABN's programs, resources, and ways to get involved.",
    ],
    websiteUrl: "https://nabnnepal.org/",
    websiteLabel: "nabnnepal.org",
    stories: [
      {
        id: "nabn-story",
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
    ],
    ctaLabel: "Partner with us",
    ctaHref: "/get-involved/partner",
  },
  {
    slug: "nagn-nepal-website",
    title: "National Adolescent Girls' Network Nepal",
    focusArea: "charity",
    status: "completed",
    endDate: "2025",
    hero: CodeForCharityBanner,
    liveUrl: "https://nagnnepal.org/",
    blogUrl: "https://blog.cosognepal.org/code-for-charity-project-nagnnepal",
    summary:
      "A website for Nepal's national network for adolescent girls — commissioned after they saw our work for their brother organisation.",
    origin: [
      "They reached out to us after being impressed with the website we built for the National Adolescent Boys' Network Nepal, which they saw at their AGM. After months of collaboration, we delivered the website to Ms. Anuska Neupane.",
    ],
    approach: [
      "Our volunteer team designed and developed nagnnepal.org under the Code for Charity program, following the same collaborative process that delivered the NABN Nepal website.",
    ],
    websiteUrl: "https://nagnnepal.org/",
    websiteLabel: "nagnnepal.org",
    stories: [
      {
        id: "nagn-story",
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
    ],
    ctaLabel: "Partner with us",
    ctaHref: "/get-involved/partner",
  },
];

export function getPrograms(): Program[] {
  return PROGRAMS;
}

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function getProgramsByFocus(focus: Program["focusArea"]): Program[] {
  return PROGRAMS.filter((p) => p.focusArea === focus);
}

export function getArchivedPrograms(): Program[] {
  return PROGRAMS.filter((p) => p.status === "completed");
}

export function getActivePrograms(): Program[] {
  return PROGRAMS.filter(
    (p) => p.status === "running" || p.status === "open" || p.status === "coming-soon"
  );
}
