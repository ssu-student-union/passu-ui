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

GitHub Packages에 `@ssu-student-union/passu-ui`로 배포됩니다. 패키지는 레포 오른쪽 사이드바의 **Packages**에서 볼 수 있습니다.

GitHub Packages는 설치할 때 인증이 필요합니다. `read:packages` 권한이 있는 토큰을 준비하고(로컬은 `gh auth refresh -s read:packages` 후 `gh auth token`), 앱 레포의 `.npmrc`에 등록합니다.

```ini
# admin, user의 .npmrc
@ssu-student-union:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

CI·배포 환경에서는 `NPM_TOKEN` 환경 변수에 같은 토큰을 넣습니다. 이 레포는 비공개이므로 패키지 설정(Package settings → Manage Actions access)에서 앱 레포의 접근도 허용해야 합니다.

```bash
pnpm add @ssu-student-union/passu-ui
```

```tsx
import { Button, cn } from "@ssu-student-union/passu-ui";
```

```css
/* admin, user의 index.css */
@import "tailwindcss";
@import "@ssu-student-union/passu-ui/theme.css";
```

### 로컬에서 앱과 함께 개발하기

배포 전 변경 사항을 앱에서 확인하려면 앱 레포에서 로컬 ui를 링크합니다. 이 레포에서 `pnpm run build`로 `dist/`를 갱신해야 반영됩니다.

```bash
pnpm link ../ui    # 링크
pnpm unlink @ssu-student-union/passu-ui && pnpm install    # 해제
```

링크로 바뀐 `package.json`·lockfile은 커밋하지 않도록 주의합니다.

### 릴리스

[Changesets](https://github.com/changesets/changesets)로 버전을 관리하고 GitHub Packages에 배포합니다.

1. 사용자에게 영향이 있는 변경이면 PR에 `pnpm changeset`으로 만든 changeset 파일을 함께 커밋합니다.
2. `main`에 머지되면 GitHub Actions가 "chore: 패키지 버전 업데이트" PR을 자동으로 엽니다.
3. 그 PR을 머지하면 GitHub Packages 배포와 함께 `v{버전}` 태그·GitHub Release가 만들어집니다.
4. 앱에서 `pnpm up @ssu-student-union/passu-ui`로 올립니다.

### 릴리스 봇

릴리스 PR·태그·Release는 `github-actions[bot]`이 아니라 전용 GitHub App(릴리스 봇)으로 만듭니다. 조직 레벨 변수·시크릿을 쓰므로 다른 레포의 릴리스 워크플로에도 같은 방식으로 붙일 수 있습니다. (`.github/workflows/release.yml`의 "릴리스 봇 토큰 발급" 단계 참고)

| 종류 | 이름 | 내용 |
|---|---|---|
| 조직 변수 | `RELEASE_BOT_CLIENT_ID` | GitHub App의 Client ID |
| 조직 시크릿 | `RELEASE_BOT_PRIVATE_KEY` | GitHub App의 private key(`.pem` 전체) |

App 권한은 Repository permissions의 **Contents: Read and write**, **Pull requests: Read and write**, **Metadata: Read-only**만 줍니다. 새 레포에서 쓰려면 App을 그 레포에 설치하고, 조직 변수·시크릿의 접근 가능한 레포에 추가하세요. GitHub Packages 배포는 App 토큰으로 인증할 수 없어서 워크플로의 `GITHUB_TOKEN`(`packages: write`)을 그대로 씁니다.

### Storybook 배포

Cloudflare Workers Builds가 이 레포를 직접 빌드해 Storybook을 Workers 정적 에셋(`wrangler.jsonc`)으로 배포합니다. `main`에 머지되면 운영 배포가 되고, 다른 브랜치와 PR은 미리보기 빌드로 올라갑니다.

Cloudflare 대시보드의 Workers & Pages → `passu-ui` → Settings → Build에서 다음과 같이 설정합니다.

| 설정                  | 값                                                                       |
| --------------------- | ------------------------------------------------------------------------ |
| Build command         | `pnpm run build-storybook`                                               |
| Deploy command        | `npx wrangler deploy` (기본값)                                            |
| Preview command       | 기본값 (`npx wrangler preview`)                                           |
| Build variables       | `PNPM_VERSION` = `11` (Cloudflare 기본 pnpm은 10.11.1이고 `mise.toml`은 읽지 않습니다) |

- `wrangler.jsonc`의 `name`은 대시보드의 Worker 이름과 같아야 합니다.
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
