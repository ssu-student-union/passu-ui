import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckIndicator } from "./check-indicator";

const meta = {
  title: "Atoms/CheckIndicator",
  component: CheckIndicator,
  args: { checked: false },
} satisfies Meta<typeof CheckIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: { checked: true },
};
