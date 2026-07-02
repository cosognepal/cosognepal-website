export type SessionVideo = {
  title: string;
  videoId: string;
  duration?: string;
};

export type SessionSeries = {
  id: string;
  label: string;
  playlistId: string;
  videos: SessionVideo[];
};

export const SESSIONS_PAGE_TITLE = "Session Recordings";

export const SESSIONS_PAGE_SUBTITLE =
  "Every session from the Summer Camp — recorded and free for anyone to learn from.";

export const SESSIONS_TEASER_TEXT =
  "ℹ️ Most of our sessions are recorded and free for everyone";

export const sessionSeries: SessionSeries[] = [
  {
    id: "environmental-science",
    label: "Environmental Science",
    playlistId: "PLKE1X1xZFAFfn0dNeyG0qraZfnmP_W4zU",
    videos: [
      { title: "Session 1: …", videoId: "yOIGVyETtro" },
      { title: "Session 2: …", videoId: "4J0DEoMvoZs" },
      { title: "Session 3: …", videoId: "u8lOhQ3QSQY" },
      { title: "Session 4: …", videoId: "1pK7f0Yd4N0" },
      { title: "Session 5: …", videoId: "Ca2K3imZ5EA" },
      { title: "Session 6: …", videoId: "Mlh4yPfnFj4" },
      { title: "Session 7: …", videoId: "0mM5mfKK7g8" },
      { title: "Session 8: …", videoId: "cdsVx1w-U9g" },
    ],
  },
];
