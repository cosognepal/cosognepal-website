import type { Metadata } from "next";

import { APP_ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Donate",
  description:
    "Support Cosog Nepal's mission to bring computer science education and charitable coding to students across Nepal.",
  path: APP_ROUTES.DONATE,
});

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
