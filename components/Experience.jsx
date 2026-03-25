"use client";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Middle East Investment Co.",
      role: "Software Developer",
      duration: "Feb 2026 – Present",
      description: "Leading the development of scalable web applications and enterprise REST APIs using the MERN stack and Next.js."
    },
    {
      id: 2,
      company: "Creativemark",
      role: "Full Stack Web Developer",
      duration: "Jan 2025 – Jan 2026",
      description: "Developed dynamic client portals, integrated third-party APIs, and optimized front-end performance for pixel-perfect user interfaces."
    },
    {
      id: 3,
      company: "Mazhar Enterprises Pvt Ltd",
      role: "Software Engineer",
      duration: "Jan 2022 – Dec 2024",
      description: "Built full-stack internal management tools with React and Node.js, delivering 20+ projects and improving load times by 30%."
    }
  ];

  return (
    <section id="experience" className="w-full lg:pl-4 mt-24 mb-20">
      
      {/* LARGE HEADLINE */}
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-12">
          {/* Light: text-gray-900 | Dark: text-white */}
          <h2 className="text-gray-900 dark:text-white text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] uppercase pointer-events-none transition-colors duration-300">
            5 YEARS OF
          </h2>
          {/* Light: text-gray-200 | Dark: text-[#222222] */}
          <h2 className="text-gray-300 dark:text-[#222222] text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] uppercase pointer-events-none transition-colors duration-300">
            EXPERIENCE
          </h2>
        </div>
      </AnimatedSection>

      {/* EXPERIENCE CARDS */}
      <div className="flex flex-col gap-6 max-w-[900px]">
        {experiences.map((exp) => (
          <AnimatedSection key={exp.id}>
            {/* BG: White in Light Mode, Transparent in Dark Mode 
              Hover BG: Light Gray in Light Mode, Dark Gray (#1f1f1f) in Dark Mode
              Border: Gray-200 in Light Mode, None in Dark Mode
            */}
            <div className="group flex flex-col p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-transparent dark:border-none hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-all duration-300 cursor-pointer dark:shadow-none">
              
              {/* Top Row: Company & Animated Arrow */}
              <div className="flex justify-between items-start mb-4 gap-4">
                {/* Light: text-gray-900 | Dark: text-white */}
                <h3 className="text-gray-900 dark:text-white text-2xl sm:text-[2rem] font-bold tracking-tight leading-none transition-colors duration-300">
                  {exp.company}
                </h3>
                
                {/* Arrow stays your theme's emerald green */}
                <div className="text-[#155d3a] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* Description & Role */}
              {/* Light: text-gray-600 | Dark: text-[#888888] */}
              <p className="text-gray-600 dark:text-[#888888] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl transition-colors duration-300">
                {/* Light: text-gray-900 | Dark: text-gray-300 */}
                <span className="text-gray-900 dark:text-gray-300 font-semibold">{exp.role}</span> &mdash; {exp.description}
              </p>

              {/* Date / Duration */}
              {/* Light: text-gray-500 | Dark: text-gray-500 */}
              <div className="text-gray-500 text-sm sm:text-base font-bold transition-colors duration-300 uppercase tracking-wider">
                {exp.duration}
              </div>

            </div>
          </AnimatedSection>
        ))}
      </div>

    </section>
  );
}