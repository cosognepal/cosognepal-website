import type { Metadata } from "next";

import { getPress } from "@/content";
import PressList from "@/components/PressList";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Press & Features",
  description:
    "Media coverage and press features about Cosog Nepal and our work in CS education.",
  path: APP_ROUTES.ABOUT_PRESS,
});

export default function PressPage() {
  const press = getPress();

  return (
    <main className="py-12">
      <Container className="space-y-8">
        <SectionHeading as="h1">Press &amp; Features</SectionHeading>
        <p className="text-muted max-w-2xl">
          Cosog Nepal has been featured in national and international media for
          our work bringing computer science education to schools and building
          technology for social good.
        </p>
        <PressList items={press} />
      </Container>
    </main>
  );
}
