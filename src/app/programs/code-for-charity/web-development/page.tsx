import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays, MapPin, Users } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";

import graduationImage from "@/assets/images/Programs/web-dev-with-wordpress.png";

import YouTubePlaylist from "./_components/YouTubePlaylist";
import StudentTestimonials from "./_components/StudentTestimonials";

const BLOG_URL =
  "https://blog.cosognepal.org/web-dev-with-wordpress-concluded";

const PARTNERS = [
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
];

const PROJECTS = [
  {
    title: "Non-profit organization website",
    description:
      "A team built a clean, easy-to-navigate site featuring a strong hero section, project showcases highlighting community impact, and ways for visitors to volunteer or support the organization.",
  },
  {
    title: "School website prototype",
    description:
      "Inspired by Kalika Manavgyan Secondary School. Minimal, organized layout with an icon-based homepage, an interactive faculty section, a gallery of school activities, and a contact page with an integrated map.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="space-y-block">
      {/* Header */}
      <Section spacing="block">
        <Container className="space-y-standard">
          <span className="inline-flex items-center gap-2 rounded-full bg-empactathon-bg-green text-empactathon-dark px-3 py-1 text-info md:text-sub-para font-semibold uppercase tracking-wide">
            Code for Charity · Concluded
          </span>

          <h1 className="font-bold text-title md:text-heading text-black-dark leading-tight max-w-[900px]">
            Web Development with WordPress
          </h1>

          <p className="text-para md:text-sub-title text-black-mid max-w-[760px] leading-relaxed">
            A two-week program where 20 public-school students from Grades 9–12
            learned to build real websites with WordPress and Elementor — and
            graduated by presenting their projects in person.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Pill icon={<Users className="h-4 w-4" aria-hidden />}>
              20 students
            </Pill>
            <Pill icon={<BookOpen className="h-4 w-4" aria-hidden />}>
              Grades 9–12
            </Pill>
            <Pill icon={<CalendarDays className="h-4 w-4" aria-hidden />}>
              2 weeks · Hybrid
            </Pill>
            <Pill icon={<MapPin className="h-4 w-4" aria-hidden />}>
              Kalika Manavgyan Secondary School
            </Pill>
          </div>
        </Container>
      </Section>

      {/* Featured graduation image */}
      <Container>
        <figure className="space-y-3">
          <div className="relative w-full overflow-hidden rounded-md md:rounded-lg border border-black-dark/10 bg-gray-bg aspect-[21/9]">
            <Image
              src={graduationImage}
              alt="Students at the Web Development with WordPress graduation ceremony at Kalika Manavgyan Secondary School, holding their certificates."
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <figcaption className="text-info md:text-sub-para text-black-mid text-center">
            Graduation ceremony at Kalika Manavgyan Secondary School.
          </figcaption>
        </figure>
      </Container>

      {/* Partners */}
      <Section tone="muted" spacing="block">
        <Container className="space-y-standard">
          <h2 className="text-title font-bold text-black-dark">
            Made possible by our partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-standard">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-black-dark/10 rounded-md p-standard space-y-2"
              >
                <p className="text-mid-title font-bold text-black-dark">
                  {partner.name}
                </p>
                <p className="text-sub-para text-black-mid">{partner.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects built */}
      <Section spacing="block">
        <Container className="space-y-standard">
          <h2 className="text-title font-bold text-black-dark">
            What students built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-standard">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="bg-white border border-black-dark/10 rounded-md p-standard md:p-block space-y-3"
              >
                <h3 className="text-mid-title font-bold text-black-dark">
                  {project.title}
                </h3>
                <p className="text-sub-para text-black-mid leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Video lectures */}
      <Section tone="muted" spacing="block">
        <Container className="space-y-standard">
          <h2 className="text-title font-bold text-black-dark">
            Recorded lectures
          </h2>

          <YouTubePlaylist playlistId="PLKE1X1xZFAFflaCfTlyzfp40ZykAaJfb-" />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section spacing="block">
        <Container>
          <StudentTestimonials />
        </Container>
      </Section>

      {/* Blog CTA */}
      <Section spacing="block">
        <Container>
          <div className="rounded-md bg-primary text-white p-standard md:p-block flex flex-col md:flex-row md:items-center gap-standard md:justify-between">
            <div className="space-y-2 max-w-[680px]">
              <h2 className="text-mid-title md:text-title font-bold">
                Want the full story?
              </h2>
              <p className="text-sub-para md:text-para text-white/85">
                Read about the partnerships, the graduation ceremony, and the
                projects students shipped.
              </p>
            </div>
            <Button
              href={BLOG_URL}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 normal-case rounded-full px-8"
            >
              Read on our blog
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
