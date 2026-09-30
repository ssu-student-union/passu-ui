import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Icon } from "@/components/atoms/icon";
import { TopBar } from "@/components/atoms/top-bar";

const meta = {
  title: "Atoms/TopBar",
  component: TopBar,
  args: { title: "Title", onBack: fn() },
  decorators: [
    Story => (
      <div className="w-[390px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithRightSlot: Story = {
  args: { rightSlot: <Icon /> },
};

export const BackOnly: Story = {
  args: { title: undefined },
};
