import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Star, CheckCircle, TrendingUp, Clock, MapPin, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito de Clientes | BREICORP",
  description:
    "Descubre testimonios reales de empresas peruanas que redujeron tiempos en caja, eliminaron descuadres de stock y modernizaron su facturación con BREICORP.",
};

export default function CasosExitoPage() {
  const cases = [
    {
      company: "Inversiones & Ferretería Santa Rosa",
      city: "Tingo María, Huánuco",
      sector: "Ferretería y Materiales de Construcción",
      situation:
        "Atendían a más de 300 clientes diarios emitiendo comprobantes manualmente en la web de SUNAT, lo que generaba demoras de hasta 15 minutos por cliente en horas pico y descuadres continuos entre lo facturado y el stock físico de bolsas de cemento y fierro.",
      solution:
        "Implementación de BREICORP con lectores de códigos de barras, 3 puntos de venta en mostrador y sincronización con el almacén de despacho de materiales pesados.",
      results: [
        "Reducción del tiempo de cobro de 12 minutos a 15 segundos por cliente.",
        "Cero mermas no justificadas en el inventario mensual.",
        "Control exacto de los créditos comerciales otorgados a maestros de obra.",
      ],
      quote:
        "El cambio fue inmediato. Los clientes ya no hacen cola en la puerta y sabemos exactamente cuánto fierro nos queda en almacén sin ir a contar físicamente.",
      person: "Víctor R. — Gerente General",
    },
    {
      company: "Distribuidora del Oriente E.I.R.L.",
      city: "Huánuco y Selva Central",
      sector: "Distribución Mayorista de Alimentos y Bebidas",
      situation:
        "Con una flota de 6 camiones de reparto, la emisión de guías de remisión manuales en papel causaba continuas observaciones y demoras en los puestos de control de SUNAT y la Policía de Carreteras.",
      solution:
        "Módulo de Guías de Remisión Electrónica GRE de BREICORP con generación de código QR en formato ticket térmico y preventa móvil para 8 vendedores en ruta.",
      results: [
        "100% de camiones despachados con guías electrónicas homologadas con QR.",
        "Los pedidos tomados en la calle entran directamente a almacén para empaque.",
        "Ahorro de más de 40 horas al mes en digitación repetitiva de facturas.",
      ],
      quote:
        "Nuestros camiones salen a tiempo y los choferes viajan tranquilos porque la guía con QR pasa cualquier fiscalización sin ningún inconveniente.",
      person: "María Elena C. — Jefa de Logística",
    },
    {
      company: "Cadena de Boticas & Salud San Martín",
      city: "San Martín",
      sector: "Farmacias y Salud",
      situation:
        "Manejo de más de 3,500 ítems farmacéuticos con fechas de vencimiento próximas y necesidad de controlar cierres de caja en 3 locales diferentes.",
      solution:
        "BREICORP Multilocal con alertas de vencimiento por lote y cierres de caja ciegos por turno de cajero.",
      results: [
        "Reducción de pérdidas por medicamentos vencidos a menos del 0.2%.",
        "Arqueos de caja 100% exactos sin faltantes de dinero en efectivo.",
        "Supervisión remota de ventas en tiempo real desde el celular del propietario.",
      ],
      quote:
        "Puedo estar de viaje y ver exactamente cuánto ha vendido cada una de mis 3 boticas hoy. El control de lotes nos ha ahorrado miles de soles.",
      person: "Jorge L. — Propietario",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Historias de Éxito en Perú"
        title="Resultados tangibles en empresas comerciales reales"
        description="Conoce el impacto directo de BREICORP en la velocidad de atención, control de inventario y tranquilidad tributaria de nuestros clientes."
        breadcrumbs={[{ label: "Empresa", href: "/empresa" }, { label: "Casos de Éxito" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">{c.company}</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{c.city}</span>
                    <span>•</span>
                    <span className="font-semibold text-blue-600">{c.sector}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-rose-600 mb-1">
                      El desafío antes de BREICORP:
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{c.situation}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-blue-600 mb-1">
                      La solución implementada:
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{c.solution}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-600">
                    Resultados obtenidos:
                  </h3>
                  <div className="space-y-2">
                    {c.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{r}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <div className="text-xs font-bold text-slate-900 mt-2">— {c.person}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
