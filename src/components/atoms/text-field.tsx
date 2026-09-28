import { type ComponentProps, type ReactNode, useId, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import AsteriskIcon from "@/assets/icons/asterisk.svg?react";
import CancelIcon from "@/assets/icons/cancel.svg?react";
import VisibilityIcon from "@/assets/icons/visibility.svg?react";
import { cn } from "@/utils/cn";

export const textFieldVariants = tv({
  base: "flex h-[2.75rem] w-full min-w-[15rem] items-center gap-2 rounded-8 px-4 py-2",
  variants: {
    invalid: {
      true: "border border-border-danger bg-fill-neutral-subtle",
      false:
        "bg-fill-neutral focus-within:border focus-within:border-border-focus focus-within:bg-fill-neutral-subtle",
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

const helperTextColorClassName = {
  default: "text-fg-alternative",
  error: "text-fg-danger-default",
  success: "text-fg-brand-default",
} as const;

export interface TextFieldProps
  extends Omit<ComponentProps<"input">, "size" | "type">,
    VariantProps<typeof textFieldVariants> {
  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  status?: keyof typeof helperTextColorClassName;
  visibilityToggle?: boolean;
  onClear?: () => void;
  wrapperClassName?: string;
}

export function TextField({
  id,
  className,
  wrapperClassName,
  label,
  required = false,
  helperText,
  status = "default",
  invalid,
  visibilityToggle = false,
  onClear,
  value,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [revealed, setRevealed] = useState(false);
  const hasValue = value !== undefined && value !== "";

  return (
    <div className={cn("flex w-full min-w-[15rem] flex-col items-start gap-1", wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="flex w-full items-center gap-0.5 px-0.5 text-body3-15 text-fg-default"
        >
          {label}
          {required && <AsteriskIcon className="size-4 shrink-0 text-fg-assistive" />}
        </label>
      )}
      <div className={textFieldVariants({ invalid })}>
        <input
          id={inputId}
          type={visibilityToggle && !revealed ? "password" : "text"}
          value={value}
          className={cn(
            "min-w-0 flex-1 bg-transparent text-body2-16 text-fg-default placeholder:text-fg-alternative focus:outline-none",
            className,
          )}
          {...props}
        />
        {visibilityToggle && (
          <button
            type="button"
            onClick={() => setRevealed(prev => !prev)}
            aria-label={revealed ? "숨기기" : "표시"}
            aria-pressed={revealed}
            className="flex size-5 shrink-0 items-center justify-center text-fg-assistive"
          >
            <VisibilityIcon className="size-5" />
          </button>
        )}
        {hasValue && onClear && (
          <button
            type="button"
            onClick={onClear}
            aria-label="지우기"
            className="flex size-5 shrink-0 items-center justify-center text-fg-assistive"
          >
            <CancelIcon className="size-5" />
          </button>
        )}
      </div>
      {helperText && (
        <span className={cn("w-full px-0.5 text-caption1-12", helperTextColorClassName[status])}>
          {helperText}
        </span>
      )}
    </div>
  );
}
