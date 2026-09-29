import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
  // vite.config.ts의 라이브러리 빌드 설정이 Storybook 정적 빌드에 섞이지 않도록 제거
  viteFinal: config => {
    if (config.build) {
      config.build.lib = false;
    }
    return config;
  },
};

export default config;
