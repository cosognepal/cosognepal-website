import Image from "next/image";
import { getStats } from "@/content/stats";

import SchoolLogo from "@/assets/School_logo.svg";
import StudentsIcon from "@/assets/Students_logo.svg";
import VolunteerIcon from "@/assets/svg/userstar.svg";

const STAT_ICONS: Record<string, string> = {
  Volunteers: VolunteerIcon,
  "Schools reached": SchoolLogo,
  Students: StudentsIcon,
};

const Numbers = () => {
  const stats = getStats();

  return (
    <section
      aria-label="Our impact"
      className="w-full max-w-content mx-auto text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-blend-multiply bg-fixed grid grid-cols-1 v-sm:grid-cols-2 gap-y-standard md:grid-cols-3 justify-center place-items-center p-standard md:p-block"
    >
      {stats.map((stat) => {
        const icon = STAT_ICONS[stat.label];

        return (
          <div
            className="flex flex-row w-full items-center space-x-standard v-sm:flex-col v-sm:w-auto v-sm:items-center v-sm:space-y-small"
            key={stat.label}
          >
            {icon && (
              <div className="w-14 v-sm-12 md:w-20 aspect-square relative">
                <Image
                  src={icon}
                  alt=""
                  width={80}
                  height={80}
                  aria-hidden
                />
              </div>
            )}
            <div className="text_context">
              <p className="text-center text-sub-title font-bold v-sm:text-gray-bg v-sm:text-para v-sm:font-medium">
                {stat.label}
              </p>
              <p
                className="text-gray-bg v-sm:text-center v-sm:text-title v-sm:font-bold"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Numbers;
