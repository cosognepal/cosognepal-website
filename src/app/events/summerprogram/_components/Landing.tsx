"use client";

import { Icon } from "@/components/Icon";
import { margarine, rubik_wet_paint } from "@/lib/fonts";
import { useEffect, useState } from "react";

function Landing() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const updateScroll = () => {
            const viewportHeight = window.innerHeight || 1;
            const rawProgress = window.scrollY / viewportHeight;
            const clampedProgress = Math.max(0, Math.min(rawProgress, 1));
            setScrollProgress(clampedProgress);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const rightBushScale = 1 + scrollProgress * 0.60;
    const leftBushScale = 1 + scrollProgress * 0.60;

    return (
        <section className="relative min-h-screen overflow-hidden bg-empactathon-bg-green flex justify-center w-full items-center flex-col gap-3 md:gap-1 text-center">

            {/* cloud  leaf */}
            <Icon
                iconName="drippingCloud"
                className="absolute top-[18%] left-0 h-[clamp(120px,20vw,320px)] z-10 pointer-events-none select-none"
                style={{ animation: "cloudFloatLeft 5.5s ease-in-out infinite" }}
            />

            {/* cloud  right */}
            <Icon
                iconName="drippingCloud"
                className="hidden md:block absolute top-[18%] right-0 h-[clamp(120px,20vw,320px)] z-10 pointer-events-none select-none"
                style={{ animation: "cloudFloatRight 6.5s ease-in-out infinite" }}
            />

            {/* right bottom grass */}
            <Icon
                iconName="grassRight"
                className="hidden md:block absolute bottom-0 -right-16 h-[clamp(180px,30vw,520px)] z-30 pointer-events-none select-none object-contain origin-bottom-right transition-transform duration-150 ease-out"
                style={{ transform: `scale(${rightBushScale})` }}
            />

            {/* left bottom  grass */}
            <Icon
                iconName="grassLeft"
                className="hidden md:block absolute bottom-0 -left-16 h-[clamp(180px,30vw,520px)] z-30 pointer-events-none select-none object-contain origin-bottom-left transition-transform duration-150 ease-out"
                style={{ transform: `scale(${leftBushScale})` }}
            />

            {/* Top left  leaf */}
            <Icon
                iconName="leaf"
                className="absolute top-0 -left-44 h-[clamp(80px,10vw,170px)] z-20 pointer-events-none select-none"
            />

            {/* Top right  leaf */}
            <Icon
                iconName="leaf"
                className="absolute top-0 -right-44 h-[clamp(80px,10vw,170px)] -scale-x-100 z-20 pointer-events-none select-none"
            />


            <div className="z-30 px-4">
                <h1 className="md:text-title text-sub-title text-empactathon-dark font-bold leading-tight">
                    Coding for Social Good Nepal presents
                </h1>

                <h1 className={`heading ${rubik_wet_paint.className} text-empactathon-primary md:text-[80px] text-[44px] text-center stroke-white leading-none my-4`}
                    style={{
                        textShadow: "0px -6px white, 0px 10px white"
                    }}>
                    Summer Program
                </h1>

                <p className={`space-x-2 text-empactathon-dark md:text-sub-title text-para font-medium`}>
                    <span className={`${margarine.className}`}>
                        Environment
                    </span>
                    <span className={`${margarine.className}`}>
                        and
                    </span>
                    <span className={`${margarine.className}`}>
                        Computer Science
                    </span>
                </p>

                <a
                    className="inline-block cta px-10 py-4 bg-empactathon-primary text-white rounded-md mt-section uppercase font-bold hover:scale-[1.02] transition-transform duration-200"
                    href="https://instagram.com/cosognepal"
                    target="_blank"
                    rel="noreferrer"
                >
                    Apply Now
                </a>
            </div>

            <style jsx global>{`
                @keyframes cloudFloatLeft {
                    0%,
                    100% {
                        transform: scaleX(-1) translateY(0px);
                    }
                    50% {
                        transform: scaleX(-1) translateY(-10px);
                    }
                }
                @keyframes cloudFloatRight {
                    0%,
                    100% {
                        transform: scaleX(-1) translateY(0px);
                    }
                    50% {
                        transform: scaleX(-1) translateY(-10px);
                    }
                }
            `}</style>

        </section>
    )
}

export default Landing
