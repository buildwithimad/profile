"use client";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const stats = [
    { label: "Based in", value: "Riyadh, SA" },
    { label: "Freelance", value: "Available" },
    { label: "Interests", value: "AI, UX, Coffee" },
  ];

  return (
    <section id="about" className="w-full lg:pl-4 mt-24 mb-20">
      
      {/* LARGE SECTION HEADLINE */}
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-12">
          <h2 className="text-gray-900 dark:text-white text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            A LITTLE
          </h2>
          <h2 className="text-gray-200 dark:text-[#333333] text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            ABOUT ME
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[900px]">
        
        {/* LEFT COLUMN: THE STORY */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <AnimatedSection>
            <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
              I’m a <span className="text-[#155d3a]">Full Stack Developer</span> with a passion for building digital products that feel as good as they look.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <p className="text-gray-500 dark:text-[#888888] text-base sm:text-lg leading-relaxed transition-colors duration-300">
              Over the past 5 years, I've navigated the evolving landscape of web technology, specializing in the <strong>MERN stack</strong> and <strong>Next.js</strong>. My goal is always the same: to bridge the gap between complex backend logic and elegant, user-centric design.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex gap-4 mt-4">
               <div className="px-6 py-3 rounded-full border border-[#155d3a] text-[#155d3a] font-bold text-sm uppercase tracking-widest hover:bg-[#155d3a] hover:text-white transition-all duration-300 cursor-default">
                  Problem Solver
               </div>
               <div className="px-6 py-3 rounded-full border border-[#155d3a] text-[#155d3a] font-bold text-sm uppercase tracking-widest hover:bg-[#155d3a] hover:text-white transition-all duration-300 cursor-default">
                  Clean Coder
               </div>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT COLUMN: QUICK FACTS / BENTO BOX */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i}>
              <div className="p-6 cursor-pointer rounded-2xl bg-white dark:bg-[#1a1a1a] flex justify-between items-center transition-all duration-300  group dark:shadow-none">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400 dark:text-zinc-500 group-hover:text-[#155d3a] transition-colors">
                  {stat.label}
                </span>
                <span className="text-gray-900 dark:text-white font-bold transition-colors">
                  {stat.value}
                </span>
              </div>
            </AnimatedSection>
          ))}
          
          {/* CREATIVE QUOTE BOX */}
          <AnimatedSection>
            <div className="p-8 rounded-3xl bg-[#155d3a] text-white relative overflow-hidden group">
               <svg className="absolute top-4 right-4 opacity-20 group-hover:rotate-12 transition-transform duration-500" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
               </svg>
               <p className="text-lg italic font-medium leading-relaxed z-10 relative">
                 "Code is like humor. When you have to explain it, it’s bad."
               </p>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}