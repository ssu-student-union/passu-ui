import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/atoms/divider";
import { InfoCard } from "@/components/molecules/info-card";
import { SummaryItem } from "@/components/molecules/summary-item";
import { VerificationItem } from "@/components/molecules/verification-item";

const meta = {
  title: "Molecules/InfoCard",
  component: InfoCard,
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 참여 조건 확인 */
export const Verification: Story = {
  args: {
    size: "sm",
    className: "w-[310px]",
    children: (
      <>
        <VerificationItem
          label="소속 · 학적"
          status="complete"
        />
        <Divider size="sm" />
        <VerificationItem
          label="학생회비 납부"
          status="checking"
        />
      </>
    ),
  },
};

/** 행사 요약 */
export const Summary: Story = {
  args: {
    size: "md",
    className: "w-[353px]",
    children: (
      <>
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
      </>
    ),
  },
};
