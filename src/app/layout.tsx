import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import NavigationProgress from "@/components/NavigationProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "./_components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import SkipLink from "@/components/SkipLink";
import { body, display } from "@/lib/fonts";
import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  PRIORITY_SEO_PATHS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `${SITE_NAME} | Computer Science Education in Nepal`,
    description: DEFAULT_DESCRIPTION,
    path: PRIORITY_SEO_PATHS.home,
    keywords: [
      "Cosog Nepal",
      "Coding for Social Good Nepal",
      "computer science education Nepal",
      "CS clubs Nepal",
      "Code for Charity",
      "E-STEM Summer Camp",
    ],
  }),
  metadataBase: new URL("https://cosognepal.org"),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_TAGLINE, url: "https://cosognepal.org" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [{ url: "/favicon.ico", sizes: "any" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} font-body antialiased`}
      >
        <SkipLink />
        <Suspense fallback={null}>
          <NavigationProgress />
          <ScrollToTop />
        </Suspense>
        <AnnouncementBanner
          message="Applications for Summer Camp are now closed."
          ctaText="Read more"
          ctaHref="https://summercamp.cosognepal.org"
          deadline="2026-05-20T23:59:59"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
