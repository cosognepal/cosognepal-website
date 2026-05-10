"use client";

import { Icon } from "@/components/Icon";
import { margarine, rubik_wet_paint } from "@/lib/fonts";
import { useEffect, useState } from "react";

type Countdown = {
    status: "open" | "closed";
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function getCountdown(targetIsoWithOffset: string): Countdown {
    const target = new Date(targetIsoWithOffset).getTime();
    const now = Date.now();
    const diff = target - now;

    if (!Number.isFinite(target) || diff <= 0) {
        return { status: "closed", days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { status: "open", days, hours, minutes, seconds };
}

function TimeBox({ label, value }: { label: string; value: number }) {
    return (
        <div className="rounded-lg bg-white/70 backdrop-blur-sm border border-empactathon-primary/20 px-3 py-2 min-w-[68px]">
            <div className="text-empactathon-dark text-xl md:text-2xl font-extrabold leading-none tabular-nums">
                {String(value).padStart(2, "0")}
            </div>
            <div className="text-[11px] md:text-xs uppercase tracking-widest text-black-mid/80 mt-1">
                {label}
            </div>
        </div>
    );
}

function Landing({ applyLink }: { applyLink: string }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const deadline = "2026-05-20T23:59:59+05:45";
    const [countdown, setCountdown] = useState<Countdown>(() =>
        getCountdown(deadline)
    );

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

    useEffect(() => {
        const t = window.setInterval(() => setCountdown(getCountdown(deadline)), 1000);
        setCountdown(getCountdown(deadline));
        return () => window.clearInterval(t);
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

                <p className="mt-6 text-empactathon-dark text-sm md:text-base font-semibold">
                    Application deadline:{" "}
                    <time dateTime="2026-05-20">May 20, 2026</time>
                </p>

                <div className="mt-4 flex flex-col items-center gap-3">
                    {countdown.status === "open" ? (
                        <>
                            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                                <TimeBox label="Days" value={countdown.days} />
                                <TimeBox label="Hours" value={countdown.hours} />
                                <TimeBox label="Min" value={countdown.minutes} />
                                <TimeBox label="Sec" value={countdown.seconds} />
                            </div>
                        </>
                    ) : (
                        <div className="inline-flex items-center rounded-full bg-white/70 backdrop-blur-sm border border-empactathon-primary/20 px-4 py-2 text-empactathon-dark font-bold">
                            Applications closed
                        </div>
                    )}
                </div>

                <a
                    className="inline-block cta px-10 py-4 bg-empactathon-primary text-white rounded-md mt-10 uppercase font-bold hover:scale-[1.02] transition-transform duration-200"
                    href={applyLink}
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
