import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        {/* Content */}
        {recentlyLaunchedProducts?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {recentlyLaunchedProducts.map((product) => (
              <div
                key={product.id}
                className="
                  transition-transform duration-300
                  hover:-translate-y-1 hover:scale-[1.01]
                "
              >
                <ProductCard product={product} />
              </div>
            ))}

          </div>
        ) : (
          <div className="flex justify-center">
            <EmptyState
              message="No products launched in the last week. Check back soon."
              icon={CalendarIcon}
            />
          </div>
        )}

      </div>
    </section>
  );
}