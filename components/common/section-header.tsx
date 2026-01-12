"use client";

import { LucideIcon } from "lucide-react";

export default function SectionHeader({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
