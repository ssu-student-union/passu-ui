import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { PaginationItem } from "@/components/atoms/pagination-item";

const meta = {
  title: "Atoms/PaginationItem",
  component: PaginationItem,
  parameters: {
    docs: {
      description: {
        component: [
          "Page Number Group / Stepper를 조립할 때 쓰는 페이지 번호예요. 단독으로 쓰지 않아요.",
          "",
          "Selected: Fill `fill/brand-subtle`, Text `fg/brand-default`",
        ].join("\n"),
      },
    },
  },
  args: { children: "1", onClick: fn() },
  argTypes: {
    selected: { control: "boolean" },
  },
} satisfies Meta<typeof PaginationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Group: Story = {
  render: args => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(page => (
        <PaginationItem
          key={page}
          {...args}
          selected={page === 1}
        >
          {page}
        </PaginationItem>
      ))}
    </div>
  ),
};
