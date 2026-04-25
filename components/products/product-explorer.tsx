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
  const [sortBy, setSortBy] = useState<"trending" | "recent">("trending");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(q)
      );
    }

    if (sortBy === "trending") {
      result = result.sort((a, b) => b.voteCount - a.voteCount);
    }

    if (sortBy === "recent") {
      result = result.sort(
        (a, b) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
      );
    }

    return result;
  }, [searchQuery, products, sortBy]);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="h-11 pl-10 rounded-xl bg-muted/40 border-border/40 focus:bg-background focus:border-primary/40 transition w-full"
          />
        </div>

        <div className="flex w-full lg:w-auto items-center gap-2 p-1 rounded-xl bg-muted/40 border border-border/30 backdrop-blur">
          <Button
            size="sm"
            onClick={() => setSortBy("trending")}
            variant={sortBy === "trending" ? "default" : "ghost"}
            className="rounded-lg gap-1.5 flex-1 lg:flex-none"
          >
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>

          <Button
            size="sm"
            onClick={() => setSortBy("recent")}
            variant={sortBy === "recent" ? "default" : "ghost"}
            className="rounded-lg gap-1.5 flex-1 lg:flex-none"
          >
            <ClockIcon className="size-4" />
            Recent
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
        <p>
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs text-primary hover:underline w-fit"
          >
            Clear search
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transition-transform hover:-translate-y-1 duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground">
          <p className="text-base font-medium">No products found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}