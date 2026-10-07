import type { ReactNode } from "react";
import CheckSmallIcon from "@/assets/icons/check-small.svg?react";
import { SelectionControl, type SelectionControlProps } from "./selection-control";

interface CheckboxProps extends Omit<SelectionControlProps, "type" | "boxClassName" | "indicator"> {
  /** 체크박스 오른쪽 라벨. 라벨을 누르면 체크박스도 토글된다. */
  label?: ReactNode;
}

function Checkbox(props: CheckboxProps) {
  return (
    <SelectionControl
      type="checkbox"
      boxClassName="rounded-4"
      indicator={<CheckSmallIcon className="size-4 text-fg-inverse-default" />}
      {...props}
    />
  );
}

export type { CheckboxProps };
export { Checkbox };
