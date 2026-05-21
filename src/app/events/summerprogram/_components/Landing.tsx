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
        <section id="hero" className="relative min-h-screen overflow-hidden bg-empactathon-bg-green flex justify-center w-full items-center flex-col gap-3 md:gap-1 text-center">

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
                    Summer Camp
                </h1>

                <p className={`space-x-2 text-empactathon-dark md:text-sub-title text-para font-medium`}>
                    <span className={`${margarine.className}`}>
                        Environmental
                    </span>
                    <span className={`${margarine.className}`}>
                        and
                    </span>
                    <span className={`${margarine.className}`}>
                        Computer Science
                    </span>
                </p>

                <div className="mt-5 md:mt-6 flex flex-col items-center gap-1.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-empactathon-dark/70 font-bold">
                        Program timeline ·{" "}
                        <time dateTime="2026-06/2026-09" className="tabular-nums">
                            2026
                        </time>
                    </p>

                    <div className="inline-flex items-center gap-1.5 md:gap-3 rounded-xl bg-white/80 backdrop-blur-md border border-empactathon-primary/20 px-3 md:px-6 py-2 md:py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                        <div className="text-center min-w-[64px] md:min-w-[76px]">
                            <p className={`${margarine.className} text-xl md:text-2xl text-empactathon-primary leading-none`}>
                                June
                            </p>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black-mid/70 mt-0.5 font-semibold">
                                Starts
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1 px-0.5 md:px-1">
                            <div className="flex items-center gap-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-empactathon-primary" />
                                <span className="h-px w-7 md:w-12 bg-gradient-to-r from-empactathon-primary/40 via-empactathon-primary to-empactathon-primary/40 rounded-full" />
                                <span className="h-1.5 w-1.5 rounded-full bg-empactathon-primary" />
                            </div>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] font-bold text-empactathon-dark/70 whitespace-nowrap">
                                16 weeks
                            </span>
                        </div>

                        <div className="text-center min-w-[64px] md:min-w-[76px]">
                            <p className={`${margarine.className} text-xl md:text-2xl text-empactathon-primary leading-none`}>
                                September
                            </p>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black-mid/70 mt-0.5 font-semibold">
                                Showcase
                            </p>
                        </div>
                    </div>
                </div>
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
