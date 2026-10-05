import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Zap, RefreshCw, Layers, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatización de Procesos Empresariales en Perú | BREICORP",
  description:
    "Elimina tareas manuales repetitivas, digitación duplicada y errores de stock. Automatiza la facturación, traslados y cobros de tu negocio.",
};

export default function AutomatizacionPage() {
  return (
    <>
      <PageHeader
        badge="Eficiencia Operativa"
        title="Automatización de Procesos Comerciales y Tributarios"
        description="Reduce drásticamente el tiempo que tu personal dedica a tareas mecánicas de digitación y cuadre manual. Deja que la tecnología trabaje por tu empresa."
        breadcrumbs={[{ label: "Soluciones", href: "/software-empresarial" }, { label: "Automatización de Procesos" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-black text-slate-950">
              ¿Qué procesos automatiza BREICORP en tu empresa?
            </h2>
            <p className="text-base text-slate-600">
              Transformamos flujos manuales lentos en flujos automáticos sincronizados en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <h3 className="font-bold text-lg text-slate-900">Validación RUC/DNI en 1 clic</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No vuelvas a teclear la razón social o dirección del cliente. Al escribir el RUC, el sistema obtiene los datos oficiales de SUNAT de forma automática.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <RefreshCw className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Descuento de Stock Automático</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cada boleta, factura o guía descuenta el almacén correspondiente sin requerir que un encargado digite una salida en otra hoja de cálculo.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Layers className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Conversión de Cotización a Factura</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Una cotización aprobada se convierte en comprobante electrónico o guía de despacho con un solo botón, manteniendo los mismos precios acordados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
