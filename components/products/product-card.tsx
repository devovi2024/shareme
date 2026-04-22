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
        rounded-2xl border border-border/50
        bg-gradient-to-b from-background to-muted/30
        backdrop-blur
        transition-all duration-300
        hover:shadow-xl hover:shadow-primary/10
        hover:-translate-y-1
        hover:border-primary/40
      "
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
          <div className="absolute inset-0 bg-primary/5 blur-2xl" />
        </div>

        <CardHeader className="p-5 pb-4 relative z-10">
          <div className="flex items-start gap-4">
            {/* Content */}
            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle
                  className="
                  text-[17px] font-semibold tracking-tight
                  text-foreground
                  transition-colors
                  group-hover:text-primary
                  line-clamp-1
                "
                >
                  {product.name}
                </CardTitle>

                {product.voteCount > 100 && (
                  <Badge
                    className="
                    flex items-center gap-1
                    h-6 px-2 text-xs
                    bg-gradient-to-r from-primary/20 to-primary/10
                    text-primary border border-primary/20
                  "
                  >
                    <StarIcon className="size-3 fill-primary" />
                    Featured
                  </Badge>
                )}
              </div>

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

        <CardFooter className="px-5 pb-5 pt-0 relative z-10">
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <Badge
                key={tag}
                className="
                rounded-full px-3 py-1 text-xs font-medium
                bg-muted/50 backdrop-blur
                hover:bg-primary/10 hover:text-primary
                transition
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