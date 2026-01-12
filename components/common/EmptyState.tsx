"use client";


export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      <span className="text-6xl animate-bounce">📦</span>
      <h3 className="text-2xl font-semibold">No Products Available</h3>
      <p className="text-muted-foreground">
        Sorry! There are no recently launched products. <br /> Stay tuned for new arrivals! ✨
      </p>
    </div>
  );
}
