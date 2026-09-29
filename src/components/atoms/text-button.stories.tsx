import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { iconArgType } from "@/storybook/icon-arg-type";
import { TextButton } from "./text-button";

const meta = {
  title: "Atoms/TextButton",
  component: TextButton,
  args: { children: "텍스트 버튼", onClick: fn() },
  argTypes: {
    size: { control: "inline-radio", options: ["lg", "md", "sm"] },
    theme: { control: "inline-radio", options: ["neutral", "brand", "status"] },
    leadingIcon: iconArgType,
    trailingIcon: iconArgType,
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Variants: Story = {
  render: args => (
    <div className="grid grid-cols-3 gap-3">
      {(["lg", "md", "sm"] as const).map(size =>
        (["neutral", "brand", "status"] as const).map(theme => (
          <TextButton
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
