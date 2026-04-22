"use cache";

import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="relative py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="wrapper relative space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />

          <Button
            variant="outline"
            asChild
            className="
              hidden sm:inline-flex
              gap-1.5 rounded-xl
              border-border/50 backdrop-blur
              hover:border-primary/40
              hover:text-primary
            "
          >
            <Link href="/explore">
              View All
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}