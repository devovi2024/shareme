"use client";

import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { ProductType } from "@/types";
import { useMemo, useState } from "react";

export default function ProductExplorer({
  products,
}: {
  products: ProductType[];
}) {
  const [sortBy, setSortBy] = useState<"trending" | "recent" | "newest">(
    "trending"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const filtered = [...products];

    if (searchQuery.length > 0) {
      return filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case "trending":
        return filtered.sort((a, b) => b.voteCount - a.voteCount);
      case "recent":
      case "newest":
        return filtered.sort(
          (a, b) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
      default:
        return filtered;
    }
  }, [searchQuery, products, sortBy]);

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 h-11 rounded-xl bg-muted/40 border-border/50 focus:bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 bg-muted/40 p-1 rounded-xl backdrop-blur">
          <Button
            size="sm"
            variant={sortBy === "trending" ? "default" : "ghost"}
            onClick={() => setSortBy("trending")}
            className="rounded-lg"
          >
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>

          <Button
            size="sm"
            variant={sortBy === "recent" ? "default" : "ghost"}
            onClick={() => setSortBy("recent")}
            className="rounded-lg"
          >
            <ClockIcon className="size-4" />
            Recent
          </Button>
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-foreground">
          {filteredProducts.length}
        </span>{" "}
        products
      </p>

      {/* Grid */}
      <div className="grid-wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}