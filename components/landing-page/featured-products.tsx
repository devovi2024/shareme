import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

// Optional: enable caching properly in Next.js App Router
export const revalidate = 60; // ISR-style caching (1 min)

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />

      {/* Decorative blur blobs */}
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />

          <Button
            variant="outline"
            asChild
            className="
              group hidden sm:inline-flex
              gap-2 rounded-xl
              border-border/60
              bg-background/40 backdrop-blur
              hover:border-primary/50
              hover:text-primary
              transition-all
            "
          >
            <Link href="/explore">
              View All
              <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile "View All" */}
        <div className="sm:hidden">
          <Button asChild className="w-full rounded-xl">
            <Link href="/explore">
              View All Featured
              <ArrowUpRightIcon className="size-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts?.length > 0 ? (
            featuredProducts.map((product) => (
              <div
                key={product.id}
                className="transition-transform hover:-translate-y-1 duration-300"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              No featured products available right now.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}