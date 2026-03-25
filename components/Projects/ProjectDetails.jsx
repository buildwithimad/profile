"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PortableText } from "@portabletext/react"; 
import Link from "next/link";

// Custom rendering logic for Sanity's Portable Text
const CustomPortableTextComponents = {
  block: {
    // Headers stay bold and massive
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-16 mb-8 tracking-tight uppercase">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{children}</h3>,
    
    // 👇 PARAGRAPHS: Changed font-medium to font-normal (use font-light if you want it even thinner!)
    normal: ({ children }) => <p className="text-gray-600 dark:text-[#a0a0a0] text-lg md:text-xl leading-[1.8] font-normal mb-6">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="flex flex-col gap-4 my-8 pl-0">{children}</ul>,
  },
  listItem: {
    // 👇 LIST ITEMS: Removed font-bold, adjusted text color to match paragraphs
    bullet: ({ children }) => (
      <li className="flex items-start gap-4 text-gray-600 dark:text-[#a0a0a0] font-normal text-lg md:text-xl leading-relaxed">
        <CheckCircle2 className="text-[#155d3a] shrink-0 mt-1.5" size={20} />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    // If you explicitly bold something in Sanity, it will pop nicely against the light text
    strong: ({ children }) => <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>,
  },
};

export default function ProjectDetails({ project }) {
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold dark:text-white">Project not found.</div>;

  const gallery = project.gallery || [];

  return (
    <main className="min-h-screen bg-[#f4f4f5] dark:bg-[#0a0a0a] pt-32 pb-20 px-6 md:px-12 lg:px-20 transition-colors duration-500 selection:bg-[#155d3a] selection:text-white">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-3 cursor-pointer text-gray-500 dark:text-gray-400 font-bold mb-16 hover:text-[#155d3a] dark:hover:text-white transition-colors uppercase tracking-[0.2em] text-xs"
        >
          <span className="p-2 rounded-full border border-gray-200 dark:border-zinc-800 group-hover:-translate-x-2 transition-all">
            <ArrowLeft size={16} />
          </span>
          Back to Archive
        </button>

        {/* HEADER */}
        <AnimatedSection>
          <div className="flex flex-col gap-6 mb-16 max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
               <span className="w-12 h-[2px] bg-[#155d3a]"></span>
               <span className="text-[#155d3a] text-center font-black tracking-[0.3em] uppercase text-sm">
                 {project.category}
               </span>
            </div>
            <h1 className="text-[3rem] lg:text-[6rem] font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.85]">
              {project.title}
            </h1>
            <p className="text-base md:text-xl text-gray-500 dark:text-zinc-500 font-medium max-w-4xl mt-4 leading-relaxed">
              {project.description}
            </p>
          </div>
        </AnimatedSection>

        {/* INTERACTIVE GALLERY */}
        {gallery.length > 0 && (
          <AnimatedSection>
            <div className="flex flex-col gap-4 mb-32">
              
              {/* BIG IMAGE */}
              <div className="w-full h-[60vh] md:h-[100vh] rounded-[1rem] md:rounded-[2rem] overflow-hidden relative bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute inset-0 flex items-center justify-center ${gallery[activeImg]?.color || 'bg-zinc-800'}`}
                  >
                    {gallery[activeImg]?.url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={gallery[activeImg].url} alt={gallery[activeImg].label} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white/20 font-black text-4xl sm:text-6xl tracking-widest uppercase select-none">
                        {gallery[activeImg]?.label || "Preview"}
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImg(index)}
                    className={`relative shrink-0 w-32 h-24 md:w-48 md:h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                      activeImg === index 
                        ? "ring-4 ring-[#155d3a] ring-offset-4 ring-offset-[#f4f4f5] dark:ring-offset-[#0a0a0a] scale-95 opacity-100" 
                        : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <div className={`absolute inset-0 flex items-center justify-center ${item.color || 'bg-zinc-800'}`}>
                      {item.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.url} alt={item.label} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-white/30 font-bold text-xs uppercase tracking-wider">{item.label}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </AnimatedSection>
        )}

        {/* CASE STUDY DETAILS (Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: THE STORY (Custom Sanity Rich Text) */}
          <div className="lg:col-span-8 flex flex-col">
            <AnimatedSection>
               {project.details ? (
                 // We removed the generic 'prose' class and rely entirely on our custom components above!
                 <div className="w-full">
                   <PortableText value={project.details} components={CustomPortableTextComponents} />
                 </div>
               ) : (
                 <p className="text-gray-600 dark:text-[#a0a0a0] text-xl leading-relaxed font-light">
                   Case study details coming soon...
                 </p>
               )}
            </AnimatedSection>
          </div>

          {/* RIGHT: STICKY METADATA SIDEBAR */}
          <div className="lg:col-span-4 lg:sticky lg:top-12 flex flex-col gap-10 bg-transparent border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-zinc-800/80 pt-10 lg:pt-0 lg:pl-10">
            
            {/* ROLE & TIMELINE */}
            <AnimatedSection>
               <div className="flex flex-col gap-8">
                  <div>
                    <span className="text-[10px] font-black text-gray-400 dark:text-zinc-600 uppercase tracking-widest block mb-2">Role</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Lead Developer</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 dark:text-zinc-600 uppercase tracking-widest block mb-2">Timeline</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">8 Weeks</span>
                  </div>
               </div>
            </AnimatedSection>

            {/* TECH STACK */}
            <AnimatedSection>
              <h3 className="text-[10px] font-black text-gray-400 dark:text-zinc-600 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech && project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 border border-gray-200 dark:border-zinc-800 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-[#155d3a] transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* ACTION LINKS */}
            <AnimatedSection>
              <div className="flex flex-col gap-3 mt-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 w-full p-4 bg-[#155d3a] text-white rounded-full font-bold hover:bg-[#1b7a4c] transition-all">
                    <span>Live Project</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 w-full p-4 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all">
                    <span>Source Code</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
              </div>
            </AnimatedSection>
          </div>

        </div>
        {/* CALL TO ACTION */}
              <section className="py-32 px-6 text-center">
                <AnimatedSection>
                  <h3 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black mb-8 tracking-tight">
                    Have a project in mind?
                  </h3>
                  <Link 
                    href="/#contact" 
                    className="inline-block px-10 py-5 bg-[#155d3a] text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#114a2e] transform hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-[#155d3a]/20"
                  >
                    Start a Conversation
                  </Link>
                </AnimatedSection>
              </section>
      </div>
    </main>
  );
}