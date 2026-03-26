"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; 
import { Home, User, Folder, Briefcase, Wrench, Edit3 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  // Hide the dock on Sanity Studio pages
  if (pathname.startsWith("/dashboard")) return null;

  const navItems = [
    { id: "home", icon: <Home size={18} className="sm:w-5 sm:h-5" />, label: "Home", href: "/" },
    { id: "about", icon: <User size={18} className="sm:w-5 sm:h-5" />, label: "About", href: "/#about" },
    { id: "projects", icon: <Folder size={18} className="sm:w-5 sm:h-5" />, label: "Projects", href: "/projects" },
    { id: "exp", icon: <Briefcase size={18} className="sm:w-5 sm:h-5" />, label: "Experience", href: "/#experience" },
    { id: "tech", icon: <Wrench size={18} className="sm:w-5 sm:h-5" />, label: "Skills", href: "/#tech" },
    { id: "contact", icon: <Edit3 size={18} className="sm:w-5 sm:h-5" />, label: "Contact", href: "/#contact" },
  ];

  return (
    // Removed fixed widths. It now naturally sizes to its contents.
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100]">
      
      {/* THE MASTER DOCK */}
      <nav className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#111111] transition-all duration-500">
        
        {/* NAV LINKS */}
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center justify-center w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-[#B9FF3B] transition-colors duration-300"
          >
            {/* Sliding background pill (Hover Effect) */}
            {hovered === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-full -z-10 hidden sm:block"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative z-10">{item.icon}</div>
          </Link>
        ))}

        {/* DIVIDER LINE (Slightly shorter and softer) */}
        <div className="w-[1px] h-5 bg-gray-300 dark:bg-zinc-700 mx-0.5 sm:mx-1" />

        {/* THEME TOGGLE (Now perfectly matched and encapsulated) */}
        <ThemeToggle />

      </nav>

      {/* HOVER TOOLTIPS */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="hidden sm:block absolute top-full mt-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-xl whitespace-nowrap"
          >
            {navItems.find((i) => i.id === hovered)?.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}