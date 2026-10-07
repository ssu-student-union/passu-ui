import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const paginationItemVariants = tv({
  base: "inline-flex min-w-8 shrink-0 items-center justify-center rounded-4 p-1 text-body1-16",
  variants: {
    selected: {
      true: "bg-fill-brand-subtle text-fg-brand-default",
      false:
        "bg-bg-canvas text-fg-assistive hover:bg-fill-neutral-subtle-hovered active:bg-pressed active:text-fg-alternative",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

interface PaginationItemProps
  extends ComponentProps<"button">,
    VariantProps<typeof paginationItemVariants> {}

function PaginationItem({ className, selected, children, ...props }: PaginationItemProps) {
  return (
    <button
      type="button"
      aria-current={selected ? "page" : undefined}
      className={cn(paginationItemVariants({ selected }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export type { PaginationItemProps };
export { PaginationItem, paginationItemVariants };
