import type { ComponentProps, ReactNode } from "react";
import PlaceholderIcon from "@/assets/icons/placeholder.svg?react";
import { cn } from "@/utils/cn";

const sizeClassName = {
  xs: "size-4",
  sm: "size-5",
  md: "size-6",
  lg: "size-8",
  xl: "size-10",
} as const;

interface IconProps extends ComponentProps<"span"> {
  size?: keyof typeof sizeClassName;
  children?: ReactNode;
}

function Icon({ className, size = "md", children, ...props }: IconProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizeClassName[size],
        className,
      )}
      {...props}
    >
      {children ?? <PlaceholderIcon className="size-full text-fg-default" />}
    </span>
  );
}

export type { IconProps };
export { Icon };
