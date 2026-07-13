import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "default" | "narrow";
};

export default function Container({
  children,
  className,
  size = "default",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-standard",
        size === "default" && "max-w-content",
        size === "narrow" && "max-w-[960px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
