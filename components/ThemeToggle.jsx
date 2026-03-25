"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

   const pathname = usePathname();
  
    const isSanityStudio = pathname.startsWith("/dashboard");
  
    if (isSanityStudio) {
      return null; // Don't render the footer in Sanity Studio
    }

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-3 cursor-pointer rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-zinc-800 shadow-lg hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-white"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        // Sun Icon for Dark Mode (click to go light)
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        // Moon Icon for Light Mode (click to go dark)
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
}