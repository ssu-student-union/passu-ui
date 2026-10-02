import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "@/components/atoms/logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col items-start gap-6">
      <Logo
        {...args}
        className="w-[8.75rem]"
      />
      <Logo
        {...args}
        className="w-[20rem]"
      />
    </div>
  ),
};
