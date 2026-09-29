import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Spinner } from "./spinner";

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  args: { loading: true, onExited: fn() },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Controls에서 loading을 끄면 점이 순서대로 사라지고, 다시 켜면 순서대로 나타난다. */
export const Default: Story = {};
