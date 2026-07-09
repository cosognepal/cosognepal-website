"use client";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
//import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

// images
import aws_cloud_club from "@/assets/images/Partners/aws_cloud_club.png";
import code_for_change from "@/assets/images/Partners/code_for_change.png";
import itech_karnali from "@/assets/images/Partners/itech_karnali.png";
import sagarmatha_techfest from "@/assets/images/Partners/sagarmatha_techfest.png";
import sagarmatha_hacktoberfest from "@/assets/images/Partners/sagarmatha_hacktoberfest.png";
import technify from "@/assets/images/Partners/technify.png";

const partnersData = [
  { name: "AWS Cloud Club", image: aws_cloud_club },
  { name: "Code for Change", image: code_for_change },
  { name: "iTech Karnali", image: itech_karnali },
  { name: "Sagarmatha Techfest", image: sagarmatha_techfest },
  { name: "Sagarmatha Hacktoberfest", image: sagarmatha_hacktoberfest },
  { name: "Technify Club @Duke University", image: technify },
];

// const slidesPerView = Math.min(innerWidth - (partenersData.length * 20), 1400 - 20 * partenersData.length) / 192

const Partners = () => {
  return (
    <main className="bg-gray-bg p-block space-y-block px-standard md:px-block max-w-content mx-auto">
      <SectionTitle title="we've worked with" />
      <section>
          <div className="flex space-x-standard justify-center max-w-content mx-auto overflow-hidden">
          {partnersData.map((partner, index) => (
            <div key={index}>
              <div
                className={`w-48 h-48 aspect-square relative grid place-items-center bg-white rounded-md`}
              >
                <Image
                  src={partner.image}
                  height={150}
                  width={150}
                  alt={partner.name}
                  className="object-contain"
                  title={partner.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Partners;
