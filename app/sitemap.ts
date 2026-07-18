import type { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { postSlugsQuery } from "@/lib/sanity/queries";
import type { PostSlugEntry } from "@/lib/sanity/types";

const BASE_URL = "https://www.presholGlobal.org";

// Static routes ported from the legacy sitemap.xml (dropping the 3 dead
// `image.jpg` placeholder entries that were attached to #mission, #whatwedo,
// and #contact — those files never existed in the codebase).
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/#mission`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/#founder`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/#programs`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/#footprint`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/#gallery`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/#testimonials`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/#sdg`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/#whatwedo`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/#contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/cookies-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityClient.fetch<PostSlugEntry[]>(postSlugsQuery);
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
