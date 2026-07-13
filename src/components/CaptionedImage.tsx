import Image from "next/image";
import type { StaticImageData } from "next/image";

export type CaptionedImageProps = {
  src: StaticImageData | string;
  alt: string;
  caption: string;
  date: string;
  location: string;
  priority?: boolean;
};

export default function CaptionedImage({
  src,
  alt,
  caption,
  date,
  location,
  priority,
}: CaptionedImageProps) {
  return (
    <figure className="space-y-2">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface-alt">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <figcaption className="text-sm text-muted">
        <p className="font-medium text-near-black">{caption}</p>
        <p>
          {date} · {location}
        </p>
      </figcaption>
    </figure>
  );
}
