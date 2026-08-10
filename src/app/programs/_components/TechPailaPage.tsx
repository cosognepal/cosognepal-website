import Link from "next/link";
import { MapPinned, Languages, Compass, Server } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatBar from "@/components/StatBar";
import SectionRule from "@/components/SectionRule";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/app/_components/FAQ";
import JsonLd from "@/components/JsonLd";
import {
  educationalProgramJsonLd,
  webPageJsonLd,
  PRIORITY_SEO_PATHS,
} from "@/lib/seo";
import { TECH_PAILA_URL } from "@/lib/routes";
import type { Stat } from "@/content/types";

function TechPailaLogo({ className }: { className?: string }) {
  return (
    <svg
      width="560"
      height="180"
      viewBox="0 0 560 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TechPaila logo"
      className={className}
    >
      <defs>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap');.wordmark{font-family:'Rubik','Trebuchet MS',sans-serif;font-weight:700;font-size:74px;letter-spacing:-1.5px}`}</style>
        <g id="foot" fill="#FFFFFF">
          <ellipse cx="12" cy="20" rx="8.5" ry="11" />
          <ellipse cx="12" cy="38" rx="6" ry="8" />
          <circle cx="5.5" cy="8" r="2" />
          <circle cx="9.5" cy="5" r="2.3" />
          <circle cx="14" cy="5" r="2.3" />
          <circle cx="18" cy="8.5" r="2" />
        </g>
      </defs>
      <rect x="22" y="98" width="34" height="46" rx="7" fill="#16457A" />
      <rect x="66" y="68" width="34" height="76" rx="7" fill="#16457A" />
      <rect x="110" y="38" width="34" height="106" rx="7" fill="#E8A33D" />
      <use href="#foot" transform="translate(116,48) scale(0.92)" />
      <text x="176" y="118" className="wordmark">
        <tspan fill="#16457A">Tech</tspan>
        <tspan fill="#E8A33D">Paila</tspan>
      </text>
    </svg>
  );
}

const STATS: Stat[] = [
  { value: "537", label: "Schools mapped", order: 1 },
  { value: "All 7", label: "Provinces covered", order: 2 },
  { value: "5,000+", label: "Students to reach in 5 years", order: 3 },
];

const FEATURES = [
  {
    icon: MapPinned,
    title: "Interactive map with recommendations",
    description:
      "Click your province, then your district and municipality, and schools appear. You can filter without the map as well.",
  },
  {
    icon: Languages,
    title: "Bilingual: English and Nepali",
    description:
      "Every single information exists in both Nepali and English languages, and the entire interface switches with one tap.",
  },
  {
    icon: Compass,
    title: "Built for rural students",
    description:
      "Designed to be legible on a low-end phone, on an unreliable connection, accessible to people using tools like this for the first time.",
  },
  {
    icon: Server,
    title: "Recommendation System",
    description:
      "Pick a program and share your location, and TechPaila ranks the nearest schools with a clear reason for each result.",
  },
];

const DATA_ROWS = [
  { label: "Total schools", value: "537" },
  { label: "Computer Engineering", value: "109 schools" },
  { label: "Grade range", value: "9 through 12" },
  { label: "Cost to students", value: "Almost free*" },
  { label: "Data source", value: "Government program implementation booklet" },
];

const FAQS = [
  {
    question: "What is TechPaila?",
    answer:
      "TechPaila is an interactive map of 500+ government technical and vocational secondary schools across all 7 provinces of Nepal. It helps students finishing BLE and their families find free technical programs — computer engineering, civil, electrical, plant science, animal science, and agriculture — in one place.",
    value: "item-1",
  },
  {
    question: "Who is this for?",
    answer:
      "Students in Grade 8 deciding what to study after BLE, their parents, and teachers. We had rural students most in mind — the ones who have the interest but no way to find out the option exists.",
    value: "item-2",
  },
  {
    question: "Are these schools really free?",
    answer:
      "Yes. Nepal's government funds technical streams in hundreds of secondary schools. The programs start from Grade 9, run through Grade 12, and cost (almost) nothing to the student. Some schools may charge a small fee. It's better to ask the school directly.",
    value: "item-3",
  },
  {
    question: "Where does the data come from?",
    answer:
      "The 537 school entries were transcribed by hand from a government program implementation booklet. We're working toward getting current data directly from the Ministry of Education and verifying entries with volunteers on the ground.",
    value: "item-4",
  },
  {
    question: "A school is missing or listed incorrectly, what do I do?",
    answer:
      "Write to us at contact@cosognepal.org with the school name, location, and any details you have. Ww will update the dataset.",
    value: "item-5",
  }
];

export default function TechPailaPage() {
  const path = PRIORITY_SEO_PATHS.techPaila;

  return (
    <main id="main-content" tabIndex={-1} className="space-y-12 py-12 outline-none">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "TechPaila",
            description:
              "537 government technical and vocational schools across Nepal, on one map — free, bilingual, built for rural students.",
            path,
          }),
          educationalProgramJsonLd({
            name: "TechPaila",
            description:
              "An interactive map of 537 government technical and vocational secondary schools across all 7 provinces of Nepal.",
            path,
          }),
        ]}
      />

      {/* Hero */}
      <Container className="space-y-8">
        <Link
          href="/focus/schools"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
        >
          <span aria-hidden>←</span>
          Schools & CS Clubs
        </Link>

        <div className="flex w-full items-center justify-center rounded-lg bg-paper px-8 py-10 md:py-14">
          <TechPailaLogo className="h-auto w-full max-w-lg" />
        </div>

        <div className="space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-muted">
            Running
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-near-black">
            TechPaila
          </h1>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            500+ government technical and vocational schools across Nepal on one interactive
            map built for the students who want to study technical subjects in grade 9 to 12.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            href={TECH_PAILA_URL}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open TechPaila
          </Button>
        </div>
      </Container>

      {/* Stat band */}
      <StatBar stats={STATS} />

      {/* Origin / Problem */}
      <Container className="space-y-8">
        <SectionRule />
        <section className="space-y-4">
          <h2 className="font-display font-bold text-xl text-near-black">
            Why TechPaila exists
          </h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            Nepal&rsquo;s government already funds technical streams in hundreds
            of secondary schools — computer engineering, civil, electrical, plant
            science, animal science, agriculture. They start from Grade 9 and
            they cost nothing. But the information about these schools sits in a
            government booklet, as a table in an annex, as a PDF. If you know the
            document number, you can find it. If you&rsquo;re a 14-year-old in a
            village who wants to learn to code, you never will — and neither will
            your parents or your teacher.
          </p>
          <p className="text-muted leading-relaxed max-w-3xl">
            Our founder only found his own school because someone happened to
            mention it. He got lucky. Studying there is a big part of why
            he&rsquo;s doing a computer science bachelor&rsquo;s now. Most
            students don&rsquo;t get that luck, and the schools sit there while
            the kids who&rsquo;d want them never hear the name.
          </p>
          <p className="text-muted leading-relaxed max-w-3xl">
            TechPaila puts every one of those 537 schools on a map — so finding
            the right school stops depending on who you happen to know.
          </p>
        </section>

        {/* Feature grid */}
        <SectionRule />
        <section className="space-y-6">
          <h2 className="font-display font-bold text-xl text-near-black">
            What it does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="border border-rule rounded-lg p-5 md:p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-wash">
                      <Icon className="h-5 w-5 text-brand" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-near-black">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Data table */}
        <SectionRule />
        <section className="space-y-6">
          <h2 className="font-display font-bold text-xl text-near-black">
            The dataset
          </h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            537 entries transcribed by hand from a government program
            implementation booklet. Plant science turned out to be the largest
            category by a wide margin, 204 schools, and agriculture-adjacent
            programs account for 251 of the 537.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl text-left text-sm">
              <thead>
                <tr className="border-b border-rule">
                  <th className="py-3 pr-6 font-semibold text-near-black">
                    Detail
                  </th>
                  <th className="py-3 font-semibold text-near-black">Value</th>
                </tr>
              </thead>
              <tbody>
                {DATA_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-rule/50">
                    <td className="py-3 pr-6 text-muted">{row.label}</td>
                    <td className="py-3 font-medium text-near-black">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <SectionRule />
        <FAQ data={FAQS} />
      </Container>

      {/* Closing CTA */}
      <CTABanner
        heading="Find your school"
        subtext="537 government technical schools across Nepal. Free, bilingual, no login required."
        cta={{
          label: "Open TechPaila",
          href: TECH_PAILA_URL,
          external: true,
        }}
      />
    </main>
  );
}
