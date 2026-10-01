import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const cascadingSelectItemVariants = tv({
  base: "flex min-w-[8.75rem] items-center border-border-default p-3 text-fg-default",
  variants: {
    type: {
      header: "border-b bg-fill-neutral text-body1-16",
      option:
        "cursor-pointer border-t bg-fill-neutral-subtle text-body3-15 hover:bg-fill-neutral-subtle-hovered active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))]",
    },
    selected: {
      /** 하위 단계에서 고른 항목의 상위 항목 */
      parent: "text-fg-brand-default",
      /** 최종으로 고른 항목 */
      child: "bg-fill-brand-subtle text-fg-brand-default hover:bg-fill-brand-subtle active:bg-none",
    },
    disabled: {
      true: "pointer-events-none text-fg-disabled",
    },
  },
  defaultVariants: {
    type: "option",
  },
});

interface CascadingSelectItemProps
  extends ComponentProps<"div">,
    VariantProps<typeof cascadingSelectItemVariants> {}

/**
 * CascadingSelect 단계별 목록의 한 칸. `type="header"`는 단계 제목, `type="option"`은 고를 수 있는 항목이다.
 * 포커스 이동과 선택은 상위 목록이 관리한다.
 */
function CascadingSelectItem({
  className,
  type = "option",
  selected,
  disabled,
  ...props
}: CascadingSelectItemProps) {
  const variantClassName = cn(cascadingSelectItemVariants({ type, selected, disabled }), className);

  if (type === "header") {
    return (
      <div
        className={variantClassName}
        {...props}
      />
    );
  }

  return (
    <div
      role="option"
      aria-selected={selected === "child"}
      aria-disabled={disabled || undefined}
      tabIndex={-1}
      className={variantClassName}
      {...props}
    />
  );
}

export type { CascadingSelectItemProps };
export { CascadingSelectItem, cascadingSelectItemVariants };
