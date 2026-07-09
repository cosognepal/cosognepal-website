"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function LiteYouTubeEmbed({
  videoId,
  title,
  className,
}: LiteYouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div className={cn("relative aspect-video overflow-hidden rounded-lg bg-black", className)}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-lg bg-black cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 outline-none",
        className
      )}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-white transition-colors group-hover:bg-brand shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
