"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Card className="p-5 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex items-start justify-between gap-6">

        <div className="flex-1 space-y-3">
          <CardHeader className="p-0 space-y-1">
            <CardTitle className="text-lg font-semibold leading-snug">
              <Link
                href={`/products/${product.id}`}
                className="hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
              >
                {product.name}
              </Link>
            </CardTitle>

            <CardDescription className="text-sm text-muted-foreground">
              {product.description}
            </CardDescription>
          </CardHeader>

          <CardFooter className="p-0 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </div>

        <div className="flex flex-col items-center gap-3">
          {product.isFeatured && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              ⭐ Featured
            </Badge>
          )}

          <div className="flex flex-col items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => e.stopPropagation()}
              className="p-2"
            >
              <ChevronUpIcon className="h-4 w-4" />
            </Button>

            <span className="text-sm font-medium">{product.votes}</span>

            <Button
              variant="outline"
              size="icon"
              onClick={(e) => e.stopPropagation()}
              className="p-2"
            >
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
