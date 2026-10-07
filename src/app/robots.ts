import { MetadataRoute } from "next";
import { isProductionSite, siteMetadata } from "@/config/company";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
}
