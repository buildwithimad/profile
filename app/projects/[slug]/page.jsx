import ProjectDetails from '@/components/Projects/ProjectDetails';
import { getProjectBySlug } from '@/services/projects'; // Make sure this path is correct!

export const revalidate = 60; 

// 🚀 1. GENERATE DYNAMIC SEO METADATA
export async function generateMetadata({ params }) {
  // Await the params (Next.js 15+ requirement)
  const resolvedParams = await params;
  
  // Fetch the specific project data from Sanity
  const project = await getProjectBySlug(resolvedParams.slug);

  // Fallback if the URL is typed wrong and the project doesn't exist
  if (!project) {
    return {
      title: "Project Not Found | Imad Khan",
    };
  }

  // 👇 The Magic: Use your custom Sanity SEO fields, or fallback to the regular ones!
  const title = project.seoTitle || `${project.title} | Imad Khan`;
  const description = project.seoDescription || project.description;
  const baseUrl = "https://www.imadkhan.online";
  
  // Use the project's actual cover image for the preview card!
  const ogImage = project.imageUrl || `${baseUrl}/og-image.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${baseUrl}/projects/${resolvedParams.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/projects/${resolvedParams.slug}`,
      siteName: "Imad Khan Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article", // 👈 'article' is perfect for case studies/project breakdowns
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
  };
}

// 🚀 2. YOUR PAGE COMPONENT
const ProjectDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);

  return (
    <ProjectDetails project={project} />
  );
};

export default ProjectDetailsPage;