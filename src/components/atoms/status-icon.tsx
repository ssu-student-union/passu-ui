import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import CheckBoldIcon from "@/assets/icons/check-bold.svg?react";
import PriorityHighIcon from "@/assets/icons/priority-high.svg?react";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const statusIconVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center rounded-full p-3",
  variants: {
    status: {
      info: "bg-fill-neutral text-fg-alternative",
      success: "bg-fill-brand-subtle text-fg-brand-default",
      danger: "bg-fill-danger-subtle text-fg-danger-default",
    },
  },
  defaultVariants: {
    status: "info",
  },
});

interface StatusIconProps extends ComponentProps<"span">, VariantProps<typeof statusIconVariants> {}

function StatusIcon({ className, status = "info", ...props }: StatusIconProps) {
  return (
    <span
      aria-hidden
      className={cn(statusIconVariants({ status }), className)}
      {...props}
    >
      {status === "success" ? (
        <CheckBoldIcon className="size-10" />
      ) : (
        <PriorityHighIcon className="size-10" />
      )}
    </span>
  );
}

export type { StatusIconProps };
export { StatusIcon, statusIconVariants };
