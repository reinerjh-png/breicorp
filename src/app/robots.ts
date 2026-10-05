import { MetadataRoute } from "next";
import { siteMetadata } from "@/config/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
}
