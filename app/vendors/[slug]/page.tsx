import { notFound } from "next/navigation";
import { approvedVendors } from "../../vendor-data";
import VendorStorefront from "./storefront";

export default async function VendorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vendor = approvedVendors.find((item) => item.slug === slug);
  if (!vendor) notFound();

  return <VendorStorefront vendor={vendor} />;
}
