import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600">Your Name</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I build things for the web. This is my personal site — a place for my
          writing, projects, and ideas.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Read the Blog
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Blog",
            description: "Thoughts on design, engineering, and the internet.",
            href: "/blog",
          },
          {
            title: "Projects",
            description: "Things I've built and shipped over the years.",
            href: "/projects",
          },
          {
            title: "Contact",
            description: "Want to work together? Let's talk.",
            href: "/contact",
          },
        ].map(({ title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
            <span className="mt-4 inline-block text-indigo-600 text-sm font-medium">
              Explore &rarr;
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
