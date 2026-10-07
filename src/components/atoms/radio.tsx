import type { ReactNode } from "react";
import { SelectionControl, type SelectionControlProps } from "./selection-control";

interface RadioProps extends Omit<SelectionControlProps, "type" | "boxClassName" | "indicator"> {
  label?: ReactNode;
}

function Radio(props: RadioProps) {
  return (
    <SelectionControl
      type="radio"
      boxClassName="rounded-full"
      indicator={<span className="size-2 rounded-full bg-fg-inverse-default" />}
      {...props}
    />
  );
}

export type { RadioProps };
export { Radio };
