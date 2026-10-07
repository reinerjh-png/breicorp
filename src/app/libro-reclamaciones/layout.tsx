import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Libro de Reclamaciones Virtual",
  description:
    "Información y canal de atención del Libro de Reclamaciones de BREICORP E.I.R.L.",
  path: "/libro-reclamaciones",
});

export default function LibroReclamacionesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
