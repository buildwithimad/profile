"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { label: "YEARS OF EXPERIENCE", val: "+5" },
    { label: "PROJECTS COMPLETED", val: "+40" },
    { label: "PERFORMANCE BOOST", val: "30%" }
  ];

  return (
    <section id="hero" className="flex flex-col justify-center w-full lg:pl-4 mt-10 lg:mt-4">
      
      {/* LARGE HEADLINE */}
      <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 dark:text-white text-[4.5rem] sm:text-[6.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300"
        >
          FULL STACK
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 dark:text-[#222222] text-[4.5rem] sm:text-[6.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300"
        >
          DEVELOPER
        </motion.h1>
      </div>

      {/* PARAGRAPH DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 dark:text-[#888888] text-base sm:text-lg max-w-[600px] leading-relaxed font-normal mb-16 pointer-events-none transition-colors duration-300"
      >
        Bridging the gap between sleek frontend design and powerful backend architecture. I specialize in building intuitive, scalable enterprise solutions and modern web applications using Next.js and ERPNext.
      </motion.p>

      {/* STATS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-12 sm:gap-24 pointer-events-none"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-gray-900 dark:text-white text-[3.5rem] sm:text-[4.5rem] font-bold leading-none tracking-tight mb-3 transition-colors duration-300">
              {stat.val}
            </h3>
            <p className="text-gray-500 dark:text-[#888888] text-xs sm:text-sm font-medium uppercase leading-snug tracking-wider transition-colors duration-300">
              {stat.label.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </p>
          </div>
        ))}
      </motion.div>

      {/* SKILL CARDS SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px] mt-16"
      >
        
        {/* GREEN CARD: FRONTEND */}
        <div className="group relative bg-[#155d3a] rounded-[1.5rem] p-8 h-[260px] flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none">
          {/* Abstract Wave Background */}
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none rounded-[1.5rem]" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <path d="M0,50 Q25,20 50,50 T100,50 V100 H0 Z" fill="#0f462b" />
             <path d="M0,80 Q30,60 60,80 T100,70 V100 H0 Z" fill="#0a301e" />
          </svg>

          {/* Code Brackets Icon */}
          <div className="relative z-10 text-white pointer-events-none">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>

          <div className="relative z-10 flex items-end justify-between w-full pointer-events-none">
            <h4 className="text-white text-2xl font-bold leading-tight max-w-[200px]">
              MODERN FRONTEND & RESPONSIVE UI
            </h4>
            
            <div className="w-10 h-10 rounded border border-white/50 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#155d3a] transition-colors duration-300 pointer-events-auto">
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* LIME GREEN CARD: BACKEND */}
        <div className="group relative bg-[#B9FF3B] rounded-[1.5rem] p-8 h-[260px] flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none">
          {/* Abstract Tech Lines Background */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none rounded-[1.5rem]" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <polyline points="0,60 20,20 40,80 60,10 80,90 100,30" fill="none" stroke="#9ce622" strokeWidth="2" />
             <polyline points="0,80 30,40 60,90 90,20 100,50" fill="none" stroke="#9ce622" strokeWidth="2" />
          </svg>

          {/* Server / Database Icon */}
          <div className="relative z-10 text-black pointer-events-none">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          </div>

          <div className="relative z-10 flex items-end justify-between w-full pointer-events-none">
            <h4 className="text-black text-2xl font-bold leading-tight max-w-[200px]">
              SCALABLE BACKEND & API SYSTEMS
            </h4>
            
            <div className="w-10 h-10 rounded border border-black/30 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#B9FF3B] transition-colors duration-300 pointer-events-auto">
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}