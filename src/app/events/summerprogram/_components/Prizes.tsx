import React, { ReactNode } from "react";
import Icons from "@/assets/index";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";

interface TPrizeProps {
  prizeTitle: string;
  prizeDescription: ReactNode;
  prizeIcon: keyof typeof Icons;
}

interface PrizeSectionProps {
  prizeData: TPrizeProps[];
  sectionComp?: ReactNode;

  // props for passing styles to the component
  className?: {
    section?: {
      container?: string;
      title?: string;
    };
    prizeCard?: Record<string, string>;
  };
}

export function PrizeSection(props: PrizeSectionProps) {
  return (
    <section className={cn("", props.className?.section?.container)}>
      <div className="prizes flex flex-wrap gap-standard items-center justify-center mt-10 group">
        {props.prizeData.length > 0 &&
          props.prizeData.map((prize, index) => (
            <Prize
              key={index}
              className={props.className?.prizeCard}
              isTopPrize={index === 1}
              index={index}
              {...prize}
            />
          ))}
      </div>

      {props.sectionComp}
    </section>
  );
}

export function Prize(
  props: TPrizeProps & {
    className?: Record<string, string>;
    isTopPrize: boolean;
    index: number;
  }
) {
  return (
    <div
      className={cn(
        "relative h-56 aspect-square border-empactathon-primary/25 border overflow-hidden rounded-md flex flex-col  justify-end p-standard opacity-70 bg-gradient-to-br from-white to-empactathon-bg-green",
        // transition
        "transition-transform duration-200",

        //hover
        "hover:border-empactathon-dark/40 hover:opacity-100  group-hover:translate-x-0 group-hover:opacity-100",

        // rotating left one
        props.index === 0 && "-rotate-6 translate-x-10 z-10",

        // rotating right one
        props.index === 2 && "rotate-6 -translate-x-10 z-10",

        // top prize style
        props.isTopPrize && "h-60 opacity-100 scale-105  z-20 drop-shadow-lg",
        props.className?.container
      )}
    >
      <Icon
        iconName={props.prizeIcon}
        className={cn(
          "h-44 saturate-50 opacity-20 absolute top-standard left-0 ",
          props.className?.icon
        )}
      />
      <div className={cn("details", props.className?.detailsContainer)}>
        {props.prizeDescription}
        <div
          className={cn(
            "title text-empactathon-dark text-xl font-bold",
            props.className?.title
          )}
        >
          {props.prizeTitle}
        </div>
      </div>
    </div>
  );
}
