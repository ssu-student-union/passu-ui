import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerificationItem } from "@/components/molecules/verification-item";

const meta = {
  title: "Molecules/VerificationItem",
  component: VerificationItem,
  args: { label: "학생 인증", status: "pending" },
  argTypes: {
    status: { control: "inline-radio", options: ["pending", "checking", "complete"] },
  },
  decorators: [
    Story => (
      <div className="w-[353px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VerificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = {};

export const Checking: Story = { args: { status: "checking" } };

export const Complete: Story = { args: { status: "complete" } };
