import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";

export const badgeVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center gap-0.5 rounded-4 p-1 text-caption1-12",
  variants: {
    theme: {
      neutral: "bg-fill-neutral text-fg-alternative",
      positive: "bg-fill-brand-subtle text-fg-brand-default",
    },
  },
  defaultVariants: {
    theme: "neutral",
  },
});

export interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

export function Badge({ className, theme, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ theme }), className)}
      {...props}
    />
  );
}
