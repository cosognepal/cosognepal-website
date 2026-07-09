import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Volunteer with us | Cosog Nepal",
  description:
    "Join Cosog Nepal as a volunteer and help spread computer science education across Nepal.",
};

export default function VolunteerPage() {
  return (
    <main className="py-12">
      <Container size="narrow" className="space-y-6">
        <SectionHeading as="h1">Volunteer with us</SectionHeading>
        <p className="text-muted leading-relaxed">
          Cosog Nepal runs on the energy of student and professional volunteers
          who believe every Nepali student deserves access to computer science
          education. As a volunteer, you can lead awareness sessions, mentor CS
          club members, contribute to Code for Charity builds, or support
          operations behind the scenes.
        </p>
        <p className="text-muted leading-relaxed">
          We welcome volunteers at all skill levels. Whether you are an
          experienced developer, a university student, or a high school graduate
          passionate about education, there is a role for you. Training and
          mentorship are provided for outreach and workshop roles.
        </p>
        <p className="text-muted leading-relaxed">
          Ready to join? Fill out our membership form and our team will reach
          out with next steps.
        </p>
        <Button
          href="https://forms.gle/euosQkdUW45P8mYc9"
          size="lg"
          target="_blank"
          rel="noreferrer"
        >
          Apply to volunteer
        </Button>
      </Container>
    </main>
  );
}
