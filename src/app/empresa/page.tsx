import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { company, createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Sobre BREICORP: Empresa Tecnológica de Software Empresarial en Perú",
  description:
    "Conoce a BREICORP E.I.R.L., empresa peruana fundada en 2017 dedicada a la digitalización, facturación electrónica y automatización operativa de empresas.",
  path: "/empresa",
});

export default function EmpresaPage() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - company.foundationYear;

  return (
    <>
      <PageHeader
        badge={`Trayectoria desde ${company.foundationYear}`}
        title="Tecnología peruana comprometida con el crecimiento de tu negocio"
        description="Conoce la historia, valores y equipo detrás de BREICORP. Desarrollamos software empresarial con soporte cercano y confiable."
        breadcrumbs={[{ label: "Empresa" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Identidad y Trayectoria
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {years} años impulsando la modernización del comercio en Perú
              </h2>

              <p className="text-slate-600 leading-relaxed">
                BREICORP nació con una misión concreta: democratizar la tecnología de gestión para las empresas peruanas. Durante años, los sistemas ERP eran excesivamente caros, complejos de instalar y requerían servidores que solo las corporaciones podían costear.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Nosotros creamos una solución accesible en la nube que permite a una tienda familiar, una ferretería o una gran distribuidora operar con la misma precisión y eficiencia que los gigantes del mercado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Razón Social Oficial</div>
                  <div className="text-xs text-slate-600 font-mono">{company.legalName}</div>
                  <div className="text-xs text-slate-600 font-mono">RUC: {company.ruc}</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Registro Público</div>
                  <div className="text-xs text-slate-600">{company.partidaElectronica}</div>
                  <div className="text-xs text-slate-600">Sede: Tingo María — Huánuco, Perú</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white">Nuestros Principios Guía</h3>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-bold text-blue-400 text-sm">1. Sencillez sin perder potencia</div>
                    <p className="text-slate-300">
                      Un cajero debe aprender a usar la pantalla de ventas en 15 minutos, sin manuales de 300 páginas.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-cyan-400 text-sm">2. Rigor tributario y normativo</div>
                    <p className="text-slate-300">
                      Diseñamos los flujos de comprobantes considerando las disposiciones aplicables de SUNAT y la operación de empresas peruanas.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-emerald-400 text-sm">3. Trato humano y soporte en Perú</div>
                    <p className="text-slate-300">
                      Detrás del software hay personas que responden tus llamadas y entienden la urgencia de tu caja.
                    </p>
                  </div>
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
