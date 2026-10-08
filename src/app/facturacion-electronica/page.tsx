import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  Receipt,
  ShieldCheck,
  CheckCircle,
  Zap,
  Printer,
  Share2,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Facturación Electrónica SUNAT en Perú",
  description:
    "Emite facturas, boletas de venta, notas de crédito y débito electrónicas para procesos relacionados con SUNAT, con envío por WhatsApp e impresión en ticket.",
  keywords: [
    "facturación electrónica sunat",
    "sistema facturación electrónica perú",
    "boletas y facturas electrónicas tingo maria",
    "software comprobantes electrónicos sunat",
    "emisión comprobantes electrónicos",
  ],
  path: "/facturacion-electronica",
});

export default function FacturacionElectronicaPage() {
  const problemsSolved = [
    {
      problem: "Caídas y lentitud constantes en el portal 'Mis Trámites' de SUNAT",
      solution: "BREICORP mantiene el registro comercial y organiza el proceso electrónico del comprobante.",
    },
    {
      problem: "Clientes esperando minutos en caja para recibir su boleta",
      solution: "Flujo de emisión ágil con consulta de datos de DNI/RUC cuando corresponde.",
    },
    {
      problem: "Pérdida de comprobantes y desorden para el contador a fin de mes",
      solution: "Reporte de ventas consolidado y exportación de archivos XML y CDR en un clic.",
    },
    {
      problem: "Riesgo de sanciones por emitir comprobantes con errores normativos",
      solution: "Validaciones automáticas de impuestos (IGV, exonerado, inafecto, ICBPER bolsa).",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Facturación Electrónica en Perú"
        title="Facturación electrónica ágil y organizada para tu empresa"
        description="Emite boletas de venta, facturas comerciales, notas de crédito y débito, y comparte los comprobantes por WhatsApp en formato ticket o A4."
        breadcrumbs={[
          { label: "Producto", href: "/producto" },
          { label: "Facturación Electrónica" },
        ]}
      />

      {/* Comparison: Portal SUNAT vs BREICORP */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">
              ¿Por qué las empresas peruanas migran del portal de SUNAT a BREICORP?
            </h2>
            <p className="text-base text-slate-600">
              Emitir desde el portal web gratuito de SUNAT cuesta caro en tiempo perdido,
              errores de digitación y clientes insatisfechos en la cola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemsSolved.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3"
              >
                <div className="flex items-start gap-2.5 text-rose-600 text-sm font-semibold">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Problema habitual: {item.problem}</span>
                </div>
                <div className="flex items-start gap-2.5 text-emerald-700 text-sm font-bold pl-1 pt-1 border-t border-slate-200/80">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Solución con BREICORP: {item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-950">
              Todo lo que incluye el módulo de facturación
            </h2>
            <p className="text-slate-600 text-sm">
              Diseñado tanto para pequeñas tiendas con una sola caja como para distribuidoras con cientos de comprobantes diarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Zap className="w-8 h-8 text-orange-600" />
              <h3 className="font-bold text-lg text-slate-900">Validación de DNI y RUC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ingresa el número de RUC y el sistema autocompleta la Razón Social y dirección fiscal registrada en SUNAT. Ingresa el DNI y autocompleta nombres y apellidos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Printer className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Formatos Ticket & A4</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Impresión directa en ticketeras térmicas estándar de 80mm o 58mm (con logotipo de tu negocio y código QR oficial) y hojas tamaño A4 o A5 para facturas corporativas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Share2 className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Envío por WhatsApp</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ahorra papel enviando el comprobante electrónico con un solo clic directamente al número de WhatsApp o correo electrónico de tu cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
              <h3 className="font-bold text-lg text-slate-900">Certificado Digital Incluido</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Te orientamos en la vinculación del Certificado Digital Tributario (CDT) otorgado por SUNAT o gestionamos el certificado propio de tu empresa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <FileCheck className="w-8 h-8 text-purple-600" />
              <h3 className="font-bold text-lg text-slate-900">Notas de Crédito y Débito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Anulaciones, devoluciones parciales y correcciones de comprobantes en pocos segundos, vinculadas automáticamente al comprobante de origen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Receipt className="w-8 h-8 text-amber-600" />
              <h3 className="font-bold text-lg text-slate-900">Exportación Contable</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Descarga el reporte mensual de ventas en Excel con todas las columnas exigidas para la declaración tributaria y el SIRE de tu contador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
