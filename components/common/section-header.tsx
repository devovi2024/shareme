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
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
}