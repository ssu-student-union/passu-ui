import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/atoms/badge";
import { iconArgType } from "@/stories/utils/icon-arg-type";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
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
