export type BlogPost = {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: string | null;
};

const BLOG_RSS_URL = "https://blog.cosognepal.org/rss.xml";

function readRssTag(block: string, tag: string): string {
  const cdataMatch = block.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdataMatch?.[1]) return cdataMatch[1].trim();

  const plainMatch = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return plainMatch?.[1]?.trim() ?? "";
}

function readEnclosureUrl(block: string): string | null {
  const match = block.match(/<enclosure\s+url="([^"]+)"/);
  return match?.[1] ?? null;
}

function slugFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    return pathname.split("/").filter(Boolean).pop() ?? "";
  } catch {
    return "";
  }
}

function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function parseRssItem(block: string): BlogPost | null {
  const title = readRssTag(block, "title");
  const url = readRssTag(block, "link");
  if (!title || !url) return null;

  const description = readRssTag(block, "description");
  const pubDate = readRssTag(block, "pubDate");

  return {
    title,
    brief: description,
    slug: slugFromUrl(url),
    url,
    publishedAt: pubDate ? new Date(pubDate).toISOString() : "",
    readTimeInMinutes: estimateReadTime(description),
    coverImage: readEnclosureUrl(block),
  };
}

function parseRss(xml: string, count: number): BlogPost[] {
  const items = xml.split("<item>").slice(1, count + 1);

  return items
    .map((block) => parseRssItem(block.split("</item>")[0] ?? block))
    .filter((post): post is BlogPost => post !== null);
}

/**
 * Fetches recent blog posts from the Cosog Nepal Hashnode blog RSS feed.
 * Hashnode's public GraphQL API was retired, so RSS is the stable source.
 */
export async function getRecentBlogPosts(
  count: number = 3
): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_RSS_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    if (!xml.includes("<rss")) return [];

    return parseRss(xml, count);
  } catch {
    return [];
  }
}
