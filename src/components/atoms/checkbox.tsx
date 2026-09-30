import type { ComponentProps, ReactNode } from "react";
import CheckSmallIcon from "@/assets/icons/check-small.svg?react";
import { cn } from "@/utils/cn";

interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  /** 체크박스 오른쪽 라벨. 라벨을 누르면 체크박스도 토글된다. */
  label?: ReactNode;
}

function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label
      className={cn("inline-flex items-center gap-1 text-body5-14 text-fg-default", className)}
    >
      <span className="group relative inline-flex size-6 shrink-0 items-center justify-center p-0.5">
        <input
          type="checkbox"
          className="absolute inset-0 size-full cursor-pointer appearance-none opacity-0"
          {...props}
        />
        <span className="pointer-events-none flex size-5 shrink-0 items-center justify-center rounded-4 border border-border-default group-has-checked:border-0 group-has-checked:bg-fill-brand">
          <CheckSmallIcon className="hidden size-4 text-fg-inverse-default group-has-checked:block" />
        </span>
      </span>
      {label}
    </label>
  );
}

export type { CheckboxProps };
export { Checkbox };
