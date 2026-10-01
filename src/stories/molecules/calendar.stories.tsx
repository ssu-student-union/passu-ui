import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/components/atoms/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";
import { Calendar, CalendarGrid, CalendarHeader } from "@/components/molecules/calendar";

const meta = {
  title: "Molecules/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: [
          "월간 달력이에요. `Calendar`가 상태(보고 있는 달, 선택한 날짜)를 들고, `CalendarHeader`와 `CalendarGrid`를 자식으로 조립해요.",
          "",
          "- 월요일부터 시작하고, 이번 달이 아닌 칸은 비워 둬요.",
          "- 방향키로 날짜를, `Home`/`End`로 주의 처음/끝을, `PageUp`/`PageDown`으로 달을 옮겨요.",
          "- `value`·`month`를 넘기면 controlled, 넘기지 않으면 `defaultValue`·`defaultMonth`로 시작하는 uncontrolled예요.",
        ].join("\n"),
      },
    },
  },
  args: { defaultMonth: new Date(2026, 9, 1), defaultValue: new Date(2026, 9, 13) },
  render: args => (
    <Calendar {...args}>
      <CalendarHeader />
      <CalendarGrid />
    </Calendar>
  ),
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** `minDate`·`maxDate` 밖의 날짜는 고를 수 없고, 범위를 벗어나는 달로는 이동할 수 없어요. */
export const MinMax: Story = {
  args: {
    defaultValue: null,
    minDate: new Date(2026, 9, 8),
    maxDate: new Date(2026, 10, 20),
  },
};

function formatDate(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function ControlledExample() {
  const [value, setValue] = useState<Date | null>(null);
  const [month, setMonth] = useState(new Date(2026, 9, 1));

  return (
    <div className="flex flex-col items-start gap-4">
      <Calendar
        value={value}
        onValueChange={setValue}
        month={month}
        onMonthChange={setMonth}
      >
        <CalendarHeader />
        <CalendarGrid />
      </Calendar>
      <p className="text-body5-14 text-fg-alternative">
        선택: {value ? formatDate(value) : "없음"}
      </p>
      <Button
        size="sm"
        variant="line"
        onClick={() => setMonth(new Date())}
      >
        오늘 달로
      </Button>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

function InPopoverExample() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Date | null>(null);
  const [confirmed, setConfirmed] = useState<Date | null>(null);

  return (
    <Popover
      open={open}
      onOpenChange={next => {
        setOpen(next);
        if (next) setDraft(confirmed);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          size="md"
          variant="line"
        >
          {confirmed ? formatDate(confirmed) : "날짜 선택"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          value={draft}
          onValueChange={setDraft}
          defaultMonth={confirmed ?? new Date()}
        >
          <CalendarHeader className="self-center" />
          <CalendarGrid />
        </Calendar>
        <Button
          size="md"
          theme="brand"
          layout="fill"
          disabled={!draft}
          onClick={() => {
            setConfirmed(draft);
            setOpen(false);
          }}
        >
          {draft ? `${formatDate(draft)} 선택` : "날짜를 선택해 주세요"}
        </Button>
      </PopoverContent>
    </Popover>
  );
}

/** 팝오버 안에서 확인 버튼과 조립한 예시예요. 확인하지 않고 닫으면 고른 날짜를 버려요. */
export const InPopover: Story = {
  render: () => <InPopoverExample />,
};
