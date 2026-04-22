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
      className={cn("relative text-center space-y-2px-4 py-3 rounded-xl bg-muted/30 backdrop-blur transition hover:bg-muted/50 ", hasBorder && "border-x border-border/50")}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon className="size-5 text-primary/70" />
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">
          {value}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}