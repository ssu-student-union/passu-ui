import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import type { IconComponent } from "@/utils/icon";
import { tv } from "@/utils/tv";

const badgeVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center rounded-4",
  variants: {
    size: {
      sm: "gap-0.5 p-1 text-caption1-12",
      lg: "gap-1 px-2 py-1 text-body5-14",
    },
    theme: {
      neutral: "bg-fill-neutral text-fg-alternative",
      brand: "bg-fill-brand-subtle text-fg-brand-default",
      danger: "bg-fill-danger-subtle text-fg-danger-default",
    },
  },
  defaultVariants: {
    size: "sm",
    theme: "neutral",
  },
});

interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  leadingIcon?: IconComponent;
}

function Badge({
  className,
  size,
  theme,
  leadingIcon: LeadingIcon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ size, theme }), className)}
      {...props}
    >
      {LeadingIcon && <LeadingIcon className="size-4" />}
      {children}
    </span>
  );
}

export type { BadgeProps };
export { Badge, badgeVariants };
