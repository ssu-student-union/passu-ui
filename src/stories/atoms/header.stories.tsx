import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { PageHeader, PageHeaderMeta, SectionHeader } from "@/components/atoms/header";

const meta = {
  title: "Atoms/Header",
  component: PageHeader,
  parameters: {
    docs: {
      description: {
        component: [
          "화면의 제목 영역이에요. 위계에 따라 두 컴포넌트로 나눠요.",
          "",
          "- `PageHeader`: 페이지 맨 위 제목이에요. 제목(36px Bold)과 선택 `description`, 아래쪽 구분선이 있어요.",
          "- `SectionHeader`: 페이지 안 섹션의 소제목이에요. 제목(24px)과 `description`만 있고 구분선이 없어요.",
          "",
          "제목 아래에 더 넣을 내용(뱃지, `PageHeaderMeta` 등)은 `children`으로 넘겨요.",
          "",
          '오른쪽 끝 버튼은 `action`으로 넘겨요. `Button`의 `size="md"`를 쓰고, 폭은 `layout="group"`(200px, 페이지) 또는 `layout="single"`(220px, 섹션)으로 맞춰요.',
        ].join("\n"),
      },
    },
  },
  args: {
    title: "Title",
  },
  // JSX를 받는 prop은 Controls에서 React 요소 내부가 그대로 펼쳐지므로 편집 대상에서 뺀다
  argTypes: {
    action: { control: false },
    children: { control: false },
  },
  decorators: [
    Story => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {
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

/** 행사 상세처럼 제목 아래에 뱃지와 메타 줄을 두는 예시예요. */
export const PageWithChildren: Story = {
  args: {
    title: "행사명",
    action: (
      <Button
        size="md"
        variant="line"
        layout="group"
      >
        목록으로
      </Button>
    ),
    children: (
      <div className="flex items-center gap-2">
        <Badge
          size="lg"
          theme="brand"
        >
          진행 중
        </Badge>
        <PageHeaderMeta items={["2000년 00월 00일", "00:00", "행사 장소"]} />
      </div>
    ),
  },
};

export const Section: Story = {
  render: () => (
    <SectionHeader
      title="Subtitle"
      description="Description"
      action={
        <Button
          size="md"
          theme="brand"
          layout="single"
        >
          버튼
        </Button>
      }
    />
  ),
};

export const SectionTitleOnly: Story = {
  render: () => <SectionHeader title="Subtitle" />,
};
