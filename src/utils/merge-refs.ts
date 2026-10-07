import type { Ref } from "react";

/** 여러 ref를 하나의 callback ref로 합친다 */
function mergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }
  };
}

export { mergeRefs };
