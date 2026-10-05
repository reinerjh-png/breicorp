import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="bg-slate-950 text-white pt-10 pb-16 border-b border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-3xl space-y-3 mt-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
