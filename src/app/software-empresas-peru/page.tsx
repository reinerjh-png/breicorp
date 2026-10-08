import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { createPageMetadata } from "@/config/company";
import { CheckCircle, ShieldCheck, MapPin } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Software para Empresas en Perú | Facturación SUNAT y ERP",
  description:
    "El software empresarial desarrollado en Perú para responder a la normativa tributaria local, moneda en Soles, SIRE SUNAT y realidad operativa nacional.",
  path: "/software-empresas-peru",
});

export default function SoftwareEmpresasPeruPage() {
  return (
    <>
      <PageHeader
        badge="Desarrollado para empresas peruanas"
        title="Software Empresarial adaptado a la legislación y comercio peruano"
        description="A diferencia de softwares extranjeros que no contemplan las exigencias de SUNAT ni los métodos de cobro locales, BREICORP nace en Perú para resolver la realidad del empresario nacional."
        breadcrumbs={[{ label: "Empresas", href: "/software-empresarial" }, { label: "Empresas en Perú" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-black text-slate-950">
              ¿Por qué elegir un software desarrollado en Perú?
            </h2>
            <p className="text-base text-slate-600">
              Las exigencias de SUNAT cambian con el tiempo. Un software desarrollado en Perú puede adaptar sus flujos a la normativa y a las prácticas comerciales locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
              <h3 className="font-bold text-lg text-slate-900">Actualizaciones SUNAT sin costo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nuevas resoluciones tributarias, cambios en catálogos UBL o guías de remisión se actualizan automáticamente en la nube sin cobrarte horas de programación.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Yape, Plin y medios locales</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cobro fluido con billeteras digitales peruanas, transferencias bancarias BCP, BBVA, Interbank y pagos mixtos habituales en los negocios peruanos.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <MapPin className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Soporte Técnico en tu Horario</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sin tickets que tardan días en responderse desde el extranjero. Atención en español por teléfono y WhatsApp con especialistas que entienden tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
