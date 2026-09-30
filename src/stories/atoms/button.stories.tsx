import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/atoms/button";
import { iconArgType } from "@/stories/utils/icon-arg-type";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "버튼", onClick: fn() },
  argTypes: {
    size: { control: "inline-radio", options: ["lg", "md", "sm"] },
    theme: { control: "inline-radio", options: ["neutral", "brand", "status"] },
    variant: { control: "inline-radio", options: ["primary", "secondary", "line", "ghost"] },
    layout: { control: "inline-radio", options: [undefined, "fill", "single", "group"] },
    leadingIcon: iconArgType,
    trailingIcon: iconArgType,
  },
  parameters: {
    docs: {
      description: {
        component: [
          "버튼 컴포넌트예요.",
          "",
          "**인터랙션**",
          "- Hover: 컴포넌트별로 정의된 Hover Color Variant를 적용해요.",
          "- Pressed: Hover Color 위에 `black-alpha/5`를 덧입혀요.",
          "",
          "**Variant**",
          "- `primary` / `secondary` / `line`: 면 버튼이에요.",
          "- `ghost`: 배경 없는 텍스트 버튼이에요. 현재 UI에서는 `md` neutral, `lg` brand를 중심으로 쓰고, `sm`과 `status`는 시스템 확장성을 위해 보존해요.",
          "",
          "**레이아웃 (`layout`)**",
          "- `fill`: 모달·폼 하단 등 컨테이너에 맞춰 늘어나요 (Fill container).",
          "- `single`: 다른 요소 없이 단독으로 쓰는 액션 버튼은 너비 220px로 고정해요.",
          "- `group`: 버튼 2개를 병렬 배치하거나 인풋 박스 등과 함께 묶을 때 너비 200px로 고정하고, 요소 간격은 8px(`gap-2`)로 맞춰요.",
          "",
          "**참고**: `sm`(SmallButton)은 현재 서비스 화면(v3.0)에서 직접 쓰이지 않지만, 향후 인터랙션 확장성을 위해 시스템 스펙으로 유지해요. PASSUv3 Admin UI에서는 가독성과 터치/클릭 영역 확보를 위해 `lg` / `md`만 사용해요.",
        ].join("\n"),
      },
    },
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
      {(["primary", "secondary", "line", "ghost"] as const).map(variant =>
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

export const Layouts: Story = {
  render: args => (
    <div className="flex w-[30rem] flex-col gap-6">
      <Button
        {...args}
        layout="fill"
      />
      <Button
        {...args}
        layout="single"
      />
      <div className="flex gap-2">
        <Button
          {...args}
          layout="group"
          variant="secondary"
        />
        <Button
          {...args}
          layout="group"
        />
      </div>
    </div>
  ),
};
