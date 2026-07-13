import Image from "next/image";
import type { Story } from "@/content/types";

type StoryBlockProps = {
  story: Story;
};

export default function StoryBlock({ story }: StoryBlockProps) {
  const hasImage = story.image && story.image !== "";

  return (
    <article className="rounded-xl border border-rule bg-paper overflow-hidden flex flex-col h-full">
      {hasImage && (
        <div className="relative w-full aspect-[4/3] bg-paper">
          <Image
            src={story.image!}
            alt={`Photo of ${story.author}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        <svg
          className="w-7 h-7 text-brand/20 mb-2 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote className="text-muted leading-relaxed text-sm flex-1">
          {story.quote}
        </blockquote>
        <footer className="mt-4 pt-3 border-t border-rule">
          <cite className="not-italic font-semibold text-near-black text-sm">
            {story.author}
          </cite>
          {(story.role || story.organization) && (
            <span className="block text-xs text-muted mt-0.5">
              {story.role}
              {story.organization ? `, ${story.organization}` : ""}
            </span>
          )}
        </footer>
      </div>
    </article>
  );
}
