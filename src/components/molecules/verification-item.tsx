import type { ComponentProps, ReactNode } from "react";
import { CheckIndicator } from "@/components/atoms/check-indicator";
import { cn } from "@/utils/cn";

export interface VerificationItemProps extends ComponentProps<"div"> {
  label: ReactNode;
  status: "pending" | "checking" | "complete";
  pendingText?: ReactNode;
  checkingText?: ReactNode;
}

export function VerificationItem({
  className,
  label,
  status,
  pendingText = "확인 대기",
  checkingText = "확인 중...",
  ...props
}: VerificationItemProps) {
  return (
    <div
      className={cn("flex h-6 w-full items-center justify-between px-1 text-body3-15", className)}
      {...props}
    >
      <span className="whitespace-nowrap text-fg-default">{label}</span>
      {status === "pending" && (
        <span className="whitespace-nowrap text-fg-disabled">{pendingText}</span>
      )}
      {status === "checking" && (
        <span className="whitespace-nowrap text-fg-brand-default">{checkingText}</span>
      )}
      {status === "complete" && <CheckIndicator checked />}
    </div>
  );
}
