import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-10">

        {/* Header skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-72 rounded-lg" />
          <Skeleton className="h-5 w-96 max-w-full rounded-lg" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                rounded-2xl border border-border/40
                bg-muted/20 backdrop-blur
                p-5 space-y-5
              "
            >

              {/* Top row (title + vote) */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-2/3 rounded-md" />
                </div>

                {/* Vote button skeleton */}
                <Skeleton className="h-14 w-12 rounded-xl" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-14 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>

              {/* Footer hint line */}
              <div className="pt-2 border-t border-border/30 flex items-center justify-between">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-4 w-16 rounded" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}