"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <span className="inline-block w-8 h-8 bg-indigo-600 rounded-lg" aria-hidden="true" />
            MyBrand
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-1">
            <ThemeToggle />

          {/* Hamburger button (mobile only) */}
          <button
            className="sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-4 pb-4 pt-2 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
