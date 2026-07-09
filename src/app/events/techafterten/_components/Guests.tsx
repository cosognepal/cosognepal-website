"use client";
import { useEffect, useCallback, useState } from "react";
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
  placeholder?: React.ReactNode;
};

function GuestCard({
  image,
  name,
  designation,
  onClick,
}: Omit<TGuestProps, "notPublicYet"> & { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="speakerContainer bg-paper w-full relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer text-left group focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 outline-none"
    >
      <Image
        src={image as StaticImageData}
        alt={name ? `Photo of ${name}` : "Speaker photo"}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-display font-semibold text-base leading-tight">
          {name}
        </h3>
        <p className="text-xs text-white/80 mt-0.5">{designation}</p>
      </div>
    </button>
  );
}

function NotPublicYetGuestCard({
  placeholder,
  className,
}: Pick<TGuestProps, "placeholder"> & { className?: string }) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-paper to-brand-wash aspect-[3/4] w-full flex justify-center items-center animate-pulse rounded-lg",
        className
      )}
    >
      {placeholder}
    </div>
  );
}

function GuestModal({
  name,
  designation,
  image,
  short_intro,
  socials,
  onClose,
}: TGuestProps & { onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`About ${name}`}
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-paper transition-colors"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>

        <div className="flex flex-col sm:flex-row gap-5 p-6 sm:p-8">
          <div className="shrink-0 flex flex-col items-center sm:items-start">
            {image && (
              <div className="relative w-28 h-28 rounded-lg overflow-hidden">
                <Image
                  src={image as StaticImageData}
                  alt={name ? `Photo of ${name}` : "Speaker photo"}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            )}
            {socials && socials.length > 0 && (
              <div className="flex gap-3 mt-2.5 items-center justify-center sm:justify-start">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink-muted hover:text-brand transition-colors"
                  >
                    <Icon iconName={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-ink">
              {name}
            </h3>
            <p className="text-brand text-sm font-medium mt-0.5">{designation}</p>
            {short_intro && (
              <div className="mt-3 space-y-2 text-sm text-ink-muted leading-relaxed">
                {short_intro.map((intro) => (
                  <p key={intro.slice(0, 40)}>{intro}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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

function GuestsSection({
  guestData,
  sectionTitle,
  className,
}: GuestSectionProps) {
  const [activeGuest, setActiveGuest] = useState<string | null>(null);

  const activeData = activeGuest
    ? guestData.find((g) => g.id === activeGuest)
    : null;

  return (
    <section
      className={cn("space-y-6", className?.sectionContainer?.container)}
    >
      <h2
        className={cn(
          "font-display font-semibold text-2xl text-ink",
          className?.sectionContainer?.title
        )}
      >
        {sectionTitle}
      </h2>
      <div
        className={cn(
          "grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          className?.sectionContainer?.guestsContainer
        )}
      >
        {guestData.map((guest) =>
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
              onClick={() => setActiveGuest(guest.id)}
            />
          )
        )}
      </div>

      {activeData && (
        <GuestModal
          {...activeData}
          onClose={() => setActiveGuest(null)}
        />
      )}
    </section>
  );
}

export { GuestCard as Guest, GuestModal, GuestsSection };
