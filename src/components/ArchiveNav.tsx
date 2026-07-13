import Link from "next/link";
import type { Program } from "@/content/types";
import { cn } from "@/lib/utils";

type ArchiveNavProps = {
  current: string;
  siblings: Program[];
};

export default function ArchiveNav({ current, siblings }: ArchiveNavProps) {
  if (siblings.length <= 1) return null;

  return (
    <nav aria-label="Related programs" className="border-b border-border pb-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
        Programs in this focus area
      </p>
      <ul className="flex flex-wrap gap-2">
        {siblings.map((program) => {
          const isCurrent = program.slug === current;
          const label =
            program.status === "completed" && program.endDate
              ? `${program.title} (${program.endDate})`
              : program.title;

          return (
            <li key={program.slug}>
              <Link
                href={
                  program.external
                    ? program.external
                    : `/programs/${program.slug}`
                }
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "inline-block px-3 py-1.5 text-sm rounded-full border transition-colors",
                  isCurrent
                    ? "bg-brand text-white border-brand"
                    : "border-border text-muted hover:border-brand hover:text-brand"
                )}
                {...(program.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {label}
                {program.external && (
                  <span className="ml-1" aria-hidden>
                    ↗
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
