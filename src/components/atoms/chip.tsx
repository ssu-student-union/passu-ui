import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import CloseIcon from "@/assets/icons/close.svg?react";
import DropdownIcon from "@/assets/icons/dropdown.svg?react";
import { cn } from "@/utils/cn";
import type { IconComponent } from "@/utils/icon";

const chipVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center gap-1 rounded-8 p-2 text-body5-14",
  variants: {
    theme: {
      neutral:
        "[--chip-bg-hover:var(--fill-neutral-hovered)] [--chip-bg:var(--fill-neutral)] [--chip-fg:var(--fg-alternative)]",
      brand:
        "[--chip-bg-hover:var(--fill-brand-subtle-hovered)] [--chip-bg:var(--fill-brand-subtle)] [--chip-fg:var(--fg-brand-default)]",
    },
    variant: {
      filter:
        "cursor-pointer bg-[var(--chip-bg)] text-[var(--chip-fg)] hover:bg-[var(--chip-bg-hover)]",
      input: "bg-[var(--chip-bg)] text-[var(--chip-fg)] hover:bg-[var(--chip-bg-hover)]",
      guidance: "bg-[var(--chip-bg)] text-[var(--chip-fg)]",
    },
  },
  defaultVariants: {
    theme: "neutral",
    variant: "filter",
  },
});

interface ChipProps extends ComponentProps<"div">, VariantProps<typeof chipVariants> {
  leadingIcon?: IconComponent;
  onRemove?: () => void;
}

function Chip({
  className,
  theme,
  variant = "filter",
  leadingIcon: LeadingIcon,
  onRemove,
  children,
  ...props
}: ChipProps) {
  return (
    <div
      role={variant === "filter" ? "button" : undefined}
      tabIndex={variant === "filter" ? 0 : undefined}
      className={cn(chipVariants({ theme, variant }), className)}
      {...props}
    >
      {LeadingIcon && <LeadingIcon className="size-5" />}
      {children && <span className="px-0.5">{children}</span>}
      {variant === "filter" && <DropdownIcon className="size-5" />}
      {variant === "input" && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="삭제"
          className="flex size-5 shrink-0 items-center justify-center"
        >
          <CloseIcon className="size-5" />
        </button>
      )}
    </div>
  );
}

export type { ChipProps };
export { Chip, chipVariants };
