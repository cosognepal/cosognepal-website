import type { Metadata } from "next";
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
  title: "Summer Camp | Coding for Social Good Nepal",
  description:
    "Coding for Social Good Nepal Summer Camp is a 16-week fellowship for students in Nepal to learn environmental literacy, practical computer science, and build real projects.",
  metadataBase: new URL("https://cosognepal.org/"),
  openGraph: {
    images: [
      {
        url: "/assets/images/Events/Empactathon/empactathon_banner.png",
        width: 1200,
        height: 680,
        type: "image/png",
      },
    ],
  },
  icons: [{ url: "/empactfav256.ico", sizes: "any" }],
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
        {children}
      </body>
    </html>
  );
}
