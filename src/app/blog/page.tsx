import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

export const metadata = {
  title: "Blog — Rahul Maurya",
  description: "Writing on Next.js, Tailwind, and building for the web.",
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-400">
        {posts.length} post{posts.length !== 1 ? "s" : ""}
      </p>

      <ul className="mt-12 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <time className="text-sm text-gray-400 dark:text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>

              <h2 className="mt-1 text-2xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Read more →
              </Link>
            </article>

            <div className="mt-10 border-t border-gray-100 dark:border-gray-800" />
          </li>
        ))}
      </ul>
    </div>
  );
}
