import type { MetadataRoute } from "next";

// Merges the legacy manifest.json + site.webmanifest into one canonical manifest.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Preshol Global",
    short_name: "Preshol",
    description: "Healing Hearts. Empowering Minds. Opening Doors Beyond Borders.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf5ec",
    theme_color: "#0b2a1a",
    orientation: "portrait-primary",
    icons: [
      { src: "/logo.png", sizes: "16x16", type: "image/png" },
      { src: "/logo.png", sizes: "32x32", type: "image/png" },
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
