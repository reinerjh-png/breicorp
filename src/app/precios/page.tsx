import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { plans } from "@/config/plans";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Planes y Tarifas Transparentes | BREICORP",
  description:
    "Compara los planes de BREICORP: Emprendedor, Negocio, Empresa y Corporativo. Facturación electrónica SUNAT, control de inventario y punto de venta sin costos ocultos.",
};

export default function PreciosPage() {
  const comparisonMatrix = [
    { feature: "Comprobantes electrónicos", emprendedor: "Hasta 100/mes", negocio: "Hasta 500/mes", empresa: "Hasta 2,000/mes", corp: "Ilimitados" },
    { feature: "Usuarios de acceso", emprendedor: "1 usuario", negocio: "Hasta 3", empresa: "Hasta 10", corp: "Ilimitados" },
    { feature: "Sucursales / Locales", emprendedor: "1 local", negocio: "Hasta 2", empresa: "Hasta 5", corp: "Ilimitados" },
    { feature: "Catálogo de productos", emprendedor: "Hasta 100", negocio: "Hasta 500", empresa: "Ilimitados", corp: "Ilimitados" },
    { feature: "Boletas, Facturas y Notas", emprendedor: true, negocio: true, empresa: true, corp: true },
    { feature: "Envío a WhatsApp del cliente", emprendedor: true, negocio: true, empresa: true, corp: true },
    { feature: "Control de Kardex e Inventario", emprendedor: false, negocio: true, empresa: true, corp: true },
    { feature: "Punto de Venta (POS) y Cajas", emprendedor: false, negocio: true, empresa: true, corp: true },
    { feature: "Guías de Remisión Electrónica GRE", emprendedor: false, negocio: true, empresa: true, corp: true },
    { feature: "Múltiples listas de precios", emprendedor: false, negocio: false, empresa: true, corp: true },
    { feature: "Preventa y vendedores en ruta", emprendedor: false, negocio: false, empresa: true, corp: true },
    { feature: "API e integraciones a medida", emprendedor: false, negocio: false, empresa: false, corp: true },
    { feature: "Soporte técnico prioritario", emprendedor: "Estándar", negocio: "Prioritario", empresa: "Dedicado", corp: "24/7 SLA" },
  ];

  return (
    <>
      <PageHeader
        badge="Inversión con Retorno Inmediato"
        title="Planes claros y predecibles para tu empresa"
        description="Sin cobros por instalación sorpresa ni tarifas ocultas por actualización normativa. Elige la escala que tu empresa necesita hoy."
        breadcrumbs={[{ label: "Precios" }]}
      />

      <PricingSection />

      {/* Feature comparison table */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Tabla comparativa de funcionalidades
            </h2>
            <p className="text-sm text-slate-600">
              Revisa en detalle qué incluye cada nivel de servicio para tomar la mejor decisión.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Funcionalidad</th>
                  <th className="p-4 sm:p-5 text-center">Emprendedor</th>
                  <th className="p-4 sm:p-5 text-center bg-blue-50/70 text-blue-900">Negocio</th>
                  <th className="p-4 sm:p-5 text-center">Empresa</th>
                  <th className="p-4 sm:p-5 text-center">Corporativo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-800">{row.feature}</td>
                    
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      {typeof row.emprendedor === "boolean" ? (
                        row.emprendedor ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.emprendedor
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center font-semibold bg-blue-50/30 text-blue-900">
                      {typeof row.negocio === "boolean" ? (
                        row.negocio ? (
                          <Check className="w-4 h-4 text-blue-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.negocio
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      {typeof row.empresa === "boolean" ? (
                        row.empresa ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.empresa
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center text-slate-600 font-bold">
                      {typeof row.corp === "boolean" ? (
                        row.corp ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.corp
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
