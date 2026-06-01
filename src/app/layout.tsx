import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "./_components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding for Social Good Nepal | Cosog Nepal",
  description:
    "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
  metadataBase: new URL("https://cosognepal.org/"),
  openGraph: {
    images: [
      {
        url: "/assets/logo.png",
        width: 368,
        height: 368,
        type: "image/png",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
