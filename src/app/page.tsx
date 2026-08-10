import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import ProgramCard from "@/components/ProgramCard";
import AudienceRouter from "@/components/AudienceRouter";
import LogoWall from "@/components/LogoWall";
import Leaders from "@/components/Leaders";
import CTABanner from "@/components/CTABanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RecentPosts from "./_components/RecentPosts";

import {
  getStats,
  getFocusAreas,
  getPrograms,
  getPartnersForHomepage,
} from "@/content";
import { APP_ROUTES } from "@/lib/routes";
import {
  organizationJsonLd,
  PRIORITY_SEO_PATHS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import placeholderImage from "@/assets/images/hero_video_placeholder.png";
import sdg4 from "@/assets/sdgs/E_WEB_04.png";
import sdg8 from "@/assets/sdgs/E_WEB_08.png";
import sdg10 from "@/assets/sdgs/E_WEB_10.png";
import Image from "next/image";

export default function Home() {
  const stats = getStats();
  const focusAreas = getFocusAreas();
  // Manually select Summer Camp, Code for Charity, and Web Development programs
  const programs = getPrograms().filter(
    (p) =>
      !p.noindex &&
      (
        p.slug === "summer-camp" ||
        p.slug === "techpaila" ||
        p.slug === "web-development-wordpress"
      )
  );
  
  const partners = getPartnersForHomepage();
  const sdgs = [
    {
      id: "sdg-4",
      href: "https://sdgs.un.org/goals/goal4",
      image: sdg4,
      alt: "UN Sustainable Development Goal 4: Quality Education",
    },
    {
      id: "sdg-8",
      href: "https://sdgs.un.org/goals/goal8",
      image: sdg8,
      alt: "UN Sustainable Development Goal 8: Decent Work and Economic Growth",
    },
    {
      id: "sdg-10",
      href: "https://sdgs.un.org/goals/goal10",
      image: sdg10,
      alt: "UN Sustainable Development Goal 10: Reduced Inequalities",
    },
  ];

  const audienceOptions = [
    { label: "I'm a student", href: APP_ROUTES.GET_INVOLVED.START_CLUB },
    { label: "I'm a teacher", href: APP_ROUTES.GET_INVOLVED.START_CLUB },
    { label: "I'm a nonprofit", href: APP_ROUTES.GET_INVOLVED.PARTNER },
    {
      label: "I want to volunteer",
      href: APP_ROUTES.GET_INVOLVED.VOLUNTEER,
    },
    { label: "I want to teach", href: APP_ROUTES.GET_INVOLVED.TEACH },
  ];

  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col outline-none">
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            title: "Coding for Social Good Nepal | Facilitating Computer Science Education in Nepal",
            description:
              "Cosog Nepal brings computer science education to schools across Nepal through CS clubs, skills fellowships, and Code for Charity.",
            path: PRIORITY_SEO_PATHS.home,
          }),
        ]}
      />
      {/* 1. Hero */}
      <Hero
        headline="Bringing Computer Science Education to every classroom"
        subline="Cosog Nepal helps students start CS clubs, build real skills, and use code for social good."
        primaryCta={{
          label: "Start a CS club at your school",
          href: APP_ROUTES.GET_INVOLVED.START_CLUB,
        }}
        secondaryCta={{
          label: "Volunteer with us",
          href: APP_ROUTES.GET_INVOLVED.VOLUNTEER,
        }}
        media={{
          videoSrc: "./videos/cosog-nepal-hero.mp4",
          poster: placeholderImage,
        }}
      />

      {/* 2. Recognition + focus areas + approach */}
      <section className="bg-paper py-16 md:py-24 my-8">
        <Container className="space-y-24 ">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-center">
            <div className="space-y-8">
              <div className="space-y-5 max-w-[58ch]">
                <h2 className="font-display font-semibold text-xl md:text-2xl tracking-[-0.015em] text-ink leading-[1.15]">
                  Cosog Nepal is a student-led enterprise from Nepal
                </h2>
                <p className="text-base text-ink-muted leading-[1.65] max-w-prose">
                  We believe technology should empower every student in Nepal.
                  To get there, we&apos;re bringing computer science education
                  and student-led CS clubs to high schools across the country.
                </p>
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="border-t border-rule"
            >
              {focusAreas.map((area) => (
                <AccordionItem key={area.slug} value={area.slug} className="border-rule">
                  <AccordionTrigger className="py-6 text-left font-display font-semibold text-lg md:text-xl tracking-[-0.015em] text-ink hover:no-underline">
                    {area.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base text-ink-muted leading-[1.65] max-w-prose">
                    <p>{area.summary}</p>
                    {area.body.slice(0, 2).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] gap-8 lg:gap-12 items-start pt-10">
            <div className="space-y-4 max-w-[28rem]">
              <h2 className="font-display font-semibold text-xl md:text-2xl tracking-[-0.015em] text-ink leading-[1.15]">
                Sustainable Development Goals
              </h2>
              <p className="text-base text-ink-muted leading-[1.7] max-w-prose">
                Cosog Nepal&apos;s work aligns with three United Nations
                Sustainable Development Goals: quality education, decent work
                and economic growth, and reduced inequalities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-5">
              {sdgs.map((goal) => (
                <a
                  key={goal.id}
                  href={goal.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-24 md:w-[10.5rem] border border-rule bg-surface p-1 rounded transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] hover:border-brand hover:bg-brand-wash"
                >
                  <Image
                    src={goal.image}
                    alt={goal.alt}
                    className="w-full h-auto"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 max-w-[58ch]">
              <h2 className="font-display font-semibold text-2xl tracking-[-0.015em] text-ink">
                Approach
              </h2>
              <p className="text-base text-ink-muted leading-[1.65]">
                Within our three focus areas, we support our mission through a
                simple three-part model.
              </p>
            </div>

            <div className="border-t border-rule">
              {[
                {
                  title: "Start school-based CS communities",
                  body: "We help students and schools launch clubs that make computer science visible, social, and locally led.",
                },
                {
                  title: "Build practical skills through real work",
                  body: "Our camps and workshops move beyond theory so students ship projects, learn tools, and gain confidence.",
                },
                {
                  title: "Use code for public good",
                  body: "Through charitable builds, volunteers apply their skills to real nonprofit needs and create measurable impact.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-6 md:gap-10 py-8 border-b border-rule"
                >
                  <h3 className="font-display font-semibold text-xl tracking-[-0.015em] text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base text-ink-muted leading-[1.65] max-w-prose">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. StatBar */}
      <StatBar stats={stats} />

      {/* 4. Program cards */}
      <section className="py-12 md:py-16 bg-surface-alt">
        <Container className="space-y-8">
          <SectionHeading viewall={APP_ROUTES.PROGRAMS}>
            Featured Programs
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Audience router */}
      <AudienceRouter options={audienceOptions} />

      {/* 7. From our leaders */}
      <Leaders portraitStyle="cutout" colorScheme="full-accent" />

      {/* 8. Logo wall */}
      <LogoWall partners={partners} />

      {/* 8. Recent posts */}
      <RecentPosts />

      {/* 9. Newsletter / CTA */}
      <CTABanner
        heading="Stay connected with Cosog Nepal"
        subtext="Join our community or explore ways to collaborate."
        cta={{
          label: "Partner with us",
          href: APP_ROUTES.GET_INVOLVED.PARTNER,
        }}
      />
    </main>
  );
}
