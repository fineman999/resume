# GitHub Pages 이력서 배포 가이드

이 문서는 `resume.md` 파일을 HTML로 변환하고 GitHub Pages에 배포하는 전체 과정을 설명합니다.

## 목차
1. [사전 준비사항](#1-사전-준비사항)
2. [Git 저장소 초기화](#2-git-저장소-초기화)
3. [HTML 파일 생성](#3-html-파일-생성)
4. [GitHub 저장소 생성](#4-github-저장소-생성)
5. [코드 푸시](#5-코드-푸시)
6. [GitHub Pages 설정](#6-github-pages-설정)
7. [배포 확인](#7-배포-확인)
8. [업데이트 방법](#8-업데이트-방법)

---

## 1. 사전 준비사항

### 필요한 것들
- GitHub 계정
- Git 설치 (확인: `git --version`)
- 텍스트 에디터 (VSCode, Sublime Text 등)

### 파일 구조
```
resume/
├── resume.md          # 원본 마크다운 이력서
├── index.html         # 변환된 HTML 이력서
└── DEPLOYMENT_GUIDE.md # 이 가이드 문서
```

---

## 2. Git 저장소 초기화

프로젝트 폴더에서 Git 저장소를 초기화합니다:

```bash
cd /Users/chanpark/MyCode/resume
git init
```

---

## 3. HTML 파일 생성

`resume.md` 파일의 내용을 기반으로 `index.html` 파일이 생성되었습니다.

### HTML 파일의 주요 특징
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **깔끔한 레이아웃**: 섹션별로 구분된 가독성 높은 디자인
- **인쇄 지원**: CSS `@media print`를 사용하여 인쇄 최적화
- **한글 폰트 지원**: 'Noto Sans KR' 등 한글 폰트 적용

---

## 4. GitHub 저장소 생성

### 4-1. GitHub에서 새 저장소 생성
1. [GitHub](https://github.com)에 로그인
2. 오른쪽 상단의 `+` 버튼 클릭 → `New repository` 선택
3. 저장소 정보 입력:
   - **Repository name**: `resume` (또는 원하는 이름)
   - **Description**: "My professional resume"
   - **Public** 선택 (GitHub Pages는 Public 저장소 필요)
   - **Initialize this repository with** 항목은 모두 체크 해제
4. `Create repository` 버튼 클릭

### 4-2. 저장소 URL 확인
생성된 저장소의 URL을 복사합니다:
```
https://github.com/YOUR_USERNAME/resume.git
```

---

## 5. 코드 푸시

로컬 코드를 GitHub 저장소에 푸시합니다:

```bash
# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/resume.git

# 파일 스테이징
git add .

# 커밋
git commit -m "Initial commit: Add resume HTML and guide"

# 푸시 (main 브랜치로)
git branch -M main
git push -u origin main
```

---

## 6. GitHub Pages 설정

### 6-1. Settings 페이지 이동
1. GitHub 저장소 페이지에서 `Settings` 탭 클릭
2. 왼쪽 사이드바에서 `Pages` 클릭

### 6-2. Source 설정
1. **Source** 섹션에서:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
2. `Save` 버튼 클릭

### 6-3. 배포 대기
- GitHub Pages가 사이트를 빌드하고 배포하는 데 1~2분 정도 소요됩니다.
- 페이지 상단에 배포 URL이 표시됩니다:
  ```
  Your site is live at https://YOUR_USERNAME.github.io/resume/
  ```

---

## 7. 배포 확인

### 7-1. URL 접속
브라우저에서 다음 URL에 접속하여 확인:
```
https://YOUR_USERNAME.github.io/resume/
```

### 7-2. 확인 사항
- [ ] 모든 섹션이 올바르게 표시되는지 확인
- [ ] 모바일 기기에서도 정상 작동하는지 확인
- [ ] 한글 폰트가 제대로 렌더링되는지 확인

---

## 8. 업데이트 방법

이력서를 수정하고 다시 배포하는 방법:

### 8-1. HTML 파일 수정
```bash
# 에디터로 index.html 수정
code index.html  # VSCode 사용 시
```

### 8-2. 변경사항 푸시
```bash
# 변경사항 스테이징
git add index.html

# 커밋
git commit -m "Update resume: Add new project"

# 푸시
git push origin main
```

### 8-3. 자동 재배포
- GitHub Pages는 `main` 브랜치에 푸시하면 자동으로 재배포됩니다.
- 1~2분 후 변경사항이 반영됩니다.

---

## 추가 팁

### 커스텀 도메인 사용
1. `Settings > Pages > Custom domain`에서 도메인 설정
2. DNS 설정에서 CNAME 레코드 추가
3. 자세한 내용: [GitHub Docs - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### HTTPS 활성화
- `Settings > Pages`에서 `Enforce HTTPS` 체크박스 활성화

### 분석 도구 추가
- Google Analytics 코드를 `index.html`의 `<head>` 태그에 추가하여 방문자 추적 가능

---

## 문제 해결

### 페이지가 표시되지 않는 경우
1. `Settings > Pages`에서 배포 상태 확인
2. `Actions` 탭에서 빌드 로그 확인
3. 브라우저 캐시 삭제 후 재시도

### 404 에러가 발생하는 경우
1. `index.html` 파일이 저장소 루트에 있는지 확인
2. 파일명이 정확히 `index.html`인지 확인 (대소문자 구분)

### 스타일이 적용되지 않는 경우
1. 브라우저 개발자 도구(F12)에서 CSS 로딩 확인
2. 캐시 강제 새로고침 (Ctrl+Shift+R 또는 Cmd+Shift+R)

---

## 참고 자료

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Git 기초 가이드](https://git-scm.com/book/ko/v2)
- [HTML/CSS 기초](https://developer.mozilla.org/ko/docs/Learn)

---

**배포 완료!** 🎉

이제 `https://YOUR_USERNAME.github.io/resume/` 에서 이력서를 확인할 수 있습니다.
