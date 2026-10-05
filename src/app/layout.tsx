import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteMetadata, company } from "@/config/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: "BREICORP | Software Empresarial, Facturación SUNAT y ERP Cloud en Perú",
    template: "%s | BREICORP",
  },
  description:
    "Software empresarial en la nube para empresas peruanas. Facturación electrónica SUNAT homologada OSE, control de inventario y Kardex, punto de venta y guías de remisión.",
  keywords: [
    "software empresarial peru",
    "facturación electrónica sunat",
    "sistema de ventas e inventario",
    "erp para mypes peru",
    "guías de remisión electrónicas gre",
    "software para distribuidoras tingo maria huanuco peru",
    "kardex valorizado sunat",
    "punto de venta pos peru",
  ],
  authors: [{ name: company.legalName }],
  creator: company.companyName,
  publisher: company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    title: "BREICORP | Software Empresarial, Facturación SUNAT y ERP Cloud",
    description:
      "Automatiza ventas, inventario multialmacén y facturación electrónica SUNAT con una plataforma rápida y segura en Perú.",
    url: siteMetadata.siteUrl,
    siteName: company.companyName,
    locale: siteMetadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BREICORP | Software Empresarial en Perú",
    description:
      "Plataforma empresarial en la nube: ventas, inventarios, Kardex y facturación electrónica SUNAT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-breicorp.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/logo-breicorp.webp"],
    apple: [
      { url: "/logo-breicorp.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE">
      <head>
        <link rel="icon" href="/logo-breicorp.webp" type="image/webp" />
        <link rel="shortcut icon" href="/logo-breicorp.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logo-breicorp.webp" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-orange-600 selection:text-white">
        <JsonLd type="Organization" />
        <JsonLd type="SoftwareApplication" />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
