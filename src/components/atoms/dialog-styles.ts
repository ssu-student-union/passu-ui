// Dialog와 ConfirmDialog가 함께 쓰는 딤 배경·카드 스타일. 패키지 밖으로는 내보내지 않는다

export const dialogOverlayClassName =
  "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black-alpha-50 data-[state=closed]:animate-out data-[state=open]:animate-in";

export const dialogContentClassName = [
  "fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-16 border border-border-default bg-bg-canvas text-fg-default shadow-key-regular outline-none backdrop-blur-[40px]",
  "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in",
].join(" ");

/** 버튼 영역. 버튼에 `layout="fill"`을 주면 같은 너비로 나란히 놓인다 */
export const dialogFooterClassName = "grid w-full auto-cols-fr grid-flow-col gap-2";
