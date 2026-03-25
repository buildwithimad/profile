import ProjectsPageClient from '@/components/Projects/Projects'; 
import { getPaginatedProjects } from '@/services/projects';

export const revalidate = 60; // 👈 You can safely drop it right here

export async function generateMetadata({ searchParams }) {
  const resolvedParams = await searchParams;
  const currentPage = parseInt(resolvedParams.page) || 1;
  
  const baseUrl = "https://www.imadkhan.online";
  
  const pageTitle = currentPage > 1 
    ? `Selected Works - Page ${currentPage} | Imad Hussain Khan` 
    : `Selected Works & Projects | Imad Hussain Khan`;

  const description = "A collection of digital products, experimental interfaces, and full-stack solutions developed using Next.js, ERPNext, and modern web technologies.";

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: currentPage > 1 ? `${baseUrl}/projects?page=${currentPage}` : `${baseUrl}/projects`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: `${baseUrl}/projects`,
      siteName: "Imad Khan Portfolio",
      images: [
        {
          url: `${baseUrl}/og-image.png`, // Add a cool preview image in your public folder!
          width: 1200,
          height: 630,
          alt: "Imad Khan Projects",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}


const ProjectsPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  
  const currentPage = parseInt(resolvedParams.page) || 1;
  const limit = 6;

  const { projects, total } = await getPaginatedProjects(currentPage, limit);
  
  // Calculate total pages
  const totalPages = Math.ceil(total / limit);

  return (
    <ProjectsPageClient 
      projects={projects} 
      currentPage={currentPage} 
      totalPages={totalPages} 
    />
  );
};

export default ProjectsPage;