import { type ComponentProps, type CSSProperties, useState } from "react";
import { cn } from "@/utils/cn";

const DOTS = [
  { cx: 31, cy: 7, r: 1 },
  { cx: 35.572, cy: 12.414, r: 2 },
  { cx: 37, cy: 21.638, r: 3 },
  { cx: 32.638, cy: 31, r: 4 },
  { cx: 22, cy: 36, r: 4 },
  { cx: 9.482, cy: 31, r: 5 },
  { cx: 5, cy: 17, r: 5 },
  { cx: 16, cy: 6, r: 6 },
] as const;

const DOT_STAGGER_MS = 60;
// 머리가 꼬리 끝을 따라잡지 않도록 꼬리부터 출발시키고, 겹치지 않는 최대 간격으로 설정
const ORBIT_STAGGER_MS = 24;

interface SpinnerProps extends ComponentProps<"span"> {
  /** false가 되면 점이 순서대로 사라진 뒤 언마운트된다. */
  loading?: boolean;
  onExited?: () => void;
  label?: string;
}

function Spinner({
  className,
  loading = true,
  onExited,
  label = "로딩 중",
  ...props
}: SpinnerProps) {
  const [visible, setVisible] = useState(loading);

  if (loading && !visible) {
    setVisible(true);
  }

  if (!visible) {
    return null;
  }

  return (
    <span
      role="status"
      aria-label={label}
      aria-busy={loading}
      className={cn("inline-flex size-10 shrink-0 text-fg-brand-default", className)}
      {...props}
    >
      <svg
        viewBox="0 0 40 40"
        fill="currentColor"
        className="size-full"
        aria-hidden
      >
        {DOTS.map((dot, index) => (
          // 점마다 가속-감속하며 중심을 공전하고, 꼬리부터 출발해 머리 쪽으로 모였다가 다시 펼쳐진다
          <g
            key={`${dot.cx}-${dot.cy}`}
            className="origin-center animate-spinner-orbit [animation-delay:var(--orbit-delay)] [transform-box:view-box] motion-reduce:animate-none"
            style={{ "--orbit-delay": `${index * ORBIT_STAGGER_MS}ms` } as CSSProperties}
          >
            <g className="origin-center animate-spinner-squash [animation-delay:var(--orbit-delay)] [transform-box:fill-box] motion-reduce:animate-none">
              <circle
                {...dot}
                className={cn(
                  "origin-center [animation-delay:var(--dot-delay)] [transform-box:fill-box]",
                  // 모션 최소화 환경에서도 animationend가 발생하도록 재생 시간만 줄인다
                  "motion-reduce:[animation-delay:0ms] motion-reduce:[animation-duration:1ms]",
                  loading ? "animate-spinner-dot-in" : "animate-spinner-dot-out",
                )}
                style={{ "--dot-delay": `${index * DOT_STAGGER_MS}ms` } as CSSProperties}
                onAnimationEnd={
                  index === DOTS.length - 1
                    ? event => {
                        if (!loading && event.animationName === "spinner-dot-out") {
                          setVisible(false);
                          onExited?.();
                        }
                      }
                    : undefined
                }
              />
            </g>
          </g>
        ))}
      </svg>
    </span>
  );
}

export type { SpinnerProps };
export { Spinner };
