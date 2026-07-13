import Link from "next/link";
import type { FocusArea } from "@/content/types";

type FocusAreaCardProps = {
  focusArea: FocusArea;
};

export default function FocusAreaCard({ focusArea }: FocusAreaCardProps) {
  return (
    <Link
      href={`/focus/${focusArea.slug}`}
      className="card-shell group block h-full p-6 bg-surface border border-rule rounded-lg"
    >
      <h3 className="font-display font-semibold text-xl text-ink group-hover:text-brand transition-colors duration-[var(--dur-fast)] ease-[var(--ease)]">
        {focusArea.title}
      </h3>
      <p className="mt-3 text-ink-muted text-base leading-relaxed max-w-prose">
        {focusArea.summary}
      </p>
      <span className="card-arrow mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
        Learn more
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
