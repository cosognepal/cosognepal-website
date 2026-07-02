"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  SESSIONS_PAGE_SUBTITLE,
  SESSIONS_PAGE_TITLE,
  sessionSeries,
  type SessionSeries,
} from "../_data/sessions";
import { scBorder, scMuted, scPrimary, scRadius, scSageBg } from "../_data/ui";
import Footer from "./Footer";

function getEmbedSrc(series: SessionSeries, videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?list=${series.playlistId}&rel=0`;
}

function getThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function SeriesView({ series }: { series: SessionSeries }) {
  const [activeVideoId, setActiveVideoId] = useState(
    series.videos[0]?.videoId ?? ""
  );

  const embedSrc = useMemo(
    () => getEmbedSrc(series, activeVideoId),
    [series, activeVideoId]
  );

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <div className="w-full lg:w-[65%]">
        <div
          className={`relative aspect-video overflow-hidden ${scRadius} ${scBorder} bg-black`}
        >
          <iframe
            key={embedSrc}
            src={embedSrc}
            title={`${series.label} session`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      <div className="w-full lg:w-[35%]">
        <ul className={`max-h-[420px] overflow-y-auto ${scRadius} ${scBorder}`}>
          {series.videos.map((video) => {
            const isActive = video.videoId === activeVideoId;
            return (
              <li key={video.videoId}>
                <button
                  type="button"
                  onClick={() => setActiveVideoId(video.videoId)}
                  className={cn(
                    "flex w-full items-start gap-3 border-b border-[#1B5E20]/10 p-3 text-left transition-colors last:border-b-0",
                    isActive
                      ? "border-l-[3px] border-l-[#1B5E20] bg-[#D4E8C4]/50"
                      : "border-l-[3px] border-l-transparent hover:bg-[#D4E8C4]/25"
                  )}
                >
                  <div
                    className={`relative h-14 w-24 shrink-0 overflow-hidden ${scRadius} bg-[#D4E8C4]/40`}
                  >
                    <Image
                      src={getThumbnailUrl(video.videoId)}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className={cn(
                        "text-sm leading-snug",
                        isActive ? "font-semibold text-empactathon-dark" : scMuted
                      )}
                    >
                      {video.title}
                    </p>
                    {video.duration && (
                      <p className="mt-1 text-xs text-black-light">
                        {video.duration}
                      </p>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function SessionsPageContent() {
  const [activeSeriesId, setActiveSeriesId] = useState(
    sessionSeries[0]?.id ?? ""
  );
  const activeSeries =
    sessionSeries.find((s) => s.id === activeSeriesId) ?? sessionSeries[0];

  return (
    <div className="space-y-section">
      <header className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 pt-section space-y-2">
        <Link
          href="/"
          className="inline-block text-sm font-medium text-black-mid hover:text-[#1B5E20] transition-colors"
        >
          ← Back to Summer Camp
        </Link>
        <h1 className="text-2xl font-bold text-empactathon-dark">
          {SESSIONS_PAGE_TITLE}
        </h1>
        <p className={`text-sm ${scMuted} max-w-2xl`}>
          {SESSIONS_PAGE_SUBTITLE}
        </p>
      </header>

      <div className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 space-y-6">
        <div className="flex flex-wrap gap-2">
          {sessionSeries.map((series) => (
            <button
              key={series.id}
              type="button"
              onClick={() => setActiveSeriesId(series.id)}
              className={cn(
                `${scRadius} px-4 py-2 text-sm font-medium transition-colors`,
                activeSeriesId === series.id
                  ? "bg-[#1B5E20] text-white"
                  : `${scBorder} ${scSageBg} ${scPrimary} hover:border-[#1B5E20]/30`
              )}
            >
              {series.label}
            </button>
          ))}
        </div>

        {activeSeries && <SeriesView series={activeSeries} />}
      </div>

      <Footer />
    </div>
  );
}
