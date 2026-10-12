import type { ReactNode } from "react";
import { company } from "@/config/company";

type SocialPlatform = keyof typeof company.socialLinks;

interface SocialLinksProps {
  showLabels?: boolean;
  tone?: "dark" | "light";
}

const socialProfiles: Array<{
  platform: SocialPlatform;
  label: string;
  icon: ReactNode;
}> = [
  {
    platform: "facebook",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.973h-1.513c-1.49 0-1.956.93-1.956 1.887v2.261h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
    ),
  },
  {
    platform: "instagram",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98C23.986 15.668 24 15.259 24 12s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    platform: "tiktok",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2-2.757V9.407a6.368 6.368 0 1 0 5.445 6.265V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.79 4.79 0 0 1-1.003-.104Z" />
      </svg>
    ),
  },
];

export function SocialLinks({
  showLabels = false,
  tone = "light",
}: SocialLinksProps) {
  const toneClasses =
    tone === "dark"
      ? "border-slate-700 bg-slate-900 text-slate-300 hover:border-orange-400/70 hover:bg-slate-800 hover:text-white focus-visible:outline-orange-400"
      : "border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-orange-600";

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Redes sociales oficiales de BREICORP">
      {socialProfiles.map(({ platform, label, icon }) => (
        <li key={platform}>
          <a
            href={company.socialLinks[platform]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`BREICORP en ${label}`}
            title={label}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${showLabels ? "px-3" : "px-2.5"} ${toneClasses}`}
          >
            {icon}
            {showLabels ? <span className="text-sm font-semibold">{label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
