import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { businessServices } from "@/config/businessServices";
import { company, createPageMetadata, getWhatsAppUrl, siteMetadata } from "@/config/company";
import { ContextualLinks } from "@/components/seo/ContextualLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { PageHeader } from "@/components/shared/PageHeader";

const path = "/servicios-empresariales-tingo-maria";

export const metadata = createPageMetadata({
  title: "Servicios Empresariales en Tingo María",
  description: "Servicios empresariales en Tingo María para MYPE: asesoría financiera, consultoría, planificación, contabilidad, orientación legal y creación de empresas.",
  path,
  keywords: ["servicios empresariales Tingo María", "asesoría empresarial Tingo María", "consultoría empresarial Tingo María", "servicios para empresas Tingo María", "servicios para MYPE Tingo María"],
});

const faq = [
  { question: "¿Qué servicios empresariales ofrece BREICORP en Tingo María?", answer: "BREICORP atiende necesidades confirmadas de asesoría y análisis financiero, educación y planificación financiera, consultoría empresarial, orientación legal, contabilidad y creación o formalización de empresas." },
  { question: "¿Los servicios están dirigidos a micro y medianas empresas?", answer: "Sí. La línea está diseñada principalmente para MYPE y equipos empresariales que necesitan ordenar información, procesos, documentación o decisiones de gestión." },
  { question: "¿La atención puede comenzar con una reunión en Tingo María?", answer: "Se puede coordinar una conversación para conocer la necesidad y confirmar la modalidad disponible. La atención, fecha y alcance se acuerdan previamente por contacto o WhatsApp." },
  { question: "¿Puedo solicitar consultoría sin contratar el software?", answer: "Sí. Los servicios profesionales y el software son líneas distintas. La tecnología solo se evalúa cuando ayuda a implementar una mejora identificada." },
  { question: "¿La asesoría legal incluye cualquier tipo de proceso?", answer: "No. La situación se revisa antes de confirmar el alcance. Cuando se requiere abogado colegiado, representación u otra habilitación específica, esa necesidad debe identificarse y coordinarse expresamente." },
  { question: "¿Cómo solicito información sobre un servicio?", answer: "Puedes utilizar la página de contacto o escribir al WhatsApp oficial. Indica brevemente el tipo de empresa y el asunto que deseas revisar, sin enviar información sensible antes de coordinar." },
];

export default function ServiciosEmpresarialesTingoMariaPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd type="Service" data={{ name: "Servicios empresariales en Tingo María", description: "Atención profesional de BREICORP para micro y medianas empresas de Tingo María y Huánuco.", url: `${siteMetadata.siteUrl}${path}`, areaServed: [{ "@type": "City", name: "Tingo María" }, { "@type": "AdministrativeArea", name: "Huánuco" }] }} />
      <PageHeader
        path={path}
        badge="Atención empresarial local"
        title="Servicios empresariales en Tingo María para micro y medianas empresas"
        description="Finanzas, consultoría, contabilidad, orientación legal y formalización con atención de BREICORP E.I.R.L. desde Tingo María."
        breadcrumbs={[
          { label: "Servicios empresariales", href: "/servicios-empresariales" },
          { label: "Tingo María" },
        ]}
        actions={
          <>
            <Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">Solicitar asesoría <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={getWhatsAppUrl("Hola, quiero información sobre servicios empresariales en Tingo María.")} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white hover:border-emerald-400 hover:bg-emerald-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Hablar por WhatsApp</a>
          </>
        }
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="space-y-5 lg:col-span-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Acompañamiento empresarial con presencia local</h2>
            <p className="leading-8 text-slate-600">Las micro y medianas empresas de Tingo María toman decisiones que conectan caja, costos, procesos, contratos, documentación, contabilidad y crecimiento. Cuando cada tema se atiende por separado o únicamente cuando aparece una urgencia, resulta difícil mantener una gestión coherente.</p>
            <p className="leading-8 text-slate-600">BREICORP E.I.R.L. amplía su atención local con servicios profesionales para empresas. La propuesta reúne capacidades en finanzas, análisis, planificación, consultoría, contabilidad, orientación legal y formalización, conservando un principio claro: primero se comprende la necesidad y después se define el alcance.</p>
            <p className="leading-8 text-slate-600">Esta página resume el portafolio disponible y enlaza a cada servicio específico. No reemplaza una evaluación del caso ni repite las ocho landings nacionales. Su función es ayudar a una empresa local a identificar el punto de entrada adecuado y encontrar fácilmente los canales de atención de BREICORP.</p>
          </article>
          <aside className="rounded-3xl border border-orange-200 bg-orange-50 p-7 lg:col-span-4">
            <p className="text-xs font-black uppercase tracking-widest text-orange-700">BREICORP E.I.R.L.</p>
            <h2 className="mt-3 text-xl font-black text-slate-950">Atención para negocios y empresas de la zona</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">La cercanía facilita una primera conversación sobre la situación de la empresa, pero no cambia la necesidad de revisar información, límites profesionales y normativa aplicable antes de confirmar cada servicio.</p>
            <div className="mt-5 flex items-start gap-3 text-sm text-slate-700"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" /><span>{company.address}</span></div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Portafolio local</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Servicios para ordenar decisiones y responsabilidades</h2><p className="mt-4 leading-8 text-slate-600">Cada servicio responde a una intención distinta. Seleccionar la página adecuada ayuda a comprender su alcance y evita confundir capacitación con asesoría, análisis con acompañamiento o software con servicio profesional.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {businessServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <h3 className="font-black text-slate-950 group-hover:text-orange-800">{service.shortName}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700">Ver servicio <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Necesidades frecuentes</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Una ruta para cada tipo de decisión empresarial</h2>
            <p className="mt-5 leading-8 text-slate-300">Una empresa puede requerir asesoría financiera para acompañar decisiones, análisis para interpretar información o planificación para preparar escenarios. Si el reto está en la coordinación y productividad, la consultoría empresarial ayuda a revisar procesos antes de pensar en herramientas.</p>
            <p className="mt-4 leading-8 text-slate-300">La contabilidad, la orientación legal y la creación de empresas atienden documentación, responsabilidades y formalización desde alcances propios. Estos servicios requieren especial prudencia: no se ofrecen garantías y cualquier necesidad de habilitación específica debe confirmarse según el caso.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Ordenar caja, costos y márgenes.","Interpretar tendencias e indicadores.","Preparar presupuestos y escenarios.","Capacitar a empresarios y equipos.","Mejorar procesos y responsabilidades.","Organizar documentación empresarial.","Coordinar información contable.","Preparar constitución y formalización."].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm leading-7 text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Atención responsable</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Cómo inicia el servicio</h2><p className="mt-4 leading-8 text-slate-600">La primera conversación no presupone una contratación. Sirve para delimitar el problema, confirmar si corresponde a la línea de servicios de BREICORP y explicar qué información o intervención podría necesitarse.</p></div>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {[{t:"Contexto",d:"La empresa explica su actividad, situación y objetivo."},{t:"Alcance",d:"Se identifica el servicio y los límites que corresponden."},{t:"Propuesta",d:"Se acuerdan actividades, información, responsables y modalidad."},{t:"Acompañamiento",d:"Se ejecuta el alcance y se revisan avances o pendientes."}].map((step,index)=><li key={step.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><span className="text-xs font-black text-orange-700">ETAPA {index+1}</span><h3 className="mt-3 font-bold text-slate-950">{step.t}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{step.d}</p></li>)}
          </ol>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950"><strong>Alcance profesional:</strong> las prestaciones financieras, legales y contables dependen de la información disponible, la naturaleza del caso, la normativa vigente y las habilitaciones que correspondan. No se garantizan resultados, aprobaciones, utilidades ni ausencia de contingencias.</div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Gestión cercana, criterios profesionales</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Atención local sin soluciones genéricas</h2>
            <p className="mt-5 leading-8 text-slate-600">Compartir una ciudad facilita el contacto y la comprensión del contexto empresarial, pero no sustituye el diagnóstico. Dos negocios del mismo rubro pueden tener estructuras de costos, responsabilidades, documentación y prioridades diferentes. La atención local debe conservar la misma precisión que un servicio de alcance nacional.</p>
            <p className="mt-4 leading-8 text-slate-600">La empresa puede comenzar explicando qué decisión necesita tomar o qué problema se repite. A partir de esa conversación se identifica si corresponde un análisis financiero, una planificación, una revisión de procesos, organización contable u otro servicio. Cuando el asunto excede el alcance disponible, se comunica con claridad antes de proponer acciones.</p>
            <p className="mt-4 leading-8 text-slate-600">BREICORP también cuenta con una línea tecnológica para ventas, facturación, inventario y automatización. Esta experiencia permite reconocer oportunidades de digitalización, pero la contratación de software no es un requisito para recibir servicios profesionales. Cada línea conserva su objetivo y su propuesta comercial.</p>
            <p className="mt-4 leading-8 text-slate-600">La modalidad de atención se confirma según el servicio y la disponibilidad. Algunas actividades pueden coordinarse mediante reuniones y revisión remota de información; otras pueden beneficiarse de una conversación presencial previamente acordada. En ambos casos se mantienen los mismos criterios de confidencialidad, preparación y delimitación del trabajo.</p>
            <p className="mt-4 leading-8 text-slate-600">Para una empresa local, el valor de la cercanía está en acceder con facilidad al equipo y sostener el seguimiento. No implica respuestas inmediatas sin evidencia ni recomendaciones diferentes a las que recibiría otra empresa con una situación equivalente.</p>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 lg:col-span-5">
            <h3 className="text-xl font-black text-slate-950">Antes de la primera reunión</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Preparar una descripción breve ayuda a aprovechar la conversación. No es necesario enviar documentos sensibles en el primer mensaje.</p>
            <ul className="mt-5 space-y-3">
              {["Actividad y tamaño aproximado de la empresa.","Situación o decisión que necesita revisar.","Áreas y personas involucradas.","Información que ya se encuentra disponible.","Plazo interno o evento que da contexto a la consulta."].map((item)=><li key={item} className="flex gap-3 text-sm leading-7 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="ubicacion" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Ubicación y contacto</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">BREICORP en Tingo María</h2><p className="mt-4 leading-8 text-slate-600">Conoce nuestra ubicación y contáctanos para coordinar una conversación sobre las necesidades de tu empresa.</p></div>
          <div className="mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.2fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Building2 className="h-5 w-5" aria-hidden="true" /></span><div><h3 className="text-lg font-black text-slate-950">{company.legalName}</h3><p className="text-sm text-slate-500">RUC {company.ruc}</p></div></div>
              <address className="mt-7 space-y-5 not-italic">
                <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" /><div><p className="text-sm font-bold text-slate-950">Dirección</p><p className="mt-1 text-sm leading-6 text-slate-600">{company.location.streetAddress}<br />{company.location.addressLocality} — {company.location.addressRegion}, {company.location.countryName}</p></div></div>
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="group flex min-h-11 gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" /><span><span className="block text-sm font-bold text-slate-950">Teléfono / WhatsApp</span><span className="mt-1 block text-sm text-slate-600 group-hover:text-orange-700">{company.phone}</span></span></a>
                <a href={`mailto:${company.contactEmail}`} className="group flex min-h-11 gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" /><span><span className="block text-sm font-bold text-slate-950">Correo</span><span className="mt-1 block break-all text-sm text-slate-600 group-hover:text-orange-700">{company.contactEmail}</span></span></a>
              </address>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"><a href={getWhatsAppUrl("Hola, quiero información sobre servicios empresariales en Tingo María.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-orange-700">Contactar por WhatsApp</a><Link href="/contacto" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:border-orange-300 hover:bg-orange-50">Solicitar asesoría</Link></div>
            </div>
            <div className="min-h-[280px] overflow-hidden border-t border-slate-200 bg-slate-200 sm:min-h-[320px] lg:min-h-[390px] lg:border-l lg:border-t-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.3533603021145!2d-76.0008837304164!3d-9.296584899423497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6419defc0774f%3A0x395ce970d8127a92!2sBREICORP%20E.I.R.L.!5e0!3m2!1ses-419!2spe!4v1791902631158!5m2!1ses-419!2spe" title="Ubicación de BREICORP E.I.R.L. en Tingo María" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="block h-full min-h-[280px] w-full border-0 sm:min-h-[320px] lg:min-h-[390px]" />
            </div>
          </div>
        </div>
      </section>

      <SeoFaq title="Preguntas sobre servicios empresariales en Tingo María" items={faq} />
      <ContextualLinks title="Continúa explorando los servicios de BREICORP" links={[
        { href: "/servicios-empresariales", title: "Servicios empresariales", description: "Revisa el portafolio completo y la diferencia entre cada servicio profesional." },
        { href: "/asesoria-financiera", title: "Asesoría financiera", description: "Acompañamiento para organizar caja, costos, márgenes y decisiones." },
        { href: "/consultoria-empresarial", title: "Consultoría empresarial", description: "Diagnóstico y mejora de procesos, responsabilidades e indicadores." },
        { href: "/contabilidad-empresas", title: "Contabilidad para empresas", description: "Organización de registros, documentos, cierres y reportes." },
        { href: "/creacion-de-empresas", title: "Creación de empresas", description: "Acompañamiento general para constitución y formalización." },
        { href: "/software-empresarial-tingo-maria", title: "Software empresarial en Tingo María", description: "Conoce la línea tecnológica local de BREICORP para ventas, facturación e inventario." },
      ]} />
    </>
  );
}
