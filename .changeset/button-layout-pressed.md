---
"@passu/ui": major
---

TextButton을 Button의 `ghost` variant로 통합 (`TextButton` 제거, `<Button variant="ghost">`로 대체), Button에 `layout`(fill / single / group) prop과 pressed 스타일 추가

TextField를 FormControl로 이름 변경 (`TextField` → `FormControl`, `TextFieldProps` → `FormControlProps`, `textFieldVariants` → `formFieldVariants`)

FormControl: `invalid`을 지정하지 않으면 `status="error"`일 때 자동으로 invalid 처리, 입력에 `aria-invalid` / `aria-describedby` 연결, 비밀번호 표시 토글 시 아이콘이 바뀌도록 수정

InfoCard, SummaryItem, VerificationItem, CheckIndicator 제거 (user 앱 전용 컴포넌트)

Header를 `variant`(event / page / subtitle)로 개편하고 `badge`, `meta`, `action` prop 추가. 제목·설명 크기가 시안에 맞게 변경
