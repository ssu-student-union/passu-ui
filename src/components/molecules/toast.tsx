import { Toaster as Sonner, type ToasterProps, toast } from "sonner";
import CheckBoldIcon from "@/assets/icons/check-bold.svg?react";
import PriorityHighIcon from "@/assets/icons/priority-high.svg?react";
import { cn } from "@/utils/cn";

/** 앱 루트에 한 번만 렌더링하고, `toast.success()` / `toast.error()`로 띄웁니다. */
function Toaster({ toastOptions, ...props }: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      duration={3000}
      icons={{
        success: <CheckBoldIcon className="size-8 text-fg-brand-default" />,
        error: <PriorityHighIcon className="size-8 text-fg-danger-default" />,
      }}
      toastOptions={{
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: cn(
            "flex min-h-12 w-fit min-w-[15rem] items-center gap-3 overflow-clip rounded-full border border-solid bg-fill-neutral-subtle py-4 pr-8 pl-5 shadow-key-weak backdrop-blur-lg",
            "data-[type=error]:border-border-danger data-[type=success]:border-border-focus",
          ),
          icon: "!m-0 flex size-8 shrink-0 items-center justify-center",
          content: "flex flex-col justify-center gap-0.5",
          title:
            "text-title3-20 whitespace-nowrap text-fg-default data-[type=success]:text-fg-brand-default data-[type=error]:text-fg-danger-default",
          description: "text-body2-16 whitespace-nowrap text-fg-alternative",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
}

export type { ToasterProps };
export { Toaster, toast };
