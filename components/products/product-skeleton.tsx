import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-10">
        <div className="space-y-3">
          <Skeleton className="h-8 w-64 rounded-lg" />
          <Skeleton className="h-5 w-96 rounded-lg" />
        </div>

        <div className="grid-wrapper">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border p-5 space-y-4 bg-muted/20"
            >
              <div className="flex justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4 rounded" />
                  <Skeleton className="h-4 w-full rounded" />
                </div>
                <Skeleton className="h-16 w-10 rounded-xl" />
              </div>

              <div className="flex gap-2">
                <Skeleton className="h-5 w-12 rounded-full" />
                <Skeleton className="h-5 w-14 rounded-full" />
                <Skeleton className="h-5 w-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}