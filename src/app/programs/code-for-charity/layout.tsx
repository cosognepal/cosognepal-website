import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code for Charity | Cosog Nepal",
  description:
    "Code for Charity is a flagship programme of Coding for Social Good Nepal that provides pro-bono coding services to national and international nonprofits.",
  openGraph: {
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@cosognepal",
    title: "Code for Charity | Cosog Nepal",
    description:
      "Pro-bono web development for nonprofits in Nepal and abroad.",
  },
};

export default function CodeForCharityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
