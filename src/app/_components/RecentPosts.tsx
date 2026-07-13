import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { getRecentBlogPosts, type BlogPost } from "@/lib/blog";

const BLOG_HOME_URL = "https://blog.cosognepal.org";

/** Hashnode / OG cover size used on blog.cosognepal.org */
const BLOG_COVER_ASPECT = "1200 / 628";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default async function RecentPosts() {
  const posts = await getRecentBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-surface-alt">
      <Container className="space-y-8">
        <SectionHeading viewall={BLOG_HOME_URL} viewallExternal>
          Recent Posts
        </SectionHeading>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const date = formatDate(post.publishedAt);

  return (
    <Link
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
    >
      <article className="card-shell group flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-surface">
        <div
          className="relative w-full overflow-hidden bg-brand-wash"
          style={{ aspectRatio: BLOG_COVER_ASPECT }}
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm font-semibold text-brand">
                Cosog Nepal Blog
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
            {date ? (
              <time dateTime={post.publishedAt}>{date}</time>
            ) : null}
            {date && post.readTimeInMinutes ? (
              <span aria-hidden className="text-rule">
                ·
              </span>
            ) : null}
            {post.readTimeInMinutes ? (
              <span>{post.readTimeInMinutes} min read</span>
            ) : null}
          </div>

          <h3 className="font-display font-semibold text-lg text-ink leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 flex-1 max-w-prose">
            {post.brief}
          </p>

          <span className="card-arrow inline-flex items-center gap-2 text-sm font-semibold text-brand pt-1">
            Read article
            <span aria-hidden>→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
