"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { Leader } from "@/content/leaders";
import { cn } from "@/lib/utils";

export type LeaderCardVariant = "brand" | "accent" | "surface";
export type LeaderPortraitStyle = "cutout" | "inset";

type CardTheme = {
  cardBg: string;
  cardText: string;
  cardBorder?: string;
  badgeBg: string;
  badgeText: string;
  portraitBorder: string;
};

type LeaderCardProps = {
  leader: Leader;
  align: "left" | "right";
  variant: LeaderCardVariant;
  portraitStyle: LeaderPortraitStyle;
  animationDelay?: number;
};

function getCardTheme(variant: LeaderCardVariant): CardTheme {
  switch (variant) {
    case "brand":
      return {
        cardBg: "bg-brand",
        cardText: "text-surface",
        badgeBg: "bg-accent",
        badgeText: "text-ink",
        portraitBorder: "border-accent",
      };
    case "accent":
      return {
        cardBg: "bg-accent",
        cardText: "text-ink",
        badgeBg: "bg-brand",
        badgeText: "text-surface",
        portraitBorder: "border-brand",
      };
    case "surface":
      return {
        cardBg: "bg-surface",
        cardText: "text-ink",
        cardBorder: "border border-rule",
        badgeBg: "bg-brand",
        badgeText: "text-surface",
        portraitBorder: "border-brand",
      };
  }
}

function CutoutPortrait({
  leader,
  className,
}: {
  leader: Leader;
  className?: string;
}) {
  return (
    <Image
      src={leader.portrait}
      alt={`Portrait of ${leader.name}`}
      width={leader.portrait.width}
      height={leader.portrait.height}
      sizes="(min-width: 768px) 320px, 260px"
      className={cn(
        "h-full w-full object-contain object-bottom pointer-events-none",
        "transition-transform duration-[var(--dur-base)] ease-[var(--ease)]",
        "lg:group-hover:scale-[1.02] motion-reduce:lg:group-hover:scale-100",
        className
      )}
    />
  );
}

function InsetPortrait({
  leader,
  portraitSrc,
  theme,
  isLeft,
  className,
}: {
  leader: Leader;
  portraitSrc: Leader["portrait"];
  theme: CardTheme;
  isLeft: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex",
        isLeft ? "justify-center md:justify-start" : "justify-center md:justify-end",
        className
      )}
    >
      <div
        className={cn(
          "relative size-40 shrink-0 overflow-hidden rounded-full border-4",
          theme.portraitBorder,
          "transition-transform duration-[var(--dur-base)] ease-[var(--ease)]",
          "lg:group-hover:scale-[1.02] motion-reduce:lg:group-hover:scale-100"
        )}
      >
        <Image
          src={portraitSrc}
          alt={`Portrait of ${leader.name}`}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
    </div>
  );
}

export default function LeaderCard({
  leader,
  align,
  variant,
  portraitStyle,
  animationDelay = 0,
}: LeaderCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const theme = getCardTheme(variant);
  const portraitSrc = leader.portraitInset ?? leader.portrait;
  const isLeft = align === "left";
  const isCutout = portraitStyle === "cutout";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const quoteColumnClass = isLeft
    ? "md:col-span-7 md:col-start-5 md:text-left"
    : "md:col-span-7 md:col-start-2 md:text-right";

  const portraitAnchorClass = isLeft
    ? "md:left-6 lg:left-8 xl:left-10"
    : "md:right-6 lg:right-8 xl:right-10";

  const badgeAnchorClass = isLeft
    ? "md:left-8 lg:left-10 xl:left-12"
    : "md:right-8 lg:right-10 xl:right-12 md:left-auto";

  return (
    <figure
      ref={ref}
      className={cn(
        "group leader-card relative overflow-visible",
        isCutout && "pt-14 md:pt-20",
        isLeft ? "lg:mr-auto lg:max-w-[95%]" : "lg:ml-auto lg:max-w-[95%]",
        "transition-[opacity,transform,box-shadow] duration-[var(--dur-slow)] ease-[var(--ease)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0"
      )}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {/* Mobile portrait */}
      <div
        className={cn(
          "relative z-0 flex justify-center pointer-events-none md:hidden",
          isCutout ? "-mt-6 mb-[-3.5rem]" : "mb-[-4rem]"
        )}
      >
        {isCutout ? (
          <CutoutPortrait
            leader={leader}
            className="!h-auto !w-auto max-h-[260px] max-w-[min(78vw,280px)]"
          />
        ) : (
          <InsetPortrait
            leader={leader}
            portraitSrc={portraitSrc}
            theme={theme}
            isLeft={isLeft}
          />
        )}
      </div>

      <div
        className={cn(
          "relative z-[1] overflow-visible rounded-xl shadow-sm",
          "min-h-[280px] md:min-h-[300px]",
          theme.cardBg,
          theme.cardText,
          theme.cardBorder,
          "transition-[box-shadow] duration-[var(--dur-base)] ease-[var(--ease)]",
          "lg:hover:shadow-md motion-reduce:lg:hover:shadow-sm"
        )}
      >
        {/* Desktop cutout — feet on card bottom, head bleeds above */}
        {isCutout && (
          <div
            className={cn(
              "leader-card__portrait-wrap pointer-events-none absolute bottom-0 z-[2] hidden overflow-visible md:flex md:items-end md:justify-center",
              "w-[min(40%,320px)]",
              portraitAnchorClass
            )}
            style={{ height: "128%" }}
            aria-hidden
          >
            <CutoutPortrait leader={leader} />
          </div>
        )}

        <div
          className={cn(
            "relative z-[1] grid min-h-[280px] grid-cols-1 md:min-h-[300px] md:grid-cols-12 md:items-center",
            "px-6 py-10 pb-14 md:px-10 md:py-12 md:pb-12",
            isCutout && "pt-20 md:pt-10"
          )}
        >
          {/* Reserve portrait column on desktop */}
          <div
            className={cn(
              "hidden md:block md:col-span-4",
              !isLeft && "md:col-start-9"
            )}
            aria-hidden={isCutout}
          >
            {!isCutout && (
              <InsetPortrait
                leader={leader}
                portraitSrc={portraitSrc}
                theme={theme}
                isLeft={isLeft}
              />
            )}
          </div>

          <div
            className={cn(
              "flex flex-col justify-center text-center",
              quoteColumnClass
            )}
          >
            <blockquote
              className={cn(
                "font-body text-lg leading-[1.6] max-w-[52ch]",
                "mx-auto md:mx-0",
                !isLeft && "md:ml-auto"
              )}
            >
              <p>{leader.quote}</p>
            </blockquote>
            <p
              className={cn(
                "mt-5 font-body text-sm italic opacity-80 max-w-[52ch]",
                "mx-auto md:mx-0",
                !isLeft && "md:ml-auto"
              )}
            >
              {leader.role}
            </p>
          </div>
        </div>
      </div>

      <figcaption
        className={cn(
          "absolute z-[3] flex h-14 items-center px-8",
          "rounded-xl font-display text-lg font-semibold uppercase tracking-[0.02em]",
          theme.badgeBg,
          theme.badgeText,
          "transition-[transform] duration-[var(--dur-base)] ease-[var(--ease)]",
          "lg:group-hover:-translate-y-0.5 motion-reduce:lg:group-hover:translate-y-0",
          "bottom-[-26px] left-1/2 w-max max-w-[calc(100%-2rem)] -translate-x-1/2",
          badgeAnchorClass,
          "md:translate-x-0"
        )}
      >
        <h3 className="truncate">{leader.name}</h3>
      </figcaption>
    </figure>
  );
}
