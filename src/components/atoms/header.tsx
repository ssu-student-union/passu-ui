import { Children, type ComponentProps, Fragment, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface HeaderProps extends Omit<ComponentProps<"div">, "title"> {
  title: ReactNode;
  description?: ReactNode;
  /** 오른쪽 끝 액션 (예: `<Button size="md" layout="group">`) */
  action?: ReactNode;
}

interface HeaderLayoutProps extends HeaderProps {
  /** 제목·설명·children을 쌓는 세로 영역 */
  stackClassName: string;
  titleClassName: string;
}

/** 왼쪽 제목 영역 + 오른쪽 액션 배치. PageHeader·SectionHeader가 함께 쓴다 */
function HeaderLayout({
  className,
  stackClassName,
  titleClassName,
  title,
  description,
  action,
  children,
  ...props
}: HeaderLayoutProps) {
  return (
    <div
      className={cn("flex w-full items-center gap-3 px-0.5", className)}
      {...props}
    >
      <div className={cn("flex min-w-0 flex-1 flex-col items-start", stackClassName)}>
        <div className={cn("w-full text-fg-default", titleClassName)}>{title}</div>
        {description && (
          <div className="w-full text-body2-16 text-fg-alternative">{description}</div>
        )}
        {children}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

type PageHeaderProps = HeaderProps;

/**
 * 페이지 맨 위 제목 영역. 아래쪽 구분선이 있다.
 * 제목 아래에 더 넣을 내용(뱃지, `PageHeaderMeta` 등)은 `children`으로 넘긴다.
 */
function PageHeader({ className, ...props }: PageHeaderProps) {
  return (
    <HeaderLayout
      className={cn("border-border-default border-b bg-bg-canvas py-5", className)}
      stackClassName="gap-2"
      titleClassName="text-display1-36"
      {...props}
    />
  );
}

interface PageHeaderMetaProps extends Omit<ComponentProps<"div">, "children"> {
  /** 한 줄로 늘어놓을 항목. 사이에 점이 자동으로 들어간다 (예: 날짜 · 시간 · 장소) */
  items: ReactNode[];
}

/** PageHeader 제목 아래 메타 줄. `PageHeader`의 `children`으로 넘긴다 */
function PageHeaderMeta({ className, items, ...props }: PageHeaderMetaProps) {
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

type SectionHeaderProps = HeaderProps;

/** 페이지 안 섹션의 소제목. 구분선이 없다 */
function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <HeaderLayout
      className={className}
      stackClassName="gap-1"
      titleClassName="text-title2-24"
      {...props}
    />
  );
}

export type { PageHeaderMetaProps, PageHeaderProps, SectionHeaderProps };
export { PageHeader, PageHeaderMeta, SectionHeader };
