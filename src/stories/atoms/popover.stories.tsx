import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/atoms/button";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";

const meta = {
  title: "Atoms/Popover",
  component: PopoverContent,
  parameters: {
    docs: {
      description: {
        component: [
          "DatePicker·TimePicker·Dropdown을 띄우는 팝오버 패널이에요.",
          "",
          "바깥을 누르거나 Esc를 누르면 닫혀요. 트리거는 `PopoverTrigger asChild`로 아무 요소나 감쌀 수 있어요.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    side: { control: "inline-radio", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  render: args => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="md"
          variant="line"
        >
          열기
        </Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <p className="text-body1-16">팝오버 제목</p>
        <p className="text-body5-14 text-fg-alternative">팝오버 내용이에요.</p>
        <PopoverClose asChild>
          <Button
            size="md"
            theme="brand"
            layout="fill"
          >
            닫기
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
} satisfies Meta<typeof PopoverContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
