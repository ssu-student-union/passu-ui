import CheckIcon from "@/assets/icons/check.svg?react";
import PlaceholderIcon from "@/assets/icons/placeholder.svg?react";
import type { IconComponent } from "@/utils/icon";

const icons: Record<string, IconComponent | undefined> = {
  None: undefined,
  Placeholder: PlaceholderIcon,
  Check: CheckIcon,
};

/** IconComponent 타입 슬롯을 Controls 패널에서 선택할 수 있게 하는 argType */
export const iconArgType = {
  options: Object.keys(icons),
  mapping: icons,
  control: { type: "select" },
} as const;
