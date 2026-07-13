import { NextResponse } from "next/server";

type PlaylistVideo = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playlistId = searchParams.get("playlistId");

  if (!playlistId) {
    return NextResponse.json({ error: "Playlist ID is required" }, { status: 400 });
  }

  try {
    // Try to fetch playlist page and extract video IDs
    // This is a workaround - for production, use YouTube Data API v3 with an API key
    const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
    
    // Fetch the playlist page HTML
    const response = await fetch(playlistUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch playlist");
    }

    const html = await response.text();
    
    // Extract video IDs from the HTML
    // YouTube stores video data in ytInitialData
    const ytInitialDataMatch = html.match(/var ytInitialData = ({.+?});/);
    
    if (ytInitialDataMatch) {
      try {
        const data = JSON.parse(ytInitialDataMatch[1]);
        const videos: PlaylistVideo[] = [];
        
        // Navigate through YouTube's data structure
        const contents = data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents;
        
        if (contents) {
          for (const section of contents) {
            const items = section?.itemSectionRenderer?.contents?.[0]?.playlistVideoListRenderer?.contents;
            if (items) {
              for (const item of items) {
                const video = item?.playlistVideoRenderer;
                if (video?.videoId) {
                  videos.push({
                    id: video.videoId,
                    title: video.title?.runs?.[0]?.text || video.title?.simpleText || "Untitled",
                    thumbnail: `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`,
                    duration: video.lengthText?.simpleText || "",
                    publishedAt: video.publishedTimeText?.simpleText || "",
                  });
                }
              }
            }
          }
        }
        
        if (videos.length > 0) {
          return NextResponse.json({
            playlistId,
            title: data?.metadata?.playlistMetadataRenderer?.title || "Playlist",
            videos,
          });
        }
      } catch (parseError) {
        console.error("Error parsing YouTube data:", parseError);
      }
    }
    
    // Fallback: Return empty array
    return NextResponse.json({
      playlistId,
      title: "Video Lectures",
      videos: [],
    });
  } catch (error) {
    console.error("Error fetching playlist:", error);
    return NextResponse.json(
      { 
        playlistId,
        title: "Video Lectures",
        videos: [],
        error: "Failed to fetch playlist. Please use YouTube directly." 
      },
      { status: 200 } // Return 200 so component can handle gracefully
    );
  }
}
