import Icons from "@/assets";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

type timelineProps = {
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

const TimeLine = (props: timelineProps) => {
  return (
    <div
      className={cn("space-y-8", props.className?.container)}
    >
      <h2 className="font-display font-semibold text-2xl text-ink">
        {props.timelineTitle}
      </h2>

      <div className="relative">
        <div className="absolute top-0 left-4 md:left-[calc(50%+2px)] -translate-x-1/2 h-full w-0.5 bg-rule rounded-full" />
        <div className="space-y-6">
          {props.tasks?.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="grid gap-3 items-start relative md:[grid-template-columns:1fr_32px_1fr] [grid-template-columns:32px_1fr]"
            >
              <div
                className={cn(
                  "h-8 aspect-square rounded-full bg-brand flex justify-center items-center text-white border-white border-2 md:[grid-column:2/3] z-10",
                  props.className?.iconContainer
                )}
              >
                <Icon iconName={icon} className="w-4 h-4" />
              </div>
              <div
                className={
                  index % 2 === 0
                    ? "md:[grid-column:1/2] md:text-right md:[grid-row:1/2]"
                    : "md:[grid-column:3/4]"
                }
              >
                <h3 className="text-ink font-semibold text-base">{title}</h3>
                <p className="text-ink-muted text-sm mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
