import { client } from "@/sanity/lib/client"; // Adjust this path if your client is somewhere else

export default async function sitemap() {
  const baseUrl = "https://www.imadkhan.online";

  // 1. Fetch all project slugs and their last updated timestamp from Sanity
  const query = `*[_type == "project"] {
    "slug": slug.current,
    _updatedAt
  }`;
  
  const projects = await client.fetch(query);

  // 2. Map over the projects to create dynamic sitemap entries
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project._updatedAt, // Tells Google exactly when this page was last updated!
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Define your static routes (Home, Projects Archive, etc.)
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Home page gets highest priority
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 4. Combine and return them! Next.js turns this array into a perfect XML file.
  return [...staticRoutes, ...projectUrls];
}