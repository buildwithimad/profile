"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  const isSanityStudio = pathname.startsWith("/dashboard");

  if (isSanityStudio) {
    return null; // Don't render the footer in Sanity Studio
  }

  // Live Clock Logic for Riyadh Time
  useEffect(() => {
    const updateTime = () => {
      const riyadhTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Riyadh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(riyadhTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full flex flex-col items-center justify-center pt-24 pb-8 px-6 md:px-12 mt-auto border-t border-gray-200 dark:border-zinc-900 overflow-hidden relative">
      
      {/* Top Section: Links & Info */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 z-10">
        
        {/* Left: Availability */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#155d3a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#155d3a]"></span>
            </span>
            <p className="text-gray-900 dark:text-white font-bold uppercase tracking-widest text-sm">
              Available for Work
            </p>
          </div>
          <p className="text-gray-500 dark:text-zinc-500 text-sm font-medium">
            Currently accepting new freelance projects.
          </p>
        </div>

        {/* Right: Socials & Navigation */}
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
          <a href="https://github.com/buildwithimad" target="_blank" rel="noreferrer" className="hover:text-[#155d3a] transition-colors">Github</a>
          <a href="https://linkedin.com/in/imad-hussain-khan-76388b305" target="_blank" rel="noreferrer" className="hover:text-[#155d3a] transition-colors">LinkedIn</a>
          <a href="mailto:kimad1728@gmail.com" className="hover:text-[#155d3a] transition-colors">Email</a>
        </div>
      </div>

      {/* Massive Typography Name */}
      <div className="w-full flex justify-center z-10 mb-8 pointer-events-none select-none">
        <h1 className="text-[15vw] leading-none font-black text-gray-100 dark:text-zinc-900/50 tracking-tighter">
          IMAD KHAN
        </h1>
      </div>

      {/* Bottom Section: Copyright & Live Clock */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-center gap-4 z-10 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-600">
        <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        
        <div className="flex items-center gap-2 hover:text-[#155d3a] transition-colors cursor-default">
          <span>LOCAL TIME (RIYADH):</span>
          {/* Fallback to '...' while the client loads the time to prevent hydration mismatch */}
          <span className="text-gray-900 dark:text-white min-w-[100px] text-right">
            {time || "LOADING..."}
          </span>
        </div>
      </div>

    </footer>
  );
}