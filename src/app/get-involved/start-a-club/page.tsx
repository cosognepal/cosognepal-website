import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start a CS club at your school | Cosog Nepal",
  description:
    "Resources and support to launch a Computer Science club at your secondary or high school in Nepal.",
};

export default function StartAClubPage() {
  return (
    <main className="py-12">
      <Container size="narrow" className="space-y-6">
        <SectionHeading as="h1">
          Start a CS club at your school
        </SectionHeading>
        <p className="text-muted leading-relaxed">
          Computer Science clubs give students a space to explore technology
          beyond the classroom — through workshops, peer projects, hackathons,
          and connections with industry mentors. Cosog Nepal helps schools
          launch and sustain CS clubs from grade 9 onwards.
        </p>
        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-near-black">
            How it works
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-muted">
            <li>
              Reach out to us at contact@cosognepal.org or through the form
              below.
            </li>
            <li>
              We schedule an awareness session or club kickoff workshop at your
              school.
            </li>
            <li>
              Student leaders receive resources, mentorship, and access to our
              volunteer network.
            </li>
            <li>
              Your club joins a national community of young technologists
              connected through Cosog Nepal.
            </li>
          </ol>
        </section>
        <p className="text-muted leading-relaxed">
          Teachers and administrators are welcome to initiate the process.
          Students can also reach out directly — we will coordinate with your
          school.
        </p>
        <Button href="https://forms.gle/nKwtAMG2Q4rL57QW7" size="lg">
          Request club support
        </Button>
      </Container>
    </main>
  );
}
