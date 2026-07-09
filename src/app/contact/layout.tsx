import type { Metadata } from "next";

import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Cosog Nepal about CS clubs, volunteering, partnerships, or Code for Charity projects.",
  path: APP_ROUTES.CONTACT,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
