"use client";

import React from "react";
import SectionHeader from "../common/section-header";
import EmptyState from "../common/EmptyState";
import ProductCard from "../products/product-card"; 
import { RocketIcon } from "lucide-react";

const recentlyLaunched: any[] = []; 

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Check out the newest additions!"
        />

        <div className="mt-8">
          {recentlyLaunched.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyLaunched.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </section>
  );
}
