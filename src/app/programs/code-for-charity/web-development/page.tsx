import { Descriptor } from "@/app/about/_components";
import YouTubePlaylist from "./_components/YouTubePlaylist";
import InfoBanner from "@/components/InfoBanner";

export default async function WebDevelopmentPage() {
  return (
    <div>
      <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block max-w-[1400px] m-auto">
        {/* Hero Section */}
        <div className="space-y-6 py-8">
          <div className="space-y-4">
            <h1 className="font-bold text-title md:text-heading text-black-dark">
              Web Development Program
            </h1>
            <p className="font-medium text-mid-title text-black-mid">
              Code for Charity
            </p>
            <p className="font-normal text-para text-black-mid max-w-3xl">
              A hands-on, impact-driven web development program for students in Grades 8–12. 
              Over 2 weeks of online learning, students build real school websites while gaining 
              practical web development skills. Upon completion, students receive certificates, 
              mentorship, and outstanding participants may be offered remote internship opportunities.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-bg p-4 rounded-lg">
              <p className="text-info text-black-mid uppercase mb-1">Who</p>
              <p className="font-bold text-mid-title text-black-dark">Grades 8–12</p>
            </div>
            <div className="bg-gray-bg p-4 rounded-lg">
              <p className="text-info text-black-mid uppercase mb-1">Duration</p>
              <p className="font-bold text-mid-title text-black-dark">2 Weeks</p>
            </div>
            <div className="bg-gray-bg p-4 rounded-lg">
              <p className="text-info text-black-mid uppercase mb-1">Mode</p>
              <p className="font-bold text-mid-title text-black-dark">Online</p>
            </div>
            <div className="bg-gray-bg p-4 rounded-lg">
              <p className="text-info text-black-mid uppercase mb-1">Outcome</p>
              <p className="font-bold text-mid-title text-black-dark">Live Website + Certificate</p>
            </div>
          </div>
        </div>

        {/* About the Program */}
        <div className="space-y-10" id="about">
          <Descriptor
            title="About the Program"
            descriptions={[
              "The Web Development Program is a core initiative under Code for Charity, designed to provide students with hands-on experience in building real-world websites for schools. The program emphasizes learning by building, where students don't just learn theory but create actual, live websites that schools can use.",
              "This program bridges the gap between education and real-world application. Students work on actual projects, learning web development fundamentals while making a tangible impact on their communities. The websites built during the program are handed over to schools, providing them with a professional online presence.",
              "The program is structured to be intensive yet accessible, focusing on practical skills that students can immediately apply. Through mentorship and guided learning, students gain confidence in web development and content management systems.",
            ]}
          />

          {/* What Students Learn */}
          <Descriptor
            title="What Students Learn"
            descriptions={[
              "Throughout the 2-week program, students gain comprehensive knowledge and hands-on experience in modern web development. The curriculum is designed to be practical and immediately applicable.",
            ]}
            list={[
              "How the web works: Understanding the fundamentals of web technologies, HTTP protocols, and how websites function",
              "WordPress & Elementor: Hands-on experience with WordPress CMS and Elementor page builder for creating professional websites",
              "Content Management Systems (CMS): Learning how to manage, update, and maintain website content effectively",
              "Basic SEO & Security: Introduction to search engine optimization and website security best practices",
              "Domain & Hosting Basics: Understanding how to register domains, set up hosting, and deploy websites",
              "Website Handover & Maintenance: Learning the process of transferring websites to clients and maintaining them long-term",
            ]}
          />

          {/* Program Structure & Details */}
          <Descriptor
            title="Program Structure & Details"
            descriptions={[]}
            list={[
              "Cohort Size: Small, focused cohorts to ensure personalized attention and effective learning",
              "Duration: 2 weeks of intensive, hands-on learning",
              "Sessions: Multiple sessions covering all aspects of web development and website creation",
              "Tools: WordPress, Elementor, and other industry-standard web development tools",
              "Delivery Mode: Fully online, allowing students to participate from anywhere",
              "Final Output: A complete, live website delivered to a school, ready for use",
              "Selection Process: Students are nominated and go through an application form and interview process to ensure commitment and readiness",
            ]}
          />

          {/* Partners & Mentorship */}
          <Descriptor
            title="Partners & Mentorship"
            descriptions={[
              "The Web Development Program is conducted in partnership with Fleckor Tech, bringing industry expertise and real-world perspective to the learning experience.",
              "Students receive dedicated mentorship throughout the program, with guidance from experienced developers and industry professionals. This mentorship extends beyond just technical skills, covering best practices, professional development, and career guidance.",
              "Outstanding students who demonstrate exceptional performance and commitment may be offered remote internship opportunities with Fleckor Tech. These internships are flexible and provide valuable real-world experience, allowing students to continue learning while contributing to professional projects.",
            ]}
          />

          {/* Outcomes & Impact */}
          <Descriptor
            title="Outcomes & Impact"
            descriptions={[
              "Upon successful completion of the Web Development Program, students achieve multiple valuable outcomes:",
            ]}
            list={[
              "Practical Skills: Hands-on experience with WordPress, Elementor, and web development fundamentals that are immediately applicable",
              "Live Website: Each student contributes to building a real, live website that is delivered to a school, providing tangible proof of their work",
              "Certificates: Official certificates recognizing completion of the program and acquired skills",
              "Exposure to IT & Real-World Projects: Experience working on actual client projects, understanding project requirements, and delivering professional results",
              "Mentorship: Ongoing support and guidance from industry professionals",
              "Career Opportunities: Potential internship opportunities for outstanding participants",
            ]}
          />
        </div>

        {/* Video Lectures Section */}
        <div className="space-y-6 py-8">
          <YouTubePlaylist playlistId="PLKE1X1xZFAFflaCfTlyzfp40ZykAaJfb-" />
        </div>
      </div>

      {/* CTA Banner */}
      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Ready to build real websites and make an impact?
            </h1>
            <p>Join the Web Development Program and start your journey in web development.</p>
          </article>
        }
        cta={{
          text: "Learn More",
          link: "https://forms.gle/euosQkdUW45P8mYc9",
        }}
      />
    </div>
  );
}
