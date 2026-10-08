import Link from "next/link";
import { company, createPageMetadata } from "@/config/company";
import {
  ExternalLink,
  KeyRound,
  Mail,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Demo BREICORP — Prueba la plataforma ahora",
  description:
    "Accede al entorno de demostración de BREICORP con datos de prueba. Explora el software de facturación electrónica, inventario y ventas sin registrarte.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-400/10 px-3 py-1.5 rounded-full border border-orange-400/20">
            Entorno de demostración
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            Prueba una demostración<br />
            <span className="text-orange-400">de BREICORP</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            Explora todas las funciones del software con datos ficticios.
            No necesitas registrarte ni ingresar tus datos reales.
          </p>
        </div>
      </section>

      {/* Main card */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-lg mx-auto space-y-6">

          {/* Warning banner */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Entorno de demostración con datos de prueba.</span>{" "}
              Todo lo que veas (clientes, ventas, facturas, inventario) es ficticio.
              No ingreses datos reales de tu empresa ni de tus clientes.
            </div>
          </div>

          {/* Credentials card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
              <h2 className="text-white font-black text-lg">Credenciales de acceso</h2>
              <p className="text-orange-100 text-xs mt-0.5">
                Usa estos datos en el entorno de demo
              </p>
            </div>

            <div className="p-6 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Usuario / Correo
                  </div>
                  <div className="text-slate-900 font-mono font-bold text-sm select-all">
                    {company.demo.email}
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <KeyRound className="w-5 h-5 text-orange-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Contraseña
                  </div>
                  <div className="text-slate-900 font-mono font-bold text-sm select-all">
                    {company.demo.password}
                  </div>
                </div>
              </div>

              {/* Access button */}
              <a
                href={company.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-acceso-demo"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:from-orange-700 active:to-orange-800 text-white font-black text-base shadow-lg shadow-orange-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Acceder al entorno demo</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <p className="text-center text-[11px] text-slate-400">
                Se abrirá en una nueva pestaña en{" "}
                <span className="font-mono">{company.demo.url}</span>
              </p>
            </div>
          </div>

          {/* What you can explore */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="font-black text-slate-900 text-base">
              ¿Qué puedes explorar en la demo?
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                "Emisión de facturas y boletas electrónicas (SUNAT)",
                "Control de inventario y catálogo de productos",
                "Gestión de clientes y registro de ventas",
                "Dashboard con métricas de negocio en tiempo real",
                "Guías de remisión y documentos electrónicos",
                "Reportes de caja y comprobantes en PDF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA to request real demo */}
          <div className="bg-slate-900 rounded-3xl p-6 text-center space-y-3">
            <p className="text-white font-bold text-sm">
              ¿Quieres una demostración personalizada con los datos de tu empresa?
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-black text-sm hover:bg-orange-50 transition-colors"
            >
              <span>Solicitar demo guiada</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
