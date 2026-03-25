"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ✅ Accept 'projects' as a prop (passed down from app/page.jsx)
export default function Projects({ projects }) {
  
  // Safety check in case data hasn't loaded yet
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="w-full lg:pl-4 mt-24 mb-20">
      
      {/* LARGE HEADLINE */}
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-12">
          <h2 className="text-gray-900 dark:text-white text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            RECENT
          </h2>
          <h2 className="text-gray-300 dark:text-[#222222] text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            PROJECTS
          </h2>
        </div>
      </AnimatedSection>

      {/* PROJECTS LIST (Shows the 4 passed in from Sanity) */}
      <div className="flex flex-col gap-4 max-w-[900px]">
        {projects.map((project) => (
          // Use Sanity's unique _id
          <AnimatedSection key={project._id}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
            >
              
              {/* Left Side: Image & Text */}
              <div className="flex items-center gap-6">
                
                {/* Dynamic Image from Sanity */}
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl shrink-0 border border-black/5 dark:border-white/5 overflow-hidden transition-transform duration-500 group-hover:scale-95 flex items-center justify-center ${project.imageColor || 'bg-zinc-800'}`}>
                  {project.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    // Fallback Typography if no image is uploaded
                    <span className="text-white/20 font-black text-3xl uppercase tracking-tighter select-none">
                      {project.title.substring(0, 2)}
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold mb-1 tracking-tight transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 dark:text-[#888888] text-sm sm:text-base font-medium transition-colors duration-300">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Right Side: Animated Arrow */}
              <div className="text-[#155d3a] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mr-2 sm:mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <AnimatedSection>
        <div className="mt-12">
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-4 text-gray-900 dark:text-white font-bold uppercase tracking-[0.2em] text-xs sm:text-sm hover:text-[#155d3a] dark:hover:text-[#155d3a] transition-colors"
          >
            Explore All Works
            <span className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-[#155d3a] group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </AnimatedSection>

    </section>
  );
}