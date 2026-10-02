# @passu/ui

## 1.3.0

### Minor Changes

- 354e75c: Figma `ic/*` 아이콘 컴포넌트 export 추가 (AddIcon, LogoutIcon 등 21종, `Button`의 `leadingIcon`·`trailingIcon`에 바로 사용 가능)

## 1.2.0

### Minor Changes

- 5c3c538: Logo 컴포넌트 추가 (PASSU v3 로고, 기존 미사용 `passu-logo.svg`는 v3 로고로 교체)

## 1.1.0

### Minor Changes

- 15a6741: Popover, Calendar, Table, CascadingSelect, Dialog 컴포넌트 추가

## 1.0.0

### Major Changes

- c2cdbd4: TextButton을 Button의 `ghost` variant로 통합 (`TextButton` 제거, `<Button variant="ghost">`로 대체), Button에 `layout`(fill / single / group) prop과 pressed 스타일 추가
- c2cdbd4: TextField를 FormControl로 이름 변경 (`TextField` → `FormControl`, `TextFieldProps` → `FormControlProps`, `textFieldVariants` → `formFieldVariants`)
  
  FormControl: `invalid`을 지정하지 않으면 `status="error"`일 때 자동으로 invalid 처리, 입력에 `aria-invalid` / `aria-describedby` 연결, 비밀번호 표시 토글 시 아이콘이 바뀌도록 수정
- c2cdbd4: InfoCard, SummaryItem, VerificationItem, CheckIndicator 제거 (user 앱 전용 컴포넌트)

### Minor Changes

- c2cdbd4: Toast(sonner 기반 `Toaster`, `toast`) 추가
- c2cdbd4: Checkbox, Radio에 `label` prop 추가 (라벨을 눌러도 토글·선택). `className`은 컨트롤이 아니라 바깥 `<label>`에 적용
- c2cdbd4: Header를 `variant`(event / page / subtitle)로 개편하고 `badge`, `meta`, `action` prop 추가. 제목·설명 크기가 시안에 맞게 변경

### Patch Changes

- 585d3af: Pretendard 웹폰트를 theme.css에서 불러오도록 수정 (폰트가 설치되지 않은 기기에서도 Pretendard로 표시)
- 6f4e911: StatusIcon의 info 느낌표가 상하 반전되어 시안과 다르게 나오던 문제 수정
- 4bb0c54: 커스텀 글자 크기 클래스(`text-body1-16` 등)가 tailwind-merge에 의해 제거되던 문제 수정

## 0.1.1

### Patch Changes

- 간격 스케일에 `0`을 추가해 `m-0`, `p-0` 등이 동작하도록 수정

## 0.1.0

### Minor Changes

- 첫 릴리스
