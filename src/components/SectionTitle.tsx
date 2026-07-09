import Link from "next/link";
import type { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  viewall?: string;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export default function SectionTitle({
  title,
  viewall,
  as: Tag = "h2",
}: SectionTitleProps) {
  const isExternal = !!viewall && /^https?:\/\//i.test(viewall);

  return (
    <div className="title_container max-w-content mx-auto flex justify-between items-center">
      <Tag className="font-bold text-xl md:text-2xl text-near-black uppercase font-display">
        {title}
      </Tag>
      {viewall && (
        <Link
          href={viewall}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="text-accent text-sm md:text-base font-medium uppercase hover:underline underline-offset-4"
        >
          View all
        </Link>
      )}
    </div>
  );
}
