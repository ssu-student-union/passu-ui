import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Radio } from "@/components/atoms/radio";

const meta = {
  title: "Atoms/Radio",
  component: Radio,
  args: { onChange: fn(), "aria-label": "라디오" },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

/** 라벨을 넘기면 오른쪽에 텍스트가 붙고, 라벨을 눌러도 선택돼요. */
export const WithLabel: Story = {
  args: { label: "라벨", defaultChecked: true },
};

export const Group: Story = {
  render: args => (
    <div className="flex gap-3">
      {["A", "B", "C"].map(value => (
        <Radio
          key={value}
          {...args}
          name="group"
          value={value}
          label={value}
          defaultChecked={value === "A"}
        />
      ))}
    </div>
  ),
};
