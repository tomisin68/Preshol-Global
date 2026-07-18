import type { MetadataRoute } from "next";

// Ported from the site's real robots.txt (NOT the stale robot.txt duplicate).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // === GROUP 1: MAJOR AI & LLM CRAWLERS (explicitly allowed) ===
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "AlexaBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "StabilityBot", allow: "/" },

      // === GROUP 2: MAJOR SEARCH ENGINES ===
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "BingPreview", allow: "/" },
      { userAgent: "Slurp", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Baiduspider", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "YandexImages", allow: "/" },

      // === GROUP 3: IMAGE & MEDIA CRAWLERS ===
      {
        userAgent: "Googlebot-Image",
        allow: ["/#gallery", "/*.jpeg", "/*.jpg", "/*.png", "/*.gif", "/*.webp"],
        disallow: "/private-images/",
      },
      {
        userAgent: "Bingbot-Image",
        allow: ["/#gallery", "/*.jpeg", "/*.jpg", "/*.png", "/*.webp"],
      },
      {
        userAgent: "Pinterestbot",
        allow: ["/#gallery", "/*.jpeg", "/*.jpg", "/*.png"],
      },

      // === GROUP 4: SPECIALIZED BOTS (academic, research, archival) ===
      { userAgent: "SemanticScholarBot", allow: "/" },
      { userAgent: "InternetArchiveBot", allow: "/" },
      { userAgent: "ia_archiver", allow: "/" },
      { userAgent: "TurnitinBot", allow: "/" },
      { userAgent: "Scrapy", allow: "/" },

      // === GROUP 5: GENERAL CRAWLERS (catch-all) + blocked paths ===
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Admin and system paths
          "/admin",
          "/wp-admin",
          "/cms",
          "/backend",
          "/api/",
          "/internal/",
          // User data and authentication
          "/login",
          "/signup",
          "/register",
          "/account",
          "/profile",
          "/user/",
          "/my-account",
          // Private or staging areas
          "/private/",
          "/staging/",
          "/test/",
          "/dev/",
          "/temp/",
          // Dynamic parameters that create duplicate content
          "/*?utm_source=",
          "/*?utm_medium=",
          "/*?utm_campaign=",
          "/*?sessionid=",
          "/*?ref=",
          "/*?source=",
          "/*?affiliate=",
          // File types that shouldn't be crawled
          "/*.php$",
          "/*.sql$",
          "/*.env$",
          "/*.log$",
          "/*.bak$",
          "/*.tmp$",
          // Specific sensitive directories
          "/conf/",
          "/includes/",
          "/modules/",
          "/plugins/",
          "/vendor/",
          "/node_modules/",
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://www.presholGlobal.org/sitemap.xml",
  };
}
