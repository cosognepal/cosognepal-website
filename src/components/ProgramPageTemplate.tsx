import type { Program } from "@/content/types";
import { getPressByProgram } from "@/content/press";
import { getStoriesByProgram } from "@/content/stories";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CaptionedImage from "@/components/CaptionedImage";
import SectionRule from "@/components/SectionRule";
import StoryBlock from "@/components/StoryBlock";
import PressList from "@/components/PressList";
import CTABanner from "@/components/CTABanner";
import LogoWall from "@/components/LogoWall";
import FAQ from "@/app/_components/FAQ";
import TimeLine from "@/app/events/techafterten/_components/TimeLine";
import EventDescripter from "@/components/ui/EventAbout";
import { GuestsSection } from "@/app/events/techafterten/_components/Guests";
import YouTubePlaylistEmbed from "@/components/YouTubePlaylistEmbed";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import Pratikshya from "@/assets/images/Events/CS_in_high_school/Pratiksha_Pandey.jpg";
import Aashish from "@/assets/images/Events/CS_in_high_school/Aashish_Panthi.jpeg";
import Siddhartha from "@/assets/images/Events/CS_in_high_school/Siddhartha_Neupane.jpg";
import Saroj from "@/assets/images/Events/CS_in_high_school/Saroj_Dahal.jpeg";

type ProgramPageTemplateProps = {
  program: Program;
};

const STATUS_LABEL: Record<Program["status"], string> = {
  "coming-soon": "Coming soon",
  open: "Open",
  running: "Running",
  completed: "Archived",
};

const FOCUS_AREA_LABELS: Record<string, { title: string; href: string }> = {
  schools: { title: "Schools & CS Clubs", href: "/focus/schools" },
  skills: { title: "Skills & Fellowships", href: "/focus/skills" },
  charity: { title: "Code for Charity", href: "/focus/charity" },
};

const TECH_AFTER_TEN_REGISTRATION_URL = "https://forms.gle/QkaAimGAq48kg8Ri7";
const TECH_AFTER_TEN_PLAYLIST_ID = "PLKE1X1xZFAFfvK1tq5GH5fiy4HGXCT_De";

const TECH_AFTER_TEN_SPEAKERS = [
  {
    id: "1",
    name: "Pratiksha Pandey",
    designation: "CEO at Smart Cheli",
    image: Pratikshya,
    socials: [
      {
        name: "Linkedin",
        icon: "linkedin" as const,
        link: "https://www.linkedin.com/in/pratiksha-pandey-608361ba/",
      },
    ],
    short_intro: [
      "Pratiksha Pandey is currently serving as a CEO of Smart Cheli which work to create gender balance in the STEM by providing playful learning.",
      "She is an electronic and communication engineer. Under her leadership, Smart Cheli has worked with Bank of America, HEC Paris, One Young World, Bristol Myers Squibb, and other global organizations.",
    ],
  },
  {
    id: "2",
    name: "Aashish Panthi",
    designation: "SWE intern at Apple",
    image: Aashish,
    socials: [
      {
        name: "Linkedin",
        icon: "linkedin" as const,
        link: "https://www.linkedin.com/in/panthiaashish/",
      },
    ],
    short_intro: [
      "Aashish Panthi is a freshman at Fisk University located at Tenessee, the United States.",
      "This summer he will be joining Apple as a Software Engineering Intern with the Apple Services Engineering team in Culver City, Los Angeles, California.",
    ],
  },
  {
    id: "3",
    name: "Siddhartha Neupane",
    designation: "HoD BSc. CS and AI at Softwarica College",
    image: Siddhartha,
    socials: [
      {
        name: "Linkedin",
        icon: "linkedin" as const,
        link: "https://www.linkedin.com/in/siddhartha-neupane-310a2a162/",
      },
    ],
    short_intro: [
      "Siddhartha Neupane is a Head of the Department of BSc (Hons) Computer Science with Artificial Intelligence at Softwarica College, Kathmandu Nepal.",
      "He has completed his bachelor's in Business Computing from the University of Central Lancashire and completed a master's degree in Big Data Systems from the Higher School of Economics. Mr. Siddhartha is a Data Enthusiast and has worked in the past as a Database Administrator at LLC PAK PROJECT, Moscow Russia.",
    ],
  },
  {
    id: "4",
    name: "Saroj Dahal",
    designation: "CTO, 28Softwares",
    image: Saroj,
    socials: [
      {
        name: "Linkedin",
        icon: "linkedin" as const,
        link: "https://www.linkedin.com/in/isarojdahal/",
      },
    ],
    short_intro: [
      "Saroj Dahal is the founder and CTO of 28Softwares Pvt. Ltd. With 6+ years of experience in the Tech field, Saroj Dahal is equipped with knowledge of Web Development, Mobile App Development, DevOps and Cloud.",
      'In free time, He teaches programming at a YouTube Channel called "EverydayKarma" with a vision to produce millions of Nepali Developers.',
    ],
  },
];

const TECH_AFTER_TEN_TIMELINE = [
  {
    description:
      "Explain the purpose of the program and how it can benefit the recent SEE graduates. Briefly introduce the speakers and the topics they will be covering.",
    icon: "star" as const,
    title: "Introduction to the event",
  },
  {
    description:
      "Siddhartha Neupane will talk about the career paths in computer science that are available in Nepal and abroad.",
    icon: "speaker" as const,
    title: "Career Paths in Computer Science",
  },
  {
    description:
      "Pratiksha Pandey will talk about the educational and job opportunities in Nepal.",
    icon: "speaker" as const,
    title: "Opportunities in Nepal",
  },
  {
    description:
      "Aashish Panthi will talk about the educational and job opportunities abroad, especially in the United States.",
    icon: "speaker" as const,
    title: "Opportunities Abroad",
  },
  {
    description:
      "Saroj Dahal will lay out the differences between Computer Science in science and management in +2 level.",
    icon: "description" as const,
    title: "CS in Science vs Management",
  },
  {
    description:
      "Conclude the event and distrubution of resources talked about in the event.",
    icon: "report" as const,
    title: "Conclude the event",
  },
];

const TECH_AFTER_TEN_FAQS = [
  {
    question: 'What is the "Computer Science in +2" program?',
    answer:
      "The program is designed to help recent 10th-grade graduates in Nepal make informed decisions about their future in the field of computer science.",
    value: "item-1",
  },
  {
    question: "Who should attend this event?",
    answer:
      "Reacent SEE graduates who are considering computer science for their further studies and want to learn about potential career paths and opportunities should attend.",
    value: "item-2",
  },
  {
    question: "What topics will the speakers cover?",
    answer:
      "Speakers will discuss career paths in computer science, differences between computer science in science and management streams, and educational and job opportunities in Nepal and abroad.",
    value: "item-3",
  },
  {
    question: "Will there be opportunities to ask questions to the speakers?",
    answer:
      "Yes, there will be a Q&A session where participants can engage directly with the speakers.",
    value: "item-4",
  },
  {
    question: "How can I join the event?",
    answer:
      "Details will be provided on how to join the online event via email after you fill the registration form. Event will be on Google Meet.",
    value: "item-5",
  },
  {
    question: "Is there any fee to attend the event?",
    answer:
      "No, the event is free to attend for all interested participants.",
    value: "item-6",
  },
  {
    question: "Can non-SEE graduates attend the event?",
    answer:
      "While the event is targeted at recent SEE graduates, those with an interest in computer science education are welcome, subject to the event's capacity.",
    value: "item-7",
  },
  {
    question: "Where can I access the recording?",
    answer:
      "The recording is available on our YouTube channel. You can visit www.youtube.com/@cosognepal or search Coding for Social Good Nepal to access the channel.",
    value: "item-8",
  },
];

export default function ProgramPageTemplate({
  program,
}: ProgramPageTemplateProps) {
  const press = getPressByProgram(program.slug);
  const stories =
    program.stories ?? getStoriesByProgram(program.slug);
  const partners = program.partners ?? [];
  const sponsors = program.sponsors ?? [];
  const isTechAfterTen = program.slug === "computer-science-in-plus-two";

  const backLink = FOCUS_AREA_LABELS[program.focusArea] ?? {
    title: "All programs",
    href: "/programs",
  };

  return (
    <main className="space-y-12 py-12">
      <Container className="space-y-8">
        <Link
          href={backLink.href}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
        >
          <span aria-hidden>←</span>
          {backLink.title}
        </Link>

        {program.hero && (
          <div className="relative w-full aspect-[21/9] max-h-96 overflow-hidden rounded-lg">
            <Image
              src={program.hero}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-muted">
            {STATUS_LABEL[program.status]}
            {program.endDate ? ` · ${program.endDate}` : ""}
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-near-black">
            {program.title}
          </h1>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            {program.summary}
          </p>
        </div>

        {isTechAfterTen && (
          <section className="space-y-6">
            <div className="space-y-4 max-w-3xl text-base text-muted leading-relaxed">
              <p>
                Dear SEE graduates, Are you curious about a career in computer
                science? Wondering if you should choose computer science in +2
                or not? Want to explore the plethora of opportunities in Nepal
                and abroad?
              </p>
              <p>
                We have got you covered. Cosog Nepal is organizing an
                interactive session with leading figures in Nepali tech! Join us
                as we share insights on opportunities, challenges, and how to
                explore your potential in this exciting field.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                href={TECH_AFTER_TEN_REGISTRATION_URL}
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Count Me In
              </Button>
              <Button href="#learn-more" variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </section>
        )}

        {program.origin && program.origin.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl text-near-black">
              Origin
            </h2>
            {program.origin.map((para, i) => (
              <p key={i} className="text-muted leading-relaxed max-w-3xl">
                {para}
              </p>
            ))}
          </section>
        )}

        {(program.ctaLabel || program.liveUrl || program.blogUrl) && (
          <div className="flex flex-wrap gap-4">
            {program.liveUrl && (
              <Button
                href={program.liveUrl}
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Visit the website
              </Button>
            )}
            {program.ctaLabel && program.ctaHref && (
              <Button
                href={program.ctaHref}
                size="lg"
                variant={program.liveUrl ? "secondary" : "primary"}
              >
                {program.ctaLabel}
              </Button>
            )}
            {program.blogUrl && (
              <Button
                href={program.blogUrl}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Read the write-up
              </Button>
            )}
          </div>
        )}

        {program.videoUrl && (
          <div className="videoWrapper max-w-3xl">
            <iframe
              width="600"
              height="315"
              src={program.videoUrl}
              title={program.videoTitle ?? "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
            />
          </div>
        )}

        {program.websiteUrl && !program.liveUrl && (
          <p className="text-muted">
            Visit the website:{" "}
            <a
              href={program.websiteUrl}
              className="text-accent underline"
              target="_blank"
              rel="noreferrer"
            >
              {program.websiteLabel ?? program.websiteUrl}
            </a>
          </p>
        )}

        {program.approach && program.approach.length > 0 && (
          <>
            <SectionRule />
            <section className="space-y-4">
              <h2 className="font-display font-bold text-xl text-near-black">
                Approach
              </h2>
              {program.approach.map((para, i) => (
                <p key={i} className="text-muted leading-relaxed max-w-3xl">
                  {para}
                </p>
              ))}
            </section>
          </>
        )}

        {program.programPartners && program.programPartners.length > 0 && (
          <>
            <SectionRule />
            <section className="space-y-6">
              <h2 className="font-display font-bold text-xl text-near-black">
                Made possible by our partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {program.programPartners.map((p) => (
                  <div
                    key={p.name}
                    className="border border-border rounded-lg p-5 space-y-2"
                  >
                    <h3 className="font-semibold text-near-black">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {p.role}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {program.projects && program.projects.length > 0 && (
          <>
            <SectionRule />
            <section className="space-y-6">
              <h2 className="font-display font-bold text-xl text-near-black">
                What students built
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {program.projects.map((project) => (
                  <article
                    key={project.title}
                    className="border border-border rounded-lg p-5 md:p-6 space-y-3"
                  >
                    <h3 className="font-semibold text-near-black">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {program.playlistId && (
          <>
            <SectionRule />
            <YouTubePlaylistEmbed
              playlistId={program.playlistId}
              title="Recorded lectures"
            />
          </>
        )}

        {isTechAfterTen && (
          <>
            <SectionRule />
            <div id="learn-more" className="scroll-mt-28 space-y-12">
              <EventDescripter
                eventTitle="About the Event"
                description={[
                  "The Computer Science in +2 program is designed to empower recent 10th grade (SEE) graduates in Nepal to make informed decisions about their future academic paths and careers. Choosing the right stream after 10th grade is a critical step that can significantly impact one's future opportunities. This program aims to equip students with the knowledge and awareness to confidently choose a stream that aligns with their interests, strengths, and future goals.",
                  "Join us as we lay out the differences between Computer Science in science and management; as we explore different career paths within Computer Science; as we explore the job and educational opportunities in Nepal and abroad, and discover the boundless potential that awaits you in this ever-evolving landscape.",
                ]}
                className={{
                  container: "border border-rule",
                }}
              />

              <GuestsSection
                sectionTitle="Speakers"
                guestData={TECH_AFTER_TEN_SPEAKERS}
              />

              <TimeLine
                timelineTitle="Event Timeline"
                tasks={TECH_AFTER_TEN_TIMELINE}
              />

              <YouTubePlaylistEmbed
                playlistId={TECH_AFTER_TEN_PLAYLIST_ID}
                title="Watch the session playlist"
              />

              <FAQ data={TECH_AFTER_TEN_FAQS} />
            </div>
          </>
        )}

        {program.photos && program.photos.length > 0 && (
          <>
            <SectionRule />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.photos.map((photo, i) => (
                <CaptionedImage key={i} {...photo} />
              ))}
            </div>
          </>
        )}

        {stories.length > 0 && (() => {
          const videoStories = stories.filter((s) => s.videoId);
          const textStories = stories.filter((s) => !s.videoId);

          return (
            <>
              {videoStories.length > 0 && (
                <>
                  <SectionRule />
                  {videoStories.map((story) => (
                    <section key={story.id} className="space-y-6">
                      <h2 className="font-display font-bold text-xl text-near-black">
                        Testimonial
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                          <blockquote className="text-lg text-muted leading-relaxed italic">
                            &ldquo;{story.quote}&rdquo;
                          </blockquote>
                          <div>
                            <p className="font-semibold text-near-black">
                              {story.author}
                            </p>
                            <p className="text-sm text-muted">
                              {story.role}
                              {story.organization
                                ? `, ${story.organization}`
                                : ""}
                            </p>
                          </div>
                        </div>
                        <LiteYouTubeEmbed
                          videoId={story.videoId!}
                          title={`Testimonial from ${story.author}`}
                        />
                      </div>
                    </section>
                  ))}
                </>
              )}

              {textStories.length > 0 && (
                <>
                  <SectionRule />
                  <section className="space-y-6">
                    <h2 className="font-display font-bold text-xl text-near-black">
                      What our students say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {textStories.map((story) => (
                        <StoryBlock key={story.id} story={story} />
                      ))}
                    </div>
                  </section>
                </>
              )}
            </>
          );
        })()}

        {press.length > 0 && (
          <>
            <SectionRule />
            <PressList items={press} />
          </>
        )}

        {partners.length > 0 && (
          <>
            <SectionRule />
            <LogoWall partners={partners} />
          </>
        )}

        {sponsors.length > 0 && (
          <>
            <SectionRule />
            <LogoWall partners={sponsors} />
          </>
        )}
      </Container>

      <CTABanner
        heading="Partner with Cosog Nepal"
        subtext="Support CS education or apply for a Code for Charity build."
        cta={{ label: "Partner with us", href: "/get-involved/partner" }}
      />
    </main>
  );
}
