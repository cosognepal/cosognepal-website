import Image from "next/image";
import type { StaticImageData } from "next/image";

import Container from "@/components/ui/Container";
import type { CTA } from "@/content/types";
import placeholderImage from "@/assets/images/hero_video_placeholder.png";

export type HeroMedia = {
  videoSrc?: string;
  poster?: StaticImageData;
};

type HeroProps = {
  headline: string;
  subline: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  media?: HeroMedia;
};

export default function Hero({
  headline,
  media,
}: HeroProps) {
  const poster = media?.poster ?? placeholderImage;

  return (
    <section className="relative w-full overflow-hidden bg-ink min-h-[60vh] md:min-h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden
        />
        {media?.videoSrc && (
          <video
            src={media.videoSrc}
            poster={poster.src}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Background video showcasing Cosog Nepal's work in computer science education"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/70 to-ink/85" />
      </div>

      <Container className="relative z-10 min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center py-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-white text-display">
            {headline}
          </h1>
        </div>
      </Container>
    </section>
  );
}
