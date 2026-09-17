import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "MJ12bot",
          "Bytespider",
          "PetalBot",
          "DataForSeoBot",
          "MegaIndex",
          "BLEXBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://pagesale.id/sitemap.xml",
  };
}
