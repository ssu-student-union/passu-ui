import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Chip } from "@/components/atoms/chip";
import { iconArgType } from "@/stories/utils/icon-arg-type";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: [
          "인터랙티브 요소예요.",
          "",
          "- **Filter**: 클릭 시 하단/인라인 옵션 목록을 노출해요. (DropdownItem)",
          "- **Input**: 클릭 시 해당 태그/필터를 즉시 제거해요.",
          "- **Guidance**: 선택된 필터 상태를 보여줘요.",
          "",
          "Hover: 컴포넌트별로 정의된 Hover Color Variant를 적용해요.",
          "",
          "**Group (병렬 배치)**: Badge 또는 Chip을 여러 개 나열할 경우, 요소 간 간격은 12px(`gap-3`)로 고정해요.",
        ].join("\n"),
      },
    },
  },
  args: { children: "칩", onRemove: fn() },
  argTypes: {
    theme: { control: "inline-radio", options: ["neutral", "brand"] },
    variant: { control: "inline-radio", options: ["filter", "input", "guidance"] },
    leadingIcon: iconArgType,
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => (
    <div className="grid grid-cols-3 gap-3">
      {(["neutral", "brand"] as const).map(theme =>
        (["filter", "input", "guidance"] as const).map(variant => (
          <Chip
            key={`${theme}-${variant}`}
            {...args}
            theme={theme}
            variant={variant}
          />
        )),
      )}
    </div>
  ),
};

/** 여러 개 나열할 때는 요소 간 간격을 12px(`gap-3`)로 고정해요. */
export const Group: Story = {
  render: args => (
    <div className="flex gap-3">
      <Chip
        {...args}
        variant="filter"
      />
      <Chip
        {...args}
        variant="input"
      />
      <Chip
        {...args}
        variant="guidance"
      />
    </div>
  ),
};
