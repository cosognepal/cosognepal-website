import Image from "next/image";
import Link from "next/link";

import FAQ from "@/app/_components/FAQ";
import CTABanner from "@/components/CTABanner";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionRule from "@/components/SectionRule";
import { APP_ROUTES } from "@/lib/routes";

import Banner from "@/assets/images/Programs/Code_for_charity_banner.png";

const NONPROFIT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform?usp=pp_url&entry.76041240=President&entry.145747725=Nepal";

const FAQ_ITEMS = [
  {
    question: "What kind of projects do you accept?",
    answer:
      "We accept projects such as website development, web applications, and other digital solutions that help non-profits achieve their mission. We do not accept projects for commercial or for-profit purposes.",
    value: "item-1",
  },
  {
    question: "Who is eligible to apply for Code for Charity?",
    answer:
      "Any registered non-profit, NGO, or social good organization—national or international—can apply for support through Code for Charity. If the organization is not registered, we can still consider the application on a case-by-case basis.",
    value: "item-2",
  },
  {
    question: "Is Code for Charity really free?",
    answer:
      "Yes! Code for Charity provides pro-bono (free) technical services to eligible non-profit organizations. There are no hidden charges. However, we cannot fund the hosting or domain costs for your project. You might need to cover those expenses. However, we can help you with free hosting on case by case basis.",
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
      "Simply fill out the application form linked below. Our team will review your submission and contact you for further discussion.",
    value: "item-5",
  },
  {
    question: "Can I volunteer as a developer or designer?",
    answer:
      "Absolutely! We welcome volunteers who are passionate about using their skills for social good. Please reach out via email or the form on our Contact Us page. We recommend you to fill out the form available at the home page by clicking button labeled as 'Join our community'.",
    value: "item-6",
  },
  {
    question: "What do the volunteers get?",
    answer:
      "Volunteers learn real-world project development by working on actual projects for non-profits. If their performance is good, they might get internship or job opportunities from one of our partner companies, including Fleckor Tech from India and Cornor Tech.",
    value: "item-7",
  },
];

function ContentSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display font-semibold text-xl md:text-2xl text-ink tracking-[-0.015em]">
        {title}
      </h2>
      <div className="space-y-4 text-base text-ink-muted leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function TestimonialBlock({
  name,
  role,
  paragraphs,
  websiteUrl,
  websiteLabel,
  videoUrl,
  videoTitle,
  reverse = false,
}: {
  name: string;
  role: string;
  paragraphs: string[];
  websiteUrl: string;
  websiteLabel: string;
  videoUrl: string;
  videoTitle: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-ink">{name}</h3>
          <p className="text-sm text-ink-muted">{role}</p>
        </div>
        <div className="space-y-4 text-base text-ink-muted leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p>
            Visit the website:{" "}
            <a
              href={websiteUrl}
              className="text-brand hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {websiteLabel}
            </a>
          </p>
        </div>
      </div>
      <div className="videoWrapper w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          src={videoUrl}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default function CodeForCharityPage() {
  return (
    <div className="flex flex-col">
      <main className="py-12 space-y-12">
        <Container className="space-y-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden>←</span>
            All programs
          </Link>

          <div className="relative w-full aspect-[21/9] max-h-96 overflow-hidden rounded-lg">
            <Image
              src={Banner}
              alt="Code for Charity program banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-10">
            <ContentSection
              title="What is code for charity?"
              paragraphs={[
                "Code for Charity is a flagship program of Coding for Social Good Nepal that provides pro-bono coding services to national and international non-profits. Our team of skilled developers and designers work closely with NGOs to develop websites, applications, and other digital solutions that help them achieve their goals.",
                "Our goal is to help non-profits leverage technology to increase their impact and reach more people. We believe that technology has the power to transform the way organizations work and help them achieve their mission more effectively.",
              ]}
            />

            <ContentSection
              title="How to apply?"
              paragraphs={[
                "If you are a non-profit organization looking for technical support, we would love to hear from you! Please fill out the form below to tell us more about your organization and the project you need help with. Our team will review your application and get back to you as soon as possible.",
                "If you are a developer or designer interested in volunteering with Code for Charity, please reach out to us at contact@cosognepal.org or fill the form available at about us page. We are always looking for talented individuals who are passionate about using their skills for social good.",
              ]}
            />

            <ContentSection
              title="Why volunteer?"
              paragraphs={[
                "Volunteering with Code for Charity is a great way to use your skills for social good and make a positive impact in the world. By volunteering with us, you will have the opportunity to work on real-world projects that help non-profits achieve their goals and make a difference in the lives of others.",
                "You'll also get a chance to learn from professionals, get your code reviewed, network with other developers, and add this experience to your resume. We'll provide you with the support, resources, and a letter of recommendation to help you succeed in your career.",
              ]}
            />

            <div className="bg-paper border border-rule rounded-lg p-6 md:p-8 space-y-5">
              <div className="space-y-2">
                <h2 className="font-display font-semibold text-xl md:text-2xl text-ink tracking-[-0.015em]">
                  Apply or get involved
                </h2>
                <p className="text-base text-ink-muted leading-relaxed">
                  If you represent a nonprofit and need technical support, use our
                  project application form. If you want to contribute as a
                  volunteer, use the membership form or contact us directly.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href={NONPROFIT_FORM_URL} size="lg" target="_blank" rel="noreferrer">
                  Nonprofit interest form
                </Button>
                <Button
                  href={APP_ROUTES.GET_INVOLVED.VOLUNTEER}
                  variant="secondary"
                  size="lg"
                >
                  Volunteer with us
                </Button>
                <Button href={APP_ROUTES.CONTACT} variant="secondary" size="lg">
                  Contact us
                </Button>
              </div>
            </div>

            <div className="bg-surface border border-rule rounded-lg p-6 md:p-8 space-y-4">
              <h2 className="font-display font-semibold text-xl text-ink">
                Web Development Program
              </h2>
              <p className="font-semibold text-ink">
                An Educational Initiative Under Code for Charity
              </p>
              <p className="text-base text-ink-muted leading-relaxed">
                The Web Development Program is one of the educational initiatives
                under Code for Charity, designed to teach school students (Grades
                8–12) web development through hands-on, real-world projects.
                Over 2 weeks of online learning, students build actual school
                websites while gaining practical web development skills.
              </p>
              <Button href="/programs/web-development-wordpress" size="lg">
                View Program Details
              </Button>
            </div>
          </div>

          <SectionRule />

          <section className="space-y-8">
            <h2 className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
              Our Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/programs/sustainable-actions-afrika"
                className="group border border-rule rounded-lg p-6 hover:border-brand transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-brand transition-colors">
                  Sustainable Actions Afrika
                </h3>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                  A pro-bono website for a Cameroon-based nonprofit promoting
                  sustainable development and environmental conservation in Africa.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand mt-4">
                  View project <span aria-hidden>→</span>
                </span>
              </Link>
              <Link
                href="/programs/nabn-nepal-website"
                className="group border border-rule rounded-lg p-6 hover:border-brand transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-brand transition-colors">
                  National Adolescent Boys&apos; Network Nepal
                </h3>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                  A website for NABN Nepal, built in collaboration with Technify
                  Club at Duke University.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand mt-4">
                  View project <span aria-hidden>→</span>
                </span>
              </Link>
            </div>
          </section>

          <SectionRule />

          <section className="space-y-10">
            <h2 className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
              Testimonials
            </h2>

            <TestimonialBlock
              name="Peter Nfon"
              role="Founder, Sustainable Actions Afrika"
              paragraphs={[
                "Sustainable Actions Afrika is a non-profit organization based in Cameroon that works to promote sustainable development and environmental conservation in Africa.",
                "We developed their website under the Code for Charity program. This is the video of Mr. Peter Nfon, the founder and CEO of the organization, sharing his experience with the team.",
              ]}
              websiteUrl="https://sustainableactionsafrika.org/"
              websiteLabel="https://sustainableactionsafrika.org/"
              videoUrl="https://www.youtube.com/embed/Dry5hBqGH9o?si=hDgPJkqNK-8tbK_h"
              videoTitle="Testimonial from Peter Nfon, Founder of Sustainable Actions Afrika"
            />

            <TestimonialBlock
              name="Ghanashyam Bishwakarma"
              role="President, National Adolescent Boys' Network Nepal"
              paragraphs={[
                "NABN Nepal is a network founded with the primary objective of ensuring the comprehensive rights of children and adolescents, advocating for gender equality, ending gender-based violence, and empowering the active participation of adolescents in these efforts.",
                "Our team, in collaboration with Technify Club of Duke University helped them build their online presence. This is the video of Mr. Ghanashyam Bishwakarma, the president of the organization, sharing his experience with the team.",
              ]}
              websiteUrl="https://nabnnepal.org/"
              websiteLabel="https://nabnnepal.org/"
              videoUrl="https://www.youtube.com/embed/qJdMG6zLY3U?si=kbDQ5XR3i_82Mv1U"
              videoTitle="Testimonial from Ghanashyam Bishwakarma, President of NABN Nepal"
              reverse
            />
          </section>

          <SectionRule />

          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
                Our Partners
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                Outstanding graduates will be offered internship opportunities
                with our partner companies, providing valuable industry
                experience and career growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 items-center">
              <a
                href="https://fleckor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="https://fleckor.com/wp-content/uploads/2023/07/Tech-3-1.png"
                  alt="Fleckor Tech India"
                  width={250}
                  height={150}
                  className="h-16 w-auto object-contain"
                />
              </a>
              <a
                href="https://www.cornortech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="https://www.cornortech.com/logo.png"
                  alt="Cornor Tech"
                  width={250}
                  height={150}
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>
          </section>
        </Container>
      </main>

      <div className="pb-12">
        <Container>
          <FAQ data={FAQ_ITEMS} />
        </Container>
      </div>

      <CTABanner
        heading="Do you need help with a technical project?"
        subtext="We are here to help! Fill out the form."
        cta={{
          label: "Access the form",
          href: NONPROFIT_FORM_URL,
          external: true,
        }}
      />
    </div>
  );
}
