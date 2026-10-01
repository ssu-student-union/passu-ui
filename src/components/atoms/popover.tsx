import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

type PopoverContentProps = ComponentProps<typeof PopoverPrimitive.Content>;

/** DatePicker·TimePicker·Dropdown이 공유하는 팝오버 패널. 포털로 body에 렌더한다 */
function PopoverContent({
  className,
  align = "start",
  sideOffset = 8,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex flex-col gap-3 rounded-12 border border-border-default bg-bg-canvas p-4 text-fg-default shadow-key-weak outline-none backdrop-blur-[8px]",
          "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export type { PopoverContentProps };
export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger };
