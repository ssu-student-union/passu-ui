<div align="center">

<img src="src/assets/passu-logo.svg" width="440" alt="PASSU 로고" />

PASSU `admin`·`user` 앱이 공유하는 UI 컴포넌트 라이브러리입니다. shadcn/ui 스타일의 프리미티브를 여기서 관리합니다.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)

</div>

---

## 📌 목차

- [팀원](#-팀원)
- [시작하기](#-시작하기)
- [개발 명령어](#-개발-명령어)
- [다른 앱에서 사용하기](#-다른-앱에서-사용하기)
- [컨벤션](#-컨벤션)
- [관련 레포](#-관련-레포)

---

## 👥 팀원

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/rlaehgus4418">
        <img src="https://github.com/rlaehgus4418.png" width="100" alt="김도현" /><br />
        <b>김도현</b>
      </a>
      <br />Frontend
    </td>
    <td align="center">
      <a href="https://github.com/learnttuce0321">
        <img src="https://github.com/learnttuce0321.png" width="100" alt="주상후" /><br />
        <b>주상후</b>
      </a>
      <br />Frontend
    </td>
    <td align="center">
      <a href="https://github.com/qowldud">
        <img src="https://github.com/qowldud.png" width="100" alt="배지영" /><br />
        <b>배지영</b>
      </a>
      <br />Frontend
    </td>
    <td align="center">
      <a href="https://github.com/AndyH0ng">
        <img src="https://github.com/AndyH0ng.png" width="100" alt="홍준우" /><br />
        <b>홍준우</b>
      </a>
      <br />Frontend
    </td>
  </tr>
</table>

---

## 🚀 시작하기

> pnpm이 필요합니다.

```bash
# 의존성 설치 (lefthook 훅도 함께 설치됩니다)
pnpm install

# 컴포넌트를 눈으로 확인하는 Storybook 실행 (http://localhost:6006)
pnpm storybook

# 라이브러리 빌드 (dist/passu-ui.js, dist/passu-ui.css, dist/index.d.ts 생성)
pnpm run build
```

---

## 📋 개발 명령어

| 명령어              | 설명                                              |
| ------------------- | -------------------------------------------------- |
| `pnpm storybook`     | Storybook 개발 서버 실행 (`src/stories`)           |
| `pnpm build-storybook` | Storybook 정적 빌드 (`storybook-static/`)       |
| `pnpm run build`     | 타입체크 → `vite build` → 선언 파일(`.d.ts`) 생성  |
| `pnpm run lint`      | Biome 린트 검사                                    |
| `pnpm run lint:fix`  | Biome 린트 자동 수정                               |
| `pnpm run format:fix`| Biome 자동 포맷                                    |
| `pnpm run knip`      | 사용하지 않는 파일/의존성/export 검사               |

---

## 📦 다른 앱에서 사용하기

아직 npm 레지스트리에 배포하지 않아, 로컬 개발 중에는 형제 디렉토리를 pnpm `link:`로 직접 참조합니다.

```json
// admin, user의 package.json
"@passu/ui": "link:../ui"
```

```tsx
import { Button, cn } from "@passu/ui";
```

```css
/* admin, user의 index.css */
@import "tailwindcss";
@import "@passu/ui/theme.css";
```

이 레포에서 `pnpm run build`로 `dist/`를 갱신해야 `admin`/`user`가 최신 컴포넌트를 사용합니다.

---

## 📝 컨벤션

- `src/` 하위에서는 default export를 금지하고 named export만 사용합니다
- 순수 함수(`utils/`)는 React/DOM에 의존하지 않습니다
- 커밋 메시지는 Conventional Commits 타입 프리픽스(`feat:`, `fix:`, `chore:` 등) + 한글 설명으로 작성하며, lefthook의 commit-msg 훅이 커밋 시 자동으로 검사합니다

---

## 🔗 관련 레포

- [`../admin`](../admin) — 학생회 관리자·최고 운영자 앱
- [`../user`](../user) — 참가자(유저) 앱
