import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Reports & Transparency | Cosog Nepal",
  description:
    "Legal status, registration, and transparency information for Coding for Social Good Nepal.",
};

export default function ReportsPage() {
  return (
    <main className="py-12">
      <Container size="narrow" className="space-y-8">
        <SectionHeading as="h1">Reports &amp; Transparency</SectionHeading>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-xl text-near-black">
            Legal status
          </h2>
          <p className="text-muted leading-relaxed">
            Coding for Social Good Nepal (Cosog Nepal) is a registered
            not-for-profit organization in Nepal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-xl text-near-black">
            Governance
          </h2>
          <p className="text-muted leading-relaxed">
            Cosog Nepal is led by a student-driven executive board and founding
            members who oversee programs, partnerships, and financial
            stewardship. We are committed to transparent reporting for donors,
            partners, and the communities we serve.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-xl text-near-black">
            Annual reports
          </h2>
          <p className="text-muted leading-relaxed">
            Annual reports and audited financial statements will be published
            here as they become available. For immediate inquiries about our
            finances or governance, contact{" "}
            <a
              href="mailto:contact@cosognepal.org"
              className="text-accent hover:underline"
            >
              contact@cosognepal.org
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-xl text-near-black">
            Financial summary
          </h2>
          <p className="text-muted leading-relaxed">
            Cosog Nepal operates primarily through volunteer contributions and
            in-kind support from partners. Program costs for workshops, outreach
            travel, and charitable builds are funded through donations and
            sponsorships. Detailed financial summaries will be added to this
            page pending finalization of our annual reporting cycle.
          </p>
        </section>
      </Container>
    </main>
  );
}

