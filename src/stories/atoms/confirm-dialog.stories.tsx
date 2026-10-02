import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/atoms/button";
import {
  ConfirmDialog,
  ConfirmDialogAction,
  ConfirmDialogCancel,
  ConfirmDialogContent,
  ConfirmDialogDescription,
  ConfirmDialogFooter,
  ConfirmDialogHeader,
  ConfirmDialogTitle,
  ConfirmDialogTrigger,
} from "@/components/atoms/confirm-dialog";

const meta = {
  title: "Atoms/ConfirmDialog",
  component: ConfirmDialogContent,
  parameters: {
    docs: {
      description: {
        component: [
          "되돌릴 수 없는 동작(행사 종료, 삭제 등)을 한 번 더 확인받는 모달이에요. 브라우저의 `window.confirm`을 대신해요.",
          "",
          "`Dialog`와 달리 바깥을 눌러도 닫히지 않고, 열리면 취소 버튼에 포커스가 가요. Esc를 누르면 닫혀요. 너비는 400px로 고정이에요.",
          "",
          '`ConfirmDialogHeader`(`ConfirmDialogTitle` · `ConfirmDialogDescription`) 아래에 `ConfirmDialogFooter`를 두고, 버튼은 `ConfirmDialogCancel` · `ConfirmDialogAction`에 `asChild`로 감싸요. 버튼은 `size="md"` `layout="fill"`을 써요.',
        ].join("\n"),
      },
    },
  },
} satisfies Meta<typeof ConfirmDialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ConfirmDialog>
      <ConfirmDialogTrigger asChild>
        <Button
          size="md"
          variant="line"
        >
          행사 종료
        </Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent>
        <ConfirmDialogHeader>
          <ConfirmDialogTitle>중간고사 간식행사를 종료할까요?</ConfirmDialogTitle>
          <ConfirmDialogDescription>
            종료 즉시 수령 및 인증이 중단되며,
            <br />
            해당 행사는 다시 시작할 수 없습니다.
          </ConfirmDialogDescription>
        </ConfirmDialogHeader>
        <ConfirmDialogFooter>
          <ConfirmDialogCancel asChild>
            <Button
              size="md"
              layout="fill"
            >
              취소
            </Button>
          </ConfirmDialogCancel>
          <ConfirmDialogAction asChild>
            <Button
              size="md"
              theme="status"
              variant="secondary"
              layout="fill"
            >
              종료
            </Button>
          </ConfirmDialogAction>
        </ConfirmDialogFooter>
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
};
