import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface HeaderProps extends Omit<ComponentProps<"div">, "title"> {
  title: ReactNode;
  description?: ReactNode;
}

export function Header({ className, title, description, ...props }: HeaderProps) {
  return (
    <div
      className={cn("flex w-full flex-col items-start gap-2", className)}
      {...props}
    >
      <div className="w-full text-fg-default text-title2-24">{title}</div>
      {description && <div className="w-full text-body5-14 text-fg-alternative">{description}</div>}
    </div>
  );
}
