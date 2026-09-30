import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusMessage } from "@/components/molecules/status-message";

const meta = {
  title: "Molecules/StatusMessage",
  component: StatusMessage,
  args: {
    status: "info",
    title: "오늘 행사가 마감되었어요",
    description: "운영 시간이 지나 상품 수령이 종료되었어요.",
  },
  decorators: [
    Story => (
      <div className="w-[353px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: { control: "inline-radio", options: ["info", "success", "danger", "loading"] },
  },
} satisfies Meta<typeof StatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Success: Story = {
  args: { status: "success", title: "인증이 완료되었어요", description: undefined },
};

export const Danger: Story = {
  args: { status: "danger", title: "인증에 실패했어요", description: "다시 시도해 주세요." },
};

export const Loading: Story = {
  args: { status: "loading", title: "확인 중이에요", description: undefined },
};
