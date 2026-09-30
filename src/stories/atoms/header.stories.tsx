import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Header } from "@/components/atoms/header";

const meta = {
  title: "Atoms/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: [
          "화면 상단 제목 영역이에요. `variant`로 세 가지를 나눠요.",
          "",
          "- `event`: 행사 상세 헤더예요. 제목(32px) 아래에 `badge`와 `meta`(날짜 · 시간 · 장소)를 두고, 아래쪽 구분선이 있어요.",
          "- `page`: 페이지 헤더예요. 제목(36px Bold)과 선택 `description`, 아래쪽 구분선이 있어요.",
          "- `subtitle`(기본): 섹션 소제목이에요. 제목(24px)과 `description`만 있고 구분선이 없어요.",
          "",
          '오른쪽 끝 버튼은 `action`으로 넘겨요. `Button`의 `size="md"`를 쓰고, 폭은 `layout="group"`(200px, 페이지·이벤트) 또는 `layout="single"`(220px, 소제목)로 맞춰요.',
        ].join("\n"),
      },
    },
  },
  args: {
    title: "Title",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["event", "page", "subtitle"] },
  },
  decorators: [
    Story => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {
  args: {
    variant: "event",
    title: "행사명",
    badge: (
      <Badge
        size="lg"
        theme="brand"
      >
        진행 중
      </Badge>
    ),
    meta: ["2000년 00월 00일", "00:00", "행사 장소"],
    action: (
      <Button
        size="md"
        variant="line"
        layout="group"
      >
        목록으로
      </Button>
    ),
  },
};

export const Page: Story = {
  args: {
    variant: "page",
    action: (
      <Button
        size="md"
        variant="line"
        layout="group"
      >
        이전으로
      </Button>
    ),
  },
};

export const PageWithDescription: Story = {
  args: { ...Page.args, description: "Description" },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    title: "Subtitle",
    description: "Description",
    action: (
      <Button
        size="md"
        theme="brand"
        layout="single"
      >
        버튼
      </Button>
    ),
  },
};

export const TitleOnly: Story = {
  args: { variant: "subtitle", title: "Subtitle" },
};
