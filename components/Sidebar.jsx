"use client";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="bg-white rounded-[2rem] p-6 pb-10 flex flex-col items-center w-full relative ">
      
      {/* IMAGE CONTAINER */}
      {/* Changed to a rich green gradient to match your new theme */}
      <div className="w-[240px] bg-gradient-to-br from-[#155d3a] to-[#0d3b25] rounded-[2rem] h-[280px] relative flex items-center justify-center overflow-hidden mb-8 group cursor-pointer">
        
        {/* Decorative elements (behind the image) */}
        {/* Added transition-transform and group-hover:rotate for a smooth, creative effect */}
        <div className="absolute -top-16 -left-16 w-48 h-48 border-[2px] border-dashed border-white/20 rounded-full z-0 transition-transform duration-700 ease-out group-hover:rotate-45"></div>
        <div className="absolute top-4 -right-12 w-32 h-32 border-[2px] border-dashed border-white/20 rounded-full z-0 transition-transform duration-700 ease-out group-hover:-rotate-45"></div>
        
        {/* NEXT.JS OPTIMIZED IMAGE */}
        <Image
          src="/Portfolio.png"
          alt="Imad Khan - Full Stack Developer"
          fill
          priority
          className="object-cover object-top z-10 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Fallback text */}
        {!Image && <span className="text-white font-bold z-10 opacity-50 tracking-widest text-sm">PHOTO</span>}
      </div>

      {/* NAME */}
      {/* Tightened tracking for a more premium, bold look */}
      <h2 className="text-[2.25rem] font-black text-gray-900 text-center tracking-[-0.04em] leading-none mb-4 z-10">
        IMAD HUSSAIN KHAN
      </h2>

      {/* BADGE & DASHED LINE WRAPPER */}
      <div className="relative w-full flex flex-col items-center mb-6">
        {/* The curved dashed line SVG */}
        <svg 
          className="absolute top-[-26px] left-0 w-full h-[80px] pointer-events-none" 
          viewBox="0 0 200 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 100 40 C 60 40 40 80 -10 80" 
            stroke="#155d3a" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
            fill="transparent"
            className="opacity-50"
          />
        </svg>

        {/* ICON BADGE */}
        {/* Added a subtle ring offset for a cleaner badge look */}
        <div className="bg-[#155d3a] text-white rounded-full w-9 h-9 flex items-center justify-center z-10 relative transform transition-transform duration-300 hover:scale-110 cursor-default ring-4 ring-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 5 10 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10 12 2 12 2ZM11 19.938C8.825 19.436 7.5 17.5 7.5 15.5C7.5 13 9 10.5 10.5 8.5C10.5 11 12 12.5 12 12.5C12 12.5 15.5 14 14.5 18.5C13.5 19.5 12.5 20 11 19.938Z"/>
          </svg>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-center text-[15px] font-medium leading-relaxed px-4 mb-8">
        A Full Stack Web Developer who has developed countless innovative solutions.
      </p>

      {/* SOCIALS */}
      {/* Wrapped in tactile circular buttons that light up green on hover */}
      <div className="flex gap-3 text-[#155d3a]">
        
        <a href="https://linkedin.com/in/imad-hussain-khan-76388b305" target="_blank" rel="noreferrer" 
           className="p-3 rounded-full bg-gray-50 hover:bg-[#155d3a] hover:text-white transform hover:-translate-y-1 transition-all duration-300" 
           aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        
        <a href="#" target="_blank" rel="noreferrer" 
           className="p-3 rounded-full bg-gray-50 hover:bg-[#155d3a] hover:text-white transform hover:-translate-y-1 transition-all duration-300" 
           aria-label="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>

        <a href="https://github.com/buildwithimad" target="_blank" rel="noreferrer" 
           className="p-3 rounded-full bg-gray-50 hover:bg-[#155d3a] hover:text-white transform hover:-translate-y-1 transition-all duration-300" 
           aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>

        {/* FACEBOOK */}
        <a href="https://facebook.com/devnexstudio" target="_blank" rel="noreferrer" 
           className="p-3 rounded-full bg-gray-50 hover:bg-[#155d3a] hover:text-white transform hover:-translate-y-1 transition-all duration-300" 
           aria-label="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        {/* INSTAGRAM */}
        <a href="https://instagram.com/devnexstudio" target="_blank" rel="noreferrer" 
           className="p-3 rounded-full bg-gray-50 hover:bg-[#155d3a] hover:text-white transform hover:-translate-y-1 transition-all duration-300" 
           aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        
      </div>

    </div>
  );
}