import { Children, type ComponentProps, Fragment, type ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const headerVariants = tv({
  base: "flex w-full items-center gap-3 px-0.5",
  variants: {
    variant: {
      event: "border-border-default border-b bg-bg-canvas py-5",
      page: "border-border-default border-b bg-bg-canvas py-5",
      subtitle: "",
    },
  },
  defaultVariants: {
    variant: "subtitle",
  },
});

const titleVariants = tv({
  variants: {
    variant: {
      event: "text-display2-32",
      page: "text-display1-36",
      subtitle: "text-title2-24",
    },
  },
});

interface HeaderProps
  extends Omit<ComponentProps<"div">, "title">,
    VariantProps<typeof headerVariants> {
  title: ReactNode;
  description?: ReactNode;
  /** 제목 아래 메타 줄 앞에 놓이는 뱃지 (예: `<Badge size="lg" theme="brand">`) */
  badge?: ReactNode;
  /** 제목 아래 메타 줄. 항목 사이에 점이 자동으로 들어간다. */
  meta?: ReactNode[];
  /** 오른쪽 끝 액션 (예: `<Button size="md" layout="group">`) */
  action?: ReactNode;
}

function Header({
  className,
  variant = "subtitle",
  title,
  description,
  badge,
  meta,
  action,
  ...props
}: HeaderProps) {
  const hasMeta = badge || (meta && meta.length > 0);

  return (
    <div
      className={cn(headerVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start",
          variant === "subtitle" ? "gap-1" : "gap-2",
        )}
      >
        <div className={cn("w-full text-fg-default", titleVariants({ variant }))}>{title}</div>
        {description && (
          <div className="w-full text-body2-16 text-fg-alternative">{description}</div>
        )}
        {hasMeta && (
          <div className="flex w-full items-center gap-2">
            {badge}
            {meta && meta.length > 0 && (
              <div className="flex items-center gap-1 text-body3-15 text-fg-alternative">
                {Children.toArray(meta).map((item, index) => (
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
            )}
          </div>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export type { HeaderProps };
export { Header };
