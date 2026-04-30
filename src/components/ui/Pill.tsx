import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PillProps = {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Pill({ icon, children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-4 py-2 text-sub-para text-black-mid border border-black-dark/10 shadow-sm",
        className
      )}
    >
      {icon ? <span className="text-primary inline-flex shrink-0">{icon}</span> : null}
      <span className="font-medium">{children}</span>
    </span>
  );
}
