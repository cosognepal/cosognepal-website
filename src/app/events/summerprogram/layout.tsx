import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Summer Camp | Coding for Social Good Nepal",
    description: `A fully funded, mostly online 16-week fellowship in Nepal: environmental literacy, hands-on CS, team projects, and a showcase — mentored by industry leaders (e.g. embedded systems at Yatri Motorcycles) and the tech community.`,
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
        title: "Summer Camp | Coding for Social Good Nepal",
        description: `16-week fellowship: environment + CS, mentors from industry (e.g. Yatri Motorcycles), team projects, showcase — mostly online for students in Nepal.`,
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
    return <>{children}</>;
}
