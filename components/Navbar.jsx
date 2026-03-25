"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // <-- Using Next.js native Link
import { Home, User, Folder, Briefcase, Wrench, Edit3 } from "lucide-react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();


  const isSanityStudio = pathname.startsWith("/dashboard");

  // Don't render the navbar on Sanity Studio pages
  if (isSanityStudio) {
    return null;
  }

  // Notice the hrefs: We added a "/" before the hash marks!
  // This ensures they always route to the home page first if you are on a different page.
  const navItems = [
    { id: "home", icon: <Home size={20} />, label: "Home", href: "/" },
    { id: "about", icon: <User size={20} />, label: "About", href: "/#about" },
    { id: "projects", icon: <Folder size={20} />, label: "Projects", href: "/projects" },
    { id: "exp", icon: <Briefcase size={20} />, label: "Experience", href: "/#experience" },
    { id: "tech", icon: <Wrench size={20} />, label: "Skills", href: "/#tech" },
    { id: "contact", icon: <Edit3 size={20} />, label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-3">
      {/* THE DOCK CONTAINER */}
      <nav className="flex items-center gap-1 p-2 rounded-[1.5rem] bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 shadow-xl transition-all duration-500">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative p-3.5 rounded-full text-gray-500 dark:text-gray-200 hover:text-[#155d3a] dark:hover:text-white transition-colors duration-300"
          >
            {/* Sliding background pill */}
            {hovered === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <div className="relative z-10">{item.icon}</div>
          </Link>
        ))}
      </nav>

      {/* TOOLTIP LABEL */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="px-3 py-1 rounded-md bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-black tracking-[0.2em] uppercase border border-white/10 shadow-lg"
          >
            {navItems.find(i => i.id === hovered)?.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}