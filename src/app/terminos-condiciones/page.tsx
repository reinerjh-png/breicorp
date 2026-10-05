import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Términos y Condiciones del Servicio | BREICORP",
  description:
    "Términos y condiciones para el uso de la plataforma de software empresarial y facturación electrónica de BREICORP E.I.R.L.",
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <PageHeader
        badge="Condiciones Legales"
        title="Términos y Condiciones de Uso del Servicio"
        description={`Por favor lee detenidamente los términos que rigen la utilización de las aplicaciones y servicios provistos por ${company.legalName}.`}
        breadcrumbs={[{ label: "Términos y Condiciones" }]}
      />

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. Aceptación de los Términos</h2>
            <p>
              El acceso y uso de la plataforma BREICORP implica la aceptación plena de los presentes Términos y Condiciones por parte del usuario o de la empresa a la que representa. Si no estás de acuerdo con alguna disposición, deberás abstenerte de utilizar el servicio.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">2. Descripción del Servicio</h2>
            <p>
              BREICORP proporciona un software en modalidad Software as a Service (SaaS) en la nube para la emisión de comprobantes de pago electrónicos homologados con la SUNAT, administración de inventarios, punto de venta y reportería financiera y comercial.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. Responsabilidad Tributaria del Usuario</h2>
            <p>
              El cliente es el único responsable de la veracidad y legalidad de la información consignada en los comprobantes de pago emitidos a través de la plataforma, así como del cumplimiento oportuno de sus obligaciones formales y sustanciales ante la SUNAT.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">4. Disponibilidad y Mantenimiento</h2>
            <p>
              BREICORP realiza sus mejores esfuerzos comerciales y técnicos para mantener una disponibilidad superior al 99.9% en sus servicios cloud, notificando con razonable anticipación cualquier ventana de mantenimiento programado fuera de los horarios pico comerciales.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">5. Jurisdicción Aplicable</h2>
            <p>
              Cualquier controversia derivada de la interpretación o ejecución de los presentes términos se resolverá conforme a las leyes de la República del Perú, sometiéndose las partes a la competencia de los jueces y tribunales de la República del Perú.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
