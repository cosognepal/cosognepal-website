import Image from "next/image";

import SectionHeading from "@/components/SectionHeading";
import FocusAreaCard from "@/components/FocusAreaCard";
import ProgramCard from "@/components/ProgramCard";
import CTABanner from "@/components/CTABanner";
import Container from "@/components/ui/Container";

import { getFocusAreas, getPrograms } from "@/content";
import { APP_ROUTES } from "@/lib/routes";
import Banner from "@/assets/programs_banner.jpg";

export default function ProgramsPage() {
  const focusAreas = getFocusAreas();
  const programs = getPrograms();

  return (
    <>
      <main className="py-12 space-y-16">
        <Container className="space-y-8">
          <div className="relative w-full aspect-[21/9] max-h-96 overflow-hidden rounded-lg">
            <Image
              src={Banner}
              alt="Cosog Nepal programs"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <SectionHeading as="h1">Our Programs</SectionHeading>
            <p className="text-muted max-w-2xl">
              Cosog Nepal organizes work across three permanent focus areas.
              Each program fits into exactly one area and has its own timeline
              and status.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="font-display font-bold text-xl text-near-black">
              Focus areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area) => (
                <FocusAreaCard key={area.slug} focusArea={area} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display font-bold text-xl text-near-black">
              All programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </section>
        </Container>
      </main>

      <CTABanner
        heading="Want to shape CS education in Nepal?"
        subtext="Volunteer, start a club, or partner with us."
        cta={{
          label: "Get involved",
          href: APP_ROUTES.GET_INVOLVED.VOLUNTEER,
        }}
      />
    </>
  );
}
