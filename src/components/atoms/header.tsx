import type { ComponentProps, ReactNode } from "react";
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
 * 제목 아래에 더 넣을 내용(뱃지, `MetaList` 등)은 `children`으로 넘긴다.
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

export type { PageHeaderProps, SectionHeaderProps };
export { PageHeader, SectionHeader };
