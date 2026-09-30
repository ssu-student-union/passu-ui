import type { ComponentProps, ReactNode } from "react";
import { Spinner } from "@/components/atoms/spinner";
import { StatusIcon, type StatusIconProps } from "@/components/atoms/status-icon";
import { cn } from "@/utils/cn";

interface StatusMessageProps extends Omit<ComponentProps<"div">, "title"> {
  status: NonNullable<StatusIconProps["status"]> | "loading";
  title: ReactNode;
  description?: ReactNode;
  /** 메시지 아래에 놓이는 내용 */
  children?: ReactNode;
}

function StatusMessage({
  className,
  status,
  title,
  description,
  children,
  ...props
}: StatusMessageProps) {
  return (
    <div
      className={cn("flex w-full flex-col items-center gap-10", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          {status === "loading" ? <Spinner /> : <StatusIcon status={status} />}
          <h2 className="text-fg-default text-title2-24">{title}</h2>
        </div>
        {description && <p className="text-body3-15 text-fg-alternative">{description}</p>}
      </div>
      {children}
    </div>
  );
}

export type { StatusMessageProps };
export { StatusMessage };
