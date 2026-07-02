import type { Metadata } from "next";
import SessionsPageContent from "@/app/events/summerprogram/_components/SessionsPageContent";
import { SESSIONS_PAGE_TITLE } from "@/app/events/summerprogram/_data/sessions";

export const metadata: Metadata = {
  title: `${SESSIONS_PAGE_TITLE} | Summer Camp`,
  description:
    "Every session from the Coding for Social Good Nepal Summer Camp — recorded and free for anyone to learn from.",
};

export default function SessionsPage() {
  return <SessionsPageContent />;
}
