import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ShoppingBag, CreditCard, BarChart2 } from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software para Comercializadoras y Tiendas Retail en Perú",
  description:
    "Punto de venta POS de alta velocidad para tiendas comerciales, ferreterías, farmacias y minimarkets. Cobros con Yape, lector de código de barras y arqueo de caja.",
  path: "/software-comercializadoras",
});

export default function SoftwareComercializadorasPage() {
  return (
    <>
      <PageHeader
        badge="Retail y Comercio"
        title="Software de Punto de Venta para Comercializadoras y Retail"
        description="Atiende a tus clientes en segundos en el mostrador. Cobro rápido con lector de barras, billeteras digitales y control exacto de efectivo en cada turno de caja."
        breadcrumbs={[{ label: "Empresas", href: "/software-empresas-peru" }, { label: "Comercializadoras" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-black text-slate-950">
              Menos cola en caja, más ventas concretadas
            </h2>
            <p className="text-base text-slate-600">
              Cada segundo que un cliente espera en la fila es un riesgo de compra cancelada. BREICORP agiliza la venta al máximo nivel de eficiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <ShoppingBag className="w-8 h-8 text-orange-600" />
              <h3 className="font-bold text-lg text-slate-900">Ventas en 2 Segundos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escanea el código de barras, selecciona la forma de pago y emite la boleta electrónica con impresión automática en ticketera térmica.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <CreditCard className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Cobros Mixtos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                El cliente puede pagar una parte en efectivo y otra con Yape o tarjeta de crédito. La caja registra los importes por canal con total transparencia.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <BarChart2 className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Arqueos Ciegos de Caja</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                El cajero declara lo que tiene en caja sin ver el total calculado por el sistema, garantizando que cualquier descuadre quede registrado de inmediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
