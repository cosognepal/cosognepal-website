import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partner with us | Cosog Nepal",
  description:
    "Partner with Cosog Nepal as a nonprofit, school, sponsor, or industry organization.",
};

export default function PartnerPage() {
  return (
    <main className="py-12">
      <Container size="narrow" className="space-y-6">
        <SectionHeading as="h1">Partner with us</SectionHeading>
        <p className="text-muted leading-relaxed">
          Cosog Nepal partners with schools, nonprofits, industry organizations,
          and funders who share our mission of democratizing computer science
          education in Nepal.
        </p>
        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-near-black">
            Ways to partner
          </h2>
          <ul className="space-y-3 text-muted">
            <li>
              <strong className="text-near-black">Schools</strong> — Host
              awareness sessions, sponsor a CS club, or co-design workshops for
              your students.
            </li>
            <li>
              <strong className="text-near-black">Nonprofits</strong> — Apply
              for a free website or digital tool through Code for Charity.
            </li>
            <li>
              <strong className="text-near-black">Industry</strong> — Provide
              mentorship, internship pathways, or in-kind support for our skills
              programs.
            </li>
            <li>
              <strong className="text-near-black">Funders</strong> — Support
              outreach travel, workshop materials, and fellowship programs.
            </li>
          </ul>
        </section>
        <p className="text-muted leading-relaxed">
          For Code for Charity project applications, use our dedicated nonprofit
          intake form. For all other partnerships, contact us directly.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform"
            size="lg"
            target="_blank"
            rel="noreferrer"
          >
            Nonprofit application
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}
