import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import {
  CascadingSelect,
  CascadingSelectChild,
  CascadingSelectChildren,
  CascadingSelectParent,
  CascadingSelectParents,
} from "@/components/molecules/cascading-select";

const meta = {
  title: "Atoms/Dialog",
  component: DialogContent,
  parameters: {
    docs: {
      description: {
        component: [
          "화면 가운데에 뜨는 모달이에요. 딤 배경 위에서 포커스를 가두고, 바깥을 누르거나 Esc를 누르면 닫혀요.",
          "",
          "`Dialog` · `DialogTrigger` · `DialogContent`에 `DialogHeader`(`DialogTitle`) · 본문 · `DialogFooter`를 조립해요. 너비는 안의 내용에 맞춰져요.",
          "",
          "`DialogTitle`은 스크린 리더가 모달 이름으로 읽으므로 항상 넣어 주세요. `DialogDescription`이 없는 모달은 `DialogContent`에 `aria-describedby={undefined}`를 넘기면 Radix의 개발 중 경고가 사라져요.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="md"
          variant="line"
        >
          모달 열기
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[26rem]">
        <DialogHeader>
          <DialogTitle>모달 제목</DialogTitle>
        </DialogHeader>
        <DialogDescription>모달 내용이에요. 바깥을 누르거나 Esc를 누르면 닫혀요.</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button layout="fill">취소</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              layout="fill"
              theme="brand"
            >
              확인
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

const DEPARTMENTS: Record<string, string[]> = {
  humanities: [
    "인문대학 소속 전체",
    "기독교학과",
    "국어국문학과",
    "영어영문학과",
    "철학과",
    "사학과",
  ],
  it: ["컴퓨터학부", "소프트웨어학부", "글로벌미디어학부"],
};

const COLLEGES = [
  { value: "humanities", label: "인문대학" },
  { value: "science", label: "자연과학대학" },
  { value: "law", label: "법과대학" },
  { value: "social", label: "사회과학대학" },
  { value: "economics", label: "경제통상대학" },
  { value: "business", label: "경영대학" },
  { value: "engineering", label: "공과대학" },
  { value: "it", label: "IT대학" },
  { value: "ai", label: "AI대학" },
  { value: "free", label: "자유전공학부" },
];

function ScopeDialogExample() {
  const [open, setOpen] = useState(false);
  const [college, setCollege] = useState<string | null>(null);
  const [draft, setDraft] = useState<string[]>([]);
  const [applied, setApplied] = useState<string[]>([]);

  function toggle(department: string) {
    setDraft(previous =>
      previous.includes(department)
        ? previous.filter(item => item !== department)
        : [...previous, department],
    );
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <Dialog
        open={open}
        onOpenChange={next => {
          setOpen(next);
          if (next) {
            setCollege(null);
            setDraft(applied);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button
            size="md"
            variant="line"
          >
            참여 범위 수정
          </Button>
        </DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>참여 범위 수정</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <CascadingSelect
              value={college}
              onValueChange={setCollege}
            >
              <CascadingSelectParents title="단과대">
                {COLLEGES.map(({ value, label }) => (
                  <CascadingSelectParent
                    key={value}
                    value={value}
                  >
                    {label}
                  </CascadingSelectParent>
                ))}
              </CascadingSelectParents>
              <CascadingSelectChildren title="소속 학부/학과">
                {(college ? (DEPARTMENTS[college] ?? []) : []).map(department => (
                  <CascadingSelectChild
                    key={department}
                    selected={draft.includes(department)}
                    onClick={() => toggle(department)}
                  >
                    {department}
                  </CascadingSelectChild>
                ))}
              </CascadingSelectChildren>
            </CascadingSelect>
            <p className="px-0.5 text-body5-14 text-fg-assistive">
              {draft.length > 0 ? `선택: ${draft.join(", ")}` : "현재 선택된 참여 범위가 없습니다"}
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button layout="fill">취소</Button>
            </DialogClose>
            <Button
              layout="fill"
              disabled={draft.length === 0}
              onClick={() => {
                setApplied(draft);
                setOpen(false);
              }}
            >
              적용
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p className="text-body5-14 text-fg-alternative">
        적용된 범위: {applied.length > 0 ? applied.join(", ") : "없음"}
      </p>
    </div>
  );
}

/** CascadingSelect와 조립한 예시예요. 적용하지 않고 닫으면 고른 항목을 버려요. */
export const WithCascadingSelect: Story = {
  render: () => <ScopeDialogExample />,
};
