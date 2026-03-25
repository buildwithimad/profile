"use client";
import { useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPageClient({ projects, currentPage, totalPages }) {
  const router = useRouter();
  const pathname = usePathname();
  const gridRef = useRef(null);

  // Safety check
  if (!projects || projects.length === 0) {
    return (
      <main className="min-h-screen bg-[#f4f4f5] dark:bg-[#0a0a0a] flex items-center justify-center">
         <div className="text-xl font-bold text-gray-400 dark:text-zinc-600 animate-pulse tracking-widest uppercase">
           Loading Works...
         </div>
      </main>
    );
  }

  // Handle Page Change by updating the URL (Next.js handles the server fetch automatically!)
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      // scroll: false prevents Next.js from aggressively jumping to the top of the whole page
      router.push(`${pathname}?page=${newPage}`, { scroll: false });
      
      // Smoothly scroll exactly to the grid
      if (gridRef.current) {
        const yOffset = -100; 
        const element = gridRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f4f5] dark:bg-[#0a0a0a] transition-colors duration-500 pb-20 selection:bg-[#155d3a] selection:text-white">
      <Navbar /> 

      {/* HEADER SECTION (Unchanged) */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <Link href="/" className="inline-flex items-center gap-3 text-gray-500 font-bold mb-12 hover:text-[#155d3a] transition-colors uppercase tracking-[0.2em] text-xs group">
            <span className="p-2 rounded-full border border-gray-200 dark:border-zinc-800 group-hover:-translate-x-2 group-hover:border-[#155d3a] transition-all duration-300">
              <ArrowLeft size={16} />
            </span>
            Back to Home
          </Link>
          <div className="flex flex-col font-black tracking-[-0.05em] leading-[0.85]">
            <h1 className="text-gray-900 dark:text-white text-[4rem] sm:text-[7rem] lg:text-[9rem] uppercase transition-colors duration-300">SELECTED</h1>
            <h1 className="text-gray-300 dark:text-[#1a1a1a] text-[4rem] sm:text-[7rem] lg:text-[9rem] uppercase transition-colors duration-300">WORKS</h1>
          </div>
        </AnimatedSection>
      </section>

      {/* CREATIVE GRID */}
      <section ref={gridRef} className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          
          {projects.map((project, index) => (
            <AnimatedSection key={project._id}>
              <Link href={`/projects/${project.slug}`} className="group block relative w-full h-full">
                {/* PROJECT CARD */}
                <div className={`relative aspect-[16/12] sm:aspect-[16/10] xl:aspect-[4/3] rounded-[2rem] overflow-hidden ${project.imageColor || 'bg-zinc-800'} transition-all duration-700 shadow-xl shadow-black/5 dark:shadow-none`}>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[2rem]">
                    {project.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                    ) : (
                      <span className="text-white/10 font-black text-6xl uppercase tracking-tighter select-none transform group-hover:scale-110 transition-transform duration-1000">{project.title.substring(0, 2)}</span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[#B9FF3B] text-[10px] font-black uppercase tracking-[0.2em]">{project.category}</span>
                        <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">{project.title}</h3>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500 ease-out">
                        <ArrowRight size={20} className="sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISIBLE INFO */}
                <div className="mt-6 flex justify-between items-start px-2">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold transition-colors">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tech && project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400 dark:text-zinc-500">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Calculate index across pages (e.g. Page 2 starts at 07) */}
                  <span className="text-gray-300 dark:text-zinc-800 font-black text-3xl sm:text-4xl tracking-tighter transition-colors">
                    {(((currentPage - 1) * 6) + index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* SERVER-SIDE PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-24">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-4 rounded-full border transition-all duration-300 ${
                currentPage === 1 
                ? 'border-gray-200 dark:border-zinc-800 text-gray-300 dark:text-zinc-700 cursor-not-allowed' 
                : 'border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:border-[#155d3a] hover:bg-[#155d3a] hover:text-white'
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-2 font-black tracking-[0.2em] text-sm">
              <span className="text-gray-900 dark:text-white">{currentPage.toString().padStart(2, '0')}</span>
              <span className="text-gray-400 dark:text-zinc-600">/</span>
              <span className="text-gray-400 dark:text-zinc-600">{totalPages.toString().padStart(2, '0')}</span>
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-4 rounded-full border transition-all duration-300 ${
                currentPage === totalPages 
                ? 'border-gray-200 dark:border-zinc-800 text-gray-300 dark:text-zinc-700 cursor-not-allowed' 
                : 'border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:border-[#155d3a] hover:bg-[#155d3a] hover:text-white'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}