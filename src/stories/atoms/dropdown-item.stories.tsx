import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DropdownItem } from "@/components/atoms/dropdown-item";

const meta = {
  title: "Atoms/DropdownItem",
  component: DropdownItem,
  parameters: {
    docs: {
      description: {
        component: "Select Menu / Dropdown List를 조립할 때 쓰는 항목이에요. 단독으로 쓰지 않아요.",
      },
    },
  },
  args: { children: "레이블", onClick: fn() },
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const List: Story = {
  render: args => (
    <div
      role="listbox"
      className="flex w-[6.25rem] flex-col"
    >
      {["레이블", "레이블", "레이블"].map((label, index) => (
        <DropdownItem
          // biome-ignore lint/suspicious/noArrayIndexKey: 고정된 예시 목록
          key={index}
          {...args}
        >
          {label}
        </DropdownItem>
      ))}
    </div>
  ),
};
