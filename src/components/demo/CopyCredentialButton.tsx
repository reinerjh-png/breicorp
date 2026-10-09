"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCredentialButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return <button type="button" onClick={copy} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 text-xs font-bold text-slate-700 transition-colors hover:border-orange-300 hover:bg-orange-50" aria-label={`${label}: ${value}`}>
    {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-500" />}
    <span aria-live="polite">{copied ? "Copiado" : label}</span>
  </button>;
}
