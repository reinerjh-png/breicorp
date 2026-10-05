/**
 * BREICORP — Planes y precios.
 *
 * Fuente única de verdad para planes comerciales.
 * No duplicar tarifas en componentes.
 *
 * [VERIFICAR_PRECIOS] — Confirmar precios actualizados antes de producción.
 */

export interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  currencySymbol: string;
  documents: string;
  users: string;
  locations: string;
  products: string;
  features: string[];
  recommended: boolean;
  cta: string;
  ctaHref: string;
}

export const plans: Plan[] = [
  {
    id: "emprendedor",
    name: "Emprendedor",
    description: "Para negocios que inician su formalización y facturación electrónica.",
    monthlyPrice: 50,
    annualPrice: 480,
    currency: "PEN",
    currencySymbol: "S/",
    documents: "Hasta 100 comprobantes/mes",
    users: "1 usuario",
    locations: "1 establecimiento",
    products: "Hasta 100 productos",
    features: [
      "Facturación electrónica",
      "Boletas, facturas, notas de crédito",
      "Gestión de clientes",
      "Catálogo de productos",
      "Reportes básicos",
      "App móvil",
    ],
    recommended: false,
    cta: "Empezar ahora",
    ctaHref: "/contacto",
  },
  {
    id: "negocio",
    name: "Negocio",
    description: "Para empresas que necesitan controlar ventas, inventario y facturación.",
    monthlyPrice: 80,
    annualPrice: 768,
    currency: "PEN",
    currencySymbol: "S/",
    documents: "Hasta 500 comprobantes/mes",
    users: "Hasta 3 usuarios",
    locations: "Hasta 2 establecimientos",
    products: "Hasta 500 productos",
    features: [
      "Todo lo de Emprendedor",
      "Control de inventario y Kardex",
      "Punto de venta",
      "Caja y cierres",
      "Guías de remisión",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
    recommended: true,
    cta: "Solicitar demo",
    ctaHref: "/contacto",
  },
  {
    id: "empresa",
    name: "Empresa",
    description: "Para empresas en crecimiento con múltiples usuarios y locales.",
    monthlyPrice: 120,
    annualPrice: 1152,
    currency: "PEN",
    currencySymbol: "S/",
    documents: "Hasta 2,000 comprobantes/mes",
    users: "Hasta 10 usuarios",
    locations: "Hasta 5 establecimientos",
    products: "Ilimitados",
    features: [
      "Todo lo de Negocio",
      "Múltiples puntos de venta",
      "Gestión de vendedores",
      "Logística y despacho",
      "Reportes gerenciales",
      "Integraciones",
      "Soporte dedicado",
    ],
    recommended: false,
    cta: "Solicitar demo",
    ctaHref: "/contacto",
  },
  {
    id: "corporativo",
    name: "Corporativo",
    description: "Para distribuidoras, cadenas y operaciones con volumen alto.",
    monthlyPrice: 150,
    annualPrice: 1440,
    currency: "PEN",
    currencySymbol: "S/",
    documents: "Ilimitados",
    users: "Ilimitados",
    locations: "Ilimitados",
    products: "Ilimitados",
    features: [
      "Todo lo de Empresa",
      "Volumen ilimitado",
      "Multialmacén",
      "Personalización",
      "Onboarding dedicado",
      "SLA de soporte",
      "API e integraciones avanzadas",
    ],
    recommended: false,
    cta: "Hablar con un especialista",
    ctaHref: "/contacto",
  },
];
