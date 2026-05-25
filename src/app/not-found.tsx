import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
        404
      </p>
      <h1 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, I couldn&apos;t find the page you&apos;re looking for. It may
        have moved or never existed.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
