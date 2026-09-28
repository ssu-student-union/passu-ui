import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";

export const dividerVariants = tv({
  base: "m-0 w-full shrink-0 border-0 bg-border-default",
  variants: {
    size: {
      lg: "h-2",
      md: "h-1",
      sm: "h-px",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface DividerProps extends ComponentProps<"hr">, VariantProps<typeof dividerVariants> {}

export function Divider({ className, size, ...props }: DividerProps) {
  return (
    <hr
      className={cn(dividerVariants({ size }), className)}
      {...props}
    />
  );
}
