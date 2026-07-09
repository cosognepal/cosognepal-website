import type { Metadata } from "next";

import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Programs",
  description:
    "Explore Cosog Nepal programs — CS awareness in schools, E-STEM Summer Camp, Code for Charity builds, and skills fellowships.",
  path: APP_ROUTES.PROGRAMS,
});

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
