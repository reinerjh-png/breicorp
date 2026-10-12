import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isCanonicalProductionHost, siteMetadata } from "@/config/company";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? requestHeaders.get("x-forwarded-host");

  if (!isCanonicalProductionHost(host)) {
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
