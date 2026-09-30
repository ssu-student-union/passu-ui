import { type ComponentProps, type ReactNode, useId, useState } from "react";
import type { VariantProps } from "tailwind-variants";
import AsteriskIcon from "@/assets/icons/asterisk.svg?react";
import CancelIcon from "@/assets/icons/cancel.svg?react";
import VisibilityOffIcon from "@/assets/icons/visibility-off.svg?react";
import VisibilityOnIcon from "@/assets/icons/visibility-on.svg?react";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const formFieldVariants = tv({
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

interface FormLabelProps {
  htmlFor: string;
  required: boolean;
  children: ReactNode;
}

/** 레이블 */
function FormLabel({ htmlFor, required, children }: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex w-full items-center gap-0.5 px-0.5 text-body3-15 text-fg-default"
    >
      {children}
      {required && <AsteriskIcon className="size-4 shrink-0 text-fg-assistive" />}
    </label>
  );
}

interface FormFieldProps extends Omit<ComponentProps<"input">, "size" | "type"> {
  invalid: boolean;
  visibilityToggle: boolean;
  onClear?: () => void;
}

/** 입력 박스 */
function FormField({
  className,
  invalid,
  visibilityToggle,
  onClear,
  value,
  ...props
}: FormFieldProps) {
  const [revealed, setRevealed] = useState(false);
  const hasValue = value !== undefined && value !== "";

  return (
    <div className={formFieldVariants({ invalid })}>
      <input
        type={visibilityToggle && !revealed ? "password" : "text"}
        value={value}
        aria-invalid={invalid || undefined}
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
          {revealed ? (
            <VisibilityOnIcon className="size-5" />
          ) : (
            <VisibilityOffIcon className="size-5" />
          )}
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
  );
}

interface FormHelperTextProps {
  id: string;
  status: keyof typeof helperTextColorClassName;
  children: ReactNode;
}

/** 서브레이블 */
function FormHelperText({ id, status, children }: FormHelperTextProps) {
  return (
    <span
      id={id}
      className={cn("w-full px-0.5 text-caption1-12", helperTextColorClassName[status])}
    >
      {children}
    </span>
  );
}

interface FormControlProps
  extends Omit<ComponentProps<"input">, "size" | "type">,
    VariantProps<typeof formFieldVariants> {
  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  status?: keyof typeof helperTextColorClassName;
  visibilityToggle?: boolean;
  onClear?: () => void;
  wrapperClassName?: string;
}

/** 레이블(FormLabel) · 입력 박스(FormField) · 서브레이블(FormHelperText)을 조합한다. */
function FormControl({
  id,
  wrapperClassName,
  label,
  required = false,
  helperText,
  status = "default",
  invalid,
  visibilityToggle = false,
  "aria-describedby": describedBy,
  ...props
}: FormControlProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperTextId = `${inputId}-helper`;
  const describedByIds = [describedBy, helperText ? helperTextId : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn("flex w-full min-w-[15rem] flex-col items-start gap-1", wrapperClassName)}>
      {label && (
        <FormLabel
          htmlFor={inputId}
          required={required}
        >
          {label}
        </FormLabel>
      )}
      <FormField
        id={inputId}
        invalid={invalid ?? status === "error"}
        visibilityToggle={visibilityToggle}
        aria-describedby={describedByIds || undefined}
        {...props}
      />
      {helperText && (
        <FormHelperText
          id={helperTextId}
          status={status}
        >
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
}

export type { FormControlProps };
export { FormControl, formFieldVariants };
