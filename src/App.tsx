import { useState } from "react";
import PlaceholderIcon from "@/assets/icons/placeholder.svg?react";
import {
  Badge,
  Button,
  Checkbox,
  CheckIndicator,
  Chip,
  Divider,
  Header,
  Icon,
  Radio,
  TextButton,
  TextField,
  TopBar,
  VerificationItem,
} from "./index";

export function App() {
  const [name, setName] = useState("입력된 값");

  return (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 12, background: "#3a3a3a", padding: 24 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            width: 500,
          }}
        >
          <Button
            size="lg"
            theme="neutral"
            variant="primary"
          >
            버튼
          </Button>
          <Button
            size="md"
            theme="brand"
            variant="primary"
          >
            버튼
          </Button>
          <Button
            size="sm"
            theme="status"
            variant="secondary"
          >
            버튼
          </Button>
          <Button
            size="lg"
            theme="neutral"
            variant="line"
          >
            버튼
          </Button>
          <Button
            size="lg"
            theme="brand"
            variant="secondary"
          >
            버튼
          </Button>
          <Button
            size="lg"
            theme="status"
            variant="primary"
          >
            버튼
          </Button>
          <Button
            size="lg"
            theme="neutral"
            variant="primary"
            disabled
          >
            버튼
          </Button>
        </div>

        <div style={{ background: "#fff", padding: 24, borderRadius: 8, display: "flex", gap: 24 }}>
          <TextButton
            size="lg"
            theme="neutral"
          >
            버튼
          </TextButton>
          <TextButton
            size="md"
            theme="brand"
          >
            버튼
          </TextButton>
          <TextButton
            size="sm"
            theme="status"
          >
            버튼
          </TextButton>
          <TextButton
            theme="neutral"
            disabled
          >
            버튼
          </TextButton>
        </div>

        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Badge
            size="sm"
            theme="neutral"
          >
            뱃지
          </Badge>
          <Badge
            size="sm"
            theme="brand"
          >
            뱃지
          </Badge>
          <Badge
            size="sm"
            theme="danger"
          >
            뱃지
          </Badge>
          <Badge
            size="lg"
            theme="neutral"
          >
            뱃지
          </Badge>
          <Badge
            size="lg"
            theme="brand"
          >
            뱃지
          </Badge>
          <Badge
            size="lg"
            theme="danger"
          >
            뱃지
          </Badge>
        </div>

        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Chip
            variant="filter"
            theme="neutral"
            leadingIcon={PlaceholderIcon}
          >
            레이블
          </Chip>
          <Chip
            variant="filter"
            theme="brand"
          >
            레이블
          </Chip>
          <Chip
            variant="input"
            theme="neutral"
            onRemove={() => {}}
          >
            레이블
          </Chip>
          <Chip
            variant="input"
            theme="brand"
            onRemove={() => {}}
          >
            레이블
          </Chip>
          <Chip
            variant="guidance"
            theme="neutral"
          >
            레이블
          </Chip>
          <Chip
            variant="guidance"
            theme="brand"
          >
            레이블
          </Chip>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, background: "#3a3a3a", padding: 24 }}>
        <div style={{ background: "#fff", padding: 24, borderRadius: 8, width: 393 }}>
          <TopBar
            title="Title"
            onBack={() => {}}
            rightSlot={<div style={{ width: 24, height: 24 }} />}
          />
        </div>

        <div style={{ background: "#fff", padding: 24, borderRadius: 8, width: 350 }}>
          <Header
            title="타이틀입니다."
            description="설명입니다."
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, background: "#3a3a3a", padding: 24 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: 300,
          }}
        >
          <Divider size="lg" />
          <Divider size="md" />
          <Divider size="sm" />
        </div>

        <div style={{ background: "#fff", padding: 24, borderRadius: 8, display: "flex", gap: 24 }}>
          <CheckIndicator />
          <Checkbox />
          <Radio />
          <CheckIndicator checked />
          <Checkbox defaultChecked />
          <Radio defaultChecked />
        </div>

        <div style={{ background: "#fff", padding: 24, borderRadius: 8, display: "flex", gap: 16 }}>
          <Icon size="xs" />
          <Icon size="sm" />
          <Icon size="md" />
          <Icon size="lg" />
          <Icon size="xl" />
        </div>

        <div
          style={{
            background: "#f7f7f7",
            border: "1px solid #f2f2f2",
            padding: 12,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 310,
          }}
        >
          <VerificationItem
            label="소속 · 학적"
            status="checking"
          />
          <Divider size="sm" />
          <VerificationItem
            label="학생회비 납부"
            status="pending"
          />
          <Divider size="sm" />
          <VerificationItem
            label="본인 인증"
            status="complete"
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, background: "#3a3a3a", padding: 24 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: 360,
          }}
        >
          <TextField
            label="레이블"
            required
            helperText="서브레이블"
            placeholder="표시자"
          />

          <TextField
            label="레이블"
            required
            status="error"
            helperText="서브레이블"
            placeholder="표시자"
            invalid
          />

          <TextField
            label="레이블"
            required
            status="success"
            helperText="서브레이블"
            placeholder="표시자"
            value={name}
            onChange={e => setName(e.target.value)}
            onClear={() => setName("")}
          />

          <TextField
            label="비밀번호"
            required
            helperText="서브레이블"
            placeholder="표시자"
            visibilityToggle
          />
        </div>
      </div>
    </div>
  );
}
