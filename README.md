# 📄 Resume & Portfolio

TypeScript + React 기반 개인 이력서 & 포트폴리오 웹사이트.  
GitHub Pages에 자동 배포되며, 프로젝트 클릭 시 블로그 스타일의 상세 페이지를 제공합니다.

> **Live**: [https://\<username\>.github.io/resume/](https://<username>.github.io/resume/)

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Language | TypeScript (strict mode) |
| Framework | React 19 + Vite 7 |
| Routing | React Router v7 (HashRouter) |
| Styling | CSS Modules + CSS Variables |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

---

## 📁 프로젝트 구조

```
resume/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml              # main push → 자동 빌드 & 배포
│   │   └── pr-check.yml            # PR → 타입체크 + ESLint + 빌드 검증
│   └── PULL_REQUEST_TEMPLATE.md
├── src/
│   ├── components/
│   │   ├── Header/                 # 이름, 직함, 네비게이션, 다크모드 토글
│   │   ├── About/                  # 자기소개
│   │   ├── Skills/                 # 기술 스택 (카테고리별 태그)
│   │   ├── Experience/             # 경력사항 (타임라인)
│   │   ├── Projects/               # 프로젝트 카드 그리드
│   │   ├── Education/              # 학력 & 자격증 & 활동
│   │   ├── Contact/                # 연락처 & 링크
│   │   ├── Footer/
│   │   └── common/                 # SectionTitle, Tag, BackToTop, ScrollToTop
│   ├── pages/
│   │   ├── ResumePage.tsx          # 메인 이력서 (한 페이지 스크롤)
│   │   ├── ProjectDetailPage.tsx   # 프로젝트 상세 (블로그 스타일)
│   │   └── NotFoundPage.tsx        # 404
│   ├── data/
│   │   ├── resume.ts              # 이력서 데이터
│   │   └── projects/              # 프로젝트 상세 데이터 (5개 파일)
│   ├── types/
│   │   └── resume.ts              # 타입 정의
│   ├── hooks/
│   │   ├── useScrollSpy.ts        # 네비게이션 하이라이트
│   │   └── useTheme.ts            # 다크모드 토글
│   └── styles/
│       ├── global.css             # 글로벌 스타일, CSS 변수
│       └── print.css              # 인쇄 전용 스타일
├── public/
├── vite.config.ts
├── CLAUDE.md                      # Claude Code 지침서
└── README.md
```

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 20+
- npm 9+
- Git

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:5173/resume/

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 이력서 데이터 수정

모든 이력서 콘텐츠는 `src/data/` 에서 관리합니다.  
컴포넌트를 건드리지 않고 데이터 파일만 수정하면 내용이 반영됩니다.

| 파일 | 내용 |
|------|------|
| `src/data/resume.ts` | 인적사항, 자기소개, 스킬, 경력, 학력, 자격증 |
| `src/data/projects/*.ts` | 프로젝트별 상세 페이지 데이터 |

---

## 🌐 페이지 구성

### 메인 이력서 (`/#/`)

한 페이지 스크롤 형태의 이력서. 상단 네비게이션으로 각 섹션 이동.

| 섹션 | 설명 |
|------|------|
| Header | 이름, 직함, 네비게이션, 다크모드 토글 |
| About | 자기소개 |
| Skills | 기술 스택 (Languages, Frameworks, Infra, Tools) |
| Experience | 경력사항 타임라인 |
| Projects | 프로젝트 카드 그리드 → 클릭 시 상세 페이지 |
| Education | 학력 + 자격증 + 활동 |
| Contact | 이메일, GitHub 등 연락처 |

### 프로젝트 상세 (`/#/projects/:projectId`)

각 프로젝트를 블로그 포스트 형태로 보여주는 페이지.

- 프로젝트 개요, 배경, 상세 작업 내용
- 기술 스택 태그, 코드 스니펫 (선택)
- 성과 및 배운 점
- 이전/다음 프로젝트 네비게이션

## 🔀 Git 브랜치 전략

```
main (보호됨) ← 배포 대상, 직접 push 금지
  └── develop ← 개발 통합 브랜치
        ├── feature/*  ← 기능 개발
        ├── fix/*      ← 버그 수정
        └── hotfix/*   ← 긴급 수정 (main에서 분기)
```

### 커밋 메시지 (Conventional Commits)

```
feat: 새 기능 추가
fix: 버그 수정
style: 스타일/UI 변경
refactor: 리팩토링
docs: 문서 수정
chore: 빌드/설정 변경
```

### 작업 흐름

```bash
# 1. feature 브랜치 생성
git checkout develop && git pull
git checkout -b feature/기능이름

# 2. 작업 & 커밋
git add .
git commit -m "feat: 기능 설명"
git push -u origin feature/기능이름

# 3. PR 생성 (feature → develop)
gh pr create --base develop

# 4. CI 통과 & 머지

# 5. 배포할 때 (develop → main PR)
gh pr create --base main --head develop --title "release: 설명"
# 머지 → 자동 배포
```

---

## ⚙️ CI/CD

### PR 검증 (`pr-check.yml`)

PR 생성 시 자동 실행:

1. **TypeScript 타입 체크** (`tsc --noEmit`)
2. **ESLint 검사**
3. **프로덕션 빌드 테스트**
4. **번들 사이즈 체크** (5MB 초과 시 실패)

### 자동 배포 (`deploy.yml`)

main 브랜치에 머지되면:

1. npm ci → npm run build
2. `dist/` 폴더를 GitHub Pages artifact로 업로드
3. GitHub Pages에 자동 배포

---

## 🛡 GitHub 저장소 설정

### GitHub Pages

**Settings → Pages → Source → GitHub Actions**

### Branch Protection (Rulesets)

**Settings → Rules → Rulesets → New branch ruleset**

| 설정 | 값 |
|------|-----|
| Ruleset Name | `main-protection` |
| Enforcement | Active |
| Target branch | `main` |
| Require a pull request before merging | ✅ |
| → Required approvals | **0** (1인 프로젝트) |
| → Require conversation resolution | ✅ |
| → Allowed merge methods | **Squash only** |
| Require status checks to pass | ✅ → `check` job 추가 |
| Block force pushes | ✅ |
| Restrict deletions | ✅ |

> **Note**: "Require status checks to pass"에서 `check`가 검색에 안 뜨면, PR을 한 번 생성해서 CI가 돌아간 후에 설정하면 됩니다.

---

## 🎨 디자인 특징

- **다크모드**: 시스템 설정 감지 + 수동 토글
- **반응형**: Mobile(~768px) / Tablet(~1024px) / Desktop
- **인쇄 최적화**: `Ctrl+P`로 깔끔한 이력서 인쇄 가능
- **폰트**: Pretendard (한글) + JetBrains Mono (코드)

---

## 🤖 Claude Code 활용

이 프로젝트는 IntelliJ + Claude Code로 개발합니다.  
`CLAUDE.md` 파일에 프로젝트 컨벤션, 타입 정의, 디자인 가이드가 정의되어 있어  
Claude Code가 이를 참고하여 일관된 코드를 생성합니다.

```bash
# 컴포넌트 생성 예시
# → Claude Code에게:
"Experience 컴포넌트를 만들어줘. CLAUDE.md 참고해서."

# 자동 커밋 & 푸시
"변경사항 확인하고 Conventional Commits에 맞게 커밋 후 push해줘."

# PR 생성
"develop 브랜치로 PR 생성해줘. gh cli 사용."
```