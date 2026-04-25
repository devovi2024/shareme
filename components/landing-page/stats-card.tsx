import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center",
        "rounded-2xl px-5 py-6",
        "bg-background/40 backdrop-blur-md",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:bg-background/60",
        "border border-border/40",
        hasBorder && "border-x-0 sm:border-x"
      )}
    >
      {/* Icon + Value */}
      <div className="flex items-center gap-2 mb-1">
        <div className="p-2 rounded-xl bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>

        <p className="text-3xl sm:text-4xl font-bold tracking-tight">
          {value}
        </p>
      </div>

      {/* Label */}
      <p className="text-sm sm:text-base text-muted-foreground">
        {label}
      </p>
    </div>
  );
}