import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "default" | "muted" | "accent";
  spacing?: "block" | "section";
};

export default function Section({
  children,
  className,
  tone = "default",
  spacing = "block",
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        spacing === "block" && "py-block",
        spacing === "section" && "py-section",
        tone === "muted" && "bg-gray-bg",
        tone === "accent" && "bg-accent_yellow-50",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
