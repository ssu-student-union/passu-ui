import type { ComponentProps } from "react";
import LogoImage from "@/assets/passu-logo.svg?react";
import { cn } from "@/utils/cn";

interface LogoProps extends ComponentProps<"svg"> {}

/** PASSU v3 로고. 가로세로 비율(140:48)은 고정이고 크기는 `className`의 너비로 정한다. */
function Logo({ className, ...props }: LogoProps) {
  return (
    <LogoImage
      role="img"
      aria-label="PASSU"
      className={cn("h-auto w-[8.75rem]", className)}
      {...props}
    />
  );
}

export type { LogoProps };
export { Logo };
