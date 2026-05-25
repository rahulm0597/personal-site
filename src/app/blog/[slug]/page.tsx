import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getPost } from "@/lib/mdx";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  try {
    const post = getPost(params.slug);
    return { title: `${post.title} — MyBrand`, description: post.description };
  } catch {
    return {};
  }
}

const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
};

export default function PostPage({ params }: Props) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        ← Back to blog
      </Link>

      {/* Header */}
      <header className="mt-8">
        <time className="text-sm text-gray-400 dark:text-gray-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </time>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <hr className="my-10 border-gray-200 dark:border-gray-700" />

      {/* MDX body */}
      <article className="prose prose-gray dark:prose-invert prose-indigo max-w-none prose-pre:p-0 prose-pre:bg-transparent prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode as any, prettyCodeOptions]],
            },
          }}
        />
      </article>
    </div>
  );
}
