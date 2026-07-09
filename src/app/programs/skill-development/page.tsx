// import InfoBanner from "@/components/InfoBanner";
import { Descriptor } from "@/app/about/_components";
import Image from "next/image";

// images
import Banner from "@/assets/images/Programs/skill_development_banner.png";

export default async function SkillDevelopment() {
  return (
    <>
      <h1 className="sr-only">Skill Development</h1>
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
            title="What is skill development program?"
            descriptions={[
              "Coding for Social Good Nepal's Skill Development program aims to provide free coding classes, workshops, and resources to underprivileged students in Nepal. Our goal is to empower students with the skills they need to succeed in the digital age and open up new opportunities for them.",
              "We provide hands-on coding and design classes, workshops, and resources to help students learn programming languages, web development, app development, and other technical skills. Our classes are taught by experienced instructors who are passionate about helping students succeed.",
            ]}
          />

          <Descriptor
            title="How do I register?"
            descriptions={[
              "We share information about our upcoming classes and workshops on our website and social media channels. If you are interested in joining our program, please follow us on Facebook, Instagram, and Linkedin to stay updated on our latest events and classes.",
            ]}
          />
        </div>
      </div>

      {/* <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you need help with a technical project?
            </h1>
            <p>We are here to help! Fill out the form.</p>
          </article>
        }
        cta={{
          text: "Volunteer with us",
          link: "https://forms.gle/euosQkdUW45P8mYc9",
        }}
      /> */}
    </>
  );
}
