import Image from "next/image";
import type { Press } from "@/content/types";

type PressListProps = {
  items: Press[];
};

export default function PressList({ items }: PressListProps) {
  if (items.length === 0) return null;

  return (
    <section aria-label="Press coverage" className="space-y-6">
      <h2 className="font-display font-semibold text-xl text-ink">
        Press &amp; features
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <li key={item.id}>
            <PressCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PressCard({ item }: { item: Press }) {
  const inner = (
    <div className="press-row group h-full bg-surface border border-rule rounded-lg overflow-hidden">
      {item.imageUrl && (
        <div className="relative aspect-[8/11] w-full">
          <Image
            src={item.imageUrl}
            alt={item.imageAlt || item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-ink line-clamp-2">
          {item.title}
        </h3>
      </div>
    </div>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {inner}
      </a>
    );
  }

  return inner;
}
