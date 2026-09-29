import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/atoms/divider";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "inline-radio", options: ["lg", "md", "sm"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col gap-6">
      {(["lg", "md", "sm"] as const).map(size => (
        <Divider
          key={size}
          {...args}
          size={size}
        />
      ))}
    </div>
  ),
};
