import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProgramCard from "@/components/ProgramCard";
import RecognitionStrip from "@/components/RecognitionStrip";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import SectionRule from "@/components/SectionRule";
import FAQ from "@/app/_components/FAQ";
import CTABanner from "@/components/CTABanner";
import LogoWall from "@/components/LogoWall";
import JsonLd from "@/components/JsonLd";

import {
  charityFocusArea,
  charityHowToApply,
  charityWhyVolunteer,
  getProgramsByFocus,
  getProgramBySlug,
  getCharityTestimonials,
} from "@/content";
import { AWARDS } from "@/content/awards";
import { PARTNERS } from "@/content/partners";
import {
  createPageMetadata,
  educationalProgramJsonLd,
  PRIORITY_SEO_PATHS,
  webPageJsonLd,
} from "@/lib/seo";

const NONPROFIT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform?usp=pp_url&entry.76041240=President&entry.145747725=Nepal";

const FAQ_ITEMS = [
  {
    question: "What kind of projects do you accept?",
    answer:
      "We accept projects such as website development, web applications, and other digital solutions that help nonprofits achieve their mission. We do not accept projects for commercial or for-profit purposes.",
    value: "item-1",
  },
  {
    question: "Who is eligible to apply for Code for Charity?",
    answer:
      "Any registered nonprofit, NGO, or social good organisation — national or international — can apply for support through Code for Charity. If the organisation is not registered, we can still consider the application on a case-by-case basis.",
    value: "item-2",
  },
  {
    question: "Is Code for Charity really free?",
    answer:
      "Yes! Code for Charity provides pro-bono (free) technical services to eligible nonprofit organisations. There are no hidden charges. However, we cannot fund the hosting or domain costs for your project. You might need to cover those expenses, though we can help with free hosting on a case-by-case basis.",
    value: "item-3",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project duration depends on the complexity and scope. Most projects take between 6 to 15 weeks from kickoff to delivery, but timelines are discussed and agreed upon before starting.",
    value: "item-4",
  },
  {
    question: "How do I apply for support?",
    answer:
      "Simply fill out the application form linked on this page. Our team will review your submission and contact you for further discussion.",
    value: "item-5",
  },
  {
    question: "Can I volunteer as a developer or designer?",
    answer:
      "Absolutely! We welcome volunteers who are passionate about using their skills for social good. Please reach out via email or the form on our Contact page.",
    value: "item-6",
  },
  {
    question: "What do the volunteers get?",
    answer:
      "Volunteers learn real-world project development by working on actual projects for nonprofits. If their performance is good, they may be offered internship or job opportunities with one of our partner companies, including Fleckor Tech and Cornor Tech.",
    value: "item-7",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Code for Charity",
  description: charityFocusArea.summary,
  path: PRIORITY_SEO_PATHS.charity,
  keywords: [
    "Code for Charity Nepal",
    "free website for nonprofits",
    "pro bono web development Nepal",
    "volunteer developers Nepal",
    "Cosog Nepal charity",
  ],
});

export default function CharityFocusPage() {
  const charityPrograms = getProgramsByFocus("charity");
  const webDevProgram = getProgramBySlug("web-development-wordpress");
  const testimonials = getCharityTestimonials();
  const ictAward = AWARDS.find((a) => a.focusArea === "charity" && a.featured);

  const internshipPartners = PARTNERS.filter(
    (p) => p.roles?.includes("internship")
  );
  const academicPartners = PARTNERS.filter(
    (p) => p.roles?.includes("academic") || p.roles?.includes("mentor")
  );

  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col outline-none">
      <JsonLd
        data={[
          webPageJsonLd({
            title: charityFocusArea.title,
            description: charityFocusArea.summary,
            path: PRIORITY_SEO_PATHS.charity,
          }),
          educationalProgramJsonLd({
            name: charityFocusArea.title,
            description: charityFocusArea.summary,
            path: PRIORITY_SEO_PATHS.charity,
          }),
        ]}
      />
      {/* 1. Hero */}
      <section className="py-16 md:py-20">
        <Container className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Focus area
          </p>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink">
            {charityFocusArea.title}
          </h1>
          <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
            {charityFocusArea.summary}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              href={NONPROFIT_FORM_URL}
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              Request help for your nonprofit
            </Button>
            <Button
              href="/get-involved/volunteer"
              variant="secondary"
              size="lg"
            >
              Volunteer with us
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Recognition — ICT Award above the fold */}
      {ictAward && <RecognitionStrip items={[ictAward]} />}

      {/* 3. What is Code for Charity */}
      <section className="py-12">
        <Container className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-2xl text-ink">
              What is Code for Charity?
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed max-w-3xl">
              {charityFocusArea.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-xl text-ink">
              How to apply
            </h3>
            <div className="space-y-4 text-ink-muted leading-relaxed max-w-3xl">
              {charityHowToApply.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Projects we've delivered */}
      <section className="py-12 bg-paper">
        <Container className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display font-semibold text-2xl text-ink">
              Projects we&apos;ve delivered
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-3xl">
              Each build is its own project with its own story. Click through to
              see the delivered website, testimonials, and how we worked with the
              client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charityPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Related programme */}
      {webDevProgram && (
        <section className="py-12">
          <Container className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-display font-semibold text-2xl text-ink">
                Related programme
              </h2>
              <p className="text-ink-muted leading-relaxed max-w-3xl">
                The Web Development Program is an educational initiative under
                Code for Charity — students built a real school website while
                learning WordPress.
              </p>
            </div>
            <div className="max-w-sm">
              <ProgramCard program={webDevProgram} />
            </div>
          </Container>
        </section>
      )}

      <SectionRule />

      {/* 6. Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-12">
          <Container className="space-y-10">
            <h2 className="font-display font-semibold text-2xl text-ink">
              What our clients say
            </h2>
            {testimonials.map((story) => (
              <div
                key={story.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div className="space-y-4">
                  <blockquote className="text-lg text-ink-muted leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-display font-semibold text-ink">
                      {story.author}
                    </p>
                    <p className="text-sm text-ink-muted">
                      {story.role}
                      {story.organization ? `, ${story.organization}` : ""}
                    </p>
                  </div>
                  {story.program && (
                    <Link
                      href={`/programs/${story.program}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      View project <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
                {story.videoId && (
                  <LiteYouTubeEmbed
                    videoId={story.videoId}
                    title={`Testimonial from ${story.author}`}
                  />
                )}
              </div>
            ))}
          </Container>
        </section>
      )}

      <SectionRule />

      {/* 7. Why volunteer */}
      <section className="py-12">
        <Container className="space-y-4">
          <h2 className="font-display font-semibold text-2xl text-ink">
            Why volunteer?
          </h2>
          <div className="space-y-4 text-ink-muted leading-relaxed max-w-3xl">
            {charityWhyVolunteer.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Internship partners — with stories, not just logos */}
      {internshipPartners.length > 0 && (
        <section className="py-12 bg-paper">
          <Container className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-display font-semibold text-2xl text-ink">
                Internship partners
              </h2>
              <p className="text-ink-muted leading-relaxed max-w-3xl">
                Outstanding graduates are offered internships with our partner
                companies, providing valuable industry experience and career
                growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="border border-rule rounded-lg p-6 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-lg border border-rule bg-surface flex items-center justify-center p-2 shrink-0">
                      {partner.logo && partner.logo !== "" ? (
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={40}
                          height={40}
                          className="max-h-10 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-xs font-semibold text-ink-muted text-center leading-tight">
                          {partner.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                  {partner.description && (
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {partner.description}
                    </p>
                  )}
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      Visit website <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 9. Past/academic partners */}
      {academicPartners.length > 0 && (
        <LogoWall partners={academicPartners} />
      )}

      {/* 10. FAQ */}
      <section className="py-12">
        <Container>
          <FAQ data={FAQ_ITEMS} />
        </Container>
      </section>

      {/* 11. CTA */}
      <CTABanner
        heading="Do you need help with a technical project?"
        subtext="We are here to help! Fill out the form."
        cta={{
          label: "Access the form",
          href: NONPROFIT_FORM_URL,
          external: true,
        }}
      />
    </main>
  );
}
