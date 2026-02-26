# CLAUDE.md - GitHub Pages 이력서 & 포트폴리오 프로젝트

## 📌 프로젝트 개요

GitHub Pages에 배포할 개인 이력서(Resume) + 포트폴리오(Project Detail) 웹사이트.
- **메인 페이지**: 이력서 (한 페이지 스크롤)
- **프로젝트 상세 페이지**: 각 프로젝트를 클릭하면 블로그 포스트 형태의 상세 페이지로 이동
- 반응형 디자인, 다크모드, 인쇄 최적화 지원

---

## 🛠 기술 스택

- **Language**: TypeScript (strict mode)
- **Framework**: React 18+
- **Routing**: React Router v6 (HashRouter — GitHub Pages 호환)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **배포**: GitHub Pages (GitHub Actions)
- **CI/CD**: GitHub Actions
- **IDE**: IntelliJ IDEA (with Claude Code)

> **중요**: GitHub Pages는 SPA 라우팅을 기본 지원하지 않으므로 `BrowserRouter` 대신 `HashRouter`를 사용한다.
> URL 형태: `https://<username>.github.io/<repo>/#/projects/witchworld-metaverse`

---

## 📁 프로젝트 구조

```
resume/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml              # main push 시 자동 빌드 & 배포
│   │   └── pr-check.yml            # PR 생성 시 자동 코드 검증
│   └── PULL_REQUEST_TEMPLATE.md
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx          # 이름, 직함, 네비게이션
│   │   │   └── Header.module.css
│   │   ├── About/
│   │   │   ├── About.tsx           # 자기소개
│   │   │   └── About.module.css
│   │   ├── Experience/
│   │   │   ├── Experience.tsx      # 경력사항 (타임라인)
│   │   │   └── Experience.module.css
│   │   ├── Skills/
│   │   │   ├── Skills.tsx          # 기술 스택
│   │   │   └── Skills.module.css
│   │   ├── Projects/
│   │   │   ├── ProjectCard.tsx     # 프로젝트 카드 (클릭 → 상세 페이지)
│   │   │   ├── ProjectList.tsx     # 프로젝트 목록 그리드
│   │   │   └── Projects.module.css
│   │   ├── Education/
│   │   │   ├── Education.tsx       # 학력 & 자격증 & 활동
│   │   │   └── Education.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx         # 연락처 & 링크
│   │   │   └── Contact.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   └── common/
│   │       ├── ScrollToTop.tsx     # 라우트 변경 시 스크롤 초기화
│   │       ├── SectionTitle.tsx    # 공통 섹션 제목 컴포넌트
│   │       ├── Tag.tsx             # 기술 스택 태그 칩
│   │       ├── BackToTop.tsx       # 최상단 이동 버튼
│   │       └── common.module.css
│   ├── pages/
│   │   ├── ResumePage.tsx          # 메인 이력서 페이지 (모든 섹션 조합)
│   │   ├── ProjectDetailPage.tsx   # 프로젝트 상세 페이지 (블로그 스타일)
│   │   └── NotFoundPage.tsx        # 404 페이지
│   ├── data/
│   │   ├── resume.ts              # 이력서 기본 데이터
│   │   └── projects/              # 프로젝트 상세 콘텐츠 (마크다운 스타일)
│   │       ├── index.ts           # 프로젝트 상세 데이터 export
│   │       ├── witchworld-metaverse.ts
│   │       ├── witchbox-streaming.ts
│   │       ├── ix-queue.ts
│   │       ├── waybest-kyc.ts
│   │       └── witchpay-web3.ts
│   ├── types/
│   │   └── resume.ts              # 타입 정의
│   ├── hooks/
│   │   ├── useScrollSpy.ts        # 현재 섹션 감지 (네비게이션 하이라이트)
│   │   └── useTheme.ts            # 다크모드 토글
│   ├── styles/
│   │   ├── global.css             # 글로벌 스타일, CSS 변수
│   │   └── print.css              # 인쇄 전용 스타일
│   ├── App.tsx                    # 라우터 설정
│   └── main.tsx                   # 엔트리포인트
├── public/
│   ├── favicon.ico
│   ├── profile.jpg
│   └── projects/                  # 프로젝트 상세 페이지 이미지
│       ├── metaverse-architecture.png
│       ├── witchbox-pipeline.png
│       └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
├── .prettierrc
├── CLAUDE.md
└── README.md
```

---

## 📊 타입 정의

```ts
// src/types/resume.ts

// ===== 메인 이력서 데이터 =====
export interface ResumeData {
  personal: PersonalInfo;
  about: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: ProjectSummary[];
  education: Education[];
  certifications: Certification[];
  activities: Activity[];
}

export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  email: string;
  github: string;
  blog?: string;
  linkedin?: string;
  location?: string;
}

export interface SkillCategory {
  category: string;                  // "Languages", "Frameworks" 등
  items: string[];
}

export interface Experience {
  company: string;
  companyDesc: string;               // 회사 한줄 설명
  period: string;
  role: string;
  descriptions: string[];
  techKeywords: string[];
}

export interface ProjectSummary {
  id: string;                        // URL slug: "witchworld-metaverse"
  title: string;
  company: string;                   // 소속 회사/프로젝트명
  period: string;
  role: string;
  techStack: string[];
  summary: string;                   // 카드에 보여줄 한줄 요약
  status: 'completed' | 'in-progress';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Activity {
  name: string;
  period: string;
  description: string;
}

// ===== 프로젝트 상세 페이지 =====
export interface ProjectDetail {
  id: string;                        // ProjectSummary.id와 매칭
  title: string;
  company: string;
  period: string;
  role: string;
  techStack: string[];
  status: 'completed' | 'in-progress';

  // 블로그 스타일 상세 내용
  overview: string;                  // 프로젝트 개요 (2~3문장)
  background?: string;               // 프로젝트 배경/문제 상황
  sections: ProjectSection[];        // 주요 작업 내용 (블로그 섹션)
  results?: string[];                // 성과/결과
  lessons?: string[];                // 배운 점
  images?: ProjectImage[];           // 스크린샷, 아키텍처 다이어그램 등
}

export interface ProjectSection {
  title: string;                     // 소제목
  content: string;                   // 본문 (HTML 또는 마크다운 렌더링)
  codeSnippet?: {                    // 코드 예시 (선택)
    language: string;
    code: string;
  };
  image?: ProjectImage;              // 섹션별 이미지 (선택)
}

export interface ProjectImage {
  src: string;                       // public/projects/ 내 경로
  alt: string;
  caption?: string;
}
```

---

## 📝 이력서 데이터 (resume.ts 기반)

```ts
// src/data/resume.ts
import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personal: {
    name: '본인이름',
    nameEn: 'Your Name',
    title: 'Backend Developer',
    email: 'your@email.com',
    github: 'https://github.com/yourgithub',
    // blog, linkedin 등 필요시 추가
  },

  about: `새로운 기술 스택이나 낯선 도메인을 만나도 빠르게 적응하고 실질적인 결과로 연결하는 백엔드 개발자입니다.
블록체인 결제 시스템과 미디어 플랫폼에서 동시성 제어와 시스템 안정성에 집중하며, 레퍼런스가 부족한 영역이나 복잡한 인프라 문제를 만나도 구조를 빠르게 파악하고 필요한 방향을 주도적으로 설정하여 프로덕션 문제를 해결해왔습니다.
단순 구현을 넘어 비즈니스 임팩트를 고민하며, AI 기반 코드 리뷰 등 새로운 도구를 적극 활용하고 팀원들과 기술 검증을 함께 진행하면서 서비스 품질을 높입니다.`,

  skills: [
    { category: 'Languages', items: ['Go', 'Java', 'Python'] },
    { category: 'Frameworks', items: ['Gin', 'Spring Boot'] },
    { category: 'Infrastructure & Databases', items: ['AWS', 'Kubernetes', 'Docker', 'MySQL', 'Redis', 'RabbitMQ'] },
    { category: 'Tools & IDEs', items: ['Git', 'GitHub', 'VSCode', 'IntelliJ'] },
  ],

  experience: [
    {
      company: '위치월드',
      companyDesc: 'WebGL 기반 메타버스 & Web3 서비스 개발사',
      period: '2023.08 ~ 2025.12',
      role: '백엔드 개발자',
      descriptions: [
        '메타버스 플랫폼, 숏폼 비디오 스트리밍, 대기열 시스템, KYC 인증, 푸시 알림, Web3 지갑·결제 시스템 등 다양한 서비스 백엔드 개발',
        'API 서버 설계 및 운영',
        'MySQL 기반 데이터베이스 설계 및 운영',
        'AWS 인프라 기반 유지보수 및 관리',
        '블록체인, 실시간 채팅, 커머스, 미디어 처리 등 다양한 도메인 경험',
      ],
      techKeywords: ['Go', 'Gin', 'Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'AWS', 'Kubernetes'],
    },
  ],

  projects: [
    {
      id: 'witchworld-metaverse',
      title: 'WebGL 기반 메타버스 플랫폼 고도화',
      company: '위치월드',
      period: '2023.08 ~ 2024.10',
      role: '백엔드 개발자',
      techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'RabbitMQ', 'Java', 'Spring Boot', 'AWS'],
      summary: 'Unity WebGL 메타버스 플랫폼의 중계 API 서버, 실시간 결제/채팅 시스템 개발',
      status: 'completed',
    },
    {
      id: 'witchbox-streaming',
      title: '비디오 스트리밍 숏폼 플랫폼 개발',
      company: '위치박스',
      period: '2024.06 ~ 2025.06',
      role: '백엔드 개발자',
      techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'Java', 'Spring Boot', 'AWS', 'Python'],
      summary: 'AWS 기반 비디오 인코딩 파이프라인, CDN 최적화, 푸시 알림 시스템 개발',
      status: 'completed',
    },
    {
      id: 'ix-queue',
      title: '대기 등록 시스템 개발',
      company: '익스',
      period: '2025.03 ~ 2025.05',
      role: '백엔드 개발자',
      techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
      summary: 'Redis Sorted Set 기반 우선순위 대기열 + K8s 오토스케일링',
      status: 'completed',
    },
    {
      id: 'waybest-kyc',
      title: 'KYC 인증 시스템 개발',
      company: '웨이비스트',
      period: '2025.05 ~ 2025.08',
      role: '백엔드 개발자',
      techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
      summary: 'Sumsub 연동 신원 인증 시스템 설계 및 비동기 처리 최적화',
      status: 'completed',
    },
    {
      id: 'witchpay-web3',
      title: 'Web3 지갑 연동 거래 시스템 개발',
      company: '위치페이',
      period: '2025.07 ~ 2025.12',
      role: '백엔드 개발자',
      techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
      summary: 'ERC-4337 기반 스마트 지갑, 소셜 로그인 온보딩, 블록체인 트랜잭션 시스템',
      status: 'in-progress',
    },
  ],

  education: [
    {
      institution: '창원대학교',
      degree: '컴퓨터공학과 학사',
      period: '2017.03 ~ 2023.02',
    },
  ],

  certifications: [
    { name: '정보처리기사', date: '2022.11' },
    { name: 'AWS Certified Developer – Associate', date: '2023.02' },
    { name: 'SQLD', date: '2023.03' },
  ],

  activities: [
    {
      name: 'Spharos Academy 1기',
      period: '2022.06 ~ 2022.12',
      description: '신세계 I&C 실무 중심 SW 교육 프로그램. 18주 과정, 웹 프로젝트 2개 수행(2차: 기업 연계 프로젝트). 현업 실무 기술 + 협업·커뮤니케이션 역량 강화.',
    },
  ],
};
```

---

## 📄 프로젝트 상세 데이터 가이드

각 프로젝트의 상세 페이지 데이터는 `src/data/projects/` 폴더에 개별 파일로 관리한다.

### 파일 작성 예시:
```ts
// src/data/projects/witchworld-metaverse.ts
import { ProjectDetail } from '../../types/resume';

export const witchworldMetaverse: ProjectDetail = {
  id: 'witchworld-metaverse',
  title: 'WebGL 기반 메타버스 플랫폼 고도화',
  company: '위치월드',
  period: '2023.08 ~ 2024.10',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'RabbitMQ', 'Java', 'Spring Boot', 'AWS'],
  status: 'completed',

  overview: 'Unity WebGL 프로젝트와 React 프론트엔드를 연결하는 메타버스 플랫폼의 백엔드 시스템을 설계·개발했습니다.',

  background: '기존 플랫폼의 동시 결제 처리 병목과 실시간 소통 부재 문제를 해결하기 위해 시스템 고도화가 필요했습니다.',

  sections: [
    {
      title: '중계 API 서버 설계·개발',
      content: 'Unity WebGL 프로젝트와 React 프론트엔드를 연결하는 중계 API 서버를 설계·개발하고 안정화 운영했습니다. ...',
    },
    {
      title: '마켓플레이스 실시간 결제 시스템 고도화',
      content: 'Go 고루틴 기반 비동기 처리를 도입하여 동시 결제 요청 처리량을 개선했습니다. nGrinder를 활용한 부하 테스트를 통해 TPS를 측정하고 병목 지점을 파악하여 최적화했습니다.',
      // 선택: 아키텍처 다이어그램 이미지
      // image: { src: '/projects/metaverse-payment-flow.png', alt: '결제 시스템 아키텍처' }
    },
    {
      title: '실시간 채팅 시스템 설계 및 구현',
      content: 'Spring Boot + STOMP 기반(RabbitMQ 활용) 채팅 서버를 개발하여 사용자 간 원활한 소통을 지원하고 시스템 확장성을 확보했습니다.',
    },
  ],

  results: [
    '동시 결제 요청 처리량 개선 (Go 고루틴 비동기 처리 도입)',
    'nGrinder 부하 테스트를 통한 TPS 향상 확인',
    '실시간 채팅 시스템 안정적 운영',
  ],

  lessons: [
    'Go의 동시성 모델(고루틴, 채널)을 프로덕션 결제 시스템에 적용한 경험',
    'WebGL + 웹 프론트엔드 간 통신 설계의 복잡성과 해결 방법',
  ],
};
```

### 상세 데이터 Export:
```ts
// src/data/projects/index.ts
import { ProjectDetail } from '../../types/resume';
import { witchworldMetaverse } from './witchworld-metaverse';
import { witchboxStreaming } from './witchbox-streaming';
import { ixQueue } from './ix-queue';
import { waybestKyc } from './waybest-kyc';
import { witchpayWeb3 } from './witchpay-web3';

export const projectDetails: Record<string, ProjectDetail> = {
  'witchworld-metaverse': witchworldMetaverse,
  'witchbox-streaming': witchboxStreaming,
  'ix-queue': ixQueue,
  'waybest-kyc': waybestKyc,
  'witchpay-web3': witchpayWeb3,
};
```

---

## 🗺 라우팅 구조

```tsx
// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ResumePage from './pages/ResumePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<ResumePage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);

export default App;
```

### 페이지별 설명:
| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/#/` | ResumePage | 메인 이력서 (한 페이지 스크롤) |
| `/#/projects/:projectId` | ProjectDetailPage | 프로젝트 상세 (블로그 스타일) |
| `/#/*` | NotFoundPage | 404 |

### ProjectDetailPage 레이아웃:
```
┌─────────────────────────────────────────┐
│  ← 이력서로 돌아가기                      │
├─────────────────────────────────────────┤
│  프로젝트 제목                            │
│  회사 · 기간 · 상태뱃지                    │
│  [Go] [Gin] [MySQL] [Redis] [AWS]       │ ← 기술 스택 태그
├─────────────────────────────────────────┤
│  📋 개요                                 │
│  프로젝트 설명 텍스트...                    │
├─────────────────────────────────────────┤
│  🔧 배경 (선택)                           │
│  문제 상황 설명...                         │
├─────────────────────────────────────────┤
│  섹션 1: 중계 API 서버 설계·개발            │
│  본문 텍스트...                            │
│  [이미지] (선택)                           │
│  [코드 스니펫] (선택)                      │
├─────────────────────────────────────────┤
│  섹션 2: 실시간 결제 시스템 고도화           │
│  본문 텍스트...                            │
├─────────────────────────────────────────┤
│  🏆 성과                                 │
│  - 성과 1                                │
│  - 성과 2                                │
├─────────────────────────────────────────┤
│  💡 배운 점                               │
│  - 교훈 1                                │
├─────────────────────────────────────────┤
│  ← 이전 프로젝트  |  다음 프로젝트 →       │ ← 프로젝트 간 네비게이션
└─────────────────────────────────────────┘
```

---

## 🎨 디자인 가이드

### 컬러 팔레트 (CSS 변수)
```css
:root {
  /* Light mode */
  --color-bg: #ffffff;
  --color-bg-secondary: #f8f9fa;
  --color-text: #1a1a2e;
  --color-text-secondary: #6c757d;
  --color-primary: #2563eb;          /* 파란색 계열 — 개발자/기술 느낌 */
  --color-primary-light: #dbeafe;
  --color-accent: #10b981;           /* 녹색 — 진행중 뱃지 등 */
  --color-border: #e5e7eb;
  --color-tag-bg: #f1f5f9;
  --color-tag-text: #475569;
}

[data-theme='dark'] {
  --color-bg: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-text: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-primary: #3b82f6;
  --color-primary-light: #1e3a5f;
  --color-accent: #34d399;
  --color-border: #334155;
  --color-tag-bg: #1e293b;
  --color-tag-text: #94a3b8;
}
```

### 타이포그래피
- 한글 폰트: Pretendard (웹폰트)
- 영문/코드: JetBrains Mono (코드 스니펫용)
- 기본 사이즈: 16px, 라인 높이: 1.6

### 레이아웃
- 메인 컨텐츠 최대 너비: 800px (이력서는 읽기 편한 좁은 폭)
- 프로젝트 상세 페이지도 동일한 최대 너비 유지 (블로그 스타일)
- 섹션 간 여백: 4rem
- 반응형 브레이크포인트: mobile(~768px), tablet(~1024px), desktop(1024px~)

---

## 📝 코딩 컨벤션

### 일반 규칙
- 모든 코드는 **TypeScript strict mode** 사용
- `any` 타입 사용 금지 — 반드시 명시적 타입 정의
- 컴포넌트는 **함수형 컴포넌트 + arrow function** 스타일
- 파일명: **PascalCase** (컴포넌트), **camelCase** (유틸/데이터), **kebab-case** (프로젝트 데이터 파일)
- 한 파일에 하나의 컴포넌트만 export (default export)

### 컴포넌트 작성 패턴
```tsx
import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // props 정의
}

const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <section className={styles.container}>
      {/* 내용 */}
    </section>
  );
};

export default ComponentName;
```

### 이력서 데이터 관리 원칙
- 모든 이력서 콘텐츠는 `src/data/` 에서 중앙 관리
- 컴포넌트는 데이터를 props로 받아 **렌더링만** 담당 (데이터를 직접 import하지 않음)
- 이력서 내용 수정 시 `data/` 파일만 변경
- 프로젝트 상세 데이터는 `data/projects/` 폴더에 프로젝트별 개별 파일

### 스타일링 규칙
- CSS Modules 사용 (`*.module.css`)
- 글로벌 CSS 변수로 색상/폰트 관리
- `@media print` 스타일 포함 (이력서 인쇄 시 깔끔한 레이아웃)
- 애니메이션: `prefers-reduced-motion` 존중

---

## 🔀 Git 브랜치 전략

### 브랜치 구조
```
main (보호됨) ← 배포 대상, 직접 push 금지
  └── develop ← 개발 통합 브랜치
        ├── feature/header-component
        ├── feature/project-detail-page
        ├── feature/dark-mode
        └── fix/responsive-layout
```

### 규칙
- `main`: **직접 push 금지**. develop → main PR을 통해서만 머지. 머지 시 자동 배포.
- `develop`: 기능 개발 통합 브랜치.
- `feature/*`: 기능별 브랜치. develop에서 분기.
- `fix/*`: 버그 수정 브랜치.
- `hotfix/*`: 긴급 수정. main에서 분기 → main으로 PR.

### 커밋 메시지 컨벤션 (Conventional Commits)
```
feat: 새 기능 추가
fix: 버그 수정
style: 스타일/UI 변경 (로직 변경 없음)
refactor: 리팩토링
docs: 문서 수정
chore: 빌드/설정 변경
```

예시:
```
feat: Experience 섹션 타임라인 컴포넌트 구현
feat: ProjectDetailPage 블로그 스타일 레이아웃 구현
fix: 모바일에서 프로젝트 카드 그리드 깨지는 문제 수정
style: 다크모드 색상 변수 조정
```

---

## 🚀 CI/CD 파이프라인

### 1. PR 자동 검증 (`.github/workflows/pr-check.yml`)

```yaml
name: PR Check

on:
  pull_request:
    branches: [main, develop]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: TypeScript type check
        run: npx tsc --noEmit

      - name: ESLint check
        run: npx eslint src/ --ext .ts,.tsx

      - name: Build test
        run: npm run build

      - name: Check bundle size
        run: |
          SIZE=$(du -sk dist/ | cut -f1)
          echo "📦 Bundle size: ${SIZE}KB"
          if [ "$SIZE" -gt 5120 ]; then
            echo "⚠️ Bundle exceeds 5MB!"
            exit 1
          fi
```

### 2. 자동 배포 (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## ⚙️ GitHub 저장소 설정 (수동)

### 1. Branch Protection Rules
GitHub repo → Settings → Branches → Add rule:
- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass (`check` job)
- ✅ Require branches to be up to date before merging

### 2. GitHub Pages 설정
GitHub repo → Settings → Pages → Source: **GitHub Actions**

### 3. Vite 설정
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<repository-name>/',  // GitHub repo 이름으로 변경
  // <username>.github.io 레포면 base: '/'
});
```

---

## 🤖 Claude Code 작업 지시 가이드

### 프로젝트 초기 설정:
```
Vite + React + TypeScript 프로젝트를 생성해줘.
- react-router-dom v6 설치
- ESLint + Prettier 설정
- CSS Modules 설정
- CLAUDE.md의 프로젝트 구조대로 폴더/파일 생성
- .github/workflows에 deploy.yml과 pr-check.yml 생성
- vite.config.ts에 GitHub Pages용 base 경로 설정
```

### 컴포넌트 개발:
```
CLAUDE.md의 타입 정의와 데이터 구조를 참고해서
Experience 컴포넌트를 만들어줘.
- resumeData.experience를 props로 받아 렌더링
- 타임라인 형태 레이아웃
- CSS Modules, 반응형, 다크모드 지원
```

### 프로젝트 상세 페이지:
```
ProjectDetailPage를 만들어줘.
- URL 파라미터(:projectId)로 프로젝트 데이터 조회
- 블로그 포스트 스타일 레이아웃
- 이전/다음 프로젝트 네비게이션
- 존재하지 않는 projectId면 NotFoundPage로 리다이렉트
- CLAUDE.md의 레이아웃 다이어그램 참고
```

### 자동 커밋/푸시:
```
현재 변경사항을 확인하고, Conventional Commits에 맞는
커밋 메시지를 작성해서 커밋하고 현재 브랜치에 push해줘.
```

### PR 생성:
```
현재 feature 브랜치의 변경사항을 요약해서
develop 브랜치로 PR을 생성해줘.
GitHub CLI(gh)를 사용해줘.
```

---

## 📋 개발 체크리스트

### Phase 1: 프로젝트 초기 설정
- [ ] Vite + React + TypeScript 프로젝트 생성
- [ ] react-router-dom, ESLint, Prettier 설정
- [ ] 글로벌 CSS 변수, 웹폰트 설정
- [ ] GitHub 레포 생성 & 초기 push
- [ ] GitHub Actions 워크플로우 설정
- [ ] GitHub Pages 설정 & Branch protection 설정

### Phase 2: 메인 이력서 페이지
- [ ] 타입 정의 (`types/resume.ts`)
- [ ] 이력서 데이터 (`data/resume.ts`)
- [ ] Header (이름, 직함, 네비게이션, 다크모드 토글)
- [ ] About (자기소개)
- [ ] Skills (기술 스택 — 카테고리별 태그)
- [ ] Experience (경력 — 타임라인)
- [ ] Projects (프로젝트 카드 그리드 — 클릭 시 상세 페이지)
- [ ] Education (학력 + 자격증 + 활동)
- [ ] Contact & Footer
- [ ] 스크롤 네비게이션 하이라이트 (useScrollSpy)

### Phase 3: 프로젝트 상세 페이지
- [ ] ProjectDetailPage 레이아웃
- [ ] 프로젝트 상세 데이터 5개 파일 작성
- [ ] 이전/다음 프로젝트 네비게이션
- [ ] NotFoundPage (404)
- [ ] 코드 스니펫 렌더링 (선택)

### Phase 4: 스타일링 & 최적화
- [ ] 반응형 레이아웃 전체 점검
- [ ] 다크모드 전체 점검
- [ ] 인쇄 스타일 (`@media print`)
- [ ] 스크롤 애니메이션 (Intersection Observer)
- [ ] SEO 메타태그 + OG 태그
- [ ] Lighthouse 점수 확인 (목표: 90+)
- [ ] 최종 main 머지 & 자동 배포 확인

---

## 🚨 주의사항

1. **라우팅**: GitHub Pages에서는 반드시 `HashRouter` 사용 (BrowserRouter 사용 시 새로고침 404)
2. **base 경로**: `vite.config.ts`의 `base`와 실제 레포 이름 일치 필수
3. **개인정보**: 민감 정보(전화번호, 상세 주소) 주의
4. **이미지**: `public/` 폴더, 200KB 이하 최적화
5. **패키지 잠금**: `package-lock.json` 반드시 커밋 (CI에서 `npm ci` 사용)
6. **Node 버전**: 로컬 + CI 모두 Node 20
