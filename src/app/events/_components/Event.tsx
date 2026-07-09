"use client";

import type { Tevent } from "../type";
import React, { useCallback, useEffect, useRef } from "react";
import imgViewer from "awesome-image-viewer";
import Image from "next/image";
import Link from "next/link";

type Tparam = {
  data: Tevent;
  index: number;
  states: {
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
    setActiveBarHeight: React.Dispatch<React.SetStateAction<number>>;
  };
  activeBarHeightPerEvent: number;
};

export default function Event({
  data,
  index,
  states,
  activeBarHeightPerEvent,
}: Tparam) {
  const { title, images, date, descriptions, link } = data;
  const main_container = useRef<HTMLDivElement | null>(null);

  const visibleActions = useCallback(() => {
    states.setCurrentDate(date);
    if (index === 0)
      return states.setActiveBarHeight(index * activeBarHeightPerEvent);
    states.setActiveBarHeight((index + 1) * activeBarHeightPerEvent);
  }, [activeBarHeightPerEvent, date, index, states]);

  useEffect(() => {
    const currentContainer = main_container.current;

    if (!currentContainer || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) visibleActions();
      },
      {
        rootMargin: "0px",
        threshold: 0.9,
      }
    );

    observer.observe(currentContainer);

    // cleanup
    return () => {
      observer.unobserve(currentContainer);
    };
  }, [visibleActions]);

  const imageData = data.images.map((imageUrl) => ({
    mainUrl: imageUrl.src,
    description: data.title,
  }));

  return (
    <div
      className="main_container max-w-[680px] h-max flex flex-col border-white-light border-2"
      ref={main_container}
    >
      <div className="imagesContainer grid grid-cols-2 grid-rows-2-250 gap-small w-full">
        <div
          className="image col-span-2 overflow-hidden relative group cursor-pointer"
          onClick={() => {
            new imgViewer({
              images: imageData,
              currentSelected: 0,
            });
          }}
        >
          <Image
            src={images[0]}
            height={250}
            width={680}
            alt={title}
            className="event w-full h-max absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-105  transition-all ease-in-out duration-150 "
          />
        </div>
        <div
          className="image group relative overflow-hidden cursor-pointer"
          onClick={() => {
            new imgViewer({
              images: imageData,
              currentSelected: 1,
            });
          }}
        >
          <Image
            src={images[1]}
            height={250}
            width={680}
            alt={title}
            className="image group-hover:scale-105 transition-all ease-in-out duration-150 h-full object-cover"
          />
        </div>
        <div
          className="image overflow-hidden relative group cursor-pointer"
          onClick={() => {
            new imgViewer({
              images: imageData,
              currentSelected: 2,
            });
          }}
        >
          <Image
            src={images[2]}
            height={250}
            width={680}
            alt={title}
            className="image group-hover:scale-105 transition-all ease-in-out duration-150 h-full object-cover"
          />
        </div>
      </div>
      <div className="desc_container h-auto w-full p-standard">
        <div className="date font-normal text-black-mid text-sub-para">
          {date}
        </div>
        <h2 className="title font-bold text-black-dark text-sub-title">
          {title}
        </h2>
        <div className="desc text-black-mid text-para mt-small space-y-v-small">
          {descriptions.map((description, index) => {
            return <p key={index}> {description} </p>;
          })}
        </div>

          {
          link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-para font-normal mt-standard hover:underline"
            >
              Read more
            </Link>
          )
          }

      </div>
    </div>
  );
}
