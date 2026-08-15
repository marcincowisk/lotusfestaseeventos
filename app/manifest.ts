import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0C0A",
    theme_color: "#0B0C0A",
    icons: [
      // TODO: gerar favicons/ícones reais a partir da identidade visual definitiva
      // { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      // { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
