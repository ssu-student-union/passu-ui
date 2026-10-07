import { AnimatePresence, motion } from "motion/react";
import { type ComponentProps, type ReactNode, useRef } from "react";
import { cn } from "@/utils/cn";
import { mergeRefs } from "@/utils/merge-refs";
import { colorTransition, springs } from "@/utils/motion";
import { useCheckedState } from "@/utils/use-checked-state";

interface SelectionControlProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  type: "checkbox" | "radio";
  /** 선택 표시 칸의 모양(둥글기) */
  boxClassName: string;
  /** 선택됐을 때 칸 안에 나타나는 표시 */
  indicator: ReactNode;
  label?: ReactNode;
}

/** 선택되면 `indicator`가 spring으로 나타난다 */
function SelectionControl({
  type,
  boxClassName,
  indicator,
  label,
  className,
  ref,
  ...props
}: SelectionControlProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const checked = useCheckedState(inputRef, props);

  return (
    <label
      className={cn(
        "inline-flex items-center gap-1 align-middle text-body5-14 text-fg-default",
        className,
      )}
    >
      <span className="group relative inline-flex size-6 shrink-0 items-center justify-center p-0.5">
        <input
          type={type}
          className="absolute inset-0 size-full cursor-pointer appearance-none opacity-0"
          {...props}
          ref={mergeRefs(inputRef, ref)}
        />
        <span
          className={cn(
            "pointer-events-none flex size-5 shrink-0 items-center justify-center border border-border-default group-has-checked:border-0 group-has-checked:bg-fill-brand",
            colorTransition,
            boxClassName,
          )}
        >
          <AnimatePresence initial={false}>
            {checked && (
              <motion.span
                key="indicator"
                className="flex"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={springs.pop}
              >
                {indicator}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </span>
      {label}
    </label>
  );
}

export type { SelectionControlProps };
export { SelectionControl };
