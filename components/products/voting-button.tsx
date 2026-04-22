"use client";

import {
  downvoteProductAction,
  upvoteProductAction,
} from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";
import { Button } from "@/components/ui/button";

export default function VotingButtons({
  hasVoted,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted?: boolean;
  voteCount: number;
  productId: number;
}) {
  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(0, currentCount + change)
  );

  const [isPending, startTransition] = useTransition();

  const handleUpvote = async () => {
    startTransition(async () => {
      setOptimisticVoteCount(1);
      await upvoteProductAction(productId);
    });
  };

  const handleDownvote = async () => {
    startTransition(async () => {
      setOptimisticVoteCount(-1);
      await downvoteProductAction(productId);
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
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
        className={cn(
          "h-8 w-8 rounded-lg transition",
          hasVoted
            ? "bg-primary/20 text-primary"
            : "hover:bg-primary/10 hover:text-primary"
        )}
      >
        <ChevronUpIcon className="size-5" />
      </Button>

      <span className="text-sm font-semibold text-foreground">
        {optimisticVoteCount}
      </span>

      <Button
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
        className={cn(
          "h-8 w-8 rounded-lg transition",
          hasVoted ? "hover:text-destructive" : "opacity-40 cursor-not-allowed"
        )}
      >
        <ChevronDownIcon className="size-5" />
      </Button>
    </div>
  );
}