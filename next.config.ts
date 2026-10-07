import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 430, 768, 1024, 1280, 1440, 1920],
  },
  async redirects() {
    return [
      // Preserve old URLs — map to new structure
      { source: "/app-movil", destination: "/producto", permanent: true },
      {
        source: "/facturacion-electronica-peru",
        destination: "/facturacion-electronica",
        permanent: true,
      },
    ];
  },
  async headers() {
    const isProductionSite = process.env.SITE_ENV === "production";

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          ...(!isProductionSite
            ? [
                {
                  key: "X-Robots-Tag",
                  value: "noindex, nofollow, noarchive",
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
