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
  salesEmail: "ventas@breicorp.com.pe",
  supportEmail: "soporte@breicorp.com.pe",
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
} as const;

/** Configuración de analytics — usar variables de entorno */
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
  siteUrl: `https://www.${company.domain}`,
  locale: "es_PE",
  ogImage: "/logo-breicorp.webp",
  twitterHandle: "", // [VERIFICAR_TWITTER]
};
