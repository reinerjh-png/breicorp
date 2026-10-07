import { company, siteMetadata } from "@/config/company";

interface JsonLdProps {
  type?: "Organization" | "SoftwareApplication" | "FAQPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export function JsonLd({ type = "Organization", data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.legalName,
      alternateName: company.companyName,
      url: siteMetadata.siteUrl,
      logo: `${siteMetadata.siteUrl}/logo-breicorp.webp`,
      description:
        "Software empresarial, facturación electrónica SUNAT, control de inventarios y automatización para empresas en Perú.",
      foundingDate: `${company.foundationYear}`,
      taxID: company.ruc,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressCountry: "PE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "sales and customer service",
        areaServed: "PE",
        availableLanguage: ["Spanish"],
      },
      sameAs: [
        company.socialNetworks.facebook,
      ].filter(Boolean),
    };
  } else if (type === "SoftwareApplication") {
    schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BREICORP ERP Cloud",
      operatingSystem: "Web Browser, Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PEN",
        lowPrice: "50.00",
        highPrice: "150.00",
      },
      featureList: [
        "Facturación electrónica para empresas peruanas",
        "Control de inventario físico y valorizado (Kardex)",
        "Guías de remisión electrónicas remitente y transportista",
        "Punto de venta multi-caja y multi-almacén",
        "Reportes gerenciales y de rentabilidad en tiempo real",
      ],
    };
  }

  const finalSchema = data ? { ...schema, ...data } : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
