import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { CascadingSelectItem } from "@/components/atoms/cascading-select-item";

const meta = {
  title: "Atoms/CascadingSelectItem",
  component: CascadingSelectItem,
  parameters: {
    docs: {
      description: {
        component: [
          "단계별로 고르는 Select Menu를 조립할 때 쓰는 칸이에요. 단독으로 쓰지 않아요.",
          "",
          "- **header**: 단계 제목",
          "- **option**: 고를 수 있는 항목",
          "- **selected=parent**: 하위 단계에서 고른 항목의 상위 항목. 글자색만 brand로 바뀌어요.",
          "- **selected=child**: 최종으로 고른 항목. Fill `fill/brand-subtle`, Text `fg/brand-default`",
        ].join("\n"),
      },
    },
  },
  args: { children: "레이블", onClick: fn() },
  argTypes: {
    type: { control: "inline-radio", options: ["header", "option"] },
    selected: { control: "inline-radio", options: [undefined, "parent", "child"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof CascadingSelectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => (
    <div className="grid w-[18.75rem] grid-cols-2 gap-4">
      <CascadingSelectItem
        {...args}
        type="header"
      />
      <CascadingSelectItem
        {...args}
        type="header"
        disabled
      />
      <CascadingSelectItem {...args} />
      <CascadingSelectItem
        {...args}
        selected="parent"
      />
      <CascadingSelectItem
        {...args}
        selected="child"
      />
      <CascadingSelectItem
        {...args}
        disabled
      />
    </div>
  ),
};

/** 단과대학 → 학과처럼 두 단계로 고르는 예시예요. */
export const Cascade: Story = {
  render: args => (
    <div className="flex w-[17.5rem]">
      <div
        role="listbox"
        className="flex flex-1 flex-col"
      >
        <CascadingSelectItem type="header">단과대학</CascadingSelectItem>
        <CascadingSelectItem {...args}>공과대학</CascadingSelectItem>
        <CascadingSelectItem
          {...args}
          selected="parent"
        >
          IT대학
        </CascadingSelectItem>
        <CascadingSelectItem {...args}>경영대학</CascadingSelectItem>
      </div>
      <div
        role="listbox"
        className="flex flex-1 flex-col"
      >
        <CascadingSelectItem type="header">학과</CascadingSelectItem>
        <CascadingSelectItem
          {...args}
          selected="child"
        >
          소프트웨어학부
        </CascadingSelectItem>
        <CascadingSelectItem {...args}>컴퓨터학부</CascadingSelectItem>
        <CascadingSelectItem
          {...args}
          disabled
        >
          AI융합학부
        </CascadingSelectItem>
      </div>
    </div>
  ),
};
