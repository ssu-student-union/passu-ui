import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { iconArgType } from "@/storybook/icon-arg-type";
import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "버튼", onClick: fn() },
  argTypes: {
    size: { control: "inline-radio", options: ["lg", "md", "sm"] },
    theme: { control: "inline-radio", options: ["neutral", "brand", "status"] },
    variant: { control: "inline-radio", options: ["primary", "secondary", "line"] },
    leadingIcon: iconArgType,
    trailingIcon: iconArgType,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Variants: Story = {
  render: args => (
    <div className="grid grid-cols-3 gap-3">
      {(["primary", "secondary", "line"] as const).map(variant =>
        (["neutral", "brand", "status"] as const).map(theme => (
          <Button
            key={`${variant}-${theme}`}
            {...args}
            theme={theme}
            variant={variant}
          />
        )),
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="flex items-center gap-3">
      {(["lg", "md", "sm"] as const).map(size => (
        <Button
          key={size}
          {...args}
          size={size}
        />
      ))}
    </div>
  ),
};
