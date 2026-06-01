"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock, Megaphone, X } from "lucide-react";

const STORAGE_KEY = "cosog_announcement_summer_camp_2026_dismissed";

type AnnouncementBannerProps = {
  message: string;
  ctaText?: string;
  ctaHref: string;
  /** ISO date string. When provided, a live countdown chip is shown. */
  deadline?: string;
};

function formatRemaining(distanceMs: number): string {
  const days = Math.floor(distanceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distanceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distanceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distanceMs % (1000 * 60)) / 1000);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (days > 0) {
    return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export default function AnnouncementBanner({
  message,
  ctaText,
  ctaHref,
  deadline,
}: AnnouncementBannerProps) {
  const [visible, setVisible] = useState(false);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || !deadline) return;
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [visible, deadline]);

  if (!visible) return null;

  const deadlineMs = deadline ? new Date(deadline).getTime() : null;
  const remaining = deadlineMs !== null ? Math.max(0, deadlineMs - now) : null;
  const isClosed = remaining === 0;
  const countdownText =
    remaining !== null && remaining > 0 ? formatRemaining(remaining) : null;

  const handleDismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <div className="w-full bg-accent_yellow-100 border-b border-accent_yellow-200 text-black-dark">
      <div className="w-full max-w-[1400px] mx-auto px-standard py-2 flex items-center gap-3">
        <Megaphone
          className="h-4 w-4 shrink-0 text-accent_yellow-800"
          aria-hidden
        />

        <div className="flex-1 min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-sub-para md:text-para leading-snug">
          <span className="font-medium">{message}</span>


        </div>

        {countdownText && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent_yellow-200/80 px-2 sm:px-2.5 py-0.5 text-info md:text-sub-para font-semibold text-accent_yellow-800 tabular-nums">
            <Clock className="h-3 w-3" aria-hidden />
            <span>
              <span className="hidden sm:inline">Closes in </span>
              <span className="font-mono">{countdownText}</span>
            </span>
          </span>
        )}

        {/* {isClosed && (
          <span className="inline-flex shrink-0 items-center rounded-full bg-accent_yellow-200/80 px-2.5 py-0.5 text-info md:text-sub-para font-semibold text-accent_yellow-800">
            Applications closed
          </span>
        )} */}

        {ctaText && <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-bold underline-offset-4 hover:underline transition-colors duration-200 pr-4"
        >
          {ctaText}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </a>}

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 p-1 rounded-md text-black-mid hover:text-black-dark hover:bg-accent_yellow-200/60 transition-colors duration-200"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
