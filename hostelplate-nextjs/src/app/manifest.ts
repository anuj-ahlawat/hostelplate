import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HostelPlate — Hostel Meal Prep for Students",
    short_name: "HostelPlate",
    description:
      "Cheap, high-protein hostel meal prep ideas for Indian students. Weekly plans, kettle and no-cook recipes with rupee prices.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1714",
    theme_color: "#0F3D3A",
    orientation: "portrait-primary",
    categories: ["food", "health", "lifestyle"],
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
