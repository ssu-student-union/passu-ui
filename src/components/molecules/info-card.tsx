import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";

export const infoCardVariants = tv({
  base: "flex w-full flex-col rounded-12 border border-border-alternative bg-bg-surface",
  variants: {
    size: {
      sm: "gap-3 p-3",
      md: "gap-4 px-4 py-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InfoCardProps
  extends ComponentProps<"div">,
    VariantProps<typeof infoCardVariants> {}

/** VerificationItem, SummaryItem 등을 담는 카드. 구분선은 `<Divider size="sm" />`로 직접 넣는다. */
export function InfoCard({ className, size, ...props }: InfoCardProps) {
  return (
    <div
      className={cn(infoCardVariants({ size }), className)}
      {...props}
    />
  );
}
