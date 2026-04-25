"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="
        px-4 py-2 mb-8 text-sm
        bg-background/60 backdrop-blur-xl
        border-border/50
      "
    >
      <span className="relative flex h-2 w-2 mr-2">
        {/* safer animation wrapper */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>

      <span className="text-muted-foreground">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  { icon: RocketIcon, value: "2.5K+", label: "Projects Shared" },
  {
    icon: UsersIcon,
    value: "10K+",
    label: "Active Creators",
  },
  { icon: EyeIcon, value: "50K+", label: "Monthly Visitors" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (hydration-safe) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_60%)] pointer-events-none" />

      <div className="wrapper relative">
        <div className="flex flex-col items-center justify-center lg:py-28 py-16 text-center">

          <LiveBadge />

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl leading-tight">
            Share What You’ve Built,
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Discover What’s Launching
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A community platform for creators to showcase apps, AI tools, SaaS
            products, and creative projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="
                text-base px-8 h-12 rounded-xl
                shadow-lg shadow-primary/20
                bg-gradient-to-r from-primary to-primary/80
              "
            >
              <Link href="/submit">
                <SparklesIcon className="size-5" />
                Share Your Project
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base px-8 h-12 rounded-xl shadow"
            >
              <Link href="/explore">
                Explore Projects <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {statsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}