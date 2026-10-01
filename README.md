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
| `pnpm changeset`     | 변경 사항과 버전 단위(patch/minor/major) 기록      |

---

## 📦 다른 앱에서 사용하기

이 레포는 비공개라서 npm에 배포하지 않고, `admin`·`user`가 GitHub의 **릴리스 태그**를 Git 의존성으로 설치합니다.

```json
// admin, user의 package.json
"@passu/ui": "github:ssu-student-union/passu-ui#v0.1.0"
```

```yaml
# admin, user의 pnpm-workspace.yaml
# 설치할 때 ui의 dist를 빌드(prepack)해야 하므로 빌드 실행을 허용합니다.
allowBuilds:
  "@passu/ui@git+https://github.com/ssu-student-union/passu-ui.git": true
```

```tsx
import { Button, cn } from "@passu/ui";
```

```css
/* admin, user의 index.css */
@import "tailwindcss";
@import "@passu/ui/theme.css";
```

### 인증

비공개 레포라서 설치할 때 GitHub 인증이 필요합니다.

- **로컬:** `gh auth login` 또는 SSH 키 등 이미 GitHub에 접근할 수 있으면 별도 설정이 필요 없습니다.
- **CI·배포 환경:** `passu-ui`의 Contents 읽기 권한이 있는 토큰(`PASSU_UI_PAT`)을 git에 등록한 뒤 설치합니다.

```yaml
- name: passu-ui 접근 설정
  run: git config --global url."https://x-access-token:${PASSU_UI_PAT}@github.com/".insteadOf "https://github.com/"
  env:
    PASSU_UI_PAT: ${{ secrets.PASSU_UI_PAT }}
```

### 로컬에서 앱과 함께 개발하기

배포 전 변경 사항을 앱에서 확인하려면 앱 레포에서 로컬 ui를 링크합니다. 이 레포에서 `pnpm run build`로 `dist/`를 갱신해야 반영됩니다.

```bash
pnpm link ../ui    # 링크
pnpm unlink @passu/ui && pnpm install    # 해제
```

링크로 바뀐 `package.json`·lockfile은 커밋하지 않도록 주의합니다.

### 릴리스

[Changesets](https://github.com/changesets/changesets)로 버전과 태그를 관리합니다.

1. 사용자에게 영향이 있는 변경이면 PR에 `pnpm changeset`으로 만든 changeset 파일을 함께 커밋합니다.
2. `main`에 머지되면 GitHub Actions가 "chore: 패키지 버전 업데이트" PR을 자동으로 엽니다.
3. 그 PR을 머지하면 `v{버전}` 태그와 GitHub Release가 만들어집니다.
4. 앱에서 의존성의 `#v0.1.0`을 새 태그로 올리고 `pnpm install`합니다.

### Storybook 배포

`main`에 머지되면 GitHub Actions(`storybook.yml`)가 Storybook을 빌드해 Cloudflare Workers의 정적 에셋(`wrangler.jsonc`)으로 배포합니다.

- 레포 시크릿 `CLOUDFLARE_API_TOKEN`(Edit Cloudflare Workers 템플릿)과 `CLOUDFLARE_ACCOUNT_ID`가 없으면 배포를 건너뜁니다.
- 배포 주소는 기본적으로 누구나 열 수 있으므로, 팀원만 보게 하려면 Cloudflare Access로 접근을 제한합니다.

---

## 📝 컨벤션

- `src/` 하위에서는 default export를 금지하고 named export만 사용합니다
- `export`는 선언부에 붙이지 않고 파일 맨 아래에 모아서 씁니다. 타입(`export type { ... }`)을 먼저, 값(`export { ... }`)을 다음에 두고 이름은 알파벳 순으로 정렬합니다 (`toast.tsx` 참고)
- 순수 함수(`utils/`)는 React/DOM에 의존하지 않습니다
- 커밋 메시지는 Conventional Commits 타입 프리픽스(`feat:`, `fix:`, `chore:` 등) + 한글 설명으로 작성하며, lefthook의 commit-msg 훅이 커밋 시 자동으로 검사합니다

---

## 🔗 관련 레포

- [`../admin`](../admin) — 학생회 관리자·최고 운영자 앱
- [`../user`](../user) — 참가자(유저) 앱
