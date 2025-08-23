import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosog Nepal || Contact",
  description:
    "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
  metadataBase: new URL("https://cosognepal.org/"),
  openGraph: {
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
    emails: "contact@cosognepal.com",
    phoneNumbers: "+977 9863196247",
  },
  twitter: {
    card: "summary",
    site: "@cosognepal",
    title: "Cosog Nepal || Contact",
    description:
      "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
  },
  icons: [{ url: "/favicon.ico", sizes: "any" }],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="pt-5"> {children} </main>;
}
