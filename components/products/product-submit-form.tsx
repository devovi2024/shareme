"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );

  const { errors, message, success } = state;

  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <div className="relative max-w-2xl mx-auto">

      {/* Glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/10 blur-3xl opacity-30 rounded-3xl" />

      <form
        action={formAction}
        className="
          relative space-y-6
          p-6 sm:p-8
          rounded-2xl
          border border-border/40
          bg-background/70 backdrop-blur-xl
          shadow-xl
        "
      >

        {/* HEADER */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Submit your product 🚀
          </h2>
          <p className="text-sm text-muted-foreground">
            Share your product with the community and get early feedback
          </p>
        </div>

        {/* ALERT */}
        {message && (
          <div
            className={cn(
              "p-4 rounded-xl border text-sm font-medium transition",
              success
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-destructive/10 border-destructive/30 text-destructive"
            )}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}

        {/* FIELDS */}
        <div className="space-y-5">

          <FormField
            label="Product Name"
            name="name"
            id="name"
            placeholder="My Awesome Product"
            required
            error={getFieldErrors("name")}
          />

          <FormField
            label="Slug"
            name="slug"
            id="slug"
            placeholder="my-awesome-product"
            required
            helperText="URL-friendly version of your product name"
            error={getFieldErrors("slug")}
          />

          <FormField
            label="Tagline"
            name="tagline"
            id="tagline"
            placeholder="A short catchy description"
            required
            error={getFieldErrors("tagline")}
          />

          <FormField
            label="Description"
            name="description"
            id="description"
            placeholder="Tell us more about your product..."
            required
            textarea
            error={getFieldErrors("description")}
          />

          <FormField
            label="Website URL"
            name="websiteUrl"
            id="websiteUrl"
            placeholder="https://yourproduct.com"
            required
            helperText="Your product landing page"
            error={getFieldErrors("websiteUrl")}
          />

          <FormField
            label="Tags"
            name="tags"
            id="tags"
            placeholder="AI, SaaS, Productivity"
            required
            helperText="Comma-separated tags"
            error={getFieldErrors("tags")}
          />

        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="
            w-full h-12 rounded-xl
            bg-gradient-to-r from-primary to-primary/80
            hover:from-primary/90 hover:to-primary
            shadow-lg shadow-primary/20
            transition-all duration-300
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {isPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <>
              <SparklesIcon className="size-4 mr-2" />
              Submit Product
            </>
          )}
        </Button>
      </form>
    </div>
  );
}