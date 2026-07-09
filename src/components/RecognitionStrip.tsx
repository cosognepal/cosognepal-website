import Image from "next/image";
import type { Press, Award } from "@/content/types";

type RecognitionStripProps = {
  items: (Press | Award)[];
};

function isAward(item: Press | Award): item is Award {
  return "level" in item;
}

export default function RecognitionStrip({ items }: RecognitionStripProps) {
  if (items.length === 0) return null;

  return (
    <section aria-label="Recognition" className="bg-surface-alt border-y border-border py-6">
      <div className="max-w-content mx-auto px-4 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {items.map((item) => {
          const label = isAward(item)
            ? `${item.title} ${item.year}`
            : item.source;
          const href = isAward(item) ? item.link : (item as Press).link;

          const content = (
            <div className="flex items-center gap-3 grayscale opacity-80 hover:opacity-100 transition-opacity">
              {"imageUrl" in item && item.imageUrl && (
                <div className="relative h-10 w-24">
                  <Image
                    src={item.imageUrl}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </div>
              )}
              <span className="text-sm font-semibold text-muted uppercase tracking-wide">
                {label}
              </span>
            </div>
          );

          if (href) {
            return (
              <a
                key={isAward(item) ? item.id : item.id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {content}
              </a>
            );
          }

          return <div key={isAward(item) ? item.id : item.id}>{content}</div>;
        })}
      </div>
    </section>
  );
}
