import type { ProjectDetail } from '../../types/resume';

export const witchworldMetaverse: ProjectDetail = {
  id: 'witchworld-metaverse',
  title: 'WebGL 기반 메타버스 플랫폼 고도화',
  company: '위치월드',
  period: '2023.08 ~ 2024.10',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'RabbitMQ', 'Java', 'Spring Boot', 'AWS'],
  status: 'completed',

  overview:
    'Unity WebGL 프로젝트와 React 프론트엔드를 연결하는 메타버스 플랫폼의 백엔드 시스템을 설계·개발했습니다. 마켓플레이스 결제, 실시간 채팅, 아이템 시스템 등 플랫폼 핵심 기능을 구현하고 안정적으로 운영했습니다.',

  background:
    '기존 플랫폼의 동시 결제 처리 병목과 실시간 소통 부재 문제를 해결하기 위해 시스템 고도화가 필요했습니다. Unity WebGL과 웹 프론트엔드 간의 데이터 연동도 복잡한 과제였습니다.',

  sections: [
    {
      title: '중계 API 서버 설계·개발',
      content:
        'Unity WebGL 프로젝트와 React 프론트엔드를 연결하는 중계 API 서버를 Go + Gin 으로 설계·개발하고 안정화 운영했습니다. 메타버스 내 아이템 거래, 사용자 인증, 게임 상태 동기화 등의 API를 설계하여 두 클라이언트 간 데이터 흐름을 일원화했습니다.',
    },
    {
      title: '마켓플레이스 실시간 결제 시스템 고도화',
      content:
        'Go 고루틴 기반 비동기 처리를 도입하여 동시 결제 요청 처리량을 개선했습니다. nGrinder를 활용한 부하 테스트를 통해 TPS를 측정하고 병목 지점을 파악하여 최적화했습니다. Redis를 활용한 분산 락으로 중복 결제 방지 로직을 구현했습니다.',
    },
    {
      title: '실시간 채팅 시스템 설계 및 구현',
      content:
        'Spring Boot + STOMP 기반(RabbitMQ 활용) 채팅 서버를 개발하여 사용자 간 원활한 소통을 지원하고 시스템 확장성을 확보했습니다. 메시지 브로커로 RabbitMQ를 사용해 다중 서버 환경에서도 안정적인 메시지 전달을 보장했습니다.',
    },
  ],

  results: [
    '동시 결제 요청 처리량 개선 (Go 고루틴 비동기 처리 도입)',
    'nGrinder 부하 테스트를 통한 TPS 향상 확인',
    '실시간 채팅 시스템 안정적 운영',
    'Unity WebGL ↔ React 프론트엔드 데이터 연동 일원화',
  ],

  lessons: [
    'Go의 동시성 모델(고루틴, 채널)을 프로덕션 결제 시스템에 적용한 경험',
    'WebGL + 웹 프론트엔드 간 통신 설계의 복잡성과 해결 방법',
    'Redis 분산 락을 활용한 동시성 제어 패턴',
  ],
};