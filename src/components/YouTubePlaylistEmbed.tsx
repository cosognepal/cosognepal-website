"use client";

import { useState, useEffect } from "react";

type PlaylistVideo = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
};

type YouTubePlaylistEmbedProps = {
  playlistId: string;
  title: string;
  className?: string;
};

export default function YouTubePlaylistEmbed({
  playlistId,
  title,
  className,
}: YouTubePlaylistEmbedProps) {
  const [videos, setVideos] = useState<PlaylistVideo[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/youtube-playlist?playlistId=${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.videos?.length) setVideos(data.videos);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [playlistId]);

  const activeVideo = videos[activeIndex];
  const embedSrc = activeVideo
    ? `https://www.youtube.com/embed/${activeVideo.id}?rel=0&list=${playlistId}`
    : `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <section className={className}>
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2 className="font-display font-semibold text-xl text-ink tracking-[-0.015em]">
          {title}
        </h2>
        <a
          href={`https://www.youtube.com/playlist?list=${playlistId}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          Watch on YouTube
        </a>
      </div>

      <div className="mt-4 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative aspect-video overflow-hidden rounded-lg border border-rule bg-black">
          <iframe
            src={embedSrc}
            title={activeVideo?.title ?? title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {videos.length > 1 && (
          <div className="lg:w-72 max-h-[400px] overflow-y-auto rounded-lg border border-rule bg-paper">
            <div className="p-3 border-b border-rule">
              <p className="text-xs font-medium text-muted uppercase tracking-wide">
                {videos.length} videos
              </p>
            </div>
            <ul className="divide-y divide-rule">
              {videos.map((video, i) => (
                <li key={video.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left flex gap-3 p-3 transition-colors ${
                      i === activeIndex
                        ? "bg-brand/5 border-l-2 border-l-brand"
                        : "hover:bg-paper-dark border-l-2 border-l-transparent"
                    }`}
                  >
                    <span className="shrink-0 text-xs text-muted w-4 pt-0.5 text-right">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`text-sm leading-snug line-clamp-2 ${
                          i === activeIndex
                            ? "font-medium text-near-black"
                            : "text-ink-muted"
                        }`}
                      >
                        {video.title}
                      </p>
                      {video.duration && (
                        <span className="text-xs text-muted mt-0.5 block">
                          {video.duration}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {loading && videos.length === 0 && (
        <p className="text-sm text-muted mt-3">Loading playlist...</p>
      )}
    </section>
  );
}

