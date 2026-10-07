import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CheckCircle, ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software de Facturación y Ventas para MYPEs en Perú",
  description:
    "El software más fácil y económico para micro y pequeñas empresas en Perú. Factura electrónicamente a SUNAT, controla tus ventas y clientes desde S/ 50 al mes.",
  path: "/software-mypes",
});

export default function SoftwareMypesPage() {
  return (
    <>
      <PageHeader
        badge="Especial para Micro y Pequeñas Empresas"
        title="Software accesible para formalizar y crecer tu MYPE"
        description="Diseñado para que cualquier emprendedor o comerciante comience a emitir boletas y facturas en menos de 24 horas, sin contratar técnicos ni pagar miles de soles."
        breadcrumbs={[{ label: "Empresas", href: "/software-empresas-peru" }, { label: "MYPEs" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Planes desde S/ 50/mes
              </span>
              <h2 className="text-3xl font-black text-slate-950">
                Todo lo que tu negocio necesita sin complicaciones técnicas
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Si estás cansado de que la web de SUNAT se cuelgue mientras tu cliente espera en caja, o si necesitas ordenar tus cuentas sin aprender sistemas difíciles, BREICORP fue creado pensando en ti.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Emisión en 3 clics desde tu celular, tablet o laptop.</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Envío directo de boletas y facturas por WhatsApp a tus clientes.</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Catálogo de productos con precios claros y reporte para tu contador.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/precios"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  <span>Ver Planes para Emprendedores</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-bold text-xl text-slate-900">¿Qué incluye el Plan Emprendedor?</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">✓ Hasta 100 comprobantes mensuales</li>
                <li className="flex items-center gap-2">✓ Boletas, facturas y notas de crédito</li>
                <li className="flex items-center gap-2">✓ Catálogo de hasta 100 productos</li>
                <li className="flex items-center gap-2">✓ Reporte de ventas para tu contador en Excel</li>
                <li className="flex items-center gap-2">✓ Capacitación inicial de uso incluida</li>
              </ul>
              <div className="pt-4 border-t border-slate-200 text-sm font-bold text-slate-900 flex justify-between items-center">
                <span>Inversión mensual:</span>
                <span className="text-2xl font-black text-blue-600">S/ 50.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
