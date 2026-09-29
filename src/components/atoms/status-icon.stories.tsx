import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusIcon } from "./status-icon";

const meta = {
  title: "Atoms/StatusIcon",
  component: StatusIcon,
  argTypes: {
    status: { control: "inline-radio", options: ["info", "success", "danger"] },
  },
} satisfies Meta<typeof StatusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { status: "info" } };

export const Success: Story = { args: { status: "success" } };

export const Danger: Story = { args: { status: "danger" } };
