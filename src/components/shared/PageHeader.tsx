import { Breadcrumbs } from "./Breadcrumbs";
import { siteMetadata } from "@/config/company";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  path?: string;
}

export function PageHeader({ badge, title, description, breadcrumbs, path }: PageHeaderProps) {
  const breadcrumbSchema = path ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteMetadata.siteUrl },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: new URL(item.href ?? path, siteMetadata.siteUrl).toString(),
      })),
    ],
  } : null;

  return (
    <div className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pb-16 pt-10 text-white">
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 max-w-3xl space-y-3">
          {badge && <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950 px-3 py-1 text-xs font-semibold text-orange-300"><span>{badge}</span></div>}
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="pt-1 text-base font-normal leading-relaxed text-slate-300 sm:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
