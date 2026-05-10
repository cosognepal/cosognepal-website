"use client";

import Image from "next/image";
import naaeeLogo from "@/assets/images/SummerCamp/NAAEE_logo.png";
import rtxLogo from "@/assets/images/SummerCamp/Pratt_and_whitney_RTX_logo.png";

type Supporter = {
  name: string;
  wordmark: string;
  // If/when we add official assets, set src to an imported StaticImageData or URL.
  src?: any;
  imgClassName?: string;
  imgWrapClassName?: string;
};

const SUPPORTERS: Supporter[] = [
  {
    name: "North American Association for Environmental Education",
    wordmark: "NAAEE",
    src: naaeeLogo,
    imgClassName: "h-14 sm:h-16 md:h-20",
    imgWrapClassName: "max-w-[320px] md:max-w-[380px]",
  },
  {
    name: "RTX Corporation",
    wordmark: "RTX",
    src: rtxLogo,
    imgClassName: "h-12 sm:h-14 md:h-[84px]",
    imgWrapClassName: "max-w-[300px] md:max-w-[360px]",
  },
];

export default function SupportedBy() {
  return (
    <section
      aria-label="Supported by"
      className="w-full"
    >
      <div className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0">
        <div className="rounded-2xl border border-empactathon-primary/12 bg-empactathon-bg-green/60 px-standard py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-[0.22em] text-black-mid/70">
                Supported by
              </div>
              <div className="text-empactathon-dark font-extrabold text-xl md:text-2xl leading-tight">
                Partners backing this program
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full md:max-w-[820px]">
              {SUPPORTERS.map((s) => (
                <div
                  key={s.wordmark}
                  title={s.name}
                  className="rounded-2xl bg-white/85 backdrop-blur-sm border border-empactathon-primary/12 shadow-sm p-4 md:p-6 flex items-center justify-center"
                >
                  {s.src ? (
                    <div className={`w-full flex items-center justify-center ${s.imgWrapClassName ?? ""}`}>
                      <Image
                        src={s.src}
                        alt={`${s.name} logo`}
                        className={`${s.imgClassName ?? "h-14 md:h-20"} w-auto object-contain grayscale opacity-90`}
                        priority={false}
                      />
                    </div>
                  ) : (
                    <span className="text-empactathon-dark/80 font-extrabold tracking-[0.12em] text-xl">
                      {s.wordmark}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

