import {
  type ComponentProps,
  createContext,
  type KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { VariantProps } from "tailwind-variants";
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import { cn } from "@/utils/cn";
import {
  addDays,
  addMonths,
  getDaysInMonth,
  getWeekdayIndex,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
} from "@/utils/date";
import { tv } from "@/utils/tv";
import { useControllableState } from "@/utils/use-controllable-state";

const WEEKDAYS = ["월", "화", "수", "목", "금", "토", "일"];

const COLUMNS_CLASS_NAME = "grid-cols-[repeat(7,minmax(2.5rem,1fr))]";

const navButtonClassName =
  "flex shrink-0 items-center justify-center rounded-full p-1 text-fg-default hover:bg-fill-neutral-subtle-hovered active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))] disabled:pointer-events-none disabled:text-fg-disabled";

const calendarCellVariants = tv({
  base: "flex h-[2.25rem] min-w-10 items-center justify-center rounded-4 bg-bg-canvas text-caption2-12",
  variants: {
    weekend: {
      true: "text-fg-alternative",
      false: "text-fg-default",
    },
    selected: {
      true: "bg-fill-brand-subtle text-fg-brand-default",
      false:
        "hover:bg-fill-neutral-subtle-hovered active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))] disabled:pointer-events-none disabled:text-fg-disabled",
    },
  },
  defaultVariants: {
    weekend: false,
    selected: false,
  },
});

/** 날짜 한 칸 단위, Calendar 안에서만 씁니다 */
interface CalendarCellProps
  extends ComponentProps<"button">,
    VariantProps<typeof calendarCellVariants> {
  /** 이번 달이 아닌 칸 */
  empty?: boolean;
}

function CalendarCell({
  className,
  weekend,
  selected,
  empty,
  children,
  ...props
}: CalendarCellProps) {
  if (empty) {
    return (
      <div
        aria-hidden
        className={cn("h-[2.25rem] min-w-10", className)}
      />
    );
  }

  return (
    <button
      type="button"
      aria-pressed={selected ?? false}
      className={cn(calendarCellVariants({ weekend, selected }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface CalendarContextValue {
  /** 보고 있는 달의 1일 */
  month: Date;
  value: Date | null;
  minDate?: Date;
  maxDate?: Date;
  setMonth: (month: Date) => void;
  select: (date: Date) => void;
  isDisabled: (date: Date) => boolean;
}

const CalendarContext = createContext<CalendarContextValue | null>(null);

function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("CalendarHeader·CalendarGrid는 Calendar 안에서만 사용할 수 있어요.");
  }
  return context;
}

interface CalendarProps extends Omit<ComponentProps<"div">, "defaultValue" | "onChange"> {
  value?: Date | null;
  defaultValue?: Date | null;
  onValueChange?: (value: Date) => void;
  /** 보고 있는 달 */
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

/**
 * 월간 달력. 상태(보고 있는 달, 선택한 날짜)만 들고 있고 모양은 자식으로 조립한다.
 *
 * ```tsx
 * <Calendar value={date} onValueChange={setDate}>
 *   <CalendarHeader />
 *   <CalendarGrid />
 * </Calendar>
 * ```
 */
function Calendar({
  className,
  value: valueProp,
  defaultValue = null,
  onValueChange,
  month: monthProp,
  defaultMonth,
  onMonthChange,
  minDate,
  maxDate,
  ...props
}: CalendarProps) {
  const [value, setValue] = useControllableState<Date | null>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: next => next && onValueChange?.(next),
  });
  const [month, setMonth] = useControllableState<Date>({
    prop: monthProp && startOfMonth(monthProp),
    defaultProp: startOfMonth(defaultMonth ?? valueProp ?? defaultValue ?? new Date()),
    onChange: onMonthChange,
  });

  const min = minDate && startOfDay(minDate);
  const max = maxDate && startOfDay(maxDate);

  const context: CalendarContextValue = {
    month,
    value,
    minDate: min,
    maxDate: max,
    setMonth: next => setMonth(startOfMonth(next)),
    select: setValue,
    isDisabled: date => (!!min && date < min) || (!!max && date > max),
  };

  return (
    <CalendarContext.Provider value={context}>
      <div
        className={cn("flex flex-col gap-3", className)}
        {...props}
      />
    </CalendarContext.Provider>
  );
}

/** 이전·다음 달 이동 버튼과 "YYYY년 M월" 제목 */
function CalendarHeader({ className, ...props }: ComponentProps<"div">) {
  const { month, minDate, maxDate, setMonth } = useCalendarContext();

  const canGoPrevious = !minDate || startOfMonth(minDate) < month;
  const canGoNext = !maxDate || startOfMonth(maxDate) > month;

  return (
    <div
      className={cn("flex items-center justify-center gap-3 py-1", className)}
      {...props}
    >
      <button
        type="button"
        aria-label="이전 달"
        disabled={!canGoPrevious}
        onClick={() => setMonth(addMonths(month, -1))}
        className={navButtonClassName}
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <p
        aria-live="polite"
        className="whitespace-nowrap text-body1-16"
      >
        {month.getFullYear()}년 {month.getMonth() + 1}월
      </p>
      <button
        type="button"
        aria-label="다음 달"
        disabled={!canGoNext}
        onClick={() => setMonth(addMonths(month, 1))}
        className={navButtonClassName}
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
}

const ARROW_KEY_STEPS: Record<string, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -7,
  ArrowDown: 7,
};

/**
 * 요일 행과 날짜 칸. 월요일부터 시작하고 이번 달이 아닌 칸은 비워 둔다.
 * 방향키·Home·End·PageUp·PageDown으로 날짜를 옮길 수 있다 (tab 정지점은 한 칸).
 */
function CalendarGrid({ className, ...props }: ComponentProps<"div">) {
  const { month, value, setMonth, select, isDisabled } = useCalendarContext();
  const gridRef = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<Date | null>(null);
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const days = Array.from({ length: getDaysInMonth(month) }, (_, index) => index + 1);
  const blanks = Array.from({ length: getWeekdayIndex(month) }, (_, index) => `blank-${index}`);

  // 한 달 안에서 tab으로 들어올 칸: 마지막으로 포커스한 날 > 선택한 날 > 오늘 > 고를 수 있는 첫 날
  const tabStopDay = (() => {
    const candidates = [activeDate, value, new Date()];
    for (const candidate of candidates) {
      if (candidate && isSameMonth(candidate, month) && !isDisabled(candidate)) {
        return candidate.getDate();
      }
    }
    return days.find(day => !isDisabled(new Date(year, monthIndex, day))) ?? null;
  })();

  // 다른 달로 넘어간 뒤 새 달이 그려지면 옮기려던 날짜에 포커스를 준다
  useEffect(() => {
    const target = pendingFocus.current;
    pendingFocus.current = null;
    if (target && isSameMonth(target, month)) {
      gridRef.current?.querySelector<HTMLElement>(`[data-day="${target.getDate()}"]`)?.focus();
    }
  }, [month]);

  function moveFocus(next: Date) {
    setActiveDate(next);
    if (isSameMonth(next, month)) {
      gridRef.current?.querySelector<HTMLElement>(`[data-day="${next.getDate()}"]`)?.focus();
      return;
    }
    pendingFocus.current = next;
    setMonth(next);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const cell = (event.target as HTMLElement).closest<HTMLElement>("[data-day]");
    if (!cell) return;

    const current = new Date(year, monthIndex, Number(cell.dataset.day));
    const weekdayIndex = getWeekdayIndex(current);
    const step = ARROW_KEY_STEPS[event.key];
    let next: Date | null = null;

    if (step !== undefined) next = addDays(current, step);
    else if (event.key === "Home") next = addDays(current, -weekdayIndex);
    else if (event.key === "End") next = addDays(current, 6 - weekdayIndex);
    else if (event.key === "PageUp") next = addMonths(current, -1);
    else if (event.key === "PageDown") next = addMonths(current, 1);

    if (!next) return;
    event.preventDefault();
    if (!isDisabled(next)) moveFocus(next);
  }

  return (
    <div
      className={cn("flex flex-col", className)}
      {...props}
    >
      <div
        aria-hidden
        className={cn("grid gap-x-1", COLUMNS_CLASS_NAME)}
      >
        {WEEKDAYS.map((label, index) => (
          <div
            key={label}
            className={cn(
              "flex h-6 items-start justify-center py-1 text-caption1-12",
              index >= 5 ? "text-fg-alternative" : "text-fg-default",
            )}
          >
            {label}
          </div>
        ))}
      </div>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: 방향키 이동을 칸들에서 올라오는 keydown으로 처리한다 */}
      <div
        ref={gridRef}
        onKeyDown={handleKeyDown}
        className={cn("grid gap-1", COLUMNS_CLASS_NAME)}
      >
        {blanks.map(key => (
          <CalendarCell
            key={key}
            empty
          />
        ))}
        {days.map(day => {
          const date = new Date(year, monthIndex, day);
          const weekday = date.getDay();

          return (
            <CalendarCell
              key={day}
              data-day={day}
              aria-label={`${year}년 ${monthIndex + 1}월 ${day}일`}
              weekend={weekday === 0 || weekday === 6}
              selected={!!value && isSameDay(value, date)}
              disabled={isDisabled(date)}
              tabIndex={day === tabStopDay ? 0 : -1}
              onClick={() => select(date)}
              onFocus={() => setActiveDate(date)}
            >
              {day}
            </CalendarCell>
          );
        })}
      </div>
    </div>
  );
}

export type { CalendarProps };
export { Calendar, CalendarGrid, CalendarHeader };
