import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Summer Program | Coding for Social Good Nepal",
    description: `Coding for Social Good Nepal Summer Program is a 16-week learning fellowship for high school students and recent graduates in Nepal.
                 Students learn environment and computer science fundamentals, build projects in teams, and present outcomes in a public showcase.`,
    metadataBase: new URL("https://cosognepal.org/"),
    openGraph: {
        images: [{
            url: "/assets/images/Events/Empactathon/empactathon_banner.png",
            width: 1200,
            height: 680,
            type: "image/png"
        }],
        emails: "contact@cosognepal.com",
    },
    twitter: {
        card: "summary",
        site: "@cosognepal",
        title: "Summer Program | Coding for Social Good Nepal",
        description: `Coding for Social Good Nepal Summer Program is a 16-week learning fellowship focused on environment and computer science for students in Nepal.`,
        images: [{
            url: "/assets/images/Events/Empactathon/empactathon_banner.png",
            width: 1200,
            height: 680,
            type: "image/png"
        }],
    },
    icons: [{ url: "/empactfav256.ico", sizes: "any" }]
};

export default function SummerProgramLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
