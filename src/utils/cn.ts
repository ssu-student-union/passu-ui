import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * theme.css의 커스텀 글자 크기(--text-*). tailwind-merge가 이 이름을 모르면
 * `text-body1-16`을 글자색으로 보고 `text-fg-default` 같은 색 클래스와 충돌한다며 지운다.
 */
const FONT_SIZES = [
  "display1-36",
  "display2-32",
  "title1-28",
  "title2-24",
  "title3-20",
  "title4-20",
  "body1-16",
  "body2-16",
  "body3-15",
  "body4-14",
  "body5-14",
  "caption1-12",
  "caption2-12",
];

/** theme.css의 `--background-image-pressed`(bg-pressed)는 배경 이미지로 취급해 `bg-none`과 충돌시킨다 */
const twMergeConfig = {
  extend: {
    theme: { text: FONT_SIZES },
    classGroups: { "bg-image": ["bg-pressed"] },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn, twMergeConfig };
