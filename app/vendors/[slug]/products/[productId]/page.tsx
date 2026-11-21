import { notFound } from "next/navigation";
import { approvedVendors } from "../../../../vendor-data";
import ProductDetail from "./product-detail";

export default async function VendorProductPage({ params }: { params: Promise<{ slug: string; productId: string }> }) {
  const { slug, productId } = await params;
  const vendor = approvedVendors.find((item) => item.slug === slug);
  const product = vendor?.products.find((item) => item.id === productId);

  if (!vendor || !product) notFound();

  return <ProductDetail vendor={vendor} product={product} />;
}
