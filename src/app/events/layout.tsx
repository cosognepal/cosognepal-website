import type { Metadata } from "next";

import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Past Events",
  description:
    "Past events and sessions organized by Cosog Nepal, including CS awareness programs and community workshops.",
  path: APP_ROUTES.EVENTS,
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
