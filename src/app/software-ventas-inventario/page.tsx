import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software de Ventas e Inventario Kardex en Perú",
  description:
    "Control de stock multialmacén en tiempo real, Kardex físico y valorizado SUNAT, punto de venta y compras para empresas peruanas.",
  keywords: [
    "software ventas inventario peru",
    "kardex valorizado sunat software",
    "control inventario multialmacen",
    "sistema punto de venta tingo maria",
    "gestion de stock y caja",
  ],
  path: "/software-ventas-inventario",
});

export default function SoftwareVentasInventarioPage() {
  const inventoryCapabilities = [
    {
      title: "Kardex Valorizado según SUNAT",
      desc: "Lleva el registro oficial de entradas, salidas y saldos con costeo Promedio Ponderado para sustentar tu inventario en fiscalizaciones.",
    },
    {
      title: "Control Multialmacén y Sucursales",
      desc: "Supervisa el stock disponible en tu tienda principal, almacén central y sucursales con traslados blindados contra pérdidas.",
    },
    {
      title: "Alertas Automáticas de Stock Mínimo",
      desc: "El sistema te notifica antes de que un producto de alta rotación se quede sin existencias para emitir órdenes de compra a tiempo.",
    },
    {
      title: "Lotes, Series y Fechas de Vencimiento",
      desc: "Indispensable para farmacias, alimentos, tecnología y ferreterías con control de garantías por número de serie.",
    },
    {
      title: "Múltiples Precios y Unidades de Venta",
      desc: "Vende al por mayor o menor, por caja, docena o unidad suelta con actualización automática de existencias.",
    },
    {
      title: "Arqueo de Inventario Físico vs. Sistema",
      desc: "Módulo para realizar conteos periódicos de mercadería y registrar mermas o ajustes con auditoría de usuario.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Control Total de Stock"
        title="Software de Ventas y Control de Inventario en Tiempo Real"
        description="Elimina descuadres de mercadería, conoce tu stock exacto en cada sucursal y obtén el Kardex físico-valorizado exigido por SUNAT."
        breadcrumbs={[
          { label: "Producto", href: "/producto" },
          { label: "Ventas e Inventario" },
        ]}
      />

      {/* Main Narrative */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Punto de Venta + Inventario Integrado
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Cada venta descuenta tu stock al instante, sin esperas ni errores manuales
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Cuando una venta se concreta en el mostrador o por un vendedor en la calle, el inventario se rebaja automáticamente. Si un cliente compra en la tienda 1, la tienda 2 sabe de inmediato cuántas unidades quedan realmente disponibles.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    Búsqueda instantánea de productos por código de barras, nombre o SKU.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    Control estricto de caja con arqueos ciegos para evitar pérdidas de efectivo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    Módulo de compras a proveedores con registro automático de costo unitario.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  <span>Solicitar demo de inventario</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-bold text-sm">Resumen de Almacén Central</span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                    Cuadrado
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl flex justify-between items-center">
                    <span className="text-slate-400">Total Ítems Activos:</span>
                    <span className="font-black text-white text-sm">1,840 productos</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl flex justify-between items-center">
                    <span className="text-slate-400">Valor Total en Stock:</span>
                    <span className="font-black text-emerald-400 text-sm">S/ 142,500.00</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl flex justify-between items-center">
                    <span className="text-slate-400">Alertas de Reposición:</span>
                    <span className="font-black text-amber-400 text-sm">3 productos</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Exporta reportes de Kardex en formato Excel oficial para SUNAT.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of features */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-950">
              Funcionalidades clave para un control sin fisuras
            </h2>
            <p className="text-slate-600 text-sm">
              Cada herramienta está orientada a proteger el patrimonio de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryCapabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
