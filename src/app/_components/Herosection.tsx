"use client";

import React from "react";
import Image from "next/image";

import placeholderImage from "@/assets/images/hero_video_placeholder.png";
import Container from "@/components/ui/Container";

const Herosection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[88svh] md:min-h-[92svh]">
      <div className="absolute inset-0">
        <Image
          src={placeholderImage}
          alt="Coding for Social Good Nepal in classrooms"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${videoLoaded ? "opacity-0" : "opacity-100"
            }`}
        />
        <video
          src="./videos/cosog-nepal-hero.mp4"
          poster={placeholderImage.src}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-black/55"
        />
      </div>

      <Container className="relative z-10 min-h-[88svh] md:min-h-[92svh] flex flex-col items-center justify-center text-center">
        <div className="max-w-[920px] space-y-6 md:space-y-7">
          <h1
            className="font-display font-bold tracking-tight leading-[1.08] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Bringing Computer Science Education to every classroom
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Herosection;
