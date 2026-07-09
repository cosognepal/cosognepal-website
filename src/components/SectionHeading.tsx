import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  viewall?: string;
  viewallExternal?: boolean;
};

export default function SectionHeading({
  as: Tag = "h2",
  children,
  className,
  viewall,
  viewallExternal,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "title_container max-w-content mx-auto flex justify-between items-center",
        className
      )}
    >
      <Tag className="font-display font-semibold text-xl md:text-2xl text-ink uppercase tracking-[-0.015em]">
        {children}
      </Tag>
      {viewall && (
        <a
          href={viewall}
          {...(viewallExternal
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="text-brand text-sm font-semibold uppercase tracking-[0.12em] hover:underline underline-offset-4"
        >
          View all
        </a>
      )}
    </div>
  );
}
