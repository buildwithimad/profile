"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

   const pathname = usePathname();
  
    const isSanityStudio = pathname.startsWith("/dashboard");
  
    if (isSanityStudio) {
      return null; // Don't render the footer in Sanity Studio
    }

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 400);

      // Calculate scroll progress percentage
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrolled / height) * 100;
      setProgress(scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] cursor-pointer flex items-center justify-center w-14 h-14 group"
          aria-label="Back to top"
        >
          {/* Circular Progress Path */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-gray-200 dark:text-zinc-800 transition-colors duration-300"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="#155d3a"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="150.79" // Circumference of r=24
              animate={{ strokeDashoffset: 150.79 - (150.79 * progress) / 100 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </svg>

          {/* Arrow Icon */}
          <div className="relative z-10 p-3 rounded-full bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white shadow-xl transition-all duration-300 group-hover:-translate-y-1">
            <ArrowUp size={20} strokeWidth={3} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}