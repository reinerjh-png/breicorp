import { PageHeader } from "@/components/shared/PageHeader";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { planComparison, plans } from "@/config/plans";
import { createPageMetadata } from "@/config/company";
import { Check, X } from "lucide-react";
import { EventTracker } from "@/components/analytics/EventTracker";

export const metadata = createPageMetadata({
  title: "Planes y Tarifas Transparentes",
  description:
    "Compara los planes de BREICORP: Emprendedor, Negocio, Empresa y Corporativo. Facturación electrónica SUNAT, control de inventario y punto de venta sin costos ocultos.",
  path: "/precios",
});

export default function PreciosPage() {
  return (
    <>
      <EventTracker name="pricing_view" />
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
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className={`p-4 text-center sm:p-5 ${plan.recommended ? "bg-orange-50/70 text-slate-900" : ""}`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {planComparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-800">{row.feature}</td>
                    {plans.map((plan) => {
                      const value = row.values[plan.id];
                      return (
                        <td
                          key={plan.id}
                          className={`p-4 text-center sm:p-5 ${plan.recommended ? "bg-orange-50/30 font-semibold text-slate-900" : "text-slate-600"}`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="mx-auto h-4 w-4 text-emerald-600" aria-label="Incluido" />
                            ) : (
                              <X className="mx-auto h-4 w-4 text-slate-300" aria-label="No incluido" />
                            )
                          ) : (
                            value
                          )}
                        </td>
                      );
                    })}
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
