import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TextField } from "./text-field";

const meta = {
  title: "Atoms/TextField",
  component: TextField,
  args: {
    label: "레이블",
    required: true,
    helperText: "서브레이블",
    placeholder: "표시자",
  },
  argTypes: {
    status: { control: "inline-radio", options: ["default", "error", "success"] },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorState: Story = {
  name: "Error",
  args: { status: "error", invalid: true },
};

export const Clearable: Story = {
  args: { status: "success" },
  render: function Render(args) {
    const [value, setValue] = useState("입력된 값");
    return (
      <TextField
        {...args}
        value={value}
        onChange={event => setValue(event.target.value)}
        onClear={() => setValue("")}
      />
    );
  },
};

export const Password: Story = {
  args: { label: "비밀번호", visibilityToggle: true },
};
