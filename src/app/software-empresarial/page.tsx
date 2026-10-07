import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software Empresarial en la Nube en Perú: ERP Cloud",
  description:
    "Centraliza tus operaciones, múltiples locales, ventas, inventario y facturación electrónica con un software empresarial moderno y escalable en Perú.",
  path: "/software-empresarial",
});

export default function SoftwareEmpresarialPage() {
  return (
    <>
      <PageHeader
        badge="Gestión Centralizada"
        title="Software Empresarial Cloud para escalar tu operación"
        description="Conecta finanzas, ventas, almacenes y facturación en un solo entorno en la nube. Toma decisiones con datos en tiempo real de todas tus sucursales."
        breadcrumbs={[{ label: "Soluciones", href: "/producto" }, { label: "Software Empresarial" }]}
      />

      <section id="multilocal" className="scroll-mt-28 py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">
                El control de tu empresa desde una única pantalla gerencial
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A medida que una empresa crece con más vendedores, más inventario y múltiples puntos de venta, las hojas de cálculo y los sistemas locales fragmentados se convierten en un cuello de botella.
              </p>
              <p className="text-slate-600 leading-relaxed">
                BREICORP te da una visión panorámica de toda tu operación: cuánto se vendió hoy en cada sucursal, qué productos tienen alta rotación, cuánto dinero hay en cuentas por cobrar y el margen bruto generado.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-slate-800 text-sm">Múltiples sucursales y almacenes sincronizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-slate-800 text-sm">Roles y permisos personalizados para cada empleado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-slate-800 text-sm">Información disponible 24/7 desde cualquier navegador</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  <span>Solicitar asesoría para empresas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100">Beneficios Estratégicos</h3>
              <div className="space-y-4 text-xs">
                <div className="bg-slate-800/80 p-4 rounded-xl space-y-1">
                  <div className="font-bold text-blue-400 text-sm">Cero servidores físicos costosos</div>
                  <div className="text-slate-300">Ahorra en mantenimiento, técnicos de soporte y costosas licencias anuales de bases de datos.</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl space-y-1">
                  <div className="font-bold text-cyan-400 text-sm">Auditoría y trazabilidad total</div>
                  <div className="text-slate-300">Cada venta, anulación, descuento o cambio de precio queda registrado con fecha, hora y usuario.</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-400 text-sm">Reportes contables sin demoras</div>
                  <div className="text-slate-300">Tu contador descarga directamente los reportes necesarios para declaraciones tributarias mensuales.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
