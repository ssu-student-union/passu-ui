import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/atoms/divider";
import { InfoCard } from "@/components/molecules/info-card";
import { StatusMessage } from "@/components/molecules/status-message";
import { SummaryItem } from "@/components/molecules/summary-item";
import { VerificationItem } from "@/components/molecules/verification-item";

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

/** 참여 조건 확인 화면 */
export const WithVerification: Story = {
  args: {
    status: "loading",
    title: "참여 조건을 확인하고 있어요",
    description: undefined,
    children: (
      <InfoCard
        size="sm"
        className="w-[310px]"
      >
        <VerificationItem
          label="소속 · 학적"
          status="complete"
        />
        <Divider size="sm" />
        <VerificationItem
          label="학생회비 납부"
          status="checking"
        />
      </InfoCard>
    ),
  },
};

export const WithSummary: Story = {
  args: {
    status: "success",
    title: "인증이 완료되었어요",
    description: undefined,
    children: (
      <InfoCard>
        <SummaryItem
          label="이름"
          value="정지원"
        />
        <SummaryItem
          label="학번"
          value="20261729"
        />
        <SummaryItem
          label="학과"
          value="AI소프트웨어학부"
        />
        <Divider size="sm" />
        <SummaryItem
          label="상품"
          value="햄치즈 토스트 + 콜라"
        />
        <SummaryItem
          label="수량"
          value={1}
        />
      </InfoCard>
    ),
  },
};
