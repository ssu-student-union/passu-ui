import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { ComponentProps } from "react";
import {
  dialogContentClassName,
  dialogFooterClassName,
  dialogOverlayClassName,
} from "@/components/atoms/dialog-styles";
import { cn } from "@/utils/cn";

const ConfirmDialog = AlertDialogPrimitive.Root;
const ConfirmDialogTrigger = AlertDialogPrimitive.Trigger;
/** 확인 버튼. 누르면 모달이 닫힌다 */
const ConfirmDialogAction = AlertDialogPrimitive.Action;
/** 취소 버튼. 열리면 여기에 포커스가 간다 */
const ConfirmDialogCancel = AlertDialogPrimitive.Cancel;

type ConfirmDialogContentProps = ComponentProps<typeof AlertDialogPrimitive.Content>;

/**
 * 되돌릴 수 없는 동작을 한 번 더 확인받는 모달(`window.confirm`의 자리).
 * `Dialog`와 달리 바깥 클릭으로 닫히지 않고, 열리면 `ConfirmDialogCancel`에 포커스가 간다. Esc로는 닫힌다.
 * 너비는 400px로 고정이다. 스크린 리더에는 `role="alertdialog"`로 알린다.
 */
function ConfirmDialogContent({ className, ...props }: ConfirmDialogContentProps) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className={dialogOverlayClassName} />
      <AlertDialogPrimitive.Content
        className={cn(dialogContentClassName, "w-[25rem] gap-6 p-6", className)}
        {...props}
      />
    </AlertDialogPrimitive.Portal>
  );
}

/** 제목과 설명을 가운데 정렬로 묶는다 */
function ConfirmDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex w-full flex-col gap-2 text-center", className)}
      {...props}
    />
  );
}

/** 모달의 제목. 스크린 리더가 모달 이름으로 읽으므로 항상 넣는다 */
function ConfirmDialogTitle({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn("text-title2-24", className)}
      {...props}
    />
  );
}

function ConfirmDialogDescription({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("text-body3-15 text-fg-alternative", className)}
      {...props}
    />
  );
}

/** 버튼 영역. 버튼에 `layout="fill"`을 주면 같은 너비로 나란히 놓인다 */
function ConfirmDialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(dialogFooterClassName, className)}
      {...props}
    />
  );
}

export type { ConfirmDialogContentProps };
export {
  ConfirmDialog,
  ConfirmDialogAction,
  ConfirmDialogCancel,
  ConfirmDialogContent,
  ConfirmDialogDescription,
  ConfirmDialogFooter,
  ConfirmDialogHeader,
  ConfirmDialogTitle,
  ConfirmDialogTrigger,
};
