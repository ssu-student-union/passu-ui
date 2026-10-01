import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  CascadingSelect,
  CascadingSelectChild,
  CascadingSelectChildren,
  CascadingSelectParent,
  CascadingSelectParents,
} from "@/components/molecules/cascading-select";

const meta = {
  title: "Molecules/CascadingSelect",
  component: CascadingSelect,
  parameters: {
    docs: {
      description: {
        component: [
          "상위 항목을 고르면 하위 목록이 옆에 열리는 2단계 선택 패널이에요. 모달·팝오버 안에 넣어 써요.",
          "",
          "- `CascadingSelect`는 어느 상위 항목이 열려 있는지(`value`)만 들고 있어요.",
          "- 하위 항목을 골랐는지는 사용하는 쪽에서 관리해요. `CascadingSelectChild`의 `selected`와 `onClick`으로 단일·다중 선택을 모두 만들 수 있어요.",
          "- 상위 항목을 고르기 전에는 오른쪽 제목이 비활성이고 목록이 비어 있어요.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta<typeof CascadingSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEPARTMENTS: Record<string, string[]> = {
  humanities: [
    "인문대학 소속 전체",
    "기독교학과",
    "국어국문학과",
    "영어영문학과",
    "독어독문학과",
    "불어불문학과",
    "중어중문학과",
    "일어일문학과",
    "철학과",
    "사학과",
    "예술창작학부",
    "스포츠학부",
  ],
  science: ["수학과", "물리학과", "화학과"],
  engineering: ["기계공학부", "전기공학부", "건축학부"],
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

const ALL = "all";

function getDepartments(college: string | null) {
  if (college === null) return [];
  if (college === ALL) return Object.values(DEPARTMENTS).flat();
  return DEPARTMENTS[college] ?? [];
}

function SelectExample({ multiple }: { multiple: boolean }) {
  const [college, setCollege] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(department: string) {
    setSelected(previous => {
      if (previous.includes(department)) return previous.filter(item => item !== department);
      return multiple ? [...previous, department] : [department];
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <CascadingSelect
        value={college}
        onValueChange={setCollege}
      >
        <CascadingSelectParents title="단과대">
          <CascadingSelectParent value={ALL}>전체</CascadingSelectParent>
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
          {getDepartments(college).map(department => (
            <CascadingSelectChild
              key={department}
              selected={selected.includes(department)}
              onClick={() => toggle(department)}
            >
              {department}
            </CascadingSelectChild>
          ))}
        </CascadingSelectChildren>
      </CascadingSelect>
      <p className="px-0.5 text-body5-14 text-fg-assistive">
        {selected.length > 0 ? `선택: ${selected.join(", ")}` : "현재 선택된 참여 범위가 없습니다"}
      </p>
    </div>
  );
}

/** 하위 항목을 하나만 고르는 예시예요. "전체"를 누르면 모든 단과대의 학과가 보여요. */
export const Default: Story = {
  render: () => <SelectExample multiple={false} />,
};

/** 하위 항목을 여러 개 고르는 예시예요. */
export const Multiple: Story = {
  render: () => <SelectExample multiple />,
};

/** 상위 항목을 고르기 전 상태예요. 오른쪽 제목이 비활성이에요. */
export const Empty: Story = {
  render: () => (
    <CascadingSelect>
      <CascadingSelectParents title="단과대">
        <CascadingSelectParent value={ALL}>전체</CascadingSelectParent>
        <CascadingSelectParent value="humanities">인문대학</CascadingSelectParent>
      </CascadingSelectParents>
      <CascadingSelectChildren title="소속 학부/학과" />
    </CascadingSelect>
  ),
};
