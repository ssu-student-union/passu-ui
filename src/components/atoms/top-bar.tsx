import type { ComponentProps, ReactNode } from "react";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg?react";
import { cn } from "@/utils/cn";

interface TopBarProps extends Omit<ComponentProps<"div">, "title"> {
  title?: ReactNode;
  onBack?: () => void;
  rightSlot?: ReactNode;
}

function TopBar({ className, title, onBack, rightSlot, ...props }: TopBarProps) {
  return (
    <div
      className={cn("relative h-12 w-full", className)}
      {...props}
    >
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="absolute top-3 left-5 flex size-6 items-center justify-center text-fg-default"
        >
          <ArrowBackIcon className="size-6" />
        </button>
      )}
      {title && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-fg-default text-title3-20">
          {title}
        </div>
      )}
      {rightSlot && (
        <div className="absolute top-3 right-5 flex size-6 items-center justify-center">
          {rightSlot}
        </div>
      )}
    </div>
  );
}

export type { TopBarProps };
export { TopBar };
