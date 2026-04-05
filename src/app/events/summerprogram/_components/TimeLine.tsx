import Icons from "@/assets";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

type TimelineProps = {
  timelineTitle: string;
  className?: {
    iconContainer?: string;
    container?: string;
  };
  tasks: {
    title: string;
    description: string;
    icon: keyof typeof Icons;
  }[];
};

const TimeLine = (props: TimelineProps) => {
  return (
    <div className={cn("timeLineContainer space-y-standard", props.className?.container)}>
      <h1 className="title text-black-dark text-2xl font-bold">
        {props.timelineTitle}
      </h1>

      <div className="timeline relative">
        <div className="line absolute top-0 md:left-[calc(50%+2px)] left-5 -translate-x-1/2 h-full w-0.5 bg-gray-dark rounded-full"></div>
        <div className="tasks space-y-block">
          {props.tasks?.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="grid gap-standard items-start relative md:[grid-template-columns:1fr_40px_1fr] [grid-template-columns:40px_1fr]"
            >
              <div
                className={cn(
                  "icon h-10 aspect-square rounded-full bg-primary flex justify-center items-center text-white border-white border-2 md:[grid-column:2/3]",
                  props.className?.iconContainer
                )}
              >
                <Icon iconName={icon} />
              </div>
              <div
                className={`details ${
                  index % 2 === 0
                    ? "md:[grid-column:1/2] md:text-right md:[grid-row:1/2]"
                    : "md:[grid-column:3/4]"
                }`}
              >
                <div className="text-black-mid text-xl font-bold">{title}</div>
                <div className="text-black-mid">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
