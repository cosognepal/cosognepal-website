"use client";
import { ReactNode, useState } from "react";
import Icons from "@/assets";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type TGuestProps = {
  id: string;
  name?: string;
  image?: StaticImageData | string;
  designation?: string;
  short_intro?: string[];
  socials?: {
    name: string;
    icon: keyof typeof Icons;
    link: string;
  }[];
  tagline?: string;
  notPublicYet?: boolean;
  placeholder?: ReactNode;
};

const GuestCard = (
  data: Omit<TGuestProps, "notPublicYet"> & { onClick: () => void }
) => {
  return (
    <div
      className="speakerContainer bg-gray-bg w-full relative min-h-[450px] overflow-hidden rounded-md cursor-pointer"
      onClick={data.onClick}
    >
      <Image
        src={data.image as StaticImageData}
        alt={`${data.name}-image`}
        className="image w-full absolute top-0 left-0 h-full object-cover"
      />
      <div className="details p-3 bg-gradient-to-t from-black-dark/80 to-40% to-black-dark/10 absolute w-full h-full flex flex-col items-start justify-end text-white">
        <h1 className="text-white font-bold text-2xl">{data.name}</h1>
        <h3>{data.designation}</h3>
      </div>
    </div>
  );
};

const NotPublicYetGuestCard = (
  props: Pick<TGuestProps, "placeholder"> & { className?: string }
) => {
  return (
    <div
      className={cn(
        "privateGuestCard bg-gradient-to-br from-gray-200 to-blue-blue/50 h-full w-full flex justify-center items-center animate-pulse",
        props.className
      )}
    >
      {props.placeholder}
    </div>
  );
};

type TGuestModalParam = TGuestProps & {
  modalState: boolean;
  closeModal: () => void;
} & Pick<GuestSectionProps, "className">;

const GuestModal = (props: TGuestModalParam) => {
  return (
    <div className="text-center md:text-left p-small py-standard w-full max-w-[1400px] md:px-standard brk-1400:mx-auto sm:px-block">
      <div className="close cursor-pointer" onClick={props.closeModal}>
        <Icon iconName="close" className="h-5 w-5 text-black-dark" />
      </div>
      <div className="speakerDetails flex justify-between flex-wrap-reverse gap-small mt-5">
        <div className="textdetails flex-1 space-y-small min-w-96">
          <div className="intro">
            <div className="name text-2xl text-black-dark font-bold">
              {props.name}
            </div>
            <div className="designation text-primary">{props.designation}</div>
          </div>
          <div className="short_intro text-black-mid space-y-2">
            {props.short_intro?.map((intro) => (
              <p key={intro} className="text-wrap px-5 md:px-0">
                {intro}
              </p>
            ))}
          </div>
        </div>
        <div className="imageSocials w-auto flex flex-col justify-center items-center md:items-start mx-auto md:mx-0">
          <Image
            src={props.image as StaticImageData}
            alt={props.name + "-image"}
            className="image max-w-52 aspect-square object-cover rounded-md"
          />
          <div className="socials">
            <div className="links flex gap-3 flex-wrap mt-3 items-center justify-center">
              {props.socials?.map((social, index) => (
                <a key={index} href={social.link} target="_blank">
                  <Icon
                    iconName={social.icon}
                    className="text-gray-dark w-8 h-8 hover:text-primary"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GuestSectionProps {
  guestData: TGuestProps[];
  sectionTitle: string;
  className?: {
    sectionContainer?: {
      container?: string;
      title?: string;
      guestsContainer?: string;
    };
    guestModal?: {
      visible: boolean;
      active: string;
    };
    guestCard?: Record<string, string | number | boolean>;
    notPublicYetCard?: string;
  };
}

const GuestsSection = ({
  guestData,
  sectionTitle,
  className,
}: GuestSectionProps) => {
  const [guestModal, setGuestModal] = useState<{
    visible: boolean;
    active: string;
  }>({ visible: false, active: "" });

  return (
    <section
      className={cn(
        "speakers_section ",
        className?.sectionContainer?.container
      )}
    >
      <h1
        className={cn(
          "title text-2xl font-semibold",
          className?.sectionContainer?.title
        )}
      >
        {sectionTitle}
      </h1>
      <div
        className={cn(
          "speakersContainer grid gap-small py-standard place-items-center [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]",
          className?.sectionContainer?.guestsContainer
        )}
      >
        {!!guestData?.length &&
          guestData?.map((guest) =>
            guest.notPublicYet ? (
              <NotPublicYetGuestCard
                placeholder={guest.placeholder}
                className={className?.notPublicYetCard}
                key={guest.id}
              />
            ) : (
              <GuestCard
                key={guest.id}
                {...guest}
                onClick={() =>
                  setGuestModal({ visible: true, active: guest.id })
                }
              />
            )
          )}
      </div>

      <div
        className={`ModalContainer w-full min-h-96 bg-white/80 backdrop-blur-md fixed bottom-0 left-0 z-50 [box-shadow:0px_-20px_50px_rgba(0,0,0,0.18)] transition-translate duration-300 ease-in-out ${
          guestModal.visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-40"
        }`}
      >
        {guestData
          ?.filter((guest) => guest.id === guestModal.active)
          .map((speaker) => (
            <GuestModal
              key={speaker.id}
              modalState={guestModal?.visible}
              closeModal={() => setGuestModal({ visible: false, active: "" })}
              {...speaker}
            />
          ))}
      </div>
    </section>
  );
};

export { GuestCard as Guest, GuestModal, GuestsSection };
