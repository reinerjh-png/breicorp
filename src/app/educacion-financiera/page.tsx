import { BusinessServiceLanding } from "@/components/services/BusinessServiceLanding";
import { getBusinessService } from "@/config/businessServices";
import { createPageMetadata } from "@/config/company";

const service = getBusinessService("educacion-financiera")!;
export const metadata = createPageMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/${service.slug}`, keywords: service.keywords });

export default function EducacionFinancieraPage() {
  return <BusinessServiceLanding service={service} />;
}
