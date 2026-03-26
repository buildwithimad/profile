"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Twitter, Mail  } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram   } from "react-icons/fa6";
import { SiGithub  } from "react-icons/si";


export default function Footer() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  const isSanityStudio = pathname.startsWith("/dashboard");

  if (isSanityStudio) {
    return null; 
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
    <footer className="w-full relative bg-white dark:bg-[#0a0a0a] pt-32 pb-8 px-6 md:px-12 mt-auto border-t border-gray-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
      
      {/* BACKGROUND GLOW (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] h-[300px] bg-[#155d3a]/5 dark:bg-[#B9FF3B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col relative z-10">
        
        {/* TOP SECTION: Logo, Intro & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 mb-24 md:mb-32">
          
          {/* Left Side: MASSIVE LOGO & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            {/* BIG LOGO */}
            <Link href="/" className="relative w-28 h-28 md:w-40 md:h-40 flex-shrink-0 hover:scale-105 hover:-rotate-3 transition-all duration-500 rounded-3xl md:rounded-[2rem] overflow-hidden dark:border-zinc-800">
              <Image 
                src="/Logo.png" // Make sure this matches your actual logo file in the /public folder!
                alt="Imad Khan Logo"
                fill
                className="object-cover"
              />
            </Link>

            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
                Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155d3a] to-emerald-600 dark:from-[#B9FF3B] dark:to-emerald-400">extraordinary.</span>
              </h3>
              
             
            </div>
          </div>

          {/* Right Side: Navigation Icons & Contact */}
          <div className="flex flex-col items-start lg:items-end gap-10 w-full lg:w-auto">
            
            {/* Premium Social Icons Row */}
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 dark:text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs text-left lg:text-right">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/buildwithimad" target="_blank" rel="noreferrer" 
                   className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0f0f0f] hover:bg-[#155d3a] hover:border-[#155d3a] dark:hover:bg-[#B9FF3B] dark:hover:border-[#B9FF3B] hover:text-white dark:hover:text-black hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <SiGithub size={24} />
                </a>
                
                <a href="https://linkedin.com/in/imad-hussain-khan-76388b305" target="_blank" rel="noreferrer" 
                   className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0f0f0f] hover:bg-[#155d3a] hover:border-[#155d3a] dark:hover:bg-[#B9FF3B] dark:hover:border-[#B9FF3B] hover:text-white dark:hover:text-black hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <FaLinkedin  size={24} />
                </a>

                <a href="https://x.com/imadhussainkhan" target="_blank" rel="noreferrer" 
                   className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0f0f0f] hover:bg-[#155d3a] hover:border-[#155d3a] dark:hover:bg-[#B9FF3B] dark:hover:border-[#B9FF3B] hover:text-white dark:hover:text-black hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <FaXTwitter size={24} />
                </a>

                <a href="https://instagram.com/devnexstudio" target="_blank" rel="noreferrer" 
                   className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0f0f0f] hover:bg-[#155d3a] hover:border-[#155d3a] dark:hover:bg-[#B9FF3B] dark:hover:border-[#B9FF3B] hover:text-white dark:hover:text-black hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <FaInstagram size={24} />
                </a>

              </div>
            </div>

            {/* Email CTA Button */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h4 className="text-gray-400 dark:text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs text-left lg:text-right">Start a Conversation</h4>
              <a href="mailto:kimad1728@gmail.com" className="group flex items-center justify-between gap-6 px-6 py-4 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-[#1a1a1a] transition-colors w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#155d3a] dark:text-[#B9FF3B]" size={20} />
                  <span className="text-gray-900 dark:text-white font-bold tracking-wide text-sm md:text-base">kimad1728@gmail.com</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-800 group-hover:bg-[#155d3a] dark:group-hover:bg-[#B9FF3B] group-hover:text-white dark:group-hover:text-black transition-colors">
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* MASSIVE OUTLINE TYPOGRAPHY */}
        <div className="w-full flex justify-center mb-12 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_#e5e7eb] dark:[-webkit-text-stroke:2px_#27272a] opacity-80">
            IMAD KHAN
          </h1>
        </div>

        {/* BOTTOM STRIP: Copyright & Live Clock */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100 dark:border-zinc-900 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-zinc-500">
          
          <p className="text-center sm:text-left">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          
          {/* Time Container */}
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-zinc-900/50 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-800">
            <span className="text-[#155d3a] dark:text-[#B9FF3B]">RIYADH</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-600"></span>
            <span className="text-gray-900 dark:text-white min-w-[90px] text-right font-black tracking-widest tabular-nums">
              {time || "LOADING..."}
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}