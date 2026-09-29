import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { iconArgType } from "@/storybook/icon-arg-type";
import { Chip } from "./chip";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
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
