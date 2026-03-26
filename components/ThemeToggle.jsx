"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // <-- Using Lucide to perfectly match your other icons!

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  // Renders a perfectly sized invisible placeholder before loading
  if (!mounted) return <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px]" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // Notice the specific background color here to make it look like a physical switch!
      className="flex items-center justify-center w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] cursor-pointer rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="sm:w-5 sm:h-5" />
      ) : (
        <Moon size={18} className="sm:w-5 sm:h-5" />
      )}
    </button>
  );
}