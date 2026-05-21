import EventDescripter from "@/components/ui/EventAbout";
import prashantBhattaPhoto from "@/assets/images/SummerCamp/PrashantBhatta.jpeg";
import samikshaKhadkaPhoto from "@/assets/images/SummerCamp/SamikshaKhadka.jpeg";
import sarojRegmiPhoto from "@/assets/images/SummerCamp/SarojRegmi.jpeg";
import ashishPandeyPhoto from "@/assets/images/SummerCamp/AshishPandey.jpg";
import kailashPanthaPhoto from "@/assets/images/SummerCamp/KailashPantha.jpeg";
import bhishmaBhandariPhoto from "@/assets/images/SummerCamp/BhismaBhandari.png";
import Landing from "./_components/Landing";
import { GuestsSection } from "./_components/Guests";
import TimeLine from "./_components/TimeLine";
import FAQ from "./_components/FAQ";
import { PrizeSection } from "./_components/Prizes";
import BottomSectionNav from "./_components/BottomSectionNav";
import Footer from "./_components/Footer";
import SupportedBy from "./_components/SupportedBy";
import ProjectTracksSection from "./_components/ProjectTracks";
import OutcomesSection from "./_components/Outcomes";
import StayConnected from "./_components/StayConnected";
import { cn } from "@/lib/utils";
import { lora } from "@/lib/fonts";

const SummerProgramPage = () => {
    return <div className="space-y-section">
        <Landing />

        {/* About */}
        <section id="about" className="scroll-mt-24">
            <EventDescripter
                eventTitle="About the Program"
                description={[
                    `Cosog Nepal Summer Camp is a fully funded, 16-week online fellowship where up to 60 high school students and recent graduates across Nepal build real technology projects that tackle urgent environmental problems — wildfires, deforestation, air pollution, and more.`,
                    `Supported internationally by the North American Association for Environmental Education (NAAEE) and RTX Corporation, our summer camp doesn't require any programming experience. We start from zero — then pair you with the kind of industry mentorship most students in Nepal rarely get access to (including mentors like the embedded systems lead at Yatri Motorcycles, AI engineers, and software engineers).`,
                    `Completely free for students: participation costs nothing, project expenses are covered, and we work to support internet access challenges so cost or connectivity isn’t a barrier.`,
            
                ]}
                className={{
                    container: ` brk-1400:px-[calc((100%-1400px)/2)] px-standard
                            `
                }}
            />
        </section>

        <SupportedBy />

        {/* What you'll build */}
        <ProjectTracksSection id="what-youll-build" />

        {/* Mentors */}
        <section id="mentors" className="scroll-mt-24">
            <GuestsSection
                sectionTitle="Mentors"
                className={{
                    notPublicYetCard: "bg-gradient-to-br to-empactathon-primary/45 min-h-[450px] rounded-md w-full",
                    sectionContainer: {
                        container: "w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 ",
                    },
                }}
                guestData={[
                    {
                        id: "1",
                        name: "Prashant Bhatta",
                        image: prashantBhattaPhoto,
                        designation:
                            "Embedded systems lead, Yatri Motorcycles",
                        short_intro: [
                            "Prashant Bhatta is a Senior Embedded Systems Engineer at Yatri Motorcycles and the co-founder of SanoEngineer, where he focuses on creating STEM and electronics learning tools that demystify complex engineering for the next generation.",
                            "With over six years of experience in hardware architecture—from high-speed, multi-layer PCB design to the development of complex vehicle control units (VCUs)—he bridges the gap between high-level industrial engineering and accessible, hands-on education.",
                            "His work reflects a commitment to building robust, innovative technology while fostering a culture of curiosity and practical learning within the global engineering community.",
                        ],
                    },
                    {
                        id: "2",
                        name: "Samiksha Khadka",
                        image: samikshaKhadkaPhoto,
                        designation:
                            "Software engineer",
                        short_intro: [
                            "Samiksha Khadka is a multifaceted software engineer, tech content creator, and dedicated community builder bridging the gap between innovation and advocacy. As a co-founder of The Algorithm, she has been instrumental in fostering a thriving tech space for women, complemented by her prestigious role as a GitHub Campus Expert.",
                            "Her professional trajectory blends technical rigor with public impact, having served as a Research Assistant to a Member of Parliament and honing her analytical expertise within Equitech's Applied Data Lab. Deeply committed to the future of responsible technology, Samiksha is a vocal advocate for AI safety, security, and ethics.",
                            "She consistently shares her insights at major industry stages, including PyLadiesCon, Ubucon and AWS Community Day, championing a more inclusive and ethically grounded tech ecosystem. Through her work, she empowers the next generation of technologists to build with purpose and integrity.",
                        ],
                    },
                    {
                        id: "3",
                        name: "Saroj Regmi",
                        image: sarojRegmiPhoto,
                        designation:
                            "Web & mobile developer",
                        short_intro: [
                            "Saroj Regmi is a web and mobile application developer with over two years of experience as a project team lead in Nepal's one of the largest School Management Software.",
                            "He is also an open-source enthusiast exploring the depths of WebAssembly, Vim, and Linux. He has contributed to several command-line utilities and tools including tmux-sessionizer, hyprcursor etc., reflecting his passion for terminal-driven workflows and low-level tooling.",
                            "He also believes in serving the community by giving back to it, and has worked as IT head of COSOG Nepal for over a year.",
                        ],
                    },
                    {
                        id: "4",
                        name: "Ashish Pandey",
                        image: ashishPandeyPhoto,
                        designation:
                            "AI Researcher, IOE Pulchowk Campus",
                        short_intro: [
                            "Ashish is an AI practitioner and researcher focused on responsible AI, machine learning systems, and accessibility technology. He is pursuing Computer Engineering at Pulchowk Campus, Institute of Engineering, Nepal, and serves as an AI Research Intern, where he co-authored research on sociocultural bias in large language models for underrepresented languages.",
                            "His work extends further into responsible AI frameworks and the application of AI in high-stakes, real-world domains. Ashish has built AI-powered accessibility tools, multi-agent systems, and production-grade ML pipelines, with hands-on experience deploying systems on AWS, where he holds a Solutions Architect certification.",
                            "He has won multiple national hackathons and actively contributes to AI education and community-building initiatives across Nepal.",
                        ],
                    },
                    {
                        id: "5",
                        name: "Kailash Pantha",
                        image: kailashPanthaPhoto,
                        designation:
                            "AI Engineer",
                        short_intro: [
                            "Kailash Pantha is an AI Engineer dedicated to bridging the gap between theoretical research and real-world application. His expertise spans computer vision, embedded systems, and scalable software development, with a focus on solving complex challenges through innovative, data-driven approaches.",
                            "Driven by curiosity and a commitment to continuous learning, Kailash specializes in autonomous systems and multimodal AI. He is passionate about developing solutions that are both technically sophisticated and socially impactful.",
                            "Beyond technical execution, he is committed to fostering collaborative innovation and making emerging technologies more accessible to a global community.",
                        ],
                    },
                    {
                        id: "6",
                        name: "Bhishma Bhandari",
                        image: bhishmaBhandariPhoto,
                        designation:
                            "Research @IoT R&D Lab KU × Kyra Works",
                        short_intro: [
                            "Bhishma Bhandari is a final-year Computer Engineering student at Kathmandu University. He is a Research Intern at the IoT R&D Lab (KU × Kyra Works), where he develops a physics-based theft detection system using 3D volumetric analysis, depth estimation, and human tracking—eliminating the need for per-item training. His work focuses on real-time systems that combine computer vision, geometry, and efficient inference.",
                            "He enjoys building AI and ML systems and has worked on projects involving computer vision, transformer models, and web apps. He has experience across the ML pipeline, from dataset creation and annotation to deployment and evaluation.",
                            "With a strong passion for teaching and education, he has taught school students, supervised academic projects, and conducted machine learning workshops at school and college levels. Outside of work, he enjoys exploring emerging technologies, mentoring peers, and working on meaningful, impactful ideas.",
                        ],
                    },
                ]}
            />
        </section>

        {/* Timeline */}
        <section id="general-timeline" className="scroll-mt-24">
            <TimeLine
                timelineTitle="General Timeline"
                className={{
                    iconContainer: "w-10 h-10 bg-empactathon-bg-green text-black-mid",
                    container: "brk-1400:px-0 px-standard w-full max-w-[1400px] mx-auto"
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
        </section>

        {/* Program highlights cards */}
        <PrizeSection
            sectionComp={
                <div className={cn(
                    "title text-heading font-bold  text-center",
                )}>
                    <span className={`${lora.className} text-empactathon-dark`}>
                        Our program at a glance
                    </span>
                    <br />
                    <span className={`${lora.className} bg-yellow-100 p-1 px-3 text-empactathon-dark`}>
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
                    container: `w-full min-h-screen px-standard brk-1400:px-[calc((100%-1400px)/2)] bg-gradient-to-br from-white to-empactathon-primary/25 
                                flex flex-col justify-center items-center space-y-section 
                                `,
                    title: "text-black-dark"
                },
            }}

        />

        {/* After the program */}
        <OutcomesSection id="outcomes" title="After the program" />

        <StayConnected />

        {/* FAQ */}
        <section id="faqs" className="scroll-mt-24">
            <FAQ
                className={{
                    accordionItem: "hover:bg-empactathon-bg-green"
                }}
                data={[
                    {
                        question: "When will I hear about my application decision?",
                        answer:
                            "Decisions are sent before June. Please keep checking your inbox and spam folder.",
                        value: "item-1",
                    },
                    {
                        question: "Who can apply to this summer camp?",
                        answer:
                            "Students below 20 years old who are currently in high school or have recently graduated can apply.",
                        value: "item-2",
                    },
                    {
                        question: "Do you prioritize specific applicants?",
                        answer:
                            "Yes. We prioritize students from public schools and rural regions to make access to STEM learning more equitable.",
                        value: "item-3",
                    },
                    {
                        question: "Is this opportunity for students inside the Kathmandu Valley only?",
                        answer:
                            "No. The Summer Camp is open to students across Nepal. The program uses a hybrid format: most sessions and activities are online so you can participate from anywhere in the country, with occasional in-person gatherings (optional) when possible.",
                        value: "item-4",
                    },
                    {
                        question: "Do I need prior programming skills?",
                        answer:
                            "No prior programming experience is required. We welcome students who are eager to learn, put in effort, and are curious about how technology works.",
                        value: "item-5",
                    },
                    {
                        question: "How long is the program and what do students do?",
                        answer:
                            "The program runs for 16 weeks. Students go through workshops, work in teams on environmental + computer science projects, and present final prototypes in a public showcase.",
                        value: "item-6",
                    },
                    {
                        question: "Is the program paid?",
                        answer:
                            "No. It is completely free to apply and participate, and essential student expenses are covered by the program.",
                        value: "item-7",
                    },
                    {
                        question: "Can I participate alongside my school schedule?",
                        answer:
                            "Yes. The program is flexible and mostly online, so students can join while continuing school, with occasional in-person events when possible.",
                        value: "item-8",
                    },
                    {
                        question: "What will I gain after finishing?",
                        answer:
                            "You will gain practical project experience, mentor feedback, stronger environmental and technical understanding, and a portfolio-ready showcase output.",
                        value: "item-9",
                    },
                ]}
            />
        </section>

        <Footer />

        <BottomSectionNav />

    </div >
};

export default SummerProgramPage;
