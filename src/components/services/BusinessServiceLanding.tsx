import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import type { BusinessService } from "@/config/businessServices";
import { getWhatsAppUrl, siteMetadata } from "@/config/company";
import { ContextualLinks } from "@/components/seo/ContextualLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { PageHeader } from "@/components/shared/PageHeader";

const inclusionIcons = [FileSearch, Target, ClipboardCheck, Building2, Users, ShieldCheck];

export function BusinessServiceLanding({ service }: { service: BusinessService }) {
  const path = `/${service.slug}`;

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: service.shortName,
          description: service.metaDescription,
          url: `${siteMetadata.siteUrl}${path}`,
          areaServed: { "@type": "Country", name: "Perú" },
        }}
      />
      <PageHeader
        path={path}
        badge={service.badge}
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Servicios empresariales", href: "/servicios-empresariales" },
          { label: service.shortName },
        ]}
        actions={
          <>
            <Link
              href="/contacto"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              Solicitar asesoría
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={getWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-emerald-400 hover:bg-emerald-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </>
        }
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="space-y-5 lg:col-span-7">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">{service.introTitle}</h2>
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-slate-600">{paragraph}</p>
            ))}
          </article>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Situaciones frecuentes</p>
            <h2 className="mt-3 text-xl font-black text-slate-950">Señales de que conviene revisar este frente</h2>
            <ul className="mt-5 space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Alcance adaptable</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{service.includesTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600">{service.includesIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, index) => {
              const Icon = inclusionIcons[index % inclusionIcons.length];
              return (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Enfoque empresarial</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">{service.audienceTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              El servicio está orientado a micro y medianas empresas. El alcance se conversa antes de iniciar para evitar soluciones genéricas o expectativas que no correspondan a la situación real.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {service.audience.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm leading-7 text-slate-300">
                <Users className="mb-3 h-5 w-5 text-orange-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.sections.map((section, index) => (
        <section key={section.title} className={`border-b border-slate-200 py-16 sm:py-20 ${index % 2 ? "bg-slate-50" : "bg-white"}`}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">{section.title}</h2>
            <div className="mt-5 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-600">{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Forma de trabajo</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{service.methodTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600">{service.methodIntro}</p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-xs font-black uppercase tracking-widest text-orange-700">Etapa {index + 1}</span>
                <h3 className="mt-3 font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <p>{service.scopeNote}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Conversemos sobre tu empresa</p>
            <h2 className="mt-2 text-2xl font-black">Define primero la necesidad y el alcance del servicio</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Una conversación inicial permite entender el contexto, confirmar si podemos ayudarte y acordar los siguientes pasos sin compromisos automáticos.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">
              Solicitar asesoría <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={getWhatsAppUrl(service.whatsappMessage)} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold transition-colors hover:border-emerald-400 hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SeoFaq title={`Preguntas frecuentes sobre ${service.shortName.toLowerCase()}`} items={service.faq} />
      <ContextualLinks title="Servicios y soluciones relacionadas" links={[
        { href: "/servicios-empresariales", title: "Servicios empresariales", description: "Conoce el portafolio profesional de BREICORP para micro y medianas empresas." },
        ...service.related,
      ]} />
    </>
  );
}
