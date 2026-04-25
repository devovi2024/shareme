import SectionHeader from "@/components/common/section-header";
import VotingButtons from "@/components/products/voting-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ExternalLinkIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
};

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  const {
    name,
    description,
    websiteUrl,
    tags,
    voteCount,
    tagline,
    createdAt,
    submittedBy,
  } = product;

  return (
    <div className="py-12 sm:py-16">
      <div className="wrapper space-y-10">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <SectionHeader
                title={name}
                icon={StarIcon}
                description={tagline ?? ""}
              />

              <div className="flex flex-wrap gap-2">
                {tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 space-y-4">
              <h2 className="text-lg font-semibold">Product Details</h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Launched:</span>
                  <span className="font-medium">
                    {createdAt
                      ? new Date(createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <UserIcon className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Submitted by:</span>
                  <span className="font-medium">
                    {submittedBy || "Anonymous"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background p-6 text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Support this product
                </p>

                <VotingButtons productId={product.id} voteCount={voteCount} />

                {voteCount > 100 && (
                  <Badge className="w-full justify-center py-2">
                    Featured Product
                  </Badge>
                )}
              </div>

              {websiteUrl && (
                <Button asChild className="w-full rounded-xl" variant="outline">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <ExternalLinkIcon className="size-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}