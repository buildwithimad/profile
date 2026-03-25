"use client";
import AnimatedSection from "./AnimatedSection";

export default function Technologies() {
  const techStack = [
    {
      name: "React",
      icon: (
        <svg width="44" height="44" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg width="44" height="44" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-white">
          <circle cx="90" cy="90" r="90" fill="currentColor"/>
          <path d="M149.508 157.52L69.142 54H54v72h12.114V68.983l73.886 96.524a90.347 90.347 0 0 0 9.508-7.987Z" fill="black" className="dark:fill-white" />
          <path d="M115.03 54h12.115v72H115.03V54Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Vue.js",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" fill="#41B883"/>
          <path d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" fill="#34495E"/>
        </svg>
      ),
    },
    {
      name: "Nuxt.js",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M85.3 22.7l-35.1 60.8H21l35.1-60.8h29.2zm11.7 0H128L92.9 83.5H63.7l33.3-60.8z" fill="#00C58E"/>
          <path d="M21 83.5L50.2 33l29.2 50.5H21z" fill="#108775"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 4.148L11.777 34.296v60.296L64 124.74l52.222-30.148V34.296L64 4.148zm0 13.91l40.354 23.328v45.228L64 109.94l-40.354-23.328V41.386L64 18.058zm-1.892 23.37l-26.69 15.347v28.98l26.69 15.42 26.692-15.42V67.054L62.108 82.47l-2.072 1.2-21.432-12.35v-9.358l23.504 13.528 21.432-12.35V53.25L62.108 41.428z" fill="#339933"/>
        </svg>
      ),
    },
    {
      name: "Express.js",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-white">
          <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="64" fontFamily="sans-serif" fontWeight="900" letterSpacing="-2">ex</text>
        </svg>
      ),
    },
    {
      name: "Fastify",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-white">
          <path d="M21.33 64L64 0l42.67 64-21.34 64H42.67L21.33 64z" fill="currentColor"/>
          <path d="M42.67 64l42.66-21.33-21.33 42.66 21.33 21.34-42.66-42.67z" fill="#fff" className="dark:fill-[#1a1a1a]"/>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M96.096 82.176c-3.148-18.375-13.847-38.307-28.715-54.814-1.258-1.442-2.31-2.905-3.323-4.343-4.32 18.03-9.155 35.84-14.7 53.64-1.865 6.012-3.86 11.976-5.83 17.925 5.518-10.7 11.026-21.416 16.5-32.146 3.193 9.423 6.353 18.868 9.537 28.29 2.21-1.05 4.54-2.188 7.025-3.235 6.425-2.73 13.064-4.524 19.506-5.317zm-40.153-73.69c-2.457-3.21-4.708-6.108-6.224-7.512C45.39 5.86 42.107 15.035 40.547 25.1c-3.8 24.3-1.606 50.15 7.63 72.8 5.766-26.556 10.966-53.116 16.14-79.67-2.618-2.677-5.592-5.713-8.374-9.746z" fill="#47A248"/>
          <path d="M54.085 101.996c-2.71-3.67-4.103-7.52-5.498-11.802-5.837-17.756-11.053-35.794-14.63-54.212-.516-2.637-.962-5.305-1.41-7.98-4.532 9.48-8.24 19.348-10.897 29.56-4.59 17.653-5.556 36.31-.69 54.384 4.29 15.932 13.003 30.292 24.162 42.235-.45-13.434 2.128-26.75 6.27-39.467 1.09-3.336 2.055-6.666 3.17-9.975l-.477-2.744z" fill="#47A248"/>
        </svg>
      ),
    },
    {
      name: "ERPNext",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="24" fill="#0089FF" />
          <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="72" fontFamily="sans-serif" fontWeight="bold">e</text>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.4 64c0-15.2 11.4-22.8 34.2-22.8-7.6 11.4-9.5 20.9-5.7 28.5 3.326 6.653 10.925 10.745 19.462 15.548C89.346 91.436 102.6 98.889 102.6 117.2c0 15.2-11.4 22.8-34.2 22.8 7.6-11.4 9.5-20.9 5.7-28.5-3.326-6.653-10.925-10.745-19.462-15.548C43.454 89.764 30.4 82.311 30.4 64zm-22.8-45.6C7.6 3.2 19 .1 41.8.1c-7.6 11.4-9.5 20.9-5.7 28.5 3.326 6.653 10.925 10.745 19.462 15.548 10.984 6.188 24.238 13.641 24.238 31.952 0 15.2-11.4 22.8-34.2 22.8 7.6-11.4 9.5-20.9 5.7-28.5C54.526 63.747 46.927 59.655 38.39 54.852 27.406 48.664 14.152 41.211 7.6 22.9z" fill="#06B6D4"/>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="8" fill="#3178C6"/>
          <path d="M57.92 98.24h-13.6V62h-17.6V50.8h48.8V62H57.92v36.24zm50.62-5.76c-3.147 2.453-7.093 4.213-11.84 5.28-4.747 1.067-9.547 1.6-14.4 1.6-7.893 0-14.347-1.44-19.36-4.32-5.013-2.88-8.64-6.933-10.88-12.16l11.84-7.36c1.6 3.413 3.947 6.133 7.04 8.16 3.093 2.027 6.827 3.04 11.2 3.04 3.947 0 7.253-.747 9.92-2.24 2.667-1.493 4-3.52 4-6.08 0-1.813-.747-3.36-2.24-4.64-1.493-1.28-3.413-2.347-5.76-3.2l-14.4-4.8c-4.267-1.493-8-3.627-11.2-6.4-3.2-2.773-4.8-6.613-4.8-11.52 0-4.053 1.173-7.573 3.52-10.56 2.347-2.987 5.547-5.28 9.6-6.88 4.053-1.6 8.747-2.4 14.08-2.4 7.04 0 13.013 1.173 17.92 3.52 4.907 2.347 8.533 5.6 10.88 9.76l-11.2 7.04c-1.493-2.667-3.627-4.693-6.4-6.08-2.773-1.387-6.08-2.08-9.92-2.08-3.733 0-6.72.693-8.96 2.08-2.24 1.387-3.36 3.093-3.36 5.12 0 1.707.747 3.093 2.24 4.16 1.493 1.067 3.627 2.133 6.4 3.2l13.6 4.48c4.693 1.6 8.533 4.053 11.52 7.36 2.987 3.307 4.48 7.573 4.48 12.8 0 4.267-1.173 8.107-3.52 11.52z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125.138 60.158L67.842 2.862c-3.816-3.816-10-3.816-13.816 0L24.814 32.074l14.47 14.47c3.15-1.112 6.784-.46 9.39 2.147 2.653 2.652 3.292 6.386 2.096 9.588l13.856 13.856c3.202-1.196 6.936-.557 9.588 2.096 3.816 3.816 3.816 10 0 13.816-3.816 3.816-10 3.816-13.816 0-3.11-3.11-3.664-7.625-1.65-11.206L44.825 62.91v-22.38c-1.92 1.054-4.228 1.378-6.39.467-3.518-1.48-5.35-5.503-4.14-9.14L18.42 16.033 2.862 31.59c-3.816 3.816-3.816 10 0 13.816l57.296 57.296c3.816 3.816 10 3.816 13.816 0l51.164-51.164c3.816-3.815 3.816-9.998 0-13.814z" fill="#F05032"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="tech" className="w-full lg:pl-4 mt-24 mb-20">
      
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-12">
          {/* Light: text-gray-900 | Dark: text-white */}
          <h2 className="text-gray-900 dark:text-white text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            CORE
          </h2>
          {/* Light: text-gray-200 | Dark: text-[#333333] */}
          <h2 className="text-gray-300 dark:text-[#333333] text-[4rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            TECHNOLOGIES
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-[900px]">
        {techStack.map((tech) => (
          <AnimatedSection key={tech.name}>
            {/* Card BG Light: white / Border: gray-200 | Card BG Dark: #1a1a1a / Border: zinc-800 */}
            <div className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#1a1a1a]  dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-[#222222]  hover:-translate-y-2 transition-all duration-300 cursor-pointer  dark:shadow-none">
              
              {/* Icon Container - Hover: emerald green */}
              <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#155d3a] transform group-hover:scale-110 transition-all duration-300 mb-5">
                {tech.icon}
              </div>
              
              {/* Tech Name - Light: text-gray-900 | Dark: text-gray-400 */}
              <span className="text-gray-900 dark:text-gray-400 group-hover:text-[#155d3a] dark:group-hover:text-white font-bold tracking-wide text-sm sm:text-base transition-colors duration-300">
                {tech.name}
              </span>
              
            </div>
          </AnimatedSection>
        ))}
      </div>

    </section>
  );
}