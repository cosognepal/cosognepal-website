import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/SectionTitle";
import { getRecentBlogPosts, type BlogPost } from "@/lib/blog";

const BLOG_HOME_URL = "https://blog.cosognepal.org";

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
    <Section spacing="block" className="bg-white">
      <Container className="space-y-block">
        <SectionTitle title="Recent posts" viewall={BLOG_HOME_URL} />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-standard">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const date = formatDate(post.publishedAt);

  return (
    <Link
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white border border-black-mid/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-black-mid/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-bg">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-bg to-accent_yellow-50 text-black-mid text-sub-para">
            Coding for Social Good Nepal
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-standard">
        <div className="flex items-center gap-2 text-info text-black-mid">
          {date && <time dateTime={post.publishedAt}>{date}</time>}
          {date && post.readTimeInMinutes ? (
            <span aria-hidden className="h-1 w-1 rounded-full bg-black-mid/50" />
          ) : null}
          {post.readTimeInMinutes ? (
            <span>{post.readTimeInMinutes} min read</span>
          ) : null}
        </div>

        <h3 className="font-bold text-mid-title text-black-mid leading-snug line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sub-para text-black-mid leading-relaxed line-clamp-3">
          {post.brief}
        </p>

        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-black-mid text-white px-4 py-2 text-sub-para font-semibold">
            Read article
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
