import { MetadataRoute } from "next";

const BASE = "https://www.hostelplate.live";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-09");

  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/high-protein-meals-under-100-rupees/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/no-cook-meals-for-hostel/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/kettle-recipes-for-hostel-students/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/budget-grocery-list-students-india/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
