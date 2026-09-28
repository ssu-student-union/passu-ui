import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";

export const textButtonVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center gap-0.5 disabled:pointer-events-none disabled:opacity-[0.32]",
  variants: {
    size: {
      lg: "h-6 min-w-6 text-body2-16",
      md: "h-5 min-w-[1.375rem] text-body5-14",
      sm: "h-[1.125rem] min-w-5 text-caption1-12",
    },
    theme: {
      neutral: "text-fg-default",
      brand: "text-fg-brand-default",
      status: "text-fg-danger-default",
    },
  },
  defaultVariants: {
    size: "md",
    theme: "neutral",
  },
});

export interface TextButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof textButtonVariants> {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function TextButton({
  className,
  size,
  theme,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={cn(textButtonVariants({ size, theme }), className)}
      {...props}
    >
      {leadingIcon}
      {children && <span className="px-1">{children}</span>}
      {trailingIcon}
    </button>
  );
}
