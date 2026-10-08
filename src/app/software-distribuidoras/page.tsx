import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Boxes, QrCode, Smartphone } from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software para Distribuidoras y Mayoristas en Perú",
  description:
    "Control de preventa, vendedores en ruta, despacho con Guías de Remisión Electrónica con QR SUNAT, multialmacén y listas de precios por volumen.",
  path: "/software-distribuidoras",
});

export default function SoftwareDistribuidorasPage() {
  return (
    <>
      <PageHeader
        badge="Distribución y Mayoristas"
        title="Software de Logística, Preventa y Distribución Mayorista"
        description="Acelera tu despacho de pedidos, supervisa a tu fuerza de ventas en la calle y emite Guías de Remisión Electrónicas GRE obligatorias con código QR sin demoras."
        breadcrumbs={[{ label: "Empresas", href: "/software-empresas-peru" }, { label: "Distribuidoras" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-black text-slate-950">
              Diseñado para el ritmo de carga y despacho masivo
            </h2>
            <p className="text-base text-slate-600">
              Controla desde que el vendedor toma el pedido en la tienda del cliente hasta que el camión sale con su guía oficial validada por SUNAT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Smartphone className="w-8 h-8 text-orange-600" />
              <h3 className="font-bold text-lg text-slate-900">Preventa en Ruta</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tus vendedores toman pedidos desde la app móvil conociendo el stock real en almacén, listas de precios mayoristas y crédito disponible del cliente.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <QrCode className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Guías GRE al Instante</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Genera la guía remitente o transportista con código QR para que los camiones viajen tranquilos ante cualquier control policial o de fiscalización SUNAT.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Boxes className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Múltiples Precios y Bultos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vende por caja cerrada, fardo o unidad con listas de precios diferenciadas por volumen (mayorista A, B, especial) asignadas automáticamente al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
