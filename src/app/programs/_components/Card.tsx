"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { startNavigation } from "@/lib/navigation";

type CardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
};

const Card: FC<CardProps> = ({ title, description, image, url }) => {
  const router = useRouter();

  const redirectUsers = () => {
    startNavigation();
    router.push(url);
  };

  return (
    <div className="relative p-4 max-w-72 bg-gray-bg">
      <Image
        src={image}
        width={1400}
        height={550}
        alt={title}
        className="w-full h-36 object-cover"
      />
      <h2 className="font-bold sm:text-mid-title text-para text-black-mid mt-1 py-2 text-center">
        {title}
      </h2>
      <p className="text-sub-para text-black-mid text-center">{description}</p>

      <button
        onClick={redirectUsers}
        className={`block mx-auto rounded-md w-full max-w-36 overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition mt-4`}
      >
        Learn more
      </button>
    </div>
  );
};

export default Card;
