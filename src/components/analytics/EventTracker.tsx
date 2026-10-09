"use client";

import { useEffect } from "react";
import { trackEvent } from "./Analytics";

export function EventTracker({ name }: { name: "pricing_view" | "contact_click" }) {
  useEffect(() => { trackEvent(name); }, [name]);
  return null;
}

export function DemoLink({ href, className, children, id }: { href: string; className: string; children: React.ReactNode; id?: string }) {
  return <a id={id} href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("demo_open")} className={className}>{children}</a>;
}
