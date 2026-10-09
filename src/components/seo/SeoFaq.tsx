import { ChevronDown, HelpCircle } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function SeoFaq({ title = "Preguntas frecuentes", items }: { title?: string; items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return <section className="defer-render border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center"><span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 ring-1 ring-orange-200"><HelpCircle className="h-4 w-4" /> Respuestas claras</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{title}</h2></div>
      <div className="space-y-3">{items.map((item,index)=><details key={item.question} open={index === 0} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 sm:px-6 [&::-webkit-details-marker]:hidden"><span>{item.question}</span><ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180 group-open:text-orange-700"/></summary><div className="border-t border-slate-100 px-5 pb-6 pt-4 text-sm leading-7 text-slate-600 sm:px-6">{item.answer}</div></details>)}</div>
    </div>
  </section>;
}
