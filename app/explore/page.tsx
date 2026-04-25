import { Suspense } from "react";
import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { CompassIcon } from "lucide-react";
import { getAllApprovedProducts } from "@/lib/products/product-select";

async function ProductsSection() {
  const products = await getAllApprovedProducts();
  return <ProductExplorer products={products} />;
}

export default function ExplorePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="wrapper space-y-10">
        <SectionHeader
          title="Explore All Products"
          icon={CompassIcon}
          description="Browse and discover amazing projects from our community"
        />

        <Suspense fallback={<div className="text-muted-foreground">Loading products...</div>}>
          <ProductsSection />
        </Suspense>
      </div>
    </div>
  );
}