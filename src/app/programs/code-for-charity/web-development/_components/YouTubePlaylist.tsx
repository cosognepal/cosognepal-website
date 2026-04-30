"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  publishedAt?: string;
}

interface YouTubePlaylistProps {
  playlistId: string;
}

// YouTube thumbnail URL helper
const getThumbnailUrl = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};


export default function YouTubePlaylist({ playlistId }: YouTubePlaylistProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [playlistTitle, setPlaylistTitle] = useState("Video Lectures");
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const playlistContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch playlist videos
    // Note: Without YouTube Data API v3, we'll use a workaround
    // For production, you should use YouTube Data API v3 with an API key
    const fetchPlaylistVideos = async () => {
      try {
        // Try to fetch from our API route
        const response = await fetch(`/api/youtube-playlist?playlistId=${playlistId}`);
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
          setPlaylistTitle(data.title || "Video Lectures");
        } else {
          // Fallback: Use YouTube's embed API approach
          // We'll create a placeholder that works with the embed
          // In production, you'd fetch actual video data from YouTube Data API
          setVideos([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist:", error);
        setLoading(false);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId]);

  // Match playlist container height to video player height
  useEffect(() => {
    const matchHeights = () => {
      if (videoPlayerRef.current && playlistContainerRef.current) {
        const videoHeight = videoPlayerRef.current.offsetHeight;
        
        if (videoHeight > 0) {
          // Set the playlist container height to match video player height
          playlistContainerRef.current.style.height = `${videoHeight}px`;
        }
      }
    };

    // Initial match with delay to ensure elements are rendered
    const timeoutId = setTimeout(matchHeights, 100);
    
    // Match on resize
    window.addEventListener("resize", matchHeights);
    
    // Use ResizeObserver for more accurate height tracking
    let resizeObserver: ResizeObserver | null = null;
    if (videoPlayerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(matchHeights);
      resizeObserver.observe(videoPlayerRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", matchHeights);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [videos, loading, selectedVideoIndex]);

  // Get embed URL - use index parameter to start at specific video
  const getEmbedUrl = (index: number = 0) => {
    if (videos.length > 0 && videos[index]) {
      return `https://www.youtube.com/embed/${videos[index].id}?list=${playlistId}&index=${index + 1}`;
    }
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${index + 1}`;
  };

  const handleVideoClick = (index: number) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-para md:text-sub-title text-black-dark">
          {playlistTitle}
        </h2>
      </div>

      {/* Description */}
      <div className="">
        <p className="text-sub-para md:text-para text-black-mid leading-relaxed">
          We believe learning should be accessible to everyone. That&apos;s why all our recorded lecture sessions from the Web Development Program are available here for free.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Main Video Player - Left Side */}
        <div className="flex-1 w-full min-w-0" ref={videoPlayerRef}>
          <div className="relative w-full bg-gray-bg rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              key={selectedVideoIndex}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={getEmbedUrl(selectedVideoIndex)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video List - Right Side */}
        <div className="w-full lg:w-96 flex flex-col">
          <div ref={playlistContainerRef} className="bg-gray-bg rounded-lg p-4 flex flex-col overflow-hidden">
            <div ref={headerRef} className="flex items-center justify-between mb-4 flex-shrink-0">
              <h3 className="font-bold text-mid-title text-black-dark">
                Playlist Videos
              </h3>
            </div>
            
            {loading ? (
              <div className="text-center py-8 text-black-mid flex-1 flex items-center justify-center">
                Loading playlist...
              </div>
            ) : videos.length > 0 ? (
              <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-1 min-h-0">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoClick(index)}
                    className={`w-full text-left p-2 rounded transition-all cursor-pointer ${
                      index === selectedVideoIndex
                        ? "bg-gray-primary border-l-4 border-blue-blue"
                        : "bg-white hover:bg-gray-primary border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* Thumbnail */}
                      <div className="relative flex-shrink-0 w-[140px] h-[80px] bg-gray-border rounded overflow-hidden">
                        <Image
                          src={video.thumbnail || getThumbnailUrl(video.id)}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="140px"
                        />
                        {video.duration && (
                          <div className="absolute bottom-1 right-1 bg-black-dark/90 text-white px-1.5 py-0.5 rounded text-[11px] font-medium">
                            {video.duration}
                          </div>
                        )}
                      </div>
                      
                      {/* Video Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                        <h4 className={`font-medium text-sub-para line-clamp-2 mb-1 ${
                          index === selectedVideoIndex ? "text-black-dark" : "text-black-mid"
                        }`}>
                          {video.title}
                        </h4>
                        {video.publishedAt && (
                          <p className="text-info text-black-mid text-xs">
                            {video.publishedAt}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                <a
                  href={`https://www.youtube.com/playlist?list=${playlistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-md hover:bg-gray-primary transition border-2 border-blue-blue"
                >
                  <p className="font-medium text-sub-para text-black-dark">
                    📺 View Full Playlist on YouTube
                  </p>
                  <p className="text-info text-black-mid mt-1">
                    Click to open all videos in YouTube
                  </p>
                </a>
                <div className="text-sub-para text-black-mid p-3 bg-white rounded-md border border-gray-border">
                  <p className="font-medium mb-2">How to navigate:</p>
                  <ul className="list-disc list-inside space-y-1 text-info">
                    <li>Use controls in the video player</li>
                    <li>Click &quot;View Full Playlist&quot; above</li>
                    <li>Videos will auto-advance in the player</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
