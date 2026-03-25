"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ContactForm() {
  return (
    <section className="w-full lg:pl-4 mt-20 mb-20">
      <AnimatedSection>
        <div className="max-w-[900px]">
          {/* Section Sub-header for extra clarity */}
          <p className="text-[#155d3a] font-bold tracking-[0.2em] uppercase text-xs mb-10">
            Estimate your project
          </p>
          
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* NAME INPUT */}
              <div className="group flex flex-col gap-3">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300">
                  Full Name <span className="text-[#155d3a]">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Imad Khan"
                  className="w-full bg-gray-100 dark:bg-zinc-900/50 border-b-2 border-transparent focus:border-[#155d3a] p-4 rounded-t-xl outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 group-hover:bg-gray-200 dark:group-hover:bg-zinc-800/50"
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="group flex flex-col gap-3">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300">
                  Email Address <span className="text-[#155d3a]">*</span>
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="hello@work.com"
                  className="w-full bg-gray-100 dark:bg-zinc-900/50 border-b-2 border-transparent focus:border-[#155d3a] p-4 rounded-t-xl outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 group-hover:bg-gray-200 dark:group-hover:bg-zinc-800/50"
                />
              </div>
            </div>

            {/* MESSAGE INPUT */}
            <div className="group flex flex-col gap-3">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300">
                Message <span className="text-[#155d3a]">*</span>
              </label>
              <textarea 
                rows="5" 
                required
                placeholder="Tell me about your project goals..."
                className="w-full bg-gray-100 dark:bg-zinc-900/50 border-b-2 border-transparent focus:border-[#155d3a] p-4 rounded-t-xl outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 group-hover:bg-gray-200 dark:group-hover:bg-zinc-800/50 resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end mt-4">
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group flex items-center gap-3 px-12 py-5 bg-[#155d3a] text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 hover:bg-[#1b7a4c] shadow-xl shadow-green-900/10 hover:shadow-green-900/20"
              >
                Send Message
                <svg 
                  className="group-hover:translate-x-1 transition-transform" 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>
            </div>
            
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
}