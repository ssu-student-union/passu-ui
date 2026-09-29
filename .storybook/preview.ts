import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    backgrounds: {
      options: {
        canvas: { name: "canvas", value: "#fcfcfc" },
        white: { name: "white", value: "#ffffff" },
      },
    },
    initialGlobals: {
      backgrounds: { value: "canvas" },
    },
  },
};

export default preview;
