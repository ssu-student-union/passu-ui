---
"@passu/ui": major
---

TextField를 FormControl로 이름 변경 (`TextField` → `FormControl`, `TextFieldProps` → `FormControlProps`, `textFieldVariants` → `formFieldVariants`)

FormControl: `invalid`을 지정하지 않으면 `status="error"`일 때 자동으로 invalid 처리, 입력에 `aria-invalid` / `aria-describedby` 연결, 비밀번호 표시 토글 시 아이콘이 바뀌도록 수정
