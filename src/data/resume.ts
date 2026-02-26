import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personal: {
    name: '박찬흠',
    nameEn: 'Chan Park',
    title: 'Backend Developer',
    email: '33cks1423@naver.com',
    github: 'https://github.com/finman999',
  },

  about: `새로운 기술 스택이나 낯선 도메인을 만나도 빠르게 적응하고 실질적인 결과로 연결하는 백엔드 개발자입니다.
블록체인 결제 시스템과 미디어 플랫폼에서 동시성 제어와 시스템 안정성에 집중하며, 레퍼런스가 부족한 영역이나 복잡한 인프라 문제를 만나도 구조를 빠르게 파악하고 필요한 방향을 주도적으로 설정하여 프로덕션 문제를 해결해왔습니다.
단순 구현을 넘어 비즈니스 임팩트를 고민하며, AI 기반 코드 리뷰 등 새로운 도구를 적극 활용하고 팀원들과 기술 검증을 함께 진행하면서 서비스 품질을 높입니다.`,

  skills: [
    { category: 'Languages', items: ['Go', 'Java', 'Python'] },
    { category: 'Frameworks', items: ['Gin', 'Spring Boot'] },
    {
      category: 'Infrastructure & Databases',
      items: ['AWS', 'Kubernetes', 'Docker', 'MySQL', 'Redis', 'RabbitMQ'],
    },
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
      description:
        '신세계 I&C 실무 중심 SW 교육 프로그램. 18주 과정, 웹 프로젝트 2개 수행(2차: 기업 연계 프로젝트). 현업 실무 기술 + 협업·커뮤니케이션 역량 강화.',
    },
  ],
};