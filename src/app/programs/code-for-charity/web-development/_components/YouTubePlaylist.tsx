"use client";

interface YouTubePlaylistProps {
  playlistId: string;
}

export default function YouTubePlaylist({ playlistId }: YouTubePlaylistProps) {
  // Embed URL for the playlist - YouTube will handle navigation automatically
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <div className="w-full space-y-6">
      <h2 className="font-bold text-para md:text-sub-title text-black-dark">
        Video Lectures
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Main Video Player - Left Side */}
        <div className="flex-1 w-full min-w-0">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-sub-para text-black-mid mt-3">
            Use the playlist controls in the video player to navigate between videos, or click on videos in the list on the right.
          </p>
        </div>

        {/* Video List - Right Side */}
        <div className="w-full lg:w-96 lg:max-h-[600px] overflow-y-auto">
          <div className="bg-gray-bg rounded-lg p-4 sticky top-0">
            <h3 className="font-bold text-mid-title text-black-dark mb-4">
              Playlist Videos
            </h3>
            <div className="space-y-2">
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
                  Open all videos in YouTube for better navigation
                </p>
              </a>
              <div className="text-sub-para text-black-mid p-3 bg-white rounded-md border border-gray-border">
                <p className="font-medium mb-2">How to navigate:</p>
                <ul className="list-disc list-inside space-y-1 text-info">
                  <li>Use controls in the video player</li>
                  <li>Click "View Full Playlist" above</li>
                  <li>Videos will auto-advance in the player</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
