import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Teach a workshop | Cosog Nepal",
  description:
    "Share your expertise by teaching a workshop with Cosog Nepal.",
};

export default function TeachPage() {
  return (
    <main className="py-12">
      <Container size="narrow" className="space-y-6">
        <SectionHeading as="h1">Teach a workshop</SectionHeading>
        <p className="text-muted leading-relaxed">
          Industry professionals, educators, and experienced students can teach
          workshops with Cosog Nepal — from Git and open source to career panels
          and hands-on coding sessions.
        </p>
        <p className="text-muted leading-relaxed">
          Workshops are delivered in schools, colleges, and online. We handle
          logistics, promotion, and student outreach; you bring the expertise.
          Sessions typically run 1–3 hours and can be one-off or part of a
          series.
        </p>
        <p className="text-muted leading-relaxed">
          Topics we are especially interested in: web development, open source
          contribution, CS career paths, digital safety, and project-based
          learning. If you have another idea, we would love to hear it.
        </p>
        <Button href="mailto:contact@cosognepal.org" size="lg">
          Propose a workshop
        </Button>
      </Container>
    </main>
  );
}
