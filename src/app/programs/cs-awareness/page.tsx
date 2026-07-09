import InfoBanner from "@/components/InfoBanner";
import { Descriptor } from "@/app/about/_components";
import Image from "next/image";

// images
import Banner from "@/assets/images/Programs/cs_awareness_banner.png";

export default async function CSAwareness() {
  return (
    <>
      <h1 className="sr-only">CS Awareness</h1>
      <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block max-w-content mx-auto">
        <div className="aboutSection w-full">
          <Image
            src={Banner}
            width={1400}
            height={550}
            alt="banner_about_section"
            className="banner max-h-[400px] h-auto object-cover m-auto"
          />
        </div>
        <div className="space-y-10 " id="team">
          <Descriptor
            title="What is CS Awareness program?"
            descriptions={[
              "At Coding for Social Good Nepal, we believe that computer science education is essential for the future of our ever evolving society. That's why we have launched the CS Awareness program to promote computer science education in Nepal.",
              "As part of our program, we conduct outreach sessions to spreading CS education, career opportunities, programs, and initiate Computer Science clubs to encourage students engage in team activities.",
            ]}
          />

          <Descriptor
            title="Can I be a part of it?"
            descriptions={[
              "You can join our organization as an executive member or volunteer to help us promote computer science education in Nepal. We are always looking for passionate individuals who are committed to making a difference in the lives of students.",
              "If you are a student, teacher, or school administrator interested in promoting computer science education in your school, we would love to hear from you! Please reach out to us at contact@cosognepal.org or fill the form available below.",
            ]}
          />

          <Descriptor
            title="How do I initiate a CS Club in my school?"
            descriptions={[
              "If you are a teacher or school administrator interested in starting a Computer Science club in your school, we can help you get started. We provide resources and support to help you establish a successful club. Please reach out to us at contact@cosognepal.org or call us at +977-9867526912. You can also invite us to your school to conduct a workshop on how to start a CS club.",
              "If you are a student, please reach out to us on facebook or email us at contact@cosognepal.org and we will connect with our team to help you start a CS club in your school.",
            ]}
          />
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h2 className="font-bold text-mid-title">
              Do you need help with a technical project?
            </h2>
            <p>We are here to help! Fill out the form.</p>
          </article>
        }
        cta={{
          text: "Volunteer with us",
          link: "https://forms.gle/euosQkdUW45P8mYc9",
        }}
      />
    </>
  );
}
