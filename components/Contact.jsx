"use client";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const contactDetails = [
    { label: "Email", value: "kimad1728@gmail.com", link: "mailto:kimad1728@gmail.com" },
    { label: "LinkedIn", value: "Imad Hussain Khan", link: "https://linkedin.com/in/imad-hussain-khan-76388b305" },
    { label: "Location", value: "Riyadh, Saudi Arabia", link: "#" },
  ];

  return (
    <section id="contact" className="w-full lg:pl-4 mt-32 mb-24">
      
      {/* HUGE CREATIVE HEADLINE */}
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.04em] leading-[0.8] mb-16">
          <h2 className="text-gray-900 dark:text-white text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] uppercase pointer-events-none transition-colors duration-300">
            LET'S
          </h2>
          <div className="flex items-center gap-4 sm:gap-8">
             <h2 className="text-gray-200 dark:text-[#222222] text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] uppercase pointer-events-none transition-colors duration-300">
              WORK
            </h2>
          </div>
          <h2 className="text-gray-900 dark:text-white text-text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] uppercase pointer-events-none transition-colors duration-300">
            TOGETHER
          </h2>
        </div>
      </AnimatedSection>

      {/* CONTACT INFO GRID - BORDERLESS & CLEAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px]">
        
        {/* Left Side: Direct Links */}
        <div className="flex flex-col gap-8">
          {contactDetails.map((detail, i) => (
            <AnimatedSection key={i}>
              <a 
                href={detail.link} 
                className="group flex flex-col gap-1 transition-transform duration-300 hover:translate-x-2"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[#155d3a] font-bold">
                  {detail.label}
                </span>
                <span className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {detail.value}
                </span>
                {/* Underline animation */}
                <div className="h-[1px] w-0 bg-[#155d3a] group-hover:w-full transition-all duration-500 ease-out mt-1"></div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Right Side: Big Call to Action Button */}
        <AnimatedSection>
          <div className="h-full flex items-center justify-start md:justify-end">
            <a 
              href="mailto:kimad1728@gmail.com"
              className="relative inline-flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-[#155d3a] text-white font-bold text-lg sm:text-xl uppercase tracking-tighter overflow-hidden transition-transform duration-500 hover:scale-110 active:scale-95 group shadow-2xl shadow-green-900/20"
            >
              {/* Inner ripple effect */}
              <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
              
              <span className="relative z-10 text-center px-4">
                Get In<br/>Touch
              </span>

              {/* Arrow that appears on hover */}
              <svg 
                className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" 
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>

      

    </section>
  );
}