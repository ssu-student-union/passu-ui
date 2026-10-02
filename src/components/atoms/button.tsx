import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import type { IconComponent } from "@/utils/icon";
import { tv } from "@/utils/tv";

const buttonVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))] disabled:pointer-events-none disabled:bg-fill-disabled disabled:text-fg-disabled",
  variants: {
    size: {
      lg: "min-w-[3.5rem] gap-1 rounded-12 p-4 text-body1-16",
      md: "min-w-[2.875rem] gap-0.5 rounded-8 p-3 text-body5-14",
      sm: "h-[2.25rem] min-w-[2.375rem] gap-0.5 rounded-8 px-2 text-caption1-12",
    },
    theme: {
      neutral:
        "[--btn-bg-hover:var(--fill-neutral-hovered)] [--btn-bg:var(--fill-neutral)] [--btn-fg:var(--fg-default)] [--btn-subtle-bg-hover:var(--fill-neutral-subtle-hovered)] [--btn-subtle-bg:var(--fill-neutral-subtle)] [--btn-subtle-fg:var(--fg-default)]",
      brand:
        "[--btn-bg-hover:var(--fill-brand-hovered)] [--btn-bg:var(--fill-brand)] [--btn-fg:var(--fg-inverse-default)] [--btn-subtle-bg-hover:var(--fill-brand-subtle-hovered)] [--btn-subtle-bg:var(--fill-brand-subtle)] [--btn-subtle-fg:var(--fg-brand-default)]",
      status:
        "[--btn-bg-hover:var(--fill-danger-hovered)] [--btn-bg:var(--fill-danger)] [--btn-fg:var(--fg-inverse-default)] [--btn-subtle-bg-hover:var(--fill-danger-subtle-hovered)] [--btn-subtle-bg:var(--fill-danger-subtle)] [--btn-subtle-fg:var(--fg-danger-default)]",
    },
    variant: {
      primary:
        "bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-hover)]",
      secondary:
        "bg-[var(--btn-subtle-bg)] text-[var(--btn-subtle-fg)] hover:bg-[var(--btn-subtle-bg-hover)] active:bg-[var(--btn-subtle-bg-hover)]",
      line: "border border-border-default bg-[var(--btn-subtle-bg)] text-[var(--btn-subtle-fg)] hover:bg-[var(--btn-subtle-bg-hover)] active:bg-[var(--btn-subtle-bg-hover)]",
      ghost:
        "bg-transparent text-[var(--btn-subtle-fg)] hover:bg-[var(--btn-subtle-bg-hover)] active:bg-[var(--btn-subtle-bg-hover)] disabled:bg-transparent disabled:text-[var(--btn-subtle-fg)] disabled:opacity-[0.32]",
    },
    layout: {
      fill: "w-full",
      single: "w-[13.75rem]",
      group: "w-[12.5rem]",
    },
  },
  defaultVariants: {
    size: "lg",
    theme: "neutral",
    variant: "primary",
  },
});

const labelSizeClassName = {
  lg: "h-6",
  md: "h-5",
  sm: "h-4",
} as const;

const iconSizeClassName = {
  lg: "size-6",
  md: "size-5",
  sm: "size-4",
} as const;

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  leadingIcon?: IconComponent;
  trailingIcon?: IconComponent;
}

function Button({
  className,
  size = "lg",
  theme,
  variant,
  layout,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ size, theme, variant, layout }), className)}
      {...props}
    >
      {LeadingIcon && <LeadingIcon className={iconSizeClassName[size]} />}
      {children && (
        <span
          className={cn("flex shrink-0 items-center justify-center px-1", labelSizeClassName[size])}
        >
          {children}
        </span>
      )}
      {TrailingIcon && <TrailingIcon className={iconSizeClassName[size]} />}
    </button>
  );
}

export type { ButtonProps };
export { Button, buttonVariants };
