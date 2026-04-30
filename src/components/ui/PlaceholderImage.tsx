import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "21/9";
};

const aspectClass: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

export default function PlaceholderImage({
  label = "Image will be added soon",
  className,
  aspect = "16/9",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden rounded-md border border-dashed border-black-dark/15 bg-gradient-to-br from-gray-bg via-white to-accent_yellow-50 flex items-center justify-center text-black-mid",
        aspectClass[aspect],
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="relative flex flex-col items-center gap-2 text-center px-4">
        <ImageIcon className="h-7 w-7 text-black-mid/60" aria-hidden />
        <span className="text-sub-para font-medium">{label}</span>
      </div>
    </div>
  );
}
