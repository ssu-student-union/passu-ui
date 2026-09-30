import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/atoms/button";
import { Toaster, toast } from "@/components/molecules/toast";

const meta = {
  title: "Molecules/Toast",
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component: [
          "토스트 컴포넌트예요. sonner 기반이라 앱 루트에 `<Toaster />`를 한 번 두고 `toast.success()` / `toast.error()`로 띄워요.",
          "",
          "**동작**",
          "- 인증 완료/실패 이벤트가 발생하면 위에서 아래로 Slide-down되며 노출돼요.",
          "- 노출 3초 뒤 위로 Slide-up / Fade-out되며 자동으로 사라져요. (`duration` 기본 3000ms)",
          "",
          "**위치**",
          "- 현재 서비스에서는 인증번호 입력창 프레임의 상단 테두리 중앙에 걸쳐 노출돼요. (Y축 -50% 절반 오버랩)",
          "- 위치는 `Toaster`의 `position` / `offset`으로 조정해요.",
          "",
          "**참고**: 현재 PASSUv3 Admin UI에서는 인증번호 입력 피드백 전용으로만 사용돼요. 향후 서비스 확장 및 신규 기능 추가 시 화면 하단 중앙(Bottom Floating) 배치 방식의 공통 시스템 Toast로 전환될 수 있어요.",
        ].join("\n"),
      },
    },
  },
  decorators: [
    Story => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("레이블", { description: "서브레이블" })}>
      성공 토스트
    </Button>
  ),
};

export const Danger: Story = {
  render: () => (
    <Button onClick={() => toast.error("레이블", { description: "서브레이블" })}>
      경고 토스트
    </Button>
  ),
};
