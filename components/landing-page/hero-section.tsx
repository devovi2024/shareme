"use client";

import Link from "next/link";
import {
  Sparkles,
  Rocket,
  RocketIcon,
  UsersIcon,
  EyeIcon,
} from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-5 py-2 mb-6 text-sm bg-background/70 backdrop-blur-md border-muted shadow-sm"
    >
      <span className="flex items-center gap-2 text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  {
    icon: RocketIcon,
    value: "2.5k",
    label: "Projects Shared",
    hasBorder: false,
  },
  {
    icon: UsersIcon,
    value: "1.2k",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "48k",
    label: "Monthly Views",
    hasBorder: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center py-16 lg:py-28 space-y-6">

          <LiveBadge />

          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Share What You&apos;ve Built, Discover What&apos;s Launching
          </h1>

          <p className="max-w-2xl text-muted-foreground text-base md:text-lg">
            A community platform for creators to showcase apps, AI tools,
            SaaS products, and creative projects. Authentic launches,
            real builders, genuine feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2 shadow-md">
              <Sparkles className="h-5 w-5" />
              <Link href="#">Share Your Project</Link>
            </Button>

            <Button size="lg" variant="outline" className="gap-2">
              <Rocket className="h-5 w-5" />
              <Link href="#">Explore Projects</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>

        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>
  );
}
