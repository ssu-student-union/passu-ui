---
"@ssu-student-union/passu-ui": major
---

Header를 PageHeader·SectionHeader로 분리

- `<Header variant="page">` → `<PageHeader>`
- `<Header variant="subtitle">` → `<SectionHeader>`
- `variant="event"`와 `badge`·`meta` prop은 제거. `<PageHeader>`의 `children`에 `Badge`·`PageHeaderMeta`를 넘긴다
