import FAQ from "../../_components/FAQ";
import TimeLine from "./_components/TimeLine";
import EventDescripter from "@/components/ui/EventAbout";
import { GuestsSection } from "./_components/Guests";
import Image from "next/image";
import YouTubePlaylistEmbed from "@/components/YouTubePlaylistEmbed";

// images
import TechAfterTen from "@/assets/techafter10.png";
import Pratikshya from "@/assets/images/Events/CS_in_high_school/Pratiksha_Pandey.jpg";
import Aashish from "@/assets/images/Events/CS_in_high_school/Aashish_Panthi.jpeg";
import Siddhartha from "@/assets/images/Events/CS_in_high_school/Siddhartha_Neupane.jpg";
import Saroj from "@/assets/images/Events/CS_in_high_school/Saroj_Dahal.jpeg";

const Page = () => {
  return (
    <div className="mainContainer snap-mandatory snap-y space-y-section *:w-full *:max-w-content *:mx-auto *:px-standard *:sm:px-block">
      <section className="gap-5 herosection   flex flex-col snap-start">
        <div className="imageContainer bg-fixed">
          <Image
            src={TechAfterTen}
            alt="something"
            className="w-full max-h-[50vh] object-cover"
          />
        </div>
        <div className="textContainer space-y-standard">
          <div className="title text-black-dark  text-2xl font-bold">
            Computer Science in +2?
          </div>
          <div className="shortIntro text-black-mid max-w-[80%]">
            Dear SEE graduates, Are you curious about a career in computer
            science? Wondering if you should choose computer science in +2 or
            not? Want to explore the plethora of opportunities in Nepal and
            abroad?
            <br /> <br />
            We have got you covered. Cosog Nepal is organizing an interactive
            session with leading figures in Nepali tech! ✨ Join us as we share
            insights on opportunities, challenges, and how to explore your
            potential in this exciting field.
          </div>
        </div>
        <div className="actionsContainer flex flex-wrap *:w-full *:sm:w-max *:sm:px-5 *:rounded-md *:p-[10px] gap-3 text-center">
          <a
            href="https://forms.gle/QkaAimGAq48kg8Ri7"
            className="action1 bg-primary text-white"
            target="_blank"
          >
            Count Me In
          </a>
          <a
            className="action2 bg-gray-bg text-gray-dark "
            href="#learn-more"
          >
            Learn More
          </a>
        </div>
      </section>

      <div id="learn-more" className="scroll-mt-28">
        <EventDescripter
          eventTitle="About the Event"
          description={[
            ` Computer Scinece in +2 program is designed to empower recent 10th
                      grade (SEE) graduates in Nepal to make informed decisions about
                      their future academic paths and careers. Choosing the right stream
                      after 10th grade is a critical step that can significantly impact
                      one's future opportunities. This program aims to equip students with
                      the knowledge and awareness to confidently choose a stream that
                      aligns with their interests, strengths, and future goals.
                  `,
            ` Join us as we lay out the differences between Computer Science in
                      science and management; as we explore different career paths within
                      Computer Science; as we explore the job and educational
                      opportunities in Nepal and abroad, and discover the boundless
                      potential that awaits you in this ever-evolving landscape. `,
          ]}
        />
      </div>

      <GuestsSection
        sectionTitle="Speakers"
        guestData={[
          {
            id: "1",
            name: "Pratiksha Pandey",
            designation: "CEO at Smart Cheli",
            image: Pratikshya,
            socials: [
              {
                name: "Linkedin",
                icon: "linkedin",
                link: "https://www.linkedin.com/in/pratiksha-pandey-608361ba/",
              },
            ],
            short_intro: [
              "Pratiksha Pandey is currently serving as a CEO of Smart Cheli which work to create gender balance in the STEM by providing playful learning.",
              "She is an electronic and communication engineer. Under her leadership, Smart Cheli has worked with Bank of America, HEC Paris, One Young World, Bristol Myers Squibb, and other global organizations.",
            ],
          },
          {
            id: "2",
            name: "Aashish Panthi",
            designation: "SWE intern at Apple",
            image: Aashish,
            socials: [
              {
                name: "Linkedin",
                icon: "linkedin",
                link: "https://www.linkedin.com/in/panthiaashish/",
              },
            ],
            short_intro: [
              "Aashish Panthi is a freshman at Fisk University located at Tenessee, the United States.",
              "This summer he will be joining Apple as a Software Engineering Intern with the Apple Services Engineering team in Culver City, Los Angeles, California.",
            ],
          },
          {
            id: "3",
            name: "Siddhartha Neupane",
            designation: "HoD BSc. CS and AI at Softwarica College",
            image: Siddhartha,
            socials: [
              {
                name: "Linkedin",
                icon: "linkedin",
                link: "https://www.linkedin.com/in/siddhartha-neupane-310a2a162/",
              },
            ],
            short_intro: [
              "Siddhartha Neupane is a Head of the Department of BSc (Hons) Computer Science with Artificial Intelligence at Softwarica College, Kathmandu Nepal.",
              "He has completed his bachelor's in Business Computing from the University of Central Lancashire and completed a master's degree in Big Data Systems from the Higher School of Economics. Mr. Siddhartha is a Data Enthusiast and has worked in the past as a Database Administrator at LLC PAK PROJECT, Moscow Russia.",
            ],
          },
          {
            id: "4",
            name: "Saroj Dahal",
            designation: "CTO, 28Softwares",
            image: Saroj,
            socials: [
              {
                name: "Linkedin",
                icon: "linkedin",
                link: "https://www.linkedin.com/in/isarojdahal/",
              },
            ],
            short_intro: [
              "Saroj Dahal is the founder and CTO of 28Softwares Pvt. Ltd. With 6+ years of experience in the Tech field, Saroj Dahal is equipped with knowledge of Web Development, Mobile App Development, DevOps and Cloud.",
              `In free time, He teaches programming at a YouTube Channel called "EverydayKarma" with a vision to produce millions of Nepali Developers.`,
            ],
          },
        ]}
      />

      <section className="timeline">
        <TimeLine
          timelineTitle={"Event Timeline"}
          tasks={[
            {
              description:
                "Explain the purpose of the program and how it can benefit the recent SEE graduates. Briefly introduce the speakers and the topics they will be covering.",
              icon: "star",
              title: "Introduction to the event",
            },
            {
              description:
                "Siddhartha Neupane will talk about the career paths in computer science that are available in Nepal and abroad.",
              icon: "speaker",
              title: "Career Paths in Computer Science",
            },
            {
              description:
                "Pratiksha Pandey will talk about the educational and job opportunities in Nepal.",
              icon: "speaker",
              title: "Opportunities in Nepal",
            },
            {
              description:
                "Aashish Panthi will talk about the educational and job opportunities abroad, especially in the United States.",
              icon: "speaker",
              title: "Opportunities Abroad",
            },
            {
              description:
                "Saroj Dahal will lay out the differences between Computer Science in science and management in +2 level.",
              icon: "description",
              title: "CS in Science vs Management",
            },
            {
              description:
                "Conclude the event and distrubution of resources talked about in the event.",
              icon: "report",
              title: "Conclude the event",
            },
          ]}
        />
      </section>

      <YouTubePlaylistEmbed
        playlistId="PLKE1X1xZFAFfvK1tq5GH5fiy4HGXCT_De"
        title="Watch the session playlist"
      />

      <section className="faq">
        <FAQ
          data={[
            {
              question: `What is the "Computer Science in +2" program?`,
              answer:
                "The program is designed to help recent 10th-grade graduates in Nepal make informed decisions about their future in the field of computer science.",
              value: "item-1",
            },
            {
              question: "Who should attend this event?",
              answer:
                "Reacent SEE graduates who are considering computer science for their further studies and want to learn about potential career paths and opportunities should attend.",
              value: "item-2",
            },
            {
              question: "What topics will the speakers cover?",
              answer:
                "Speakers will discuss career paths in computer science, differences between computer science in science and management streams, and educational and job opportunities in Nepal and abroad.",
              value: "item-3",
            },
            {
              question:
                "Will there be opportunities to ask questions to the speakers?",
              answer:
                "Yes, there will be a Q&A session where participants can engage directly with the speakers.",
              value: "item-4",
            },
            {
              question: "How can I join the event?",
              answer:
                "Details will be provided on how to join the online event via email after you fill the registration form. Event will be on Google Meet.",
              value: "item-5",
            },
            {
              question: "Is there any fee to attend the event?",
              answer:
                "No, the event is free to attend for all interested participants.",
              value: "item-6",
            },
            {
              question: "Can non-SEE graduates attend the event?",
              answer:
                "While the event is targeted at recent SEE graduates, those with an interest in computer science education are welcome, subject to the event's capacity.",
              value: "item-7",
            },
            {
              question: "Where can I access the recording?",
              answer:
                "The recording is available on our YouTube channel. You can visit www.youtube.com/@cosognepal or search Coding for Social Good Nepal to access the channel.",
              value: "item-8",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default Page;
