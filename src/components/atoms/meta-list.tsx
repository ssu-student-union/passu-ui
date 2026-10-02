import { Children, type ComponentProps, Fragment, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MetaListProps extends Omit<ComponentProps<"div">, "children"> {
  /** 한 줄로 늘어놓을 항목. 사이에 점이 자동으로 들어간다 (예: 날짜 · 시간 · 장소) */
  items: ReactNode[];
}

function MetaList({ className, items, ...props }: MetaListProps) {
  return (
    <div
      className={cn("flex items-center gap-1 text-body3-15 text-fg-alternative", className)}
      {...props}
    >
      {Children.toArray(items).map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: 메타 항목은 순서가 고정된 정적 목록
        <Fragment key={index}>
          {index > 0 && (
            <span
              aria-hidden
              className="size-0.5 shrink-0 rounded-full bg-fg-alternative"
            />
          )}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </div>
  );
}

export type { MetaListProps };
export { MetaList };
