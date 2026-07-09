import Link from "next/link";
import Image from "next/image";
import type { Program } from "@/content/types";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  program: Pick<
    Program,
    | "slug"
    | "title"
    | "status"
    | "endDate"
    | "hero"
    | "summary"
    | "focusArea"
    | "external"
  >;
};

const STATUS_LABELS: Record<Program["status"], string> = {
  "coming-soon": "Coming soon",
  open: "Open",
  running: "Running",
  completed: "Archived",
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const isExternal = Boolean(program.external);
  const href = isExternal
    ? program.external!
    : `/programs/${program.slug}`;
  const archiveLabel =
    program.status === "completed" && program.endDate
      ? ` (${program.endDate})`
      : "";

  const card = (
    <article
      className={cn(
        "card-shell group flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-surface"
      )}
    >
      {program.hero && (
        <div className="relative aspect-video w-full overflow-hidden bg-paper">
          <Image
            src={program.hero}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
          <span>
            {STATUS_LABELS[program.status]}
            {archiveLabel}
          </span>
          {isExternal && <span aria-label="External link">↗</span>}
        </div>
        <h3 className="font-display font-semibold text-lg text-ink">
          {program.title}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed flex-1 max-w-prose">
          {program.summary}
        </p>
        <span className="card-arrow inline-flex items-center gap-2 text-sm font-semibold text-brand">
          View program
          <span aria-hidden>→</span>
        </span>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block h-full"
    >
      {card}
    </Link>
  );
}
