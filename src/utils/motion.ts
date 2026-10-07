/** 컴포넌트 전반에서 쓰는 motion spring 프리셋 */
const springs = {
  /** 체크 표시처럼 나타나고 사라지는 요소 */
  pop: { type: "spring", stiffness: 500, damping: 25 },
  /** 버튼처럼 눌리는 요소 */
  press: { type: "spring", stiffness: 600, damping: 30 },
} as const;

/** hover·checked 등 색이 바뀌는 CSS 전환 */
const colorTransition = "transition-colors duration-150 ease-out";

export { colorTransition, springs };
