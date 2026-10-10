import type { MetadataRoute } from "next";

const BASE = "https://www.hostelplate.live";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/static/"],
      },
      {
        // Block selected AI training crawlers
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
          "FacebookBot",
          "CCBot",
          "Bytespider",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}