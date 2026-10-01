import { type ComponentProps, createContext, useContext } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";
import { useControllableState } from "@/utils/use-controllable-state";

const headerClassName =
  "flex h-[2.875rem] min-w-[8.75rem] items-center border-border-default border-b bg-fill-neutral p-3 text-body1-16 text-fg-default";

const optionVariants = tv({
  base: "flex w-full min-w-[8.75rem] cursor-pointer items-center border-border-default border-t bg-fill-neutral-subtle p-3 text-left text-body3-15 text-fg-default hover:bg-fill-neutral-subtle-hovered active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))] disabled:pointer-events-none disabled:text-fg-disabled",
  variants: {
    selected: {
      /** 하위 목록이 열려 있는 상위 항목. 글자색만 바뀐다 */
      parent: "text-fg-brand-default",
      /** 고른 하위 항목 */
      child: "bg-fill-brand-subtle text-fg-brand-default hover:bg-fill-brand-subtle active:bg-none",
    },
  },
});

interface OptionProps extends ComponentProps<"button">, VariantProps<typeof optionVariants> {}

function Option({ className, selected, ...props }: OptionProps) {
  return (
    <button
      type="button"
      aria-pressed={!!selected}
      className={cn(optionVariants({ selected }), className)}
      {...props}
    />
  );
}

interface CascadingSelectContextValue {
  /** 하위 목록이 열려 있는 상위 항목의 value. 고르기 전에는 null */
  value: string | null;
  setValue: (value: string) => void;
}

const CascadingSelectContext = createContext<CascadingSelectContextValue | null>(null);

function useCascadingSelectContext() {
  const context = useContext(CascadingSelectContext);
  if (!context) {
    throw new Error("CascadingSelect의 하위 컴포넌트는 CascadingSelect 안에서만 사용할 수 있어요.");
  }
  return context;
}

interface CascadingSelectProps extends Omit<ComponentProps<"div">, "defaultValue" | "onChange"> {
  /** 하위 목록이 열려 있는 상위 항목의 value */
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
}

/**
 * 상위 항목을 고르면 하위 목록이 옆에 열리는 2단계 선택 패널.
 * 상위 항목의 열림 상태만 들고 있고, 하위 항목을 골랐는지는 사용하는 쪽에서 관리한다.
 *
 * ```tsx
 * <CascadingSelect value={college} onValueChange={setCollege}>
 *   <CascadingSelectParents title="단과대">
 *     <CascadingSelectParent value="humanities">인문대학</CascadingSelectParent>
 *   </CascadingSelectParents>
 *   <CascadingSelectChildren title="소속 학부/학과">
 *     <CascadingSelectChild selected={...} onClick={...}>국어국문학과</CascadingSelectChild>
 *   </CascadingSelectChildren>
 * </CascadingSelect>
 * ```
 */
function CascadingSelect({
  className,
  value: valueProp,
  defaultValue = null,
  onValueChange,
  ...props
}: CascadingSelectProps) {
  const [value, setValue] = useControllableState<string | null>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: next => next !== null && onValueChange?.(next),
  });

  return (
    <CascadingSelectContext.Provider value={{ value, setValue }}>
      <div
        className={cn(
          "flex w-fit items-start rounded-4 border border-border-default bg-fill-neutral-subtle",
          className,
        )}
        {...props}
      />
    </CascadingSelectContext.Provider>
  );
}

interface CascadingSelectColumnProps extends ComponentProps<"div"> {
  /** 열 맨 위의 제목 */
  title: string;
}

/** 왼쪽 열. 상위 항목(`CascadingSelectParent`)을 담는다 */
function CascadingSelectParents({
  className,
  title,
  children,
  ...props
}: CascadingSelectColumnProps) {
  return (
    <div
      className={cn("flex shrink-0 flex-col border-border-default border-r", className)}
      {...props}
    >
      <div className={headerClassName}>{title}</div>
      {children}
    </div>
  );
}

interface CascadingSelectParentProps extends Omit<ComponentProps<"button">, "value"> {
  value: string;
}

/** 상위 항목. 누르면 하위 목록이 열린다 */
function CascadingSelectParent({ value, onClick, ...props }: CascadingSelectParentProps) {
  const context = useCascadingSelectContext();

  return (
    <Option
      selected={context.value === value ? "parent" : undefined}
      onClick={event => {
        onClick?.(event);
        context.setValue(value);
      }}
      {...props}
    />
  );
}

/** 오른쪽 열. 상위 항목을 고르기 전에는 제목이 비활성이고 목록이 비어 있다 */
function CascadingSelectChildren({
  className,
  title,
  children,
  ...props
}: CascadingSelectColumnProps) {
  const context = useCascadingSelectContext();

  return (
    <div
      className={cn("flex w-[27.5rem] shrink-0 flex-col self-stretch", className)}
      {...props}
    >
      <div className={cn(headerClassName, context.value === null && "text-fg-disabled")}>
        {title}
      </div>
      <div className="grid flex-1 grid-cols-2 content-start">{children}</div>
    </div>
  );
}

interface CascadingSelectChildProps extends ComponentProps<"button"> {
  selected?: boolean;
}

/** 하위 항목. 골랐는지(`selected`)와 누를 때의 동작(`onClick`)은 사용하는 쪽에서 정한다 */
function CascadingSelectChild({ selected, ...props }: CascadingSelectChildProps) {
  return (
    <Option
      selected={selected ? "child" : undefined}
      {...props}
    />
  );
}

export type {
  CascadingSelectChildProps,
  CascadingSelectColumnProps,
  CascadingSelectParentProps,
  CascadingSelectProps,
};
export {
  CascadingSelect,
  CascadingSelectChild,
  CascadingSelectChildren,
  CascadingSelectParent,
  CascadingSelectParents,
};
