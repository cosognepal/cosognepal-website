import type { Metadata } from "next";

import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Cosog Nepal — a youth-led organization bringing computer science education and charitable coding to schools across Nepal.",
  path: APP_ROUTES.ABOUT,
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
