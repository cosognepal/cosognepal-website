import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Program | Code for Charity",
  description:
    "A hands-on, impact-driven web development program for students in Grades 8–12. Over 2 weeks of online learning, students build real school websites while gaining practical web development skills. Learn WordPress, Elementor, CMS, SEO, and more.",
  metadataBase: new URL("https://cosognepal.org/programs/code-for-charity/web-development"),
  openGraph: {
    title: "Web Development Program | Code for Charity | Cosog Nepal",
    description:
      "A hands-on, impact-driven web development program for students. Build real school websites while learning WordPress, Elementor, and web development fundamentals.",
    url: "https://cosognepal.org/programs/code-for-charity/web-development",
    siteName: "Coding for Social Good Nepal",
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cosognepal",
    title: "Web Development Program | Code for Charity",
    description:
      "A hands-on web development program for students. Build real websites, gain practical skills, and make an impact.",
    images: ["/assets/about_banner.png"],
  },
  icons: [{ url: "/favicon.ico", sizes: "any" }],
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
