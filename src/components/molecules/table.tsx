import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";
import { tv } from "@/utils/tv";

const tableCellVariants = tv({
  // Figma는 p-4에 높이 56px 고정이지만, lg Badge(27.6px)를 넣으면 넘치므로 세로 패딩을 줄이고 가운데 정렬로 맞춘다
  base: "h-[3.5rem] min-w-[5rem] break-keep px-4 py-3 align-middle text-fg-default",
  variants: {
    type: {
      title: "bg-fill-neutral text-body1-16",
      default: "bg-bg-canvas text-body3-15",
    },
    align: {
      left: "text-left",
      right: "text-right",
    },
    interactive: {
      true: "cursor-pointer hover:bg-bg-surface active:bg-[image:linear-gradient(var(--color-black-alpha-5),var(--color-black-alpha-5))]",
    },
  },
  defaultVariants: {
    type: "default",
    align: "left",
  },
});

type TableCellProps = (ComponentProps<"td"> & ComponentProps<"th">) &
  VariantProps<typeof tableCellVariants>;

/**
 * Table 행을 구성하는 셀. `type="title"`이면 `<th>`, 아니면 `<td>`로 렌더한다.
 * 뱃지·버튼 셀은 children으로 Badge·Button을 넣어 구성하고, 셀 전체가 눌리는 경우 `interactive`를 켠다.
 */
function TableCell({ className, type = "default", align, interactive, ...props }: TableCellProps) {
  const Comp = type === "title" ? "th" : "td";

  return (
    <Comp
      className={cn(tableCellVariants({ type, align, interactive }), className)}
      {...props}
    />
  );
}

interface TableProps extends ComponentProps<"table"> {
  /** 바깥 테두리를 그리는 래퍼의 클래스. 너비 지정이나 가로 스크롤 제어에 쓴다 */
  containerClassName?: string;
}

/**
 * 데이터 표. 시맨틱 `<table>`을 그대로 쓰는 컴파운드 컴포넌트다.
 *
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>이름</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>김민준</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
function Table({ className, containerClassName, ...props }: TableProps) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-4 border border-border-default",
        containerClassName,
      )}
    >
      <table
        className={cn("w-full border-collapse", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader(props: ComponentProps<"thead">) {
  return <thead {...props} />;
}

function TableBody(props: ComponentProps<"tbody">) {
  return <tbody {...props} />;
}

/** 행 사이는 위쪽 선으로 나누고, 헤더 행은 선을 그리지 않는다 */
function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("border-border-default border-t [thead>&]:border-t-0", className)}
      {...props}
    />
  );
}

/** 헤더 셀. `scope="col"`인 `<th>` */
function TableHead(props: Omit<ComponentProps<typeof TableCell>, "type">) {
  return (
    <TableCell
      type="title"
      scope="col"
      {...props}
    />
  );
}

interface TableEmptyProps extends Omit<ComponentProps<"td">, "colSpan"> {
  /** 표의 열 개수 */
  colSpan: number;
}

/** 데이터가 없을 때 `TableBody` 안에 넣는 안내 행 */
function TableEmpty({ className, colSpan, ...props }: TableEmptyProps) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn("p-5 text-center text-body3-15 text-fg-alternative", className)}
        {...props}
      />
    </tr>
  );
}

export type { TableCellProps, TableEmptyProps, TableProps };
export { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow };
