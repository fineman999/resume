import type { ProjectDetail } from '../../types/resume';

export const witchpayWeb3: ProjectDetail = {
  id: 'witchpay-web3',
  title: 'Web3 지갑 연동 거래 시스템 개발',
  company: '위치페이',
  period: '2025.07 ~ 2025.12',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
  status: 'in-progress',

  overview:
    'ERC-4337 기반 스마트 컨트랙트 지갑, 소셜 로그인 온보딩, 블록체인 트랜잭션 관리 시스템을 개발하고 있습니다. Web3 진입 장벽을 낮추는 Account Abstraction 아키텍처를 설계하고 구현 중입니다.',

  background:
    '기존 Web3 서비스는 MetaMask 같은 외부 지갑과 시드 구문 관리가 필수여서 일반 사용자 진입 장벽이 높았습니다. ERC-4337 Account Abstraction을 활용해 소셜 로그인만으로 스마트 컨트랙트 지갑을 생성하고 사용할 수 있는 시스템이 필요했습니다.',

  sections: [
    {
      title: 'ERC-4337 Account Abstraction 기반 스마트 지갑',
      content:
        'ERC-4337 표준을 활용하여 사용자마다 스마트 컨트랙트 지갑(Smart Contract Wallet)을 생성합니다. Paymaster를 통해 가스비를 플랫폼이 대납하는 방식으로 사용자는 ETH 없이도 트랜잭션을 실행할 수 있습니다. Bundler 서버와 연동하여 UserOperation을 처리합니다.',
    },
    {
      title: '소셜 로그인 온보딩',
      content:
        'Google, Apple 소셜 로그인으로 가입 시 자동으로 스마트 지갑을 생성합니다. 사용자의 OAuth 자격증명을 기반으로 결정론적 키를 생성하여 지갑을 복구할 수 있는 구조를 설계했습니다. 시드 구문 없이도 안전하게 지갑을 관리할 수 있습니다.',
    },
    {
      title: '블록체인 트랜잭션 관리',
      content:
        'Go 기반 블록체인 인터랙션 레이어를 구현하여 트랜잭션 생성, 서명, 제출, 상태 추적을 관리합니다. 트랜잭션 실패 시 재시도 로직과 논스 관리를 구현하여 안정적인 온체인 작업을 보장합니다. Redis를 활용한 트랜잭션 상태 캐싱으로 빠른 상태 조회를 제공합니다.',
    },
  ],

  results: [
    'ERC-4337 기반 스마트 지갑 생성/관리 시스템 개발 중',
    '소셜 로그인 → 지갑 자동 생성 온보딩 플로우 구현',
    'Paymaster 가스비 대납으로 사용자 부담 제거',
  ],

  lessons: [
    'ERC-4337 Account Abstraction의 아키텍처와 구성 요소(Bundler, Paymaster, EntryPoint)',
    '블록체인 트랜잭션의 특성(불변성, 비결정론적 완료 시간)을 고려한 시스템 설계',
    'Web3 서비스의 UX 개선을 위한 추상화 레이어 설계 패턴',
  ],
};
