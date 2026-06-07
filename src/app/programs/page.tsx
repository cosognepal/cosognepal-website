"use client";

import SectionTitle from "@/components/SectionTitle";
import InfoBanner from "@/components/InfoBanner";
import { APP_ROUTES } from "@/lib/routes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


import Banner from "@/assets/programs_banner.jpg";
import CS_Awareness from "@/assets/images/Programs/awareness.png";
import CodeForCharity from "@/assets/images/Programs/charity.png";
import SkillDevelopment from "@/assets/images/Programs/skills.png";
import CodingCompetitions from "@/assets/images/Programs/competitions.png";

interface Program {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
}

export default function ProgramsPage() {
  const data: Program[] = [
    {
      title: "CS Awareness",
      description:
        "Promote Computer Science Education through workshops and CS Clubs in Sec/High Schools in Nepal.",
      image: CS_Awareness,
      url: APP_ROUTES.PROGRAMS.CS_AWARENESS,
    },
    {
      title: "Code for Charity",
      description:
        "Provide pro-bono coding services to national and international non-profits and charities.",
      image: CodeForCharity,
      url: APP_ROUTES.PROGRAMS.CODE_FOR_CHARITY,
    },
    {
      title: "Skill Development",
      description:
        "Provide free coding classes, workshops, and resources to underprivileged students in Nepal.",
      image: SkillDevelopment,
      url: APP_ROUTES.PROGRAMS.SKILL_DEVELOPMENT,
    },
    {
      title: "Coding Competitions",
      description:
        "Organize networking events, hackathons, and coding competitions to connect students with industry professionals.",
      image: CodingCompetitions,
      url: APP_ROUTES.PROGRAMS.CODING_COMPETITIONS,
    },
  ];

  return (
    <>
      <div className="main_container w-full px-standard sm:px-block max-w-[1400px] m-auto space-y-20">

        
        <div className="aboutSection w-full">
          <Image
            src={Banner}
            width={1400}
            height={550}
            alt="banner_about_section"
            className="banner max-h-[400px] h-auto object-cover m-auto"
          />
        </div>

        <section className="space-y-14">
          <SectionTitle title="Our Programs" />

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {data.map((item, index) => (
              <Link href={item.url} key={index} className="group h-full">

                <div className="h-[420px] flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-300 group-hover:bg-gray-50">

                  
                  <div
                    className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-inner
                    ${
                      index === 0 && "bg-blue-50"
                    }
                    ${
                      index === 1 && "bg-emerald-50"
                    }
                    ${
                      index === 2 && "bg-purple-50"
                    }
                    ${
                      index === 3 && "bg-orange-50"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="drop-shadow-sm"
                    />
                  </div>

         
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  
                  <div className="flex items-center justify-between pt-6 border-t mt-6">
                    <span className="text-gray-900 font-semibold text-sm">
                      Explore Program
                    </span>

                    <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 group-hover:border-gray-900">
                      <ArrowRight
                        size={18}
                        className="text-gray-700 transition group-hover:text-white"
                      />
                    </div>
                  </div>

                </div>

              </Link>
            ))}
          </div>
        </section>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you want to shape the situation of Computer Science in Nepal?
            </h1>
            <p>Let&apos;s change it together, Join Cosog Nepal.</p>
          </article>
        }
        cta={{
          text: "Volunteer with us",
          link: " https://forms.gle/euosQkdUW45P8mYc9",
        }}
      />
    </>
  );
}
