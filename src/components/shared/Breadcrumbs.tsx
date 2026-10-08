import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteMetadata } from "@/config/company";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // BreadcrumbList JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteMetadata.siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `${siteMetadata.siteUrl}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Migas de pan" className="mb-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center gap-1.5 text-xs text-slate-400 flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-300 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
