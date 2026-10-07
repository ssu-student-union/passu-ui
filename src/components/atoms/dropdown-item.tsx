import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

interface DropdownItemProps extends ComponentProps<"div"> {
  selected?: boolean;
}

/** Dropdown 목록의 한 항목. 포커스 이동과 선택은 상위 목록이 관리한다 */
function DropdownItem({ className, selected = false, ...props }: DropdownItemProps) {
  return (
    <div
      role="option"
      aria-selected={selected}
      tabIndex={-1}
      className={cn(
        "flex h-[2.25rem] min-w-[6.25rem] cursor-pointer items-center gap-1 overflow-hidden whitespace-nowrap bg-fill-neutral-subtle p-2 text-body5-14 text-fg-alternative hover:bg-fill-neutral-subtle-hovered active:bg-pressed",
        className,
      )}
      {...props}
    />
  );
}

export type { DropdownItemProps };
export { DropdownItem };
