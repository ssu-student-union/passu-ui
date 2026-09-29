import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <div className="flex items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => (
        <Icon
          key={size}
          {...args}
          size={size}
        />
      ))}
    </div>
  ),
};
