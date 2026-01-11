"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 px-6 py-4",
        hasBorder && "border-l border-muted"
      )}
    >
      <div className="flex items-center gap-2 text-foreground">
        <Icon className="h-5 w-5" />
        <p className="text-2xl font-semibold">{value}</p>
      </div>

      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
