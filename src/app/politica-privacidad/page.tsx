import { PageHeader } from "@/components/shared/PageHeader";
import { company, createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Política de Privacidad y Protección de Datos Personales",
  description:
    "Política de tratamiento de datos personales de BREICORP conforme a la Ley N.° 29733 de Protección de Datos Personales en el Perú.",
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <PageHeader
        badge="Cumplimiento Ley N.° 29733"
        title="Política de Privacidad y Tratamiento de Datos Personales"
        description={`Última actualización: 2026. Conoce cómo ${company.legalName} recopila, utiliza y protege los datos de sus clientes y usuarios.`}
        breadcrumbs={[{ label: "Política de Privacidad" }]}
      />

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. Identidad del Responsable del Banco de Datos</h2>
            <p>
              El responsable del tratamiento de los datos personales es <strong>{company.legalName}</strong> (en adelante, &ldquo;BREICORP&rdquo;), con RUC N.° <strong>{company.ruc}</strong>, Partida Electrónica {company.partidaElectronica}, y domicilio en {company.address}, Perú. Correo de contacto: {company.salesEmail}.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">2. Marco Normativo</h2>
            <p>
              Esta política se rige en estricto cumplimiento de la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, su Reglamento aprobado mediante Decreto Supremo N.° 003-2013-JUS, y normas complementarias.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. Datos Personales que Recopilamos</h2>
            <p>
              Recopilamos únicamente los datos necesarios para brindar y gestionar nuestros servicios de software empresarial: nombres, apellidos, tipo y número de documento de identidad (DNI/RUC), correo electrónico, número de teléfono/celular, dirección comercial y datos de facturación.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">4. Finalidad del Tratamiento</h2>
            <p>
              Los datos personales son utilizados para: la prestación del servicio de software contratado, la emisión de comprobantes electrónicos ante la SUNAT, el soporte técnico, la gestión de cobranzas, y el envío de comunicaciones operativas y comerciales relevantes al servicio, previa autorización.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">5. Derechos ARCO</h2>
            <p>
              Cualquier titular puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) dirigiendo una solicitud escrita al correo electrónico <strong>{company.supportEmail}</strong> con el asunto &ldquo;Derechos ARCO — Datos Personales&rdquo;.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
