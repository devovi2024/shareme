import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="p-10">Loading Admin...</div>}>
        {children}
      </Suspense>
    </div>
  );
}