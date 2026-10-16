import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileCheck2,
  Landmark,
  MessageCircle,
  Scale,
  TrendingUp,
} from "lucide-react";
import { businessServices } from "@/config/businessServices";
import { createPageMetadata, getWhatsAppUrl, siteMetadata } from "@/config/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { PageHeader } from "@/components/shared/PageHeader";

const path = "/servicios-empresariales";

export const metadata = createPageMetadata({
  title: "Servicios Empresariales para MYPE",
  description: "Servicios empresariales para MYPE: asesoría y análisis financiero, planificación, educación, consultoría, orientación legal, contabilidad y creación de empresas.",
  path,
  keywords: ["servicios empresariales", "servicios para empresas", "asesoría empresarial", "consultoría para empresas", "servicios para MYPE", "servicios profesionales para empresas"],
});

const icons = [Landmark, BarChart3, TrendingUp, BookOpenCheck, BriefcaseBusiness, Scale, Calculator, FileCheck2];
const financialSlugs = new Set(["asesoria-financiera", "analisis-financiero", "planificacion-financiera", "educacion-financiera"]);
const legalSlugs = new Set(["asesoria-legal-empresas", "contabilidad-empresas", "creacion-de-empresas"]);

const faq = [
  { question: "¿Qué servicios empresariales ofrece BREICORP?", answer: "BREICORP ofrece servicios confirmados de asesoría financiera, análisis financiero, educación financiera, planificación financiera, consultoría empresarial, orientación legal, contabilidad y acompañamiento para creación y formalización de empresas." },
  { question: "¿Los servicios están dirigidos a personas o a empresas?", answer: "La línea está dirigida principalmente a micro y medianas empresas, emprendedores en proceso de formalización y equipos que toman decisiones empresariales. No se presenta como asesoramiento de inversión personal." },
  { question: "¿Cómo se define qué servicio necesita mi empresa?", answer: "Una conversación inicial permite identificar el problema, la decisión pendiente, la información disponible y el tipo de acompañamiento requerido. Cuando existen necesidades relacionadas, se propone un alcance coordinado y no una lista automática de servicios." },
  { question: "¿Puedo contratar un servicio sin usar el software de BREICORP?", answer: "Sí. Los servicios profesionales y el software son líneas distintas. Una herramienta tecnológica puede apoyar una implementación cuando tiene sentido, pero no es una condición automática para solicitar asesoría o consultoría." },
  { question: "¿BREICORP garantiza resultados financieros, legales o tributarios?", answer: "No. Los servicios aportan análisis, organización y acompañamiento dentro de un alcance acordado. Los resultados dependen de la información, ejecución, contexto, normativa y decisiones de la empresa; no se garantizan utilidades, aprobaciones ni ausencia de contingencias." },
  { question: "¿Cómo puedo solicitar una reunión?", answer: "Puedes utilizar la página de contacto o escribir al WhatsApp oficial. En el primer contacto conviene indicar el tipo de empresa, la situación que deseas revisar y el objetivo de la conversación, sin enviar información sensible antes de coordinar." },
];

function ServiceCards({ slugs }: { slugs: Set<string> }) {
  return (
    <div className="mt-9 grid gap-5 md:grid-cols-2">
      {businessServices.filter((service) => slugs.has(service.slug)).map((service) => {
        const index = businessServices.findIndex((item) => item.slug === service.slug);
        const Icon = icons[index];
        return (
          <Link key={service.slug} href={`/${service.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Icon className="h-5 w-5" aria-hidden="true" /></span>
            <h3 className="mt-4 text-lg font-black text-slate-950 group-hover:text-orange-800">{service.shortName}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700">Conocer el servicio <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
        );
      })}
    </div>
  );
}

export default function ServiciosEmpresarialesPage() {
  const consulting = businessServices.find((service) => service.slug === "consultoria-empresarial")!;

  return (
    <>
      <JsonLd type="Service" data={{ name: "Servicios empresariales para MYPE", description: "Portafolio profesional de BREICORP para ordenar finanzas, procesos, documentación y gestión empresarial.", url: `${siteMetadata.siteUrl}${path}`, areaServed: { "@type": "Country", name: "Perú" } }} />
      <PageHeader
        path={path}
        badge="Segunda línea de BREICORP"
        title="Servicios empresariales para ordenar, gestionar y hacer crecer tu empresa"
        description="Acompañamiento profesional para micro y medianas empresas en finanzas, consultoría, contabilidad, orientación legal y formalización, con alcances definidos y decisiones informadas."
        breadcrumbs={[{ label: "Servicios empresariales" }]}
        actions={
          <>
            <Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">Solicitar asesoría <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={getWhatsAppUrl("Hola, quiero información sobre los servicios empresariales de BREICORP.")} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white hover:border-emerald-400 hover:bg-emerald-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Hablar por WhatsApp</a>
          </>
        }
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="space-y-5 lg:col-span-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Una empresa puede necesitar más que una herramienta tecnológica</h2>
            <p className="leading-8 text-slate-600">Vender, cobrar, comprar, contratar, formalizar acuerdos y cumplir responsabilidades produce decisiones financieras, operativas, legales y contables. Cuando el negocio crece, esas decisiones dejan de poder resolverse únicamente con intuición o archivos aislados. Se necesita información comprensible, responsabilidades claras y acompañamiento para ordenar prioridades.</p>
            <p className="leading-8 text-slate-600">BREICORP ayuda a micro y medianas empresas a digitalizar, ordenar y gestionar su negocio mediante software empresarial, automatización y servicios profesionales en finanzas, consultoría, contabilidad y gestión empresarial. Son dos líneas relacionadas, pero no equivalentes: el software apoya procesos; los servicios profesionales analizan situaciones, orientan decisiones y acompañan su implementación.</p>
            <p className="leading-8 text-slate-600">El portafolio parte de un diagnóstico. No todas las empresas necesitan los ocho servicios ni deben abordarlos al mismo tiempo. La conversación inicial delimita el problema, identifica información disponible y confirma si BREICORP puede atenderlo directamente o si requiere una intervención profesional específica.</p>
          </article>
          <aside className="rounded-3xl border border-orange-200 bg-orange-50 p-7 lg:col-span-4">
            <p className="text-xs font-black uppercase tracking-widest text-orange-700">Orientado a MYPE</p>
            <h2 className="mt-3 text-xl font-black text-slate-950">Problemas que necesitan una mirada integrada</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {["Caja y rentabilidad difíciles de explicar.", "Crecimiento sin presupuesto ni prioridades.", "Procesos repetitivos o responsabilidades difusas.", "Documentación empresarial desordenada.", "Información contable que llega tarde a la decisión.", "Formalización sin una ruta coordinada."].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Finanzas empresariales</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950">Comprender la situación, preparar decisiones y fortalecer al equipo</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">La línea financiera distingue acompañamiento, evaluación, planificación y formación. Esta separación evita tratar como iguales una pregunta puntual, un diagnóstico basado en datos, un presupuesto futuro y una necesidad de aprendizaje.</p>
          <ServiceCards slugs={financialSlugs} />
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Gestión y estrategia</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Consultoría empresarial</h2>
            <p className="mt-5 leading-8 text-slate-300">La consultoría revisa problemas de procesos, organización, productividad, costos, información e indicadores. Su objetivo es convertir síntomas amplios en causas, prioridades y acciones que la empresa pueda ejecutar y revisar.</p>
            <p className="mt-4 leading-8 text-slate-300">Cuando una mejora necesita digitalización, puede conectarse con la experiencia tecnológica de BREICORP. La recomendación de gestión conserva su propósito y el software se evalúa como medio de implementación, no como respuesta automática.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 lg:col-span-7 sm:p-9">
            <BriefcaseBusiness className="h-8 w-8 text-orange-400" aria-hidden="true" />
            <h3 className="mt-4 text-2xl font-black">{consulting.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{consulting.description} El alcance puede concentrarse en un proceso crítico, en la coordinación entre áreas o en la preparación de una transformación más amplia.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/consultoria-empresarial" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold hover:bg-orange-700">Ver consultoría <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/automatizacion-procesos-empresariales" className="inline-flex min-h-11 items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold hover:border-orange-400">Explorar automatización</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Legal, contable y formalización</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950">Documentación y responsabilidades para una empresa mejor organizada</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">Estos servicios se presentan con especial prudencia. Su alcance depende del caso, de la normativa vigente y de las habilitaciones profesionales que correspondan. BREICORP no promete aprobaciones, ausencia de sanciones ni resultados legales determinados.</p>
          <ServiceCards slugs={legalSlugs} />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Servicios para micro y medianas empresas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Un alcance proporcional a la realidad del negocio</h2>
            <p className="mt-5 leading-8 text-slate-600">Una MYPE necesita soluciones utilizables, no modelos sobredimensionados. El trabajo comienza por una pregunta concreta y establece qué información, personas y decisiones forman parte del alcance. Esto ayuda a priorizar y reduce la carga de implementar múltiples cambios al mismo tiempo.</p>
            <p className="mt-4 leading-8 text-slate-600">La empresa participa durante todo el proceso. Sus responsables validan datos, explican excepciones y deciden qué recomendaciones ejecutar. BREICORP aporta estructura, análisis y acompañamiento, sin sustituir las responsabilidades de dirección ni las funciones profesionales que correspondan.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Tecnología + asesoría empresarial</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Dos capacidades que se complementan sin confundirse</h2>
            <p className="mt-5 leading-8 text-slate-600">El diagnóstico puede revelar que un problema necesita reglas claras, capacitación, documentación o seguimiento, sin requerir una nueva herramienta. En otros casos, la mejora depende de compartir información, automatizar tareas o reducir la digitación repetitiva.</p>
            <p className="mt-4 leading-8 text-slate-600">Cuando la tecnología aporta valor, BREICORP puede relacionar la consultoría con <Link href="/software-empresarial" className="font-bold text-orange-700 hover:underline">software empresarial</Link> y <Link href="/automatizacion-procesos-empresariales" className="font-bold text-orange-700 hover:underline">automatización de procesos</Link>. La recomendación debe mantener una justificación empresarial y una implementación gradual.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Elegir el punto de entrada</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Servicios relacionados, pero con preguntas diferentes</h2>
            <p className="mt-4 leading-8 text-slate-600">Una empresa no debería elegir el servicio únicamente por su nombre. Conviene identificar qué decisión está pendiente, qué resultado se espera de la conversación y qué información existe para trabajar. Esta distinción evita diagnósticos amplios que no terminan en acciones utilizables.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-slate-950">Si necesitas comprender la situación financiera</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">El análisis financiero evalúa información e indicadores; la asesoría financiera acompaña decisiones y seguimiento. Si la pregunta se refiere a meses futuros, presupuesto o necesidades de capital, la planificación financiera ofrece una estructura específica para trabajar con escenarios.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-slate-950">Si el problema atraviesa procesos y áreas</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">La consultoría empresarial ayuda a mapear causas, responsabilidades, información e indicadores. Puede conectarse con formación, finanzas o digitalización, pero mantiene como prioridad el problema de gestión que la empresa necesita resolver.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-slate-950">Si necesitas ordenar documentación o formalización</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">La orientación legal, la contabilidad y la creación de empresas responden a responsabilidades distintas. El primer contacto permite reconocer el alcance y confirmar cuándo se necesita una habilitación profesional o una verificación normativa específica.</p>
            </article>
          </div>
          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">Un servicio puede revelar una necesidad relacionada</h3>
            <p className="mt-3 leading-8 text-slate-700">Durante el diagnóstico pueden aparecer dependencias entre caja, contabilidad, procesos o documentación. Eso no significa ampliar automáticamente el proyecto. BREICORP debe explicar la relación, separar los alcances y permitir que la empresa priorice. Esta práctica conserva claridad comercial y evita que una consulta puntual se convierta en una propuesta innecesariamente grande.</p>
            <p className="mt-3 leading-8 text-slate-700">También puede ocurrir lo contrario: una necesidad aparentemente compleja puede resolverse con una rutina, un responsable o una mejora de información antes de considerar nuevos servicios. La recomendación debe ser proporcional al problema y a la capacidad de implementación de la empresa.</p>
            <p className="mt-3 leading-8 text-slate-700">Si se proponen varios frentes, cada uno debe conservar su objetivo, entregables y responsables. Una empresa puede iniciar por el asunto que genera mayor riesgo o bloqueo y dejar documentadas las siguientes prioridades. Este enfoque gradual facilita evaluar avances, cuidar recursos y aprender antes de ampliar la intervención.</p>
            <p className="mt-3 leading-8 text-slate-700">La conversación comercial también debe distinguir entre orientación inicial y trabajo profesional. La primera permite confirmar pertinencia y próximos pasos; el servicio comienza cuando existen un alcance, condiciones y responsabilidades acordadas por las partes.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Cómo trabajamos</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Del problema al acompañamiento</h2><p className="mt-4 leading-8 text-slate-600">La forma exacta de trabajo depende del servicio, pero conserva una lógica transparente: comprender antes de proponer, acordar el alcance y revisar el avance con la empresa.</p></div>
          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {[{t:"Diagnóstico",d:"Definir situación, objetivo y evidencia."},{t:"Análisis",d:"Ordenar información, causas y límites."},{t:"Propuesta",d:"Acordar alcance, acciones y responsables."},{t:"Implementación",d:"Ejecutar o acompañar lo confirmado."},{t:"Seguimiento",d:"Revisar avances, cambios y pendientes."}].map((step,index)=><li key={step.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-black text-orange-700">0{index+1}</span><h3 className="mt-3 font-bold text-slate-950">{step.t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.d}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-400">Primera conversación</p><h2 className="mt-2 text-2xl font-black">Cuéntanos qué necesita ordenar o decidir tu empresa</h2><p className="mt-2 text-sm leading-7 text-slate-300">Revisaremos si el servicio corresponde, qué información inicial hace falta y cuál sería el siguiente paso.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold hover:bg-orange-700">Solicitar asesoría <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><a href={getWhatsAppUrl("Hola, quiero información sobre los servicios empresariales de BREICORP.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold hover:border-emerald-400 hover:text-emerald-300">Hablar por WhatsApp</a></div>
        </div>
      </section>

      <SeoFaq title="Preguntas sobre los servicios empresariales de BREICORP" items={faq} />
    </>
  );
}
