export type BlogPost = {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: string | null;
};

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com/";
const PUBLICATION_HOST = "blog.cosognepal.org";

const RECENT_POSTS_QUERY = /* GraphQL */ `
  query RecentPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: Array<{
          node: {
            title: string;
            brief: string;
            slug: string;
            url: string;
            publishedAt: string;
            readTimeInMinutes: number;
            coverImage: { url: string } | null;
          };
        }>;
      };
    };
  };
};

/**
 * Fetches recent blog posts from the Cosog Nepal Hashnode blog.
 * Uses ISR-style caching (1 hour) so the homepage stays fresh
 * without hammering the API on every request.
 *
 * Returns an empty array on any error so callers can fall back
 * gracefully without breaking the page render.
 */
export async function getRecentBlogPosts(
  count: number = 3
): Promise<BlogPost[]> {
  try {
    const res = await fetch(HASHNODE_GQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: RECENT_POSTS_QUERY,
        variables: { host: PUBLICATION_HOST, first: count },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = (await res.json()) as HashnodeResponse;
    const edges = json.data?.publication?.posts?.edges ?? [];

    return edges.map(({ node }) => ({
      title: node.title,
      brief: node.brief,
      slug: node.slug,
      url: node.url,
      publishedAt: node.publishedAt,
      readTimeInMinutes: node.readTimeInMinutes,
      coverImage: node.coverImage?.url ?? null,
    }));
  } catch {
    return [];
  }
}
