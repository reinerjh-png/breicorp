import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Truck } from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Guías de Remisión Electrónica GRE SUNAT en Perú",
  description:
    "Gestiona Guías de Remisión Remitente (09) y Transportista (31) con código QR para documentar el traslado de mercadería.",
  keywords: [
    "guias de remision electronicas sunat",
    "guia remitente gre sunat perú",
    "software guias remision con qr",
    "emision guias transporte carga",
    "traslado mercaderia sunat obligatorio",
  ],
  path: "/guias-remision-electronicas",
});

export default function GuiasRemisionPage() {
  const greFeatures = [
    {
      title: "Generación de Código QR Oficial",
      description: "La guía se emite con el código QR y código de barras bidimensional que SUNAT y la PNP escanean en los puestos de control en carretera.",
    },
    {
      title: "Guía Remitente (09) y Transportista (31)",
      description: "Soporta ambas modalidades de emisión, ya sea que traslades con tu propia flota de vehículos o mediante empresas de transporte de carga.",
    },
    {
      title: "Padrón de Conductores y Vehículos",
      description: "Guarda tu lista de choferes (DNI, nombre, número de brevete) y tractos/carretas (placas autorizadas) para emitir en 30 segundos.",
    },
    {
      title: "Vinculación Automática a Facturas",
      description: "Convierte una factura comercial o pedido de venta en una guía electrónica en un solo clic, sin volver a digitar los productos.",
    },
    {
      title: "Traslados entre Establecimientos Propios",
      description: "Emite guías por traslado entre tus propias tiendas, sucursales y almacenes con control estricto de entrada y salida.",
    },
    {
      title: "Envío Digital al Chofer por WhatsApp",
      description: "El conductor puede portar la guía en formato PDF en su celular o impresa en formato ticket térmico de 80mm.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Normativa Obligatoria SUNAT"
        title="Guías de Remisión Electrónica (GRE) sin retrasos en ruta"
        description="Evita decomisos de mercadería y multas de SUNAT. Emite Guías de Remisión Remitente y Transportista en segundos con código QR validado."
        breadcrumbs={[
          { label: "Producto", href: "/producto" },
          { label: "Guías de Remisión Electrónica" },
        ]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Documentación para el traslado
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Despacha tus camiones con la tranquilidad de cumplir la norma
            </h2>
            <p className="text-base text-slate-600">
              La SUNAT exige que todo traslado de mercadería esté respaldado por una Guía Electrónica con código QR. Con BREICORP la emites antes de que el vehículo salga del almacén.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
