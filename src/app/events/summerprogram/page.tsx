import EventDescripter from "@/components/ui/EventAbout";
import Landing from "./_components/Landing";
import { GuestsSection } from "../techafterten/_components/Guests";
import TimeLine from "../techafterten/_components/TimeLine";
import FAQ from "../../_components/FAQ";
import { PrizeSection } from "./_components/Prizes";
import { cn } from "@/lib/utils";

const SummerProgramPage = () => {
    return <div className="space-y-section">
        <Landing />

        {/* About */}
        <EventDescripter
            eventTitle="About the Program"
            description={[
                `Coding for Social Good Nepal Summer Program is a 16-week (4-month) learning fellowship for high school students and recent graduates (below 20) in Nepal who want to solve real environmental problems using technology.`,
                `The program is designed for around 60 students, with priority for students from public schools and rural regions. Fellows learn environmental literacy and practical computer science in beginner-friendly tracks, then build real prototypes in small teams with mentor support.`,
                `By the end of the program, students present their work in a public showcase, strengthen communication and teamwork skills, and gain pathways for further learning, projects, and future STEM opportunities. The program is flexible and mostly online, so students can participate alongside school.`,
            ]}
            className={{
                container: "w-full max-w-content mx-auto px-standard"
            }}
        />

        {/* Sponsors section from empactathon kept for future reference.
            <SupportersSection ... />
        */}


        {/* Mentors */}
        <GuestsSection
            sectionTitle="Mentors"
            className={{
                notPublicYetCard: "bg-gradient-to-br to-empactathon-primary/45 min-h-[450px] rounded-md w-full",
                sectionContainer: {
                    container: "w-full max-w-content mx-auto px-standard",
                },
            }}
            guestData={[
                {
                    id: "1",
                    notPublicYet: true,
                    placeholder: <p>Mentor announcements coming soon</p>,
                },
                {
                    id: "2",
                    notPublicYet: true,
                    placeholder: <p>Mentor announcements coming soon</p>,
                },
                {
                    id: "3",
                    notPublicYet: true,
                    placeholder: <p>Mentor announcements coming soon</p>,
                },
                {
                    id: "4",
                    notPublicYet: true,
                    placeholder: <p>Mentor announcements coming soon</p>,
                },
            ]}
        />

        {/* Timeline */}
        <TimeLine
            timelineTitle="General Timeline"
            className={{
                iconContainer: "w-10 h-10 bg-empactathon-bg-green text-black-mid",
                container: "px-standard w-full max-w-content mx-auto"
            }}
            tasks={[
                {
                    description: "Nationwide applications begin for mentees.",
                    icon: "star",
                    title: "April - Mentee application opens",
                },
                {
                    description: "Application form closes and review process starts.",
                    icon: "speaker",
                    title: "May - Mentee application closes",
                },
                {
                    description: "Selected students are notified and mentor updates are announced.",
                    icon: "speaker",
                    title: "May - Selection notices and mentors announcement",
                },
                {
                    description: "Workshops, team formation, and project phase begin.",
                    icon: "speaker",
                    title: "June - Program starts",
                },
                {
                    description: "Teams present outcomes and the cohort wraps up with a final showcase.",
                    icon: "description",
                    title: "September - Program concludes",
                },
            ]}
        />

        {/* Program highlights cards */}
        <PrizeSection
            sectionComp={
                <div className={cn(
                    "title text-heading font-bold  text-center",
                )}>
                    <span className="font-display text-empactathon-dark">
                        Our program at a glance
                    </span>
                    <br />
                    <span className="font-display bg-yellow-100 p-1 px-3 text-empactathon-dark">
                        Learn. Build. Showcase.
                    </span>
                </div >
            }
            prizeData={
                [
                    {
                        prizeTitle: "students",
                        prizeDescription: <div className={"text-empactathon-dark text-6xl md:text-7xl font-extrabold leading-none"}>
                            60
                        </div>,
                        prizeIcon: "students"
                    },
                    {
                        prizeTitle: "projects",
                        prizeDescription: <div className={"text-empactathon-dark text-6xl md:text-7xl font-extrabold leading-none"}>
                            6
                        </div>,
                        prizeIcon: "projects"
                    },
                    {
                        prizeTitle: "learning",
                        prizeDescription: <div className={"text-empactathon-dark text-6xl md:text-7xl font-extrabold leading-none"}>
                            ∞
                        </div>,
                        prizeIcon: "trophy"
                    },

                ]}
            className={{
                section: {
                    container: "w-full min-h-screen px-standard max-w-content mx-auto bg-gradient-to-br from-white to-empactathon-primary/25 flex flex-col justify-center items-center space-y-section",
                    title: "text-black-dark"
                },
            }}

        />

        {/* CTA */}
        <section className="w-full max-w-content mx-auto px-standard">
            <div className="rounded-md bg-gradient-to-br from-white to-empactathon-primary/20 p-standard md:p-block text-center space-y-3">
                <h2 className="text-2xl font-bold text-empactathon-dark">Excited to join the Summer Program?</h2>
                <p className="text-black-mid">
                    If you are motivated to learn and build with a supportive community, we would love to see your application.
                </p>
                <a
                    className="inline-block cta px-8 py-3 bg-empactathon-primary text-white rounded-md uppercase font-bold hover:scale-[1.02] transition-transform duration-200"
                    href="https://instagram.com/cosognepal"
                    target="_blank"
                    rel="noreferrer"
                >
                    Apply Now
                </a>
            </div>
        </section>

        {/* FAQ */}
        <FAQ
            className={{
                accordionItem: "hover:bg-empactathon-bg-green"
            }}
            data={[
                {
                    question: "Who can apply to this summer program?",
                    answer:
                        "Students below 20 years old who are currently in high school or have recently graduated can apply.",
                    value: "item-1",
                },
                {
                    question: "Do you prioritize specific applicants?",
                    answer:
                        "Yes. We prioritize students from public schools and rural regions to make access to STEM learning more equitable.",
                    value: "item-2",
                },
                {
                    question: "Do I need prior programming skills?",
                    answer:
                        "No prior programming experience is required. We welcome students who are eager to learn, put in effort, and are curious about how technology works.",
                    value: "item-3",
                },
                {
                    question: "How long is the program and what do students do?",
                    answer:
                        "The program runs for 16 weeks. Students go through workshops, work in teams on environment + computer science projects, and present final prototypes in a public showcase.",
                    value: "item-4",
                },
                {
                    question: "Is the program paid?",
                    answer:
                        "No. It is completely free to apply and participate, and essential student expenses are covered by the program.",
                    value: "item-5",
                },
                {
                    question: "Can I participate alongside my school schedule?",
                    answer:
                        "Yes. The program is flexible and mostly online, so students can join while continuing school, with occasional in-person events when possible.",
                    value: "item-6",
                },
                {
                    question: "What will I gain after finishing?",
                    answer:
                        "You will gain practical project experience, mentor feedback, stronger environmental and technical understanding, and a portfolio-ready showcase output.",
                    value: "item-7",
                },
            ]}
        />

    </div >
};

export default SummerProgramPage;
