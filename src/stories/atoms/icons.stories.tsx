import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AddIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AsteriskIcon,
  CalendarIcon,
  CancelIcon,
  ClockIcon,
  CloseIcon,
  DownloadIcon,
  DraftIcon,
  DropDownIcon,
  DropUpIcon,
  EditIcon,
  LogoutIcon,
  PriorityHighIcon,
  QuestionMarkIcon,
  StatusSuccessIcon,
  UploadIcon,
  VisibilityOffIcon,
  VisibilityOnIcon,
} from "@/components/atoms/icons";

const icons = [
  { name: "AddIcon", Icon: AddIcon },
  { name: "ArrowForwardIcon", Icon: ArrowForwardIcon },
  { name: "ArrowLeftIcon", Icon: ArrowLeftIcon },
  { name: "ArrowRightIcon", Icon: ArrowRightIcon },
  { name: "AsteriskIcon", Icon: AsteriskIcon },
  { name: "CalendarIcon", Icon: CalendarIcon },
  { name: "CancelIcon", Icon: CancelIcon },
  { name: "ClockIcon", Icon: ClockIcon },
  { name: "CloseIcon", Icon: CloseIcon },
  { name: "DownloadIcon", Icon: DownloadIcon },
  { name: "DraftIcon", Icon: DraftIcon },
  { name: "DropDownIcon", Icon: DropDownIcon },
  { name: "DropUpIcon", Icon: DropUpIcon },
  { name: "EditIcon", Icon: EditIcon },
  { name: "LogoutIcon", Icon: LogoutIcon },
  { name: "PriorityHighIcon", Icon: PriorityHighIcon },
  { name: "QuestionMarkIcon", Icon: QuestionMarkIcon },
  { name: "StatusSuccessIcon", Icon: StatusSuccessIcon },
  { name: "UploadIcon", Icon: UploadIcon },
  { name: "VisibilityOffIcon", Icon: VisibilityOffIcon },
  { name: "VisibilityOnIcon", Icon: VisibilityOnIcon },
] as const;

const meta = {
  title: "Atoms/Icons",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-4 p-0">
      {icons.map(({ name, Icon }) => (
        <li
          key={name}
          className="flex flex-col items-center gap-2 rounded-8 border border-border-default p-4 text-fg-default"
        >
          <Icon className="size-6" />
          <span className="text-caption1-12 text-fg-alternative">{name}</span>
        </li>
      ))}
    </ul>
  ),
};
