import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";

import { getRecentProjects } from "@/services/projects";

// 🚀 1. STATIC SEO METADATA FOR THE HOME PAGE
export const metadata = {
  title: "Imad Hussain Khan | Full Stack Web Developer",
  description: "Passionate about engineering high-performance digital experiences. I specialize in building intuitive, scalable enterprise solutions and modern web applications using Next.js and ERPNext.",
  alternates: {
    canonical: "https://www.imadkhan.online",
  },
  openGraph: {
    title: "Imad Hussain Khan | Full Stack Web Developer",
    description: "Passionate about engineering high-performance digital experiences. I specialize in building intuitive, scalable enterprise solutions and modern web applications using Next.js and ERPNext.",
    url: "https://www.imadkhan.online",
    siteName: "Imad Hussain Khan Portfolio",
    images: [
      {
        url: "https://www.imadkhan.online/og-image.png", // Make sure to add this image to your /public folder!
        width: 1200,
        height: 630,
        alt: "Imad Hussain Khan - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imad Hussain Khan | Full Stack Web Developer",
    description: "Building intuitive, scalable enterprise solutions and modern web applications.",
    images: ["https://www.imadkhan.online/og-image.png"],
  },
  // Tells Google robots it's highly encouraged to index and follow links on this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const revalidate = 60; 

// 1. Make the component async so we can await the database call
export default async function PortfolioPage() {
  
  // 2. Await the projects from Sanity
  const recentProjects = await getRecentProjects();

  return (
    <main className="min-h-screen bg-[#f4f4f5] dark:bg-[#141414] transition-colors duration-500 flex flex-col lg:flex-row items-center lg:items-start justify-center p-6 md:py-24 md:px-48 gap-16 relative">

      {/* Sidebar Wrapper */}
      <div className="w-full max-w-sm lg:w-[360px] shrink-0 lg:sticky top-12 h-max ">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 w-full flex flex-col items-center pt-8 lg:pt-0">
        <Hero />
        <About />
        
        {/* Pass ONLY the 4 recent projects to the component */}
        <Projects projects={recentProjects} />

        <Technologies />
        <Experience />
        <Contact />
        <ContactForm />
      </div>

    </main>
  );
}