"use client";

import Link from "next/link";
import { StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import ProductCard from "../products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Awesome Product",
    description: "This is a featured product",
    tags: ["react", "nextjs"],
    votes: 10,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Awesome Product",
    description: "This is a featured product",
    tags: ["react", "nextjs"],
    votes: 10,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Awesome Product",
    description: "This is a featured product",
    tags: ["react", "nextjs"],
    votes: 10,
    isFeatured: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          
          <SectionHeader
            title="Featured Products"
            icon={StarIcon}
            description="Top picks from our community this week"
          />

          <Button variant="outline" asChild>
            <Link href="/explore">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
