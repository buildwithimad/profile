import { client } from "@/sanity/lib/client"; // Update this path to wherever your Sanity client is located

// 1. Fetch ALL Projects (For Home & Projects Archive Page)
export async function getRecentProjects(limit = 4) {
  const query = `*[_type == "project"] | order(_createdAt desc)[0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    category,
    imageColor,
    description,
    tech,
    "imageUrl": coverImage.asset->url
  }`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
}


// Add this below your existing functions
export async function getPaginatedProjects(page = 1, limit = 6) {
  // Calculate the starting and ending index for the database
  const start = (page - 1) * limit;
  const end = start + limit;

  // We fetch TWO things at once: the specific 6 projects, AND the total count
  const query = `{
    "projects": *[_type == "project"] | order(_createdAt desc) [${start}...${end}] {
      _id,
      title,
      "slug": slug.current,
      category,
      imageColor,
      tech,
      "imageUrl": coverImage.asset->url
    },
    "total": count(*[_type == "project"])
  }`;

  try {
    const data = await client.fetch(query);
    return data; // Returns { projects: [...], total: 35 }
  } catch (error) {
    console.error("Error fetching paginated projects:", error);
    return { projects: [], total: 0 };
  }
}

// 2. Fetch a SINGLE Project by Slug (For Project Details Page)
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    imageColor,
    description,
    details, // This is your Rich Text array!
    tech,
    link,
    github,
    "imageUrl": coverImage.asset->url,
    "gallery": gallery[]{
      label,
      color,
      "url": image.asset->url
    }
  }`;

  // We pass the slug as a variable ($slug) to prevent injection errors
  try {
    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
}