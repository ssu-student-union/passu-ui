import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content>;

/**
 * 화면 가운데에 뜨는 모달. 딤 배경과 함께 포털로 body에 렌더하고,
 * 포커스를 가두며 바깥 클릭·Esc로 닫는다. 너비는 안의 내용에 맞춰진다.
 *
 * `DialogDescription`이 없는 모달은 Radix가 개발 중 경고를 띄우므로 `aria-describedby={undefined}`를 넘긴다.
 * (기본값으로 넣으면 `DialogDescription`이 있어도 연결이 끊긴다)
 */
function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black-alpha-50 data-[state=closed]:animate-out data-[state=open]:animate-in" />
      <DialogPrimitive.Content
        // 열자마자 첫 번째 항목에 포커스 링이 뜨지 않도록 모달 자체에 포커스를 준다. Tab을 누르면 첫 항목으로 들어간다
        onOpenAutoFocus={event => {
          event.preventDefault();
          (event.currentTarget as HTMLElement).focus();
        }}
        className={cn(
          "fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-fit max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-8 overflow-y-auto rounded-16 border border-border-default bg-bg-canvas px-10 py-6 text-fg-default shadow-key-regular outline-none backdrop-blur-[40px]",
          "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className,
        )}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}

/** 제목 영역. 아래에 구분선이 있다 */
function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center border-border-default border-b px-0.5 py-4",
        className,
      )}
      {...props}
    />
  );
}

/** 모달의 제목. 스크린 리더가 모달 이름으로 읽으므로 항상 넣는다 */
function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("flex-1 text-title2-24", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-body5-14 text-fg-alternative", className)}
      {...props}
    />
  );
}

/** 버튼 영역. 버튼에 `layout="fill"`을 주면 같은 너비로 나란히 놓인다 */
function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("grid w-full auto-cols-fr grid-flow-col gap-2", className)}
      {...props}
    />
  );
}

export type { DialogContentProps };
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
