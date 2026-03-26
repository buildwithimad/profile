"use client";
import AnimatedSection from "./AnimatedSection";
import { SiNextdotjs, SiFastify, SiNuxt ,SiNodedotjs , SiExpress, SiMongodb, SiTypescript ,SiGit, SiTailwindcss, SiFrappe ,SiReact    } from "react-icons/si";

export default function Technologies() {
  const techStack = [
    {
      name: "React",
      icon: <SiReact size={44} color="#61DAFB" className="dark:text-white" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={44} color="#000" className="dark:text-white" />,
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
        icon: <SiNuxt  size={44} color="#00DC82" className="dark:text-white" />,
    },
    {
      name: "Node.js",
        icon: <SiNodedotjs size={44} color="#339933" className="dark:text-white" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={44} color="#000000" className="dark:text-white" />,
    },
    {
      name: "Fastify",
      icon: <SiFastify size={44} color="#000" className="dark:text-white" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={44} color="#47A248" className="dark:text-white" />,
    },
    {
      name: "ERPNext",
      icon: <SiFrappe size={44} color="#0089FF" className="dark:text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={44} color="#38B2AC" className="dark:text-white" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={44} color="#3178C6" className="dark:text-white" />,
    },
    {
      name: "Git",
      icon: <SiGit size={44} color="#F05032" className="dark:text-white" />,
    },
  ];

  return (
    <section id="tech" className="w-full lg:pl-4 mt-24 mb-20">
      
      <AnimatedSection>
        <div className="flex flex-col font-black tracking-[-0.03em] leading-[0.85] mb-12">
          {/* Light: text-gray-900 | Dark: text-white */}
          <h2 className="text-gray-900 dark:text-white text-[2.5rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            CORE
          </h2>
          {/* Light: text-gray-200 | Dark: text-[#333333] */}
          <h2 className="text-gray-300 dark:text-[#333333] text-[2.5rem] sm:text-[5.5rem] lg:text-[6rem] uppercase pointer-events-none transition-colors duration-300">
            TECHNOLOGIES
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-[900px]">
        {techStack.map((tech) => (
          <AnimatedSection key={tech.name}>
            {/* Card BG Light: white / Border: gray-200 | Card BG Dark: #1a1a1a / Border: zinc-800 */}
            <div className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-[1rem] bg-white dark:bg-[#1a1a1a]  dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-[#222222]  hover:-translate-y-2 transition-all duration-300 cursor-pointer  dark:shadow-none">
              
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