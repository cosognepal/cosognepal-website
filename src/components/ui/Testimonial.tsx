import { Quote } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import PlaceholderAvatar from "@/components/ui/PlaceholderAvatar";
import { cn } from "@/lib/utils";

export type TestimonialData = {
  name: string;
  role?: string;
  quote: string;
  image?: StaticImageData | string;
};

type TestimonialProps = TestimonialData & {
  className?: string;
};

export default function Testimonial({
  name,
  role,
  quote,
  image,
  className,
}: TestimonialProps) {
  return (
    <article
      className={cn(
        "relative h-full bg-white border border-black-dark/10 rounded-md p-standard md:p-block flex flex-col gap-standard transition-colors duration-200 hover:border-black-dark/25",
        className
      )}
    >
      <Quote
        className="absolute -top-3 left-4 h-7 w-7 text-accent_yellow-400 bg-white rounded-full p-1 shadow-sm"
        aria-hidden
      />

      <p className="text-sub-para md:text-para text-black-mid leading-relaxed flex-1">
        “{quote}”
      </p>

      <div className="flex items-center gap-3">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-md object-cover"
          />
        ) : (
          <PlaceholderAvatar name={name} className="h-14 w-14" />
        )}
        <div>
          <p className="text-sub-para font-semibold text-black-dark">{name}</p>
          {role ? (
            <p className="text-info text-black-mid">{role}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
