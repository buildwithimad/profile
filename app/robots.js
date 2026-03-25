export default function robots() {
  const baseUrl = "https://www.imadkhan.online";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If your Sanity Studio is hosted at /studio or /admin, hide it from Google
      disallow: ['/dashboard/', '/admin/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}