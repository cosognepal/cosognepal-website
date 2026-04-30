import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type StatProps = {
  value: ReactNode;
  label: string;
  tone?: "default" | "muted";
  className?: string;
};

export default function Stat({ value, label, tone = "default", className }: StatProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 p-standard rounded-md",
        tone === "muted" && "bg-gray-bg",
        className
      )}
    >
      <span className="text-title md:text-heading font-extrabold leading-none text-black-dark">
        {value}
      </span>
      <span className="text-sub-para text-black-mid">{label}</span>
    </div>
  );
}
