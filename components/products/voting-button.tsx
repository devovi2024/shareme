"use client";

import {
  downvoteProductAction,
  upvoteProductAction,
} from "@/lib/products/product-actions";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useOptimistic, useTransition, useState } from "react";
import { Button } from "@/components/ui/button";

export default function VotingButtons({
  hasVoted: initialHasVoted = false,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted?: boolean;
  voteCount: number;
  productId: number;
}) {
  const [isPending, startTransition] = useTransition();

  const [hasVoted, setHasVoted] = useState(initialHasVoted);

  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    initialVoteCount,
    (current, change: number) => current + change
  );

  const handleUpvote = () => {
    if (isPending) return;

    startTransition(async () => {
      if (hasVoted) return;

      setOptimisticVoteCount(+1);
      setHasVoted(true);

      try {
        await upvoteProductAction(productId);
      } catch {
        // rollback
        setOptimisticVoteCount(-1);
        setHasVoted(false);
      }
    });
  };

  const handleDownvote = () => {
    if (isPending) return;

    startTransition(async () => {
      if (!hasVoted) return;

      setOptimisticVoteCount(-1);
      setHasVoted(false);

      try {
        await downvoteProductAction(productId);
      } catch {
        // rollback
        setOptimisticVoteCount(+1);
        setHasVoted(true);
      }
    });
  };

  return (
    <div
      className="flex flex-col items-center gap-1 rounded-xl border bg-muted/30 p-1 backdrop-blur"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {/* UPVOTE */}
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending || hasVoted}
        className={cn(
          "h-8 w-8 rounded-lg transition",
          hasVoted
            ? "bg-primary/20 text-primary"
            : "hover:bg-primary/10 hover:text-primary"
        )}
      >
        <ChevronUpIcon className="size-5" />
      </Button>

      {/* COUNT */}
      <span className="text-sm font-semibold text-foreground tabular-nums">
        {optimisticVoteCount}
      </span>

      {/* DOWNVOTE */}
      <Button
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending || !hasVoted}
        className={cn(
          "h-8 w-8 rounded-lg transition",
          hasVoted
            ? "hover:text-destructive"
            : "opacity-40 cursor-not-allowed"
        )}
      >
        <ChevronDownIcon className="size-5" />
      </Button>
    </div>
  );
}