import type { ComponentProps, ReactNode } from "react";
import { Spinner } from "@/components/atoms/spinner";
import { StatusIcon, type StatusIconProps } from "@/components/atoms/status-icon";
import { cn } from "@/utils/cn";

export interface StatusMessageProps extends Omit<ComponentProps<"div">, "title"> {
  status: NonNullable<StatusIconProps["status"]> | "loading";
  title: ReactNode;
  description?: ReactNode;
}

export function StatusMessage({
  className,
  status,
  title,
  description,
  ...props
}: StatusMessageProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-6 text-center", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        {status === "loading" ? <Spinner /> : <StatusIcon status={status} />}
        <h2 className="text-fg-default text-title2-24">{title}</h2>
      </div>
      {description && <p className="text-body3-15 text-fg-alternative">{description}</p>}
    </div>
  );
}
