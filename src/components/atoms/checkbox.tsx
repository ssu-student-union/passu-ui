import type { ComponentProps } from "react";
import CheckSmallIcon from "@/assets/icons/check-small.svg?react";
import { cn } from "@/utils/cn";

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "size"> {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex size-6 shrink-0 items-center justify-center p-0.5",
        className,
      )}
    >
      <input
        type="checkbox"
        className="absolute inset-0 size-full cursor-pointer appearance-none opacity-0"
        {...props}
      />
      <span className="pointer-events-none flex size-5 shrink-0 items-center justify-center rounded-4 border border-border-default group-has-checked:border-0 group-has-checked:bg-fill-brand">
        <CheckSmallIcon className="hidden size-4 text-fg-inverse-default group-has-checked:block" />
      </span>
    </span>
  );
}
