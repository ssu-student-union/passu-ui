import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Checkbox } from "@/components/atoms/checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  args: { onChange: fn(), "aria-label": "체크박스" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

/** 라벨을 넘기면 오른쪽에 텍스트가 붙고, 라벨을 눌러도 토글돼요. */
export const WithLabel: Story = {
  args: { label: "해당 학생 본인이 상품을 수령하였음", defaultChecked: true },
};
