import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface RadioProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  label?: ReactNode;
}

function Radio({ className, label, ...props }: RadioProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-1 align-middle text-body5-14 text-fg-default",
        className,
      )}
    >
      <span className="group relative inline-flex size-6 shrink-0 items-center justify-center p-0.5">
        <input
          type="radio"
          className="absolute inset-0 size-full cursor-pointer appearance-none opacity-0"
          {...props}
        />
        <span className="pointer-events-none flex size-5 shrink-0 items-center justify-center rounded-full border border-border-default group-has-checked:border-0 group-has-checked:bg-fill-brand">
          <span className="hidden size-2 rounded-full bg-fg-inverse-default group-has-checked:block" />
        </span>
      </span>
      {label}
    </label>
  );
}

export type { RadioProps };
export { Radio };
