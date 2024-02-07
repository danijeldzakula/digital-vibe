export default async function sitemap() {
  const baseUrl = "https://digital-vibe.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}