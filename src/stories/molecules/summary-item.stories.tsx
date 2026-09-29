import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/atoms/divider";
import { InfoCard } from "@/components/molecules/info-card";
import { SummaryItem } from "@/components/molecules/summary-item";

const meta = {
  title: "Molecules/SummaryItem",
  component: SummaryItem,
  args: { label: "이름", value: "정지원" },
  decorators: [
    Story => (
      <div className="w-[353px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SummaryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** InfoCard 안에서의 사용 예시 */
export const InCard: Story = {
  render: () => (
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
};
