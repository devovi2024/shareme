import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import VotingButtons from "./voting-button";
import { ProductType } from "@/types";

export default function ProductCard({ product }: { product: ProductType }) {
  const hasVoted = false;

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <Card
        className="
          relative h-full overflow-hidden
          rounded-2xl border border-border/40
          bg-gradient-to-b from-background via-background to-muted/30
          backdrop-blur-md
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10
          hover:border-primary/40
        "
      >
        {/* Glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-primary/5 blur-3xl" />
        </div>

        <CardHeader className="p-5 pb-4 relative z-10">
          <div className="flex items-start justify-between gap-4">

            {/* Left content */}
            <div className="flex-1 min-w-0 space-y-2">

              {/* Title + badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle
                  className="
                    text-base sm:text-lg font-semibold
                    tracking-tight text-foreground
                    group-hover:text-primary
                    transition-colors
                    line-clamp-1
                  "
                >
                  {product.name}
                </CardTitle>

                {product.voteCount > 100 && (
                  <Badge
                    className="
                      flex items-center gap-1
                      h-6 px-2 text-[11px]
                      bg-primary/10 text-primary
                      border border-primary/20
                      rounded-full
                    "
                  >
                    <StarIcon className="size-3 fill-primary" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Description */}
              <CardDescription
                className="
                  text-sm leading-relaxed
                  text-muted-foreground
                  line-clamp-2
                "
              >
                {product.description}
              </CardDescription>
            </div>

            {/* Voting */}
            <div className="shrink-0">
              <VotingButtons
                hasVoted={hasVoted}
                voteCount={product.voteCount}
                productId={product.id}
              />
            </div>
          </div>
        </CardHeader>

        {/* Footer */}
        <CardFooter className="px-5 pb-5 pt-0 relative z-10">
          <div className="flex flex-wrap gap-2">
            {product.tags?.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                className="
                  rounded-full px-3 py-1
                  text-[11px] font-medium
                  bg-muted/40 backdrop-blur
                  border border-border/30
                  hover:bg-primary/10 hover:text-primary
                  transition-colors
                "
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}