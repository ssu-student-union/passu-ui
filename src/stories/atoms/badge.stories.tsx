import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/atoms/badge";
import { iconArgType } from "@/stories/utils/icon-arg-type";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: [
          "단순 정보/상태 표시용 컴포넌트예요. (Non-clickable, Read-only)",
          "",
          "**Group (병렬 배치)**: Badge 또는 Chip을 여러 개 나열할 경우, 요소 간 간격은 12px(`gap-3`)로 고정해요.",
        ].join("\n"),
      },
    },
  },
  args: { children: "뱃지" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "lg"] },
    theme: { control: "inline-radio", options: ["neutral", "brand", "danger"] },
    leadingIcon: iconArgType,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  args: {
    size: "lg",
    theme: "brand",
  },

  render: args => (
    <div className="grid grid-cols-3 gap-3">
      {(["sm", "lg"] as const).map(size =>
        (["neutral", "brand", "danger"] as const).map(theme => (
          <Badge
            key={`${size}-${theme}`}
            {...args}
            size={size}
            theme={theme}
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
      <Badge
        {...args}
        theme="neutral"
      />
      <Badge
        {...args}
        theme="danger"
      />
      <Badge
        {...args}
        theme="brand"
      />
    </div>
  ),
};
