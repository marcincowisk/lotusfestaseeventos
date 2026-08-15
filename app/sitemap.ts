import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { serviceCategories } from "@/data/services";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/solucoes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/eventos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/equipamentos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/casamentos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCategories.map((service) => ({
    url: `${base}/solucoes/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${base}/eventos/${event.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...eventRoutes];
}
