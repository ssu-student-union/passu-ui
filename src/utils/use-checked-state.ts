import { type RefObject, useEffect, useState } from "react";

interface UseCheckedStateOptions {
  checked?: boolean;
  defaultChecked?: boolean;
}

/**
 * input의 checked 값을 렌더링에 쓰기 위해 state로 추적한다.
 * 같은 그룹의 다른 라디오가 선택되면 이 input은 change 이벤트를 받지 못하므로
 * uncontrolled일 때는 문서 단위 change 이벤트로 동기화한다.
 */
function useCheckedState(
  inputRef: RefObject<HTMLInputElement | null>,
  { checked, defaultChecked = false }: UseCheckedStateOptions,
) {
  const isControlled = checked !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);

  useEffect(() => {
    const doc = inputRef.current?.ownerDocument;
    if (isControlled || !doc) return;
    const sync = () => setUncontrolled(inputRef.current?.checked ?? false);
    sync();
    doc.addEventListener("change", sync, true);
    return () => doc.removeEventListener("change", sync, true);
  }, [isControlled, inputRef]);

  return isControlled ? checked : uncontrolled;
}

export { useCheckedState };
