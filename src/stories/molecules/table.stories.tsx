import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/atoms/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/molecules/table";

const meta = {
  title: "Molecules/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: [
          "데이터 표예요. 시맨틱 `<table>` 위에 `Table` · `TableHeader` · `TableBody` · `TableRow` · `TableHead` · `TableCell`을 조립해요.",
          "",
          "- 열 너비는 `TableHead`(또는 `TableCell`)의 `className`으로 지정해요.",
          "- 뱃지·버튼 셀은 `TableCell`의 children으로 구성하고, 셀 전체가 눌리면 `interactive`를 켜요.",
          "- 데이터가 없으면 `TableBody` 안에 `TableEmpty`를 넣어요. `colSpan`은 열 개수예요.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  {
    name: "김민준",
    department: "소프트웨어학부",
    studentId: "20240001",
    item: "간식 세트",
    time: "15:08",
    code: "0000",
  },
  {
    name: "김민준",
    department: "소프트웨어학부",
    studentId: "20240001",
    item: "간식 세트",
    time: "15:08",
    code: "수기입력",
  },
  {
    name: "김민준",
    department: "소프트웨어학부",
    studentId: "20240001",
    item: "간식 세트",
    time: "15:08",
    code: "0000",
  },
];

export const Default: Story = {
  render: () => (
    <Table containerClassName="w-[62.5rem]">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[7.5rem]">이름</TableHead>
          <TableHead className="w-[12.5rem]">학부/학과</TableHead>
          <TableHead className="w-[12.5rem]">학번</TableHead>
          <TableHead>상품</TableHead>
          <TableHead className="w-[7.5rem]">수령 시각</TableHead>
          <TableHead className="w-[7.5rem]">인증번호</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 고정된 예시 데이터
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.department}</TableCell>
            <TableCell>{row.studentId}</TableCell>
            <TableCell>{row.item}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>{row.code}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/** 뱃지·버튼 셀과 오른쪽 정렬 셀 예시예요. */
export const CellTypes: Story = {
  render: () => (
    <Table containerClassName="w-[40rem]">
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>동작</TableHead>
          <TableHead align="right">수량</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>김민준</TableCell>
          <TableCell>
            <Badge
              size="lg"
              theme="brand"
            >
              수령 완료
            </Badge>
          </TableCell>
          <TableCell interactive>상세 보기</TableCell>
          <TableCell align="right">1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>김민준</TableCell>
          <TableCell>
            <Badge
              size="lg"
              theme="danger"
            >
              미수령
            </Badge>
          </TableCell>
          <TableCell interactive>상세 보기</TableCell>
          <TableCell align="right">2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table containerClassName="w-[20.125rem]">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[5rem]">시간</TableHead>
          <TableHead className="w-[7.5rem]">이름</TableHead>
          <TableHead className="w-[7.5rem]">인증번호</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty colSpan={3}>수령 내역이 없습니다.</TableEmpty>
      </TableBody>
    </Table>
  ),
};
