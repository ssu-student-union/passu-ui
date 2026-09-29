import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./header";

const meta = {
  title: "Atoms/Header",
  component: Header,
  parameters: { layout: "padded" },
  args: {
    title: "타이틀",
    description: "설명 텍스트",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: { description: undefined },
};
