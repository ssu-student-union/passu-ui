import { useCallback, useState } from "react";

interface UseControllableStateOptions<T> {
  /** 넘기면 controlled. 값이 없음을 나타내려면 undefined가 아닌 null을 쓴다 */
  prop: T | undefined;
  defaultProp: T;
  onChange?: (value: T) => void;
}

function useControllableState<T>({ prop, defaultProp, onChange }: UseControllableStateOptions<T>) {
  const [uncontrolled, setUncontrolled] = useState(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolled;

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  return [value, setValue] as const;
}

export { useControllableState };
