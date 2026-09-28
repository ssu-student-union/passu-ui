import type { ComponentProps } from "react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { cn } from "@/utils/cn";

export interface CheckIndicatorProps extends ComponentProps<"span"> {
  checked?: boolean;
}

export function CheckIndicator({ className, checked = false, ...props }: CheckIndicatorProps) {
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center",
        checked ? "text-fill-brand" : "text-fg-assistive",
        className,
      )}
      {...props}
    >
      <CheckIcon className="size-6" />
    </span>
  );
}
