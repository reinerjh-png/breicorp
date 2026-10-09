/**
 * BREICORP — Datos corporativos centralizados.
 * 
 * TODA la información corporativa que aparece en la web
 * debe consumir este archivo. Nunca escribir el mismo dato
 * manualmente en varios componentes.
 * 
 * Los campos marcados con [VERIFICAR_*] requieren confirmación
 * documental antes de publicar en producción.
 */

export const company = {
  companyName: "BREICORP",
  legalName: "BREICORP E.I.R.L.",
  ruc: "20615859312",
  partidaElectronica: "N.° 11084023",
  address: "Av. Tito Jaime 642, Tingo María — Huánuco",
  country: "Perú",
  countryCode: "PE",
  phone: "+51 948 261 382",
  whatsapp: "51948261382",
  whatsappMessage:
    "Hola, quiero conocer BREICORP y evaluar qué procesos de mi empresa puedo automatizar.",
  /** Correo general, visible y destinatario de formularios en esta fase. */
  contactEmail: "breicorp@gmail.com",
  /** Alias temporales: todos los canales usan el correo general en Sprint 1B. */
  salesEmail: "breicorp@gmail.com",
  supportEmail: "breicorp@gmail.com",
  foundationYear: 2017,
  domain: "breicorp.com.pe",
  appDomain: "app.breicorp.com",
  socialNetworks: {
    facebook: "https://www.facebook.com/breicorp",
    // [VERIFICAR_RED_SOCIAL] — confirmar URLs oficiales
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
  },
  businessHours: "Lunes a viernes: 8:00 a.m. — 6:00 p.m.",
  /**
   * [VERIFICAR_DATO_CLIENTES]
   * La web actual dice "más de 2,000 empresas" y en otros lugares "2,400".
   * Usar únicamente la cifra que pueda verificarse documentalmente.
   * Mientras tanto, se usa null y el componente mostrará copy seguro.
   */
  verifiedCustomerCount: null as number | null,
  verifiedRegions: ["Perú"],
  appLinks: {
    playStore:
      "https://play.google.com/store/apps/details?id=com.breicorp.app",
    appStore: "", // [VERIFICAR_APP_STORE] — confirmar si existe
    webApp: "https://app.breicorp.com",
  },
  legalLinks: {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-condiciones",
    libroReclamaciones: "/libro-reclamaciones",
  },
  /**
   * [VERIFICAR_CERTIFICACION] — No publicar certificaciones sin evidencia.
   * La web actual menciona AES-256, ISO 27001 sin respaldo visible.
   */
  verifiedCertifications: [] as string[],
  /**
   * Entorno de demostración pública.
   * Estas credenciales son PÚBLICAS: se muestran abiertamente en /demo.
   * No usar en autenticación real, cookies, localStorage, ni APIs.
   */
  demo: {
    url: "https://demo.breicorp.pe",
    email: "demo@breicorp.pe",
    password: "123456",
  },
} as const;

/** Configuración de analytics — reservada para un sprint posterior. */
export const analytics = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
};

/** WhatsApp link builder */
export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage ?? company.whatsappMessage
  );
  return `https://wa.me/${company.whatsapp}?text=${message}`;
}

/** Metadata constants */
export const siteMetadata = {
  siteName: "BREICORP",
  siteUrl: `https://${company.domain}`,
  locale: "es_PE",
  ogImage: "/logo-breicorp.webp",
  twitterHandle: "", // [VERIFICAR_TWITTER]
};

import type { Metadata } from "next";

/**
 * Entorno público del sitio.
 *
 * El valor seguro por defecto es "staging": evita indexar despliegues de
 * Vercel por accidente. Al publicar el dominio oficial se debe configurar
 * SITE_ENV=production en el entorno de producción.
 */
export const isProductionSite = process.env.SITE_ENV === "production";

export const robotsPolicy = isProductionSite
  ? {
      index: true,
      follow: true,
      noarchive: false,
      googleBot: {
        index: true,
        follow: true,
        noarchive: false,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    }
  : {
      index: false,
      follow: false,
      noarchive: true,
      googleBot: {
        index: false,
        follow: false,
        noarchive: true,
      },
    };

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

/** Metadata consistente por ruta, siempre canónica al dominio final. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteMetadata.siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | ${siteMetadata.siteName}`,
      description,
      url: canonicalUrl,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      images: [
        {
          url: siteMetadata.ogImage,
          alt: `${siteMetadata.siteName} — Software empresarial`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteMetadata.siteName}`,
      description,
      images: [siteMetadata.ogImage],
    },
    robots: robotsPolicy,
  };
}
