"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? (
        // Sun
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-9H21M3 12H2m15.07-6.07-.71.71M6.64 17.36l-.71.71M17.66 17.36l.71.71M6.64 6.64l-.71-.71M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      ) : (
        // Moon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
