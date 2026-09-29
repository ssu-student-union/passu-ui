import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface SummaryItemProps extends ComponentProps<"div"> {
  label: ReactNode;
  value: ReactNode;
}

export function SummaryItem({ className, label, value, ...props }: SummaryItemProps) {
  return (
    <div
      className={cn("flex w-full items-center justify-between gap-4", className)}
      {...props}
    >
      <span className="shrink-0 whitespace-nowrap text-body4-14 text-fg-assistive">{label}</span>
      <span className="min-w-0 break-keep text-right text-body3-15 text-fg-default">{value}</span>
    </div>
  );
}
